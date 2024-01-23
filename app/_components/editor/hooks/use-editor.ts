import { SvgElementTypes } from "@/enums/svg-element-types.enum";
import { SvgElement } from "@/types/svg-element.type";
import { useState, useRef, ElementRef, SyntheticEvent } from "react";
import { UseEditorReturnType } from "./types/useEditorReturn.type";

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
  const [elements, setElements] = useState<SvgElement[]>([]);

  const handleAddElement = (type: SvgElementTypes) => {
    setElements((prev) => [...prev, { type }]);
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

  const handleImport = (e: any) => {
    e.preventDefault();
    const reader = new FileReader();

    reader.onload = (event: ProgressEvent<FileReader>) => {
      const svgCode = event?.target?.result;

      if (typeof svgCode === "string") {
        const parser = new DOMParser();
        const doc = parser.parseFromString(sanitizeSVG(svgCode), "image/svg+xml");
        
        const attributes = doc.documentElement.attributes;
        const nodes = doc.documentElement.childNodes;

        let newSvgAttributes: Record<string, string> = {};

        for (let i = 0; i < attributes.length; i++) {
          const attribute = attributes[i];
          newSvgAttributes[attribute.name] = attribute.value;
        }
        
        setSvgAttributes(newSvgAttributes);

        for (let i = 0; i < nodes.length; i++) {
          const node = nodes[i];
          if (["circle", "rect"].includes(node.nodeName))
          setElements((prev) => [...prev, { type: node.nodeName }]);
          
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
  };
};

export default useEditor;
