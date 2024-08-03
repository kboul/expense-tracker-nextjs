import React from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger
} from "@/components/ui/drawer";
import { Button } from "./button";

export default function AppDrawer({
  children,
  title,
  Trigger
}: {
  children: React.ReactNode;
  title: string;
  Trigger: React.ReactNode;
}) {
  return (
    <Drawer>
      <DrawerTrigger>{Trigger}</DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>{title}</DrawerTitle>
          <div className="flex justify-center space-x-2">{children}</div>
        </DrawerHeader>
        <DrawerFooter>
          <DrawerClose>
            <Button className="w-1/3" variant="outline">
              Cancel
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
