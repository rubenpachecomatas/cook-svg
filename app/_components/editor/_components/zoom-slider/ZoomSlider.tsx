import { Slider } from "@/components/ui/slider";
import { SLIDER_PROPS } from "./constants/ZoomSlider.constants";
import { ZoomSliderProps } from "./types/ZoomSlider.type";

const ZoomSlider = ({ scale, handleChangeScale }: ZoomSliderProps) => (
  <div className="absolute top-10 right-10 z-10">
    <Slider
      {...SLIDER_PROPS}
      className="w-20 border-2 rounded-md border-white"
      value={[scale]}
      onValueChange={handleChangeScale}
    />
  </div>
);

export default ZoomSlider;
