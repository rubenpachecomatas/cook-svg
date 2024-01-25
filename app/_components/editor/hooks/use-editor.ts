import { useState, useRef, ElementRef } from "react";
import { UseEditorReturnType } from "./types/useEditorReturn.type";
import { downloadFile, sanitizeSVG } from "./utils/use-editor.utils";
import { DEFAULT_SVG_ATTRIBUTES } from "./constants/use-editor.constants";

const useEditor = (): UseEditorReturnType => {
  const svgRef = useRef<ElementRef<"svg">>(null);

  const [svgAttributes, setSvgAttributes] = useState<any>(
    DEFAULT_SVG_ATTRIBUTES
  );
  const [elements, setElements] = useState<object[]>([]);

  const handleAddElement = (element: object) => {
    setElements((prev) => [...prev, { id: prev.length + 1, ...element }]);
  };

  const handleChangeAttribute = ({ e, id, field }) => {
    setElements((prev) => {
      let prevEl;
      let filteredElements = prev.filter((e) => {
        if (e.id !== id) {
          return true;
        } else {
          prevEl = e;
          return false;
        }
      });
      return [
        ...filteredElements,
        {
          type: prevEl.type,
          attributes: { ...prevEl.attributes, [field]: e.target.value },
        },
      ];
    });
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

  const formatAttributes = (attributes: NamedNodeMap): any => {
    let newSvgAttributes: Record<string, string> = {};

    for (let i = 0; i < attributes.length; i++) {
      const attribute = attributes[i];
      newSvgAttributes[attribute.name] = attribute.value;
    }

    return newSvgAttributes;
  };

  const loadSvg = (event: ProgressEvent<FileReader>) => {
    const svgCode = event?.target?.result;

    if (typeof svgCode === "string") {
      const parser = new DOMParser();
      const doc = parser.parseFromString(sanitizeSVG(svgCode), "image/svg+xml");

      setSvgAttributes(formatAttributes(doc.documentElement.attributes));

      const nodes = doc.documentElement.children;

      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];
        setElements((prev) => [
          ...prev,
          {
            id: prev.length + 1,
            type: node.nodeName,
            attributes: formatAttributes(node.attributes),
          },
        ]);
      }
    }
  };

  const handleImport = (e: any) => {
    e.preventDefault();

    const file = e.target.svgInput.files?.[0];
    const reader = new FileReader();

    reader.onload = loadSvg;

    reader.readAsText(file);
  };

  return {
    svgAttributes,
    svgRef,
    handleAddElement,
    elements,
    handleExport,
    handleImport,
    handleChangeAttribute,
  };
};

export default useEditor;
