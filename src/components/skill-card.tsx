"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

type SkillCardProps = {
  title: string;
  icon: LucideIcon;
  items: readonly string[];
  index: number;
  className?: string;
};

export function SkillCard({
  title,
  icon: Icon,
  items,
  index,
  className,
}: SkillCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.06,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ y: -6, scale: 1.02 }}
      className={cn("group h-full min-h-[280px]", className)}
    >
      <Card className="interactive-card relative flex h-full min-h-[280px] flex-col overflow-hidden border-border/50 bg-card/60 backdrop-blur-sm">
        <div className="pointer-events-none absolute -top-12 -right-12 size-32 rounded-full bg-primary/10 blur-2xl transition-all duration-500 group-hover:bg-primary/25 group-hover:blur-3xl" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        <CardHeader className="relative shrink-0">
          <motion.div
            className="mb-3 flex size-11 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary transition-colors duration-300 group-hover:border-primary/40 group-hover:bg-primary/20"
            whileHover={{ rotate: [0, -8, 8, 0], scale: 1.08 }}
            transition={{ duration: 0.45 }}
          >
            <Icon className="size-5" />
          </motion.div>
          <CardTitle className="line-clamp-2 min-h-[2.5rem] font-heading text-base tracking-tight transition-colors duration-300 group-hover:text-primary">
            {title}
          </CardTitle>
          <p className="text-xs text-muted-foreground">
            {items.length} technologies
          </p>
        </CardHeader>

        <CardContent className="relative flex flex-1 flex-col">
          <div className="flex flex-1 flex-wrap content-start gap-2">
            {items.map((item, itemIndex) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.06 + itemIndex * 0.03,
                  duration: 0.35,
                }}
                whileHover={{ scale: 1.08, y: -2 }}
              >
                <Badge
                  variant="outline"
                  className="cursor-default border-primary/20 bg-primary/5 px-2.5 py-1 text-xs transition-all duration-300 hover:border-primary/50 hover:bg-primary/15 hover:text-primary hover:shadow-[0_0_12px_var(--glow)]"
                >
                  {item}
                </Badge>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
