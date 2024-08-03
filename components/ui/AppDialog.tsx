import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";

type AppDialogProps = {
  children: React.ReactNode;
  Trigger: React.ReactNode;
  title: string;
};

export default function AppDialog({
  children,
  Trigger,
  title
}: AppDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>{Trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        <div className="flex items-center space-x-2">{children}</div>
      </DialogContent>
    </Dialog>
  );
}
