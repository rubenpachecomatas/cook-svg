const sanitizeSVG = (svgCode: string) => {
  const cleanedSVG = svgCode.replace(/<script.*?<\/script>/gs, "");

  return cleanedSVG;
};

const downloadFile = (file, name) => {
  const link = document.createElement("a");

  link.href = file;
  link.download = name;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export { downloadFile,sanitizeSVG };
