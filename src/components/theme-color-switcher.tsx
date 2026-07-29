"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PaletteIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

const colors = [
  { name: "Green (Default)", id: "green", bg: "bg-emerald-500" },
  { name: "Sky Blue", id: "blue", bg: "bg-sky-500" },
  { name: "Sunset Red", id: "red", bg: "bg-red-500" },
  { name: "Amber Gold", id: "amber", bg: "bg-amber-500" },
] as const;

export function ThemeColorSwitcher() {
  const [activeColor, setActiveColor] = useState<string>("green");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const savedColor = localStorage.getItem("portfolio-accent-color") || "green";
    setActiveColor(savedColor);
    document.documentElement.setAttribute("data-color", savedColor);
  }, []);

  const handleColorChange = (color: string) => {
    setActiveColor(color);
    document.documentElement.setAttribute("data-color", color);
    localStorage.setItem("portfolio-accent-color", color);
  };

  return (
    <div className="fixed left-4 bottom-24 z-50 flex flex-col items-center gap-2 sm:bottom-auto sm:top-1/2 sm:-translate-y-1/2">
      <Button
        variant="outline"
        size="icon"
        className="size-10 rounded-full border-primary/20 bg-card/80 shadow-md backdrop-blur-sm hover:border-primary/50 hover:bg-primary/10 text-primary"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle color theme switcher"
      >
        <PaletteIcon className="size-5" />
      </Button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: -16, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -16, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 380, damping: 25 }}
            className="flex flex-col gap-2 rounded-2xl border border-primary/10 bg-card/90 p-2 shadow-lg backdrop-blur-md"
          >
            {colors.map((color) => (
              <button
                key={color.id}
                onClick={() => handleColorChange(color.id)}
                className={`group relative size-7 rounded-full ${color.bg} transition-all duration-300 hover:scale-110 active:scale-95 flex items-center justify-center`}
                title={`Switch to ${color.name}`}
              >
                {activeColor === color.id && (
                  <span className="size-2 rounded-full bg-white shadow-sm animate-ping" />
                )}
                {activeColor === color.id && (
                  <span className="absolute size-2 rounded-full bg-white shadow-sm" />
                )}
                <span className="pointer-events-none absolute left-9 rounded bg-popover px-2 py-1 text-[10px] font-medium text-popover-foreground opacity-0 shadow-md transition-opacity group-hover:opacity-100 whitespace-nowrap">
                  {color.name}
                </span>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
