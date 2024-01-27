"use client";

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import useEditor from "./hooks/use-editor";
import Controllers from "./_components/controllers/Controllers";
import ZoomSlider from "./_components/zoom-slider/ZoomSlider";
import SvgCanvas from "./_components/svg-canvas/SvgCanvas";
import SvgElements from "./_components/svg-elements/SvgElements";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SvgAttributes from "./_components/svg-attributes/SvgAttributes";

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
    importCloseRef,
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
          importCloseRef={importCloseRef}
        />
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel
        defaultSize={50}
        className="flex justify-center items-center relative overflow-important"
      >
        <ZoomSlider {...{ scale, handleChangeScale }} />
        <SvgCanvas {...{ scale, svgRef, elements, svgAttributes }} />
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={25} className="p-2 overflow-important">
        <Tabs
          defaultValue="elements"
          className="h-full flex flex-col items-center relative"
        >
          <TabsList className="fixed">
            <TabsTrigger value="elements">Elements</TabsTrigger>
            <TabsTrigger value="attributes">Svg Attributes</TabsTrigger>
          </TabsList>
          <TabsContent value="elements" className="size-full mt-10">
            <SvgElements
              {...{ elements, handleChangeAttribute, handleDeleteElement }}
            />
          </TabsContent>
          <TabsContent value="attributes" className="size-full mt-10">
            <SvgAttributes {...{ svgAttributes }} />
          </TabsContent>
        </Tabs>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
};

export default Editor;
