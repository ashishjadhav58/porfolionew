"use client";

import { motion } from "framer-motion";
import { TypingText } from "@/components/typing-text";
import { cn } from "@/lib/utils";

function BitmojiAvatar({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative flex size-10 shrink-0 items-end justify-center overflow-hidden rounded-full border-2 border-primary/30 bg-gradient-to-b from-amber-200 to-amber-300 shadow-[0_4px_16px_var(--glow)]",
        className
      )}
    >
      {/* Hair */}
      <div className="absolute top-0 h-4 w-full rounded-t-full bg-neutral-800" />
      {/* Face */}
      <div className="relative mb-1 flex size-7 flex-col items-center justify-center rounded-full bg-amber-100">
        <div className="flex gap-2">
          <span className="size-1 rounded-full bg-neutral-800" />
          <span className="size-1 rounded-full bg-neutral-800" />
        </div>
        <span className="mt-0.5 h-1 w-2.5 rounded-full border-b-2 border-neutral-800" />
      </div>
      {/* Wave hand */}
      <motion.span
        className="absolute -right-0.5 bottom-1 text-sm"
        animate={{ rotate: [0, 14, -8, 14, 0] }}
        transition={{ duration: 1.2, repeat: Infinity, repeatDelay: 2 }}
      >
        👋
      </motion.span>
    </div>
  );
}

export function NavbarBitmoji() {
  return (
    <div className="relative flex items-center gap-2.5">
      <motion.div
        initial={{ scale: 0, y: 16, rotate: -12 }}
        animate={{ scale: 1, y: 0, rotate: 0 }}
        transition={{
          type: "spring",
          stiffness: 420,
          damping: 18,
          delay: 0.2,
        }}
      >
        <BitmojiAvatar />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8, x: -8 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{
          type: "spring",
          stiffness: 380,
          damping: 22,
          delay: 0.45,
        }}
        className="relative max-w-[140px] xs:max-w-none sm:max-w-none"
      >
        <div className="absolute -left-1.5 top-1/2 size-2.5 -translate-y-1/2 rotate-45 border-b border-l border-primary/20 bg-card" />
        <div className="rounded-xl border border-primary/20 bg-card/90 px-3 py-1.5 shadow-sm backdrop-blur-sm">
          <p className="whitespace-nowrap font-mono text-xs text-foreground">
            <TypingText text="Hi I am Ashish!" speed={65} startDelay={700} />
          </p>
        </div>
      </motion.div>
    </div>
  );
}
