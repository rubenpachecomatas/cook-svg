import { SvgElementTypes } from "@/enums/svg-element-types.enum";
import { cn } from "@/lib/utils";
import { SvgCanvas } from "./types/SvgCanvas.type";
import {
  Circle,
  Ellipse,
  Line,
  Path,
  Polygon,
  Polyline,
  Rect,
} from "@/types/svg-element-attributes.type";

const SvgCanvas = ({ scale, svgRef, elements, svgAttributes }: SvgCanvas) => (
  <div className={cn("flex justify-center items-center w-full")}>
    <div
      className={cn(
        "flex justify-center items-center m-2 border",
        scale === 25 && "size-1/4",
        scale === 50 && "size-1/2",
        scale === 75 && "size-3/4",
        scale === 100 && "size-full"
      )}
    >
      <svg ref={svgRef} {...svgAttributes}>
        {elements.map(({ type, attributes }, i) => {
          if (type === SvgElementTypes.circle)
            return <circle key={i} {...(attributes as Circle)} />;
          if (type === SvgElementTypes.rect)
            return <rect key={i} {...(attributes as Rect)} />;
          if (type === SvgElementTypes.ellipse)
            return <ellipse key={i} {...(attributes as Ellipse)} />;
          if (type === SvgElementTypes.line)
            return <line key={i} {...(attributes as Line)} />;
          if (type === SvgElementTypes.path)
            return <path key={i} {...(attributes as Path)} />;
          if (type === SvgElementTypes.polygon)
            return <polygon key={i} {...(attributes as Polygon)} />;
          if (type === SvgElementTypes.polyline)
            return <polyline key={i} {...(attributes as Polyline)} />;
        })}
      </svg>
    </div>
  </div>
);

export default SvgCanvas;
