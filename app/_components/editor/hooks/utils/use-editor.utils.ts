import { SvgElementTypes } from "@/enums/svg-element-types.enum";

const sanitizeSVG = (svgCode: string) => {
  const cleanedSVG = svgCode.replace(/<script.*?<\/script>/gs, "");

  return cleanedSVG;
};

const downloadFile = (file: string, name: string) => {
  const link = document.createElement("a");

  link.href = file;
  link.download = name;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const isSvgElementTypes = (name: string): name is SvgElementTypes => {
  return name in SvgElementTypes;
};

export { downloadFile, sanitizeSVG, isSvgElementTypes };
