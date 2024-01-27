import { SvgElementTypes } from "@/enums/svg-element-types.enum";
import { SvgAttributesType } from "@/types/svg-attributes.type";
import { SvgElementAttributesType } from "@/types/svg-element-attributes.type";

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

const formatSvgElementAttributes = (
  attributes: NamedNodeMap
): SvgElementAttributesType => {
  let newSvgAttributes: Record<string, string> = {};

  for (let i = 0; i < attributes.length; i++) {
    const attribute = attributes[i];
    newSvgAttributes[attribute.name] = attribute.value;
  }

  return newSvgAttributes;
};

const formatSvgAttributes = (attributes: NamedNodeMap): SvgAttributesType => {
  let newSvgAttributes: Record<string, string> = {};

  for (let i = 0; i < attributes.length; i++) {
    const attribute = attributes[i];
    newSvgAttributes[attribute.name] = attribute.value;
  }

  return newSvgAttributes;
};

export {
  downloadFile,
  formatSvgAttributes,
  formatSvgElementAttributes,
  isSvgElementTypes,
  sanitizeSVG,
};
