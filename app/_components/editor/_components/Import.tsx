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
import { UseEditorReturnType } from "../hooks/types/useEditorReturn.type";

const Import = ({
  handleImport,
}: Pick<UseEditorReturnType, "handleImport">) => (
  <Dialog>
    <DialogTrigger asChild>
      <Button
        onClick={() => null}
        className="flex gap-2 w-full"
        variant="secondary"
      >
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
        <Input name="svgInput" type="file" accept="image/svg+xml" />
      <DialogFooter className="flex gap-2 mt-auto">
        <Button variant="secondary">Cancel</Button>
        <Button type="submit">Import</Button>
      </DialogFooter>
      </form>
    </DialogContent>
  </Dialog>
);

export default Import;
