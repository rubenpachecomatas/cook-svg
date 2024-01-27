import { UseEditorReturnType } from "../../../hooks/types/useEditorReturn.type";

export type SvgCanvas = Pick<
  UseEditorReturnType,
  "scale" | "elements" | "svgAttributes" | "svgRef"
>;
