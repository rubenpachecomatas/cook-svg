import { SvgAttributesType } from "./svg-attributes.type";

export type SvgElementAttributesType =
  | Circle
  | Ellipse
  | Line
  | Path
  | Polygon
  | Polyline
  | Rect
  | SvgAttributesType
  | Record<string, string>;

export type CommonAttributes = {
  fill: string;
  stroke: string;
  strokeWidth: string;
  strokeLinecap?: "inherit" | "butt" | "round" | "square";
  strokeLinejoin?: "inherit" | "round" | "miter" | "bevel";
};

export type Circle = CommonAttributes & {
  cx: number;
  cy: number;
  r: number;
};

export type Ellipse = CommonAttributes & {
  cx: number;
  cy: number;
  rx: number;
  ry: number;
};

export type Line = CommonAttributes & {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
};

export type Path = CommonAttributes & {
  d: string;
};

export type Polygon = CommonAttributes & {
  points: string;
};

export type Polyline = CommonAttributes & {
  points: string;
};

export type Rect = CommonAttributes & {
  x: number;
  y: number;
  width: number;
  height: number;
  rx: number;
  ry: number;
};
