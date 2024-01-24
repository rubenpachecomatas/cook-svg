import { Button } from "@/components/ui/button";
import { SvgElementTypes } from "@/enums/svg-element-types.enum";
import {
  Circle,
  Cylinder,
  Download,
  Minus,
  Pyramid,
  RectangleHorizontal,
  Spline,
  Upload,
} from "lucide-react";
import { UseEditorReturnType } from "../hooks/types/useEditorReturn.type";
import Import from "./Import";

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
      onClick={() =>
        handleAddElement({
          type: "circle",
          attributes: {
            cx: "12",
            cy: "12",
            r: "10",
          },
        })
      }
      size="sm"
      variant="ghost"
    >
      <div className="controller">
        <Circle />
        Add circle
      </div>
    </Button>
    <Button
      onClick={() =>
        handleAddElement({
          type: "rect",
          attributes: {
            width: "24",
            height: "24",
          },
        })
      }
      className="flex gap-2 w-full"
      size="sm"
      variant="ghost"
    >
      <div className="controller">
        <RectangleHorizontal />
        Add rectangle
      </div>
    </Button>
    <Button size="sm" variant="ghost">
      <div className="controller">
        <Spline />
        Add path
      </div>
    </Button>
    <Button size="sm" variant="ghost">
      <div className="controller">
        <Cylinder />
        Add ellipse
      </div>
    </Button>
    <Button size="sm" variant="ghost">
      <div className="controller">
        <Pyramid />
        Add polygon
      </div>
    </Button>
    <Button size="sm" variant="ghost">
      <div className="controller">
        <Minus />
        Add line
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
