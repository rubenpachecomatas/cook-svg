import { Input } from "@/components/ui/input";
import { SvgAttributesProps } from "./types/SvgAttributes.type";
import { SvgAttributesType } from "@/types/svg-attributes.type";
import { FILTERED_ATTRIBUTES } from "./constants/SvgAttributes.constants";
import SvgElementsInput from "../svg-input/SvgElementsInput";

const SvgAttributes = ({
  svgAttributes,
  handleChangeSvgAttribute,
}: SvgAttributesProps) => (
  <div className="flex flex-col gap-2 m-2 h-full">
    <h4 className="text-lg font-semibold">Svg Attributes</h4>
    <div className="flex flex-col gap-2 pb-16 h-full overflow-important">
      {Object.keys(svgAttributes)
        .filter((field) => !FILTERED_ATTRIBUTES.includes(field))
        .map((field, i) => (
          <div key={i} className="grid grid-cols-6 items-center gap-2">
            <p className="col-span-2 truncate">{field}</p>
            <SvgElementsInput
              {...{
                id: i,
                field,
                handleChangeAttribute: handleChangeSvgAttribute,
              }}
              value={
                svgAttributes[field as keyof SvgAttributesType] !== true &&
                svgAttributes[field as keyof SvgAttributesType] !== null
                  ? svgAttributes[
                      field as keyof SvgAttributesType
                    ]?.toString() || ""
                  : ""
              }
            />
          </div>
        ))}
    </div>
  </div>
);

export default SvgAttributes;
