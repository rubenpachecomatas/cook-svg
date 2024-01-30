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
    handleChangeSvgAttribute,
    handleDragElement,
    isMobile,
  } = useEditor();

  if (isMobile === null) return;

  return (
    <ResizablePanelGroup
      className="w-full h-full border-2"
      direction={isMobile ? "vertical" : "horizontal"}
    >
      {isMobile ? (
        <>
          <ResizablePanel
            defaultSize={50}
            className="flex justify-center items-center relative"
          >
            <ZoomSlider {...{ scale, handleChangeScale }} />
            <SvgCanvas {...{ scale, svgRef, elements, svgAttributes }} />
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel defaultSize={50} className="p-2 h-full">
            <Tabs
              defaultValue="elements"
              className="h-full flex flex-col items-center"
            >
              <TabsList>
                <TabsTrigger value="controllers">Controllers</TabsTrigger>
                <TabsTrigger value="elements">Elements</TabsTrigger>
                <TabsTrigger value="attributes">Svg Attributes</TabsTrigger>
              </TabsList>
              <TabsContent value="controllers" className="size-full">
                <Controllers
                  handleAddElement={handleAddElement}
                  handleExport={handleExport}
                  handleImport={handleImport}
                  importCloseRef={importCloseRef}
                />
              </TabsContent>
              <TabsContent value="elements" className="size-full">
                <SvgElements
                  {...{
                    elements,
                    handleChangeAttribute,
                    handleDeleteElement,
                    handleDragElement,
                  }}
                />
              </TabsContent>
              <TabsContent value="attributes" className="size-full">
                <SvgAttributes
                  {...{ svgAttributes, handleChangeSvgAttribute }}
                />
              </TabsContent>
            </Tabs>
          </ResizablePanel>
        </>
      ) : (
        <>
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
            className="flex justify-center items-center relative"
          >
            <ZoomSlider {...{ scale, handleChangeScale }} />
            <SvgCanvas {...{ scale, svgRef, elements, svgAttributes }} />
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel defaultSize={25} className="p-2">
            <Tabs
              defaultValue="elements"
              className="h-full flex flex-col items-center"
            >
              <TabsList>
                <TabsTrigger value="elements">Elements</TabsTrigger>
                <TabsTrigger value="attributes">Svg Attributes</TabsTrigger>
              </TabsList>
              <TabsContent value="elements" className="size-full">
                <SvgElements
                  {...{
                    elements,
                    handleChangeAttribute,
                    handleDeleteElement,
                    handleDragElement,
                  }}
                />
              </TabsContent>
              <TabsContent value="attributes" className="size-full">
                <SvgAttributes
                  {...{ svgAttributes, handleChangeSvgAttribute }}
                />
              </TabsContent>
            </Tabs>
          </ResizablePanel>
        </>
      )}
    </ResizablePanelGroup>
  );
};

export default Editor;
