"use client";

import { CircleAlert, Info } from "lucide-react";

import { cn } from "@/lib/utils";

type AppAlertProps = {
  message: string;
  severity: "info" | "error";
};

export default function AppAlert({ message, severity }: AppAlertProps) {
  const isInfo = severity === "info";
  const isError = severity === "error";

  return (
    <p
      className={cn("flex gap-1 rounded-md p-2", {
        "bg-[#e5f6fd]": isInfo,
        "text-[#014361]": isInfo,
        "bg-[#fdeded]": isError,
        "text-[#5f2120]": severity === "error"
      })}>
      {isInfo && <Info />}
      {isError && <CircleAlert />}

      {message}
    </p>
  );
}
