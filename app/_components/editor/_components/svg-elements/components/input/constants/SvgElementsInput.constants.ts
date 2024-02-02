const NUMBER_INPUT = [
  "cx",
  "cy",
  "r",
  "rx",
  "ry",
  "x1",
  "y1",
  "x2",
  "y2",
  "x",
  "y",
  "width",
  "height",
];

const SELECTORS: any = {
  strokeLinecap: {
    options: [
      { label: "Inherit", value: "inherit" },
      { label: "Butt", value: "butt" },
      { label: "Round", value: "round" },
      { label: "Square", value: "square" },
    ],
  },
  strokeLinejoin: {
    options: [
      { label: "Inherit", value: "inherit" },
      { label: "Round", value: "round" },
      { label: "Miter", value: "miter" },
      { label: "Bevel", value: "bevel" },
    ],
  },
};

export { NUMBER_INPUT, SELECTORS };
