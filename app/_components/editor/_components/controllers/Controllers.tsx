import { Button } from "@/components/ui/button";
import {
  AlignLeft,
  Circle,
  Cylinder,
  Download,
  Minus,
  Pyramid,
  RectangleHorizontal,
  Spline,
  Waypoints,
} from "lucide-react";
import { UseEditorReturnType } from "../../hooks/types/useEditorReturn.type";
import Import from "../import/Import";
import {
  DEFAULT_CIRCLE,
  DEFAULT_ELLIPSE,
  DEFAULT_LINE,
  DEFAULT_PATH,
  DEFAULT_POLYGON,
  DEFAULT_POLYLINE,
  DEFAULT_RECT,
  DEFAULT_TEXT,
} from "./constants/controllers.constants";

const Controllers = ({
  handleAddElement,
  handleExport,
  handleImport,
  importCloseRef,
}: Pick<
  UseEditorReturnType,
  "handleAddElement" | "handleExport" | "handleImport" | "importCloseRef"
>) => (
  <div className="p-2 h-full flex flex-col gap-2 overflow-important">
    <Button onClick={() => handleAddElement(DEFAULT_CIRCLE)} variant="ghost">
      <div className="controller">
        <Circle />
        Add circle
      </div>
    </Button>
    <Button
      onClick={() => handleAddElement(DEFAULT_RECT)}
      className="flex gap-2 w-full"
      variant="ghost"
    >
      <div className="controller">
        <RectangleHorizontal />
        Add rectangle
      </div>
    </Button>
    <Button variant="ghost" onClick={() => handleAddElement(DEFAULT_ELLIPSE)}>
      <div className="controller">
        <Cylinder />
        Add ellipse
      </div>
    </Button>
    <Button variant="ghost" onClick={() => handleAddElement(DEFAULT_PATH)}>
      <div className="controller">
        <Spline />
        Add path
      </div>
    </Button>
    <Button variant="ghost" onClick={() => handleAddElement(DEFAULT_POLYGON)}>
      <div className="controller">
        <Pyramid />
        Add polygon
      </div>
    </Button>
    <Button variant="ghost" onClick={() => handleAddElement(DEFAULT_LINE)}>
      <div className="controller">
        <Minus />
        Add line
      </div>
    </Button>
    <Button variant="ghost" onClick={() => handleAddElement(DEFAULT_POLYLINE)}>
      <div className="controller">
        <Waypoints />
        Add polyline
      </div>
    </Button>
    <Button variant="ghost" onClick={() => handleAddElement(DEFAULT_TEXT)}>
      <div className="controller">
        <AlignLeft />
        Add text
      </div>
    </Button>
    <div className="mt-auto flex flex-col sm:flex-row gap-2 pb-12 sm:pb-0">
      <Import handleImport={handleImport} importCloseRef={importCloseRef} />
      <Button onClick={handleExport} className="flex gap-2 w-full">
        <Download />
        Export
      </Button>
    </div>
  </div>
);

export default Controllers;
