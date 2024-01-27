import { UseEditorReturnType } from "../../../hooks/types/useEditorReturn.type";

export type ZoomSliderProps = Pick<
  UseEditorReturnType,
  "scale" | "handleChangeScale"
>;
