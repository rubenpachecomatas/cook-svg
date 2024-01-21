import { SvgElementTypes } from "@/enums/svg-element-types.enum";
import { SvgElement } from "@/types/svg-element.type";
import { useState, useRef, ElementRef } from "react";
import { UseEditorReturnType } from "./types/useEditorReturn.type";

const useEditor = (): UseEditorReturnType => {
  const svgRef = useRef<ElementRef<"svg">>(null);
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

  return {
    svgRef,
    handleAddElement,
    elements,
    handleExport,
  };
};

export default useEditor;
