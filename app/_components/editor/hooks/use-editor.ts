import { SvgElementTypes } from "@/enums/svg-element-types.enum";
import { SvgElement } from "@/types/svg-element.type";
import { useState, useRef, ElementRef, SyntheticEvent } from "react";
import { UseEditorReturnType } from "./types/useEditorReturn.type";
import { randomUUID } from "crypto";

const useEditor = (): UseEditorReturnType => {
  const svgRef = useRef<ElementRef<"svg">>(null);
  const [svgAttributes, setSvgAttributes] = useState<any>({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
  });
  const [elements, setElements] = useState<object[]>([]);

  const handleAddElement = (element: object) => {
    setElements((prev) => [...prev, { id: prev.length + 1, ...element }]);
  };

  const handleChangeAttribute = ({ e, id, field }) => {
    setElements((prev) => {
      let aux;
      let aux2 = prev.filter((e) => {
        if (e.id !== id) {
          return true;
        } else {
          aux = e;
          return false;
        }
      });
      return [
        ...aux2,
        {
          type: aux.type,
          attributes: { ...aux.attributes, [field]: e.target.value },
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
      const link = document.createElement("a");

      link.href = svgUrl;
      link.download = "delicious-svg.svg";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  const sanitizeSVG = (svgCode: string) => {
    const cleanedSVG = svgCode.replace(/<script.*?<\/script>/gs, "");

    return cleanedSVG;
  };

  const formatAttributes = (attributes: NamedNodeMap): any => {
    let newSvgAttributes: Record<string, string> = {};

    for (let i = 0; i < attributes.length; i++) {
      const attribute = attributes[i];
      newSvgAttributes[attribute.name] = attribute.value;
    }

    return newSvgAttributes;
  };

  const handleImport = (e: any) => {
    e.preventDefault();
    const reader = new FileReader();

    reader.onload = (event: ProgressEvent<FileReader>) => {
      const svgCode = event?.target?.result;

      if (typeof svgCode === "string") {
        const parser = new DOMParser();
        const doc = parser.parseFromString(
          sanitizeSVG(svgCode),
          "image/svg+xml"
        );

        const nodes = doc.documentElement.children;

        setSvgAttributes(formatAttributes(doc.documentElement.attributes));

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

    reader.readAsText(e.target.svgInput.files?.[0]);
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
