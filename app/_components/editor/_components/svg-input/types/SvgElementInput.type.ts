import { SvgElementAttributesType } from "@/types/svg-element-attributes.type";
import { SvgElementsProps } from "../../svg-elements/types/SvgElements.type";

export type SvgElementsInputProps = Pick<
  SvgElementsProps,
  "handleChangeAttribute"
> & {
  id: number;
  field: string;
  value: any;
};
