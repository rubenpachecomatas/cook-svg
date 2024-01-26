import { SvgElementTypes } from "@/enums/svg-element-types.enum";
import { SvgElementAttributesType } from "./svg-element-attributes.type";

export type SvgElement = {
  id: number;
  type: SvgElementTypes;
  attributes: SvgElementAttributesType;
};
