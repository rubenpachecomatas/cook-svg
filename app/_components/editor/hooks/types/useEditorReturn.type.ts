import { SvgElementTypes } from "@/enums/svg-element-types.enum";
import { SvgElement } from "@/types/svg-element.type";
import { ElementRef, RefObject } from "react";

export type UseEditorReturnType = {
  elements: object[];
  handleAddElement: (type: any) => void;
  handleExport: () => void;
  handleImport: (value: any) => void;
  svgRef: RefObject<ElementRef<"svg">>;
  svgAttributes: object;
  handleChangeAttribute: (e: any) => void;
};
