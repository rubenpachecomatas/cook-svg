import { Input } from "@/components/ui/input";
import { SvgElementAttributesType } from "@/types/svg-element-attributes.type";
import { SvgElement } from "@/types/svg-element.type";
import { Eraser } from "lucide-react";
import { SvgElementsProps } from "./types/SvgElements.type";

const SvgElements = ({
  elements,
  handleDeleteElement,
  handleChangeAttribute,
}: SvgElementsProps): React.ReactElement =>
  elements.length > 0 ? (
    <div className="pb-2">
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
                  value={attributes[field as keyof SvgElementAttributesType]}
                  onChange={(e) => handleChangeAttribute({ e, id, field })}
                />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  ) : (
    <div className="h-full flex items-center justify-center">
      <h2 className="text-2xl font-bold text-center opacity-25">
        Svg Elements will appear here
      </h2>
    </div>
  );

export default SvgElements;
