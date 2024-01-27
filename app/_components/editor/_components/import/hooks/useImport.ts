import { ChangeEvent, useState } from "react";

const useImport = () => {
  const [value, setValue] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setValue(e.currentTarget.value);

  return {
    value,
    handleChange,
  };
};

export default useImport;
