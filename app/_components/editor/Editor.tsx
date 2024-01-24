"use client";

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import useEditor from "./hooks/use-editor";
import { SvgElementTypes } from "@/enums/svg-element-types.enum";
import Controllers from "./_components/Controllers";
import { Input } from "@/components/ui/input";

const Editor = () => {
  const {
    svgAttributes,
    handleAddElement,
    elements,
    handleChangeAttribute,
    handleExport,
    handleImport,
    svgRef,
  } = useEditor();

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
      <ResizablePanel defaultSize={50}>
        <ResizablePanelGroup direction="vertical">
          <ResizablePanel defaultSize={50} className="p-2">
            <div className="flex justify-center items-center h-full">
              <svg ref={svgRef} {...svgAttributes}>
                {elements.map(({ type, attributes }, i) => {
                  if (type === SvgElementTypes.circle)
                    return <circle key={i} {...attributes} />;
                  if (type === SvgElementTypes.rect)
                    return <rect key={i} {...attributes} />;
                })}
              </svg>
            </div>
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel defaultSize={50} className="p-2">
            <div>
              {elements.map(({ id, type, attributes }) => (
                <div key={id}>
                  <h4 className="text-lg font-semibold">{type}</h4>
                  <div className="flex flex-col gap-2">
                    {Object.keys(attributes).map((key: string) => (
                      <div className="grid grid-cols-4 items-center">
                        <p className=" grid-flow-col">{key}</p>
                        <Input
                          className="text-right col-span-3"
                          value={attributes[key]}
                          onChange={(e) =>
                            handleChangeAttribute({ e, id, field: key })
                          }
                        />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
};

export default Editor;
