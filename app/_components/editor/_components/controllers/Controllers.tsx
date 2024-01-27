import { Button } from "@/components/ui/button";
import {
  Circle,
  Cylinder,
  Download,
  Minus,
  Pyramid,
  RectangleHorizontal,
  Spline,
} from "lucide-react";
import { UseEditorReturnType } from "../../hooks/types/useEditorReturn.type";
import Import from "../Import";
import {
  DEFAULT_CIRCLE,
  DEFAULT_ELLIPSE,
  DEFAULT_LINE,
  DEFAULT_PATH,
  DEFAULT_POLYGON,
  DEFAULT_POLYLINE,
  DEFAULT_RECT,
} from "./constants/controllers.constants";

const Controllers = ({
  handleAddElement,
  handleExport,
  handleImport,
}: Pick<
  UseEditorReturnType,
  "handleAddElement" | "handleExport" | "handleImport"
>) => (
  <div className="p-2 h-full flex flex-col gap-2">
    <Button
      onClick={() => handleAddElement(DEFAULT_CIRCLE)}
      size="sm"
      variant="ghost"
    >
      <div className="controller">
        <Circle />
        Add circle
      </div>
    </Button>
    <Button
      onClick={() => handleAddElement(DEFAULT_RECT)}
      className="flex gap-2 w-full"
      size="sm"
      variant="ghost"
    >
      <div className="controller">
        <RectangleHorizontal />
        Add rectangle
      </div>
    </Button>
    <Button
      size="sm"
      variant="ghost"
      onClick={() => handleAddElement(DEFAULT_ELLIPSE)}
    >
      <div className="controller">
        <Cylinder />
        Add ellipse
      </div>
    </Button>
    <Button
      size="sm"
      variant="ghost"
      onClick={() => handleAddElement(DEFAULT_PATH)}
    >
      <div className="controller">
        <Spline />
        Add path
      </div>
    </Button>
    <Button
      size="sm"
      variant="ghost"
      onClick={() => handleAddElement(DEFAULT_POLYGON)}
    >
      <div className="controller">
        <Pyramid />
        Add polygon
      </div>
    </Button>
    <Button
      size="sm"
      variant="ghost"
      onClick={() => handleAddElement(DEFAULT_LINE)}
    >
      <div className="controller">
        <Minus />
        Add line
      </div>
    </Button>
    <Button
      size="sm"
      variant="ghost"
      onClick={() => handleAddElement(DEFAULT_POLYLINE)}
    >
      <div className="controller">
        <Minus />
        Add polyline
      </div>
    </Button>
    <div className="mt-auto flex flex-col sm:flex-row gap-2">
      <Import handleImport={handleImport} />
      <Button onClick={handleExport} className="flex gap-2 w-full">
        <Download />
        Export
      </Button>
    </div>
  </div>
);

export default Controllers;