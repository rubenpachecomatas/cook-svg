import { SvgElementTypes } from "@/enums/svg-element-types.enum";

const DEFAULT_CIRCLE = {
  type: SvgElementTypes.circle,
  attributes: {
    cx: "12",
    cy: "12",
    r: "10",
  },
};

const DEFAULT_RECT = {
  type: SvgElementTypes.rect,
  attributes: {
    x: "2",
    y: "2",
    width: "20",
    height: "20",
    rx: "2",
    ry: "2",
  },
};

const DEFAULT_ELLIPSE = {
  type: SvgElementTypes.ellipse,
  attributes: {
    cx: "12",
    cy: "12",
    rx: "10",
    ry: "10",
  },
};

const DEFAULT_LINE = {
  type: SvgElementTypes.line,
  attributes: {
    x1: "2",
    y1: "12",
    x2: "22",
    y2: "12",
  },
};

const DEFAULT_PATH = {
  type: SvgElementTypes.path,
  attributes: {
    d: "M2 2 L22 6 L2 10 M22 14 L2 18 L22 22",
  },
};

const DEFAULT_POLYGON = {
  type: SvgElementTypes.polygon,
  attributes: {
    points: "2,2 12,22 22,2",
  },
};

const DEFAULT_POLYLINE = {
  type: SvgElementTypes.polyline,
  attributes: {
    points: "2,2 2,22 22,22 22,2 12,12"
  },
};

export {
  DEFAULT_CIRCLE,
  DEFAULT_RECT,
  DEFAULT_ELLIPSE,
  DEFAULT_LINE,
  DEFAULT_PATH,
  DEFAULT_POLYGON,
  DEFAULT_POLYLINE,
};
