import { SvgElementTypes } from "@/enums/svg-element-types.enum";

export type SvgElement = {
  type: SvgElementTypes;
  attributes: any[];
};
