"use client";

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import useEditor from "./hooks/use-editor";
import { SvgElementTypes } from "@/enums/svg-element-types.enum";
import Controllers from "./_components/controllers/Controllers";
import { Input } from "@/components/ui/input";
import { SvgElement } from "@/types/svg-element.type";
import { SvgElementAttributesType } from "@/types/svg-element-attributes.type";
import { Eraser } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { cn } from "@/lib/utils";

const Editor = () => {
  const {
    elements,
    handleAddElement,
    handleChangeAttribute,
    handleChangeScale,
    handleDeleteElement,
    handleExport,
    handleImport,
    scale,
    svgAttributes,
    svgRef,
  } = useEditor();

  return (
    <ResizablePanelGroup
      className="w-full h-full border-2"
      direction="horizontal"
    >
      <ResizablePanel defaultSize={25}>
        <Controllers
          handleAddElement={handleAddElement}
          handleExport={handleExport}
          handleImport={handleImport}
        />
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={50} className="relative">
        <div className="absolute top-10 right-10 z-10">
          <Slider
            className="w-20 border-2 rounded-md border-white"
            value={[scale]}
            step={25}
            minStepsBetweenThumbs={1}
            max={150}
            min={50}
            onValueChange={handleChangeScale}
          />
        </div>
        <div className="flex justify-center items-center p-2">
          <svg
            className={cn(
              scale === 50 && "scale-50",
              scale === 75 && "scale-75",
              scale === 100 && "scale-100",
              scale === 125 && "scale-125",
              scale === 150 && "scale-150"
            )}
            ref={svgRef}
            {...svgAttributes}
          >
            {elements.map(({ type, attributes }, i) => {
              if (type === SvgElementTypes.circle)
                return <circle key={i} {...attributes} />;
              if (type === SvgElementTypes.rect)
                return <rect key={i} {...attributes} />;
              if (type === SvgElementTypes.ellipse)
                return <ellipse key={i} {...attributes} />;
              if (type === SvgElementTypes.line)
                return <line key={i} {...attributes} />;
              if (type === SvgElementTypes.path)
                return <path key={i} {...attributes} />;
              if (type === SvgElementTypes.polygon)
                return <polygon key={i} {...attributes} />;
              if (type === SvgElementTypes.polyline)
                return <polyline key={i} {...attributes} />;
            })}
          </svg>
        </div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={25} className="p-2 overflow-important">
        <div>
          {elements.map(({ id, type, attributes }: SvgElement) => (
            <div key={id}>
              <div className="flex gap-2 items-center my-2">
                <h4 className="text-lg font-semibold">{type}</h4>
                <Eraser
                  className="size-5 cursor-pointer hover:text-slate-500"
                  onClick={() => handleDeleteElement(id)}
                />
              </div>
              <div className="flex flex-col gap-2">
                {Object.keys(attributes).map((field, i) => (
                  <div key={i} className="grid grid-cols-4 items-center">
                    <p className=" grid-flow-col">{field}</p>
                    <Input
                      className="text-right col-span-3"
                      value={
                        attributes[field as keyof SvgElementAttributesType]
                      }
                      onChange={(e) => handleChangeAttribute({ e, id, field })}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
};

export default Editor;
