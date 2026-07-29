"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { AwardIcon } from "lucide-react";
import { certifications } from "@/lib/data";
import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from "@/components/animated-section";
import { SectionHeader } from "@/components/section-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function Certifications() {
  return (
    <AnimatedSection id="certifications" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Certifications"
          title="Credentials & badges"
          description="Industry-recognized certifications across cloud, APIs, databases, and core programming."
        />

        <StaggerContainer className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {certifications.map((cert, index) => (
            <StaggerItem key={cert.name}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 400, damping: 22 }}
                className="h-full"
              >
                <Card className="interactive-card h-full min-h-[200px] border-border/50 bg-card/60 backdrop-blur-sm">
                  <CardContent className="flex h-full flex-col gap-3 p-4">
                    <div className="flex size-9 items-center justify-center rounded-lg border border-primary/20 bg-primary/10 text-primary">
                      <AwardIcon className="size-4" />
                    </div>
                    <p className="line-clamp-3 flex-1 text-sm leading-snug font-medium text-foreground">
                      {cert.name}
                    </p>
                    <Button
                      variant="outline"
                      size="sm"
                      className="mt-auto w-full border-primary/30 hover:border-primary/60 hover:bg-primary/10"
                      nativeButton={false}
                      render={
                        <Link
                          href={cert.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        />
                      }
                    >
                      View
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </AnimatedSection>
  );
}
