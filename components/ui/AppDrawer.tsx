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

type AppDrawerProps = {
  children: React.ReactNode;
  title: string;
  Trigger: React.ReactNode;
};

export default function AppDrawer({
  children,
  title,
  Trigger
}: AppDrawerProps) {
  return (
    <Drawer>
      <DrawerTrigger>{Trigger}</DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>{title}</DrawerTitle>
          <div className="flex justify-center space-x-2">{children}</div>
        </DrawerHeader>
        <DrawerFooter>
          <DrawerClose asChild>
            <div className="flex justify-center">
              <Button className="w-[330px]" variant="outline">
                Close
              </Button>
            </div>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
