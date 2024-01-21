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
  const { handleAddElement, elements, handleExport, svgRef } = useEditor();

  return (
    <ResizablePanelGroup
      className="w-full h-full border-2"
      direction="horizontal"
    >
      <ResizablePanel defaultSize={50}>
        <Controllers
          handleAddElement={handleAddElement}
          handleExport={handleExport}
        />
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={50} className="p-2">
        <div className="flex justify-center items-center h-full">
          <svg
            ref={svgRef}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {elements.map(({ type }, i) => {
              if (type === SvgElementTypes.CIRCLE)
                return <circle key={i} cx="12" cy="12" r="10" />;
              if (type === SvgElementTypes.RECT)
                return <rect key={i} width="24" height="24" />;
            })}
          </svg>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
};

export default Editor;
