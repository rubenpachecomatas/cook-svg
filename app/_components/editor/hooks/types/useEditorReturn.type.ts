import { SvgAttributesType } from "@/types/svg-attributes.type";
import { SvgElement } from "@/types/svg-element.type";
import { ElementRef, RefObject } from "react";

export type UseEditorReturnType = {
  elements: SvgElement[];
  handleAddElement: (type: any) => void;
  handleChangeAttribute: (e: any) => void;
  handleChangeScale: (value: number[]) => void;
  handleDeleteElement: (id: number) => void;
  handleExport: () => void;
  handleImport: (value: any) => void;
  scale: number;
  svgAttributes: SvgAttributesType;
  svgRef: RefObject<ElementRef<"svg">>;
  importCloseRef: RefObject<ElementRef<"button">>;
};
