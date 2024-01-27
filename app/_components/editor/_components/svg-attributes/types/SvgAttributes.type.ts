import { UseEditorReturnType } from "../../../hooks/types/useEditorReturn.type";

export type SvgAttributesProps = Pick<
  UseEditorReturnType,
  "svgAttributes" | "handleChangeSvgAttribute"
>;
