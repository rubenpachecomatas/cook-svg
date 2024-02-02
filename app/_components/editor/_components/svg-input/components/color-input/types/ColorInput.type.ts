import { SvgElementsInputProps } from "../../../types/SvgElementInput.type";

export type ColorInputType = Pick<
  SvgElementsInputProps,
  "field" | "handleChangeAttribute" | "id" | "value"
>;
