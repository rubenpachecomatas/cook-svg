import { SvgElementTypes } from "@/enums/svg-element-types.enum";
import { CommonAttributes } from "@/types/svg-element-attributes.type";

const DEFAULT_COMMON_ATTRIBUTES: CommonAttributes = {
  fill: "",
  stroke: "",
  strokeWidth: "",
  strokeLinecap: "inherit",
  strokeLinejoin: "inherit",
};

const DEFAULT_CIRCLE = {
  type: SvgElementTypes.circle,
  attributes: {
    ...DEFAULT_COMMON_ATTRIBUTES,
    cx: "12",
    cy: "12",
    r: "10",
  },
};

const DEFAULT_RECT = {
  type: SvgElementTypes.rect,
  attributes: {
    ...DEFAULT_COMMON_ATTRIBUTES,
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
    ...DEFAULT_COMMON_ATTRIBUTES,
    cx: "12",
    cy: "12",
    rx: "10",
    ry: "10",
  },
};

const DEFAULT_LINE = {
  type: SvgElementTypes.line,
  attributes: {
    ...DEFAULT_COMMON_ATTRIBUTES,
    x1: "2",
    y1: "12",
    x2: "22",
    y2: "12",
  },
};

const DEFAULT_PATH = {
  type: SvgElementTypes.path,
  attributes: {
    ...DEFAULT_COMMON_ATTRIBUTES,
    d: "M2 2 L22 6 L2 10 M22 14 L2 18 L22 22",
  },
};

const DEFAULT_POLYGON = {
  type: SvgElementTypes.polygon,
  attributes: {
    ...DEFAULT_COMMON_ATTRIBUTES,
    points: "2,2 12,22 22,2",
  },
};

const DEFAULT_POLYLINE = {
  type: SvgElementTypes.polyline,
  attributes: {
    ...DEFAULT_COMMON_ATTRIBUTES,
    points: "2,2 2,22 22,22 22,2 12,12",
  },
};

const DEFAULT_TEXT = {
  type: SvgElementTypes.text,
  attributes: {
    ...DEFAULT_COMMON_ATTRIBUTES,
    x: "2",
    y: "2",
    dx: "",
    dy: "",
    rotate: "",
    textLength: "",
    lengthAdjust: "",
    content: "",
    fontSize: "",
  }
}

export {
  DEFAULT_CIRCLE,
  DEFAULT_COMMON_ATTRIBUTES,
  DEFAULT_ELLIPSE,
  DEFAULT_LINE,
  DEFAULT_PATH,
  DEFAULT_POLYGON,
  DEFAULT_POLYLINE,
  DEFAULT_RECT,
  DEFAULT_TEXT,
};
