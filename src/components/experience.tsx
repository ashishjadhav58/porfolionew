"use client";

import { motion } from "framer-motion";
import { BriefcaseIcon, MapPinIcon } from "lucide-react";
import { experience } from "@/lib/data";
import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from "@/components/animated-section";
import { SectionHeader } from "@/components/section-header";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export function Experience() {
  return (
    <AnimatedSection id="experience" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Experience"
          title="Professional journey"
          description="Hands-on experience building and shipping backend and full-stack systems."
        />

        <StaggerContainer className="flex flex-col gap-8">
          {experience.map((job, jobIndex) => (
            <StaggerItem key={job.company}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 400, damping: 24 }}
              >
                <Card className="interactive-card overflow-hidden border-border/50 bg-card/60 backdrop-blur-sm">
                  <CardContent className="p-0">
                    <div className="grid md:grid-cols-[auto_1fr]">
                      {/* Timeline accent */}
                      <div className="hidden flex-col items-center border-r border-primary/20 bg-primary/5 px-6 py-8 md:flex">
                        <div className="flex size-14 items-center justify-center rounded-2xl border border-primary/30 bg-primary/10 text-primary">
                          <BriefcaseIcon className="size-6" />
                        </div>
                        <div className="mt-4 w-px flex-1 bg-gradient-to-b from-primary/40 to-transparent" />
                      </div>

                      <div className="p-6 sm:p-8">
                        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                          <div className="flex items-start gap-4">
                            <div className="flex size-12 shrink-0 items-center justify-center rounded-xl border border-primary/30 bg-primary/10 text-primary md:hidden">
                              <BriefcaseIcon className="size-5" />
                            </div>
                            <div>
                              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                                Internship
                              </p>
                              <h3 className="mt-1 font-heading text-xl font-bold sm:text-2xl">
                                {job.company}
                              </h3>
                              <p className="mt-1 text-base text-muted-foreground">
                                {job.role}
                              </p>
                            </div>
                          </div>
                          <div className="flex flex-wrap gap-2 sm:justify-end">
                            <Badge
                              variant="outline"
                              className="border-primary/30 bg-primary/5"
                            >
                              {job.period}
                            </Badge>
                            <Badge variant="secondary" className="gap-1">
                              <MapPinIcon className="size-3" />
                              {job.location}
                            </Badge>
                          </div>
                        </div>

                        <Separator className="my-6 bg-primary/10" />

                        <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                          {job.summary}
                        </p>

                        <ul className="mt-6 grid gap-3 sm:grid-cols-1">
                          {job.highlights.map((highlight, index) => (
                            <motion.li
                              key={highlight}
                              initial={{ opacity: 0, x: -12 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: index * 0.1 }}
                              className="flex gap-3 rounded-lg border border-border/40 bg-muted/20 p-4 text-sm leading-relaxed text-muted-foreground transition-colors hover:border-primary/20 hover:bg-primary/5"
                            >
                              <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                              {highlight}
                            </motion.li>
                          ))}
                        </ul>

                        <div className="mt-6 flex flex-wrap gap-2">
                          {job.tech.map((tech) => (
                            <Badge
                              key={tech}
                              variant="outline"
                              className="border-primary/20 bg-primary/5 text-xs"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
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
