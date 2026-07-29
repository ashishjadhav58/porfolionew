"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type TypingTextProps = {
  text: string;
  className?: string;
  speed?: number;
  startDelay?: number;
  showCursor?: boolean;
};

export function TypingText({
  text,
  className,
  speed = 70,
  startDelay = 400,
  showCursor = true,
}: TypingTextProps) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    setDisplayed("");
    setDone(false);

    let interval: ReturnType<typeof setInterval> | undefined;

    const startTimer = setTimeout(() => {
      let index = 0;

      interval = setInterval(() => {
        index += 1;
        setDisplayed(text.slice(0, index));

        if (index >= text.length) {
          clearInterval(interval);
          setDone(true);
        }
      }, speed);
    }, startDelay);

    return () => {
      clearTimeout(startTimer);
      if (interval) clearInterval(interval);
    };
  }, [text, speed, startDelay]);

  return (
    <span className={cn("inline-flex items-center", className)}>
      {displayed}
      {showCursor && (
        <span
          className={cn(
            "ml-0.5 inline-block w-[2px] bg-primary",
            done ? "animate-pulse" : "animate-[blink_0.8s_step-end_infinite]"
          )}
          style={{ height: "1em" }}
        />
      )}
    </span>
  );
}
