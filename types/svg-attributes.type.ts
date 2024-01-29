import { SVGAttributes } from "react";

export type SvgAttributesType = SVGAttributes<SVGSVGElement> & {
  content?: string;
};
