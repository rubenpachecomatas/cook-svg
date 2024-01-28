import { SvgAttributesType } from "@/types/svg-attributes.type";
import { SvgElement } from "@/types/svg-element.type";
import { DropResult } from "@hello-pangea/dnd";
import { ElementRef, RefObject } from "react";

export type UseEditorReturnType = {
  elements: SvgElement[];
  handleAddElement: (type: any) => void;
  handleChangeAttribute: ({
    e,
    id,
    field,
  }: {
    e: any;
    id: number;
    field: string;
  }) => void;
  handleChangeScale: (value: number[]) => void;
  handleChangeSvgAttribute: ({ e, field }: { e: any; field: string }) => void;
  handleDeleteElement: (id: number) => void;
  handleDragElement: (result: DropResult) => void;
  handleExport: () => void;
  handleImport: (value: any) => void;
  importCloseRef: RefObject<ElementRef<"button">>;
  isMobile: boolean | null;
  scale: number;
  svgAttributes: SvgAttributesType;
  svgRef: RefObject<ElementRef<"svg">>;
};
