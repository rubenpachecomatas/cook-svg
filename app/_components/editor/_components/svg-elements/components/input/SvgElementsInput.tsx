import { Input } from "@/components/ui/input";
import {
  NUMBER_INPUT,
  SELECTORS,
} from "./constants/SvgElementsInput.constants";
import { SvgElementsInputProps } from "./types/SvgElementInput.type";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SelectorOptionType } from "./types/SelectorOption.type";

const SvgElementsInput = ({
  id,
  field,
  value,
  handleChangeAttribute,
}: SvgElementsInputProps) =>
  SELECTORS[field] ? (
    <Select
      value={value}
      onValueChange={(value) => handleChangeAttribute({ value, id, field })}
    >
      <SelectTrigger className="col-span-4">
        <SelectValue placeholder="Select a value" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {SELECTORS[field].options.map(
            ({ label, value }: SelectorOptionType, index: number) => (
              <SelectItem key={index} value={value}>
                {label}
              </SelectItem>
            )
          )}
        </SelectGroup>
      </SelectContent>
    </Select>
  ) : (
    <Input
      className="col-span-4"
      type={NUMBER_INPUT.includes(field) ? "number" : "text"}
      value={value}
      onChange={(e) =>
        handleChangeAttribute({ value: e.target.value, id, field })
      }
    />
  );

export default SvgElementsInput;
