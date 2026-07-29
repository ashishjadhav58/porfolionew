"use client";

import Link from "next/link";
import { DownloadIcon } from "lucide-react";
import { personalInfo } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type ResumeDownloadButtonProps = {
  size?: "default" | "sm" | "lg";
  variant?: "default" | "outline" | "ghost";
  className?: string;
  showIcon?: boolean;
  label?: string;
};

export function ResumeDownloadButton({
  size = "lg",
  variant = "outline",
  className,
  showIcon = true,
  label = "Download Resume",
}: ResumeDownloadButtonProps) {
  return (
    <Button
      variant={variant}
      size={size}
      className={cn(
        variant === "outline" &&
          "border-primary/30 hover:border-primary/60 hover:bg-primary/10",
        className
      )}
      nativeButton={false}
      render={
        <Link
          href={personalInfo.resumeUrl}
          download={personalInfo.resumeFileName}
          prefetch={false}
        />
      }
    >
      {label}
      {showIcon && <DownloadIcon />}
    </Button>
  );
}
