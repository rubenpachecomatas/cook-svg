import { useState, useRef, ElementRef, useEffect } from "react";
import { UseEditorReturnType } from "./types/useEditorReturn.type";
import {
  downloadFile,
  formatSvgAttributes,
  formatSvgElementAttributes,
  isSvgElementTypes,
  sanitizeSVG,
} from "./utils/use-editor.utils";
import { DEFAULT_SVG_ATTRIBUTES } from "./constants/use-editor.constants";
import { SvgElement } from "@/types/svg-element.type";
import { SvgElementTypes } from "@/enums/svg-element-types.enum";
import { SvgElementAttributesType } from "@/types/svg-element-attributes.type";
import { SvgAttributesType } from "@/types/svg-attributes.type";
import { DEFAULT_COMMON_ATTRIBUTES } from "../_components/controllers/constants/controllers.constants";
import { DropResult } from "@hello-pangea/dnd";
import { useMediaQuery } from "usehooks-ts";

const useEditor = (): UseEditorReturnType => {
  const svgRef = useRef<ElementRef<"svg">>(null);
  const importCloseRef = useRef<ElementRef<"button">>(null);

  const [isMobile, setisMobile] = useState<boolean | null>(null);
  const [svgAttributes, setSvgAttributes] = useState<SvgAttributesType>(
    DEFAULT_SVG_ATTRIBUTES
  );
  const [elements, setElements] = useState<SvgElement[]>([]);
  const [scale, setScale] = useState<number>(100);

  const matches = useMediaQuery("(max-width: 1024px");

  const handleDragElement = (result: DropResult) => {
    const { source, destination } = result;

    if (!destination) return;

    const newElements = [...JSON.parse(JSON.stringify(elements))];
    const [item] = newElements.splice(source.index, 1);

    newElements.splice(destination.index, 0, item);

    setElements([...newElements]);
  };

  const handleChangeScale = (value: number[]) => setScale(value[0]);

  const handleAddElement = (element: {
    type: SvgElementTypes;
    attributes: SvgElementAttributesType;
  }) => {
    setElements((prev) => [...prev, { id: prev.length + 1, ...element }]);
  };

  const handleChangeAttribute = ({
    e,
    id,
    field,
  }: {
    e: any;
    id: number;
    field: string;
  }) => {
    const elToEdit = elements.findIndex((e) => e.id === id);
    if (elToEdit !== -1) {
      const newElements = JSON.parse(JSON.stringify(elements));
      newElements[elToEdit] = {
        ...newElements[elToEdit],
        attributes: {
          ...newElements[elToEdit].attributes,
          [field]: e.target.value,
        },
      };

      setElements(newElements);
    }
  };

  const handleChangeSvgAttribute = ({
    e,
    field,
  }: {
    e: any;
    field: string;
  }) => {
    setSvgAttributes((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleDeleteElement = (elId: number) => {
    setElements((prev) => prev.filter(({ id }) => id !== elId));
  };

  const handleExport = () => {
    if (svgRef.current) {
      const svgBlob = new Blob([svgRef.current.outerHTML], {
        type: "image/svg+xml;charset=utf-8",
      });
      const svgUrl = URL.createObjectURL(svgBlob);

      downloadFile(svgUrl, "delicious-svg.svg");
    }
  };

  const loadSvg = (event: ProgressEvent<FileReader>) => {
    const svgCode = event?.target?.result;

    if (typeof svgCode === "string") {
      const parser = new DOMParser();
      const doc = parser.parseFromString(sanitizeSVG(svgCode), "image/svg+xml");

      setSvgAttributes({
        ...DEFAULT_SVG_ATTRIBUTES,
        ...formatSvgAttributes(doc.documentElement.attributes),
      });

      const nodes = doc.documentElement.children;

      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];
        const name: string | SvgElementTypes = node.nodeName;

        if (isSvgElementTypes(name)) {
          setElements((prev) => [
            ...prev,
            {
              id: prev.length + 1,
              type: name,
              attributes: {
                ...DEFAULT_COMMON_ATTRIBUTES,
                ...formatSvgElementAttributes(node.attributes),
                content: node.innerHTML,
              },
            },
          ]);
        }
      }
    }
  };

  const handleImport = (e: any) => {
    e.preventDefault();

    const file = e.target.svgInput.files?.[0];
    const reader = new FileReader();

    reader.onload = loadSvg;

    reader.readAsText(file);

    importCloseRef.current?.click();
  };

  useEffect(() => {
    setisMobile(matches);
  }, [matches]);

  return {
    elements,
    handleAddElement,
    handleChangeAttribute,
    handleChangeScale,
    handleChangeSvgAttribute,
    handleDeleteElement,
    handleDragElement,
    handleExport,
    handleImport,
    importCloseRef,
    scale,
    svgAttributes,
    svgRef,
    isMobile,
  };
};

export default useEditor;
