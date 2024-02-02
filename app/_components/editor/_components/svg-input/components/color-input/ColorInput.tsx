import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useState } from "react";
import { HexColorPicker } from "react-colorful";
import { ColorInputType } from "./types/ColorInput.type";
import { Input } from "@/components/ui/input";
import { Pipette } from "lucide-react";

const ColorInput = ({
  id,
  field,
  value,
  handleChangeAttribute,
}: ColorInputType) => (
  <Popover>
    <div className="flex gap-2 col-span-4">
      <Input
        value={value}
        placeholder="Enter a color"
        onChange={(e) =>
          handleChangeAttribute({ value: e.target.value, id, field })
        }
      />
      <PopoverTrigger asChild>
        <Button className="h-auto" size="sm">
          <Pipette className="size-4" />
        </Button>
      </PopoverTrigger>
    </div>
    <PopoverContent className="w-fit">
      <HexColorPicker
        color={value}
        onChange={(value) => handleChangeAttribute({ value, id, field })}
      />
    </PopoverContent>
  </Popover>
);

export default ColorInput;
