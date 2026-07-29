"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

function formatDateTime(date: Date) {
  const day = date.toLocaleDateString("en-US", { weekday: "long" });
  const dateStr = date.toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const seconds = date.getSeconds().toString().padStart(2, "0");

  return { day, dateStr, time: `${hours}:${minutes}:${seconds}` };
}

type LiveClockProps = {
  className?: string;
  compact?: boolean;
};

export function LiveClock({ className, compact = false }: LiveClockProps) {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    setNow(new Date());
    const interval = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  if (!now) {
    return (
      <span
        className={cn(
          "inline-block h-5 w-48 animate-pulse rounded-md bg-muted/40",
          className
        )}
      />
    );
  }

  const { day, dateStr, time } = formatDateTime(now);
  const [hours, minutes, seconds] = time.split(":");

  if (compact) {
    return (
      <span
        className={cn(
          "font-mono text-[10px] text-muted-foreground sm:text-xs",
          className
        )}
      >
        <span className="text-primary">{time}</span>
      </span>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: -12 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.15 }}
      className={cn(
        "inline-flex flex-wrap items-center gap-x-2 gap-y-1 rounded-xl border border-primary/20 bg-primary/5 px-3 py-2 font-mono text-xs sm:text-sm",
        className
      )}
    >
      <span className="text-muted-foreground">{day}</span>
      <span className="text-muted-foreground/40">·</span>
      <span className="text-foreground">{dateStr}</span>
      <span className="text-muted-foreground/40">·</span>
      <span className="inline-flex items-center tabular-nums text-primary">
        <span>{hours}</span>
        <motion.span
          animate={{ opacity: [1, 0.2, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
          className="mx-0.5"
        >
          :
        </motion.span>
        <span>{minutes}</span>
        <motion.span
          animate={{ opacity: [1, 0.2, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
          className="mx-0.5"
        >
          :
        </motion.span>
        <AnimatePresence mode="popLayout">
          <motion.span
            key={seconds}
            initial={{ y: -8, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 8, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {seconds}
          </motion.span>
        </AnimatePresence>
      </span>
    </motion.div>
  );
}
