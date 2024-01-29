"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Upload } from "lucide-react";
import { UseEditorReturnType } from "../../hooks/types/useEditorReturn.type";
import { DialogClose } from "@radix-ui/react-dialog";
import useImport from "./hooks/useImport";

const Import = ({
  handleImport,
  importCloseRef,
}: Pick<UseEditorReturnType, "handleImport" | "importCloseRef">) => {
  const { open, setOpen, value, handleChange } = useImport();

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="flex gap-2 w-full" variant="secondary">
          <Upload />
          Import
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Import svg</DialogTitle>
          <DialogDescription>
            Select the file you want to import
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleImport} className="flex flex-col gap-6">
          <Input
            onChange={handleChange}
            value={value}
            name="svgInput"
            type="file"
            accept="image/svg+xml"
          />
          <DialogFooter className="flex gap-2 mt-auto">
            <DialogClose ref={importCloseRef} asChild>
              <Button variant="secondary">Cancel</Button>
            </DialogClose>
            <Button disabled={!value} type="submit">
              Import
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default Import;
