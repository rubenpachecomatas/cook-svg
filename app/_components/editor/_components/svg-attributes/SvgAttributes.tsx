import { Input } from "@/components/ui/input";
import { SvgAttributesProps } from "./types/SvgAttributes.type";
import { SvgAttributesType } from "@/types/svg-attributes.type";

const SvgAttributes = ({ svgAttributes }: SvgAttributesProps) => (
  <div className="flex flex-col gap-2 my-2">
    <h4 className="text-lg font-semibold">Svg Attributes</h4>
    <div className="flex flex-col gap-2">
      {Object.keys(svgAttributes).map((field, i) => (
        <div key={i} className="grid grid-cols-4 items-center">
          <p className=" grid-flow-col">{field}</p>
          <Input
            className="text-right col-span-3"
            value={
              svgAttributes[field as keyof SvgAttributesType] !== true &&
              svgAttributes[field as keyof SvgAttributesType] !== null
                ? svgAttributes[field as keyof SvgAttributesType]?.toString() ||
                  ""
                : ""
            }
            onChange={(e) => null}
          />
        </div>
      ))}
    </div>
  </div>
);

export default SvgAttributes;
