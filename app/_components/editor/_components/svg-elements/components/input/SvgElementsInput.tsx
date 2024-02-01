import { Input } from "@/components/ui/input";
import { NUMBER_INPUT } from "./constants/SvgElementsInput.constants";
import { SvgElementsInputProps } from "./types/SvgElementInput.type";

const SvgElementsInput = ({
  id,
  field,
  value,
  handleChangeAttribute,
}: SvgElementsInputProps) => (
  <Input
    type={NUMBER_INPUT.includes(field) ? "number" : "text"}
    className="text-right col-span-4"
    value={value}
    onChange={(e) => handleChangeAttribute({ e, id, field })}
  />
);

export default SvgElementsInput;
