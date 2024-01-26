export type SvgElementAttributesType =
  | Circle
  | Ellipse
  | Line
  | Path
  | Polygon
  | Polyline
  | Rect
  | Record<string, string>;

export type Circle = {
  cx: number;
  cy: number;
  r: number;
};

export type Ellipse = {
  cx: number;
  cy: number;
  rx: number;
  ry: number;
};

export type Line = {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
};

export type Path = {
  d: string;
};

export type Polygon = {
  points: string;
};

export type Polyline = {
  points: string;
};

export type Rect = {
  x: number;
  y: number;
  width: number;
  height: number;
  rx: number;
  ry: number;
};
