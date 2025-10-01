import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { showSuccess } from "@/utils/toast";
import { UploadCloud } from "lucide-react";

interface UploadDocumentDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export const UploadDocumentDialog = ({ isOpen, onClose }: UploadDocumentDialogProps) => {
  const [fileName, setFileName] = useState("");

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setFileName(event.target.files[0].name);
    } else {
      setFileName("");
    }
  };

  const handleSubmit = () => {
    // In a real application, you would handle the file upload here.
    // For now, we'll just show a success message.
    showSuccess(`Successfully uploaded ${fileName}`);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Upload New Document</DialogTitle>
          <DialogDescription>
            Select a document (PDF, DOCX) to ingest into the system.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="document">Document File</Label>
            <div className="relative">
                <Input id="document" type="file" className="w-full" onChange={handleFileChange} />
                {!fileName && (
                    <div className="absolute inset-0 flex items-center justify-center text-sm text-muted-foreground pointer-events-none">
                        <UploadCloud className="mr-2 h-4 w-4" />
                        <span>Click to select a file</span>
                    </div>
                )}
            </div>
            {fileName && <p className="text-sm text-muted-foreground mt-2">Selected file: {fileName}</p>}
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={onClose}>Cancel</Button>
          <Button onClick={handleSubmit} disabled={!fileName}>Upload and Process</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};