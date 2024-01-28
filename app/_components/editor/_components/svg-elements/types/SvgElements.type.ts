import { UseEditorReturnType } from "../../../hooks/types/useEditorReturn.type";

export type SvgElementsProps = Pick<
  UseEditorReturnType,
  | "elements"
  | "handleDeleteElement"
  | "handleChangeAttribute"
  | "handleDragElement"
>;
