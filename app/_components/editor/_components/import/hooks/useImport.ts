import { ChangeEvent, useEffect, useState } from "react";

const useImport = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setValue(e.currentTarget.value);

  useEffect(() => {
    if (!open) setValue("");
  }, [open]);

  return {
    open,
    setOpen,
    value,
    handleChange,
  };
};

export default useImport;
