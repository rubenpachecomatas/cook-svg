"use client";

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import useEditor from "./hooks/use-editor";
import { SvgElementTypes } from "@/enums/svg-element-types.enum";
import Controllers from "./_components/Controllers";

const Editor = () => {
  const { svgAttributes, handleAddElement, elements, handleExport, handleImport, svgRef } = useEditor();

  return (
    <ResizablePanelGroup
      className="w-full h-full border-2"
      direction="horizontal"
    >
      <ResizablePanel defaultSize={50}>
        <Controllers
          handleAddElement={handleAddElement}
          handleExport={handleExport}
          handleImport={handleImport}
        />
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={50} className="p-2">
        <div className="flex justify-center items-center h-full">
          <svg
            ref={svgRef}
            {...svgAttributes}
          >
            {elements.map(({ type, attributes }, i) => {
              if (type === SvgElementTypes.circle)
                return <circle key={i} {...attributes} />;
              if (type === SvgElementTypes.rect)
                return <rect key={i} {...attributes} />;
            })}
          </svg>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
};

export default Editor;
