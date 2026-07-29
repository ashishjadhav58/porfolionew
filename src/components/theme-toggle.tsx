"use client";

import { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <Button variant="ghost" size="icon" className="size-9" disabled />;
  }

  const isDark = theme === "dark";

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger
          delay={200}
          render={
            <Button
              variant="ghost"
              size="icon"
              className="size-9 text-muted-foreground hover:text-primary"
              onClick={() => setTheme(isDark ? "light" : "dark")}
              aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            />
          }
        >
          {isDark ? <SunIcon className="size-4" /> : <MoonIcon className="size-4" />}
        </TooltipTrigger>
        <TooltipContent>
          {isDark ? "Light mode (red & white)" : "Dark mode (red & black)"}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
