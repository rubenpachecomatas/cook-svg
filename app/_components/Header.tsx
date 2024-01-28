import { ChefHat } from "lucide-react";

const Header = () => (
  <header className="flex justify-between items-center p-7">
    <div className="flex gap-2 items-center">
      <ChefHat className="size-8" />
      <h1 className="text-2xl font-bold">Cook Svg</h1>
    </div>
  </header>
);

export default Header;
