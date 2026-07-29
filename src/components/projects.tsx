"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRightIcon, FolderGit2Icon } from "lucide-react";
import { projects } from "@/lib/data";
import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from "@/components/animated-section";
import { SectionHeader } from "@/components/section-header";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function Projects() {
  return (
    <AnimatedSection id="projects" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Projects"
          title="Selected work"
          description="Production-grade systems spanning recruitment platforms, microservices, and serverless architectures."
        />

        <StaggerContainer className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <StaggerItem key={project.name}>
              <motion.div
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 22 }}
                className="h-full"
              >
                <Card className="interactive-card flex h-full flex-col border-border/50 bg-card/60 backdrop-blur-sm">
                  <CardHeader>
                    <CardAction>
                      <div className="flex size-9 items-center justify-center rounded-lg border border-primary/20 bg-primary/10 transition-colors group-hover:border-primary/40 group-hover:bg-primary/20">
                        <FolderGit2Icon className="size-4 text-primary" />
                      </div>
                    </CardAction>
                    <CardTitle className="pr-10 font-heading text-lg transition-colors duration-300 group-hover:text-primary">
                      {project.name}
                    </CardTitle>
                    <CardDescription>{project.period}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                      {project.description}
                    </p>
                    <ul className="space-y-2">
                      {project.highlights.slice(0, 2).map((highlight) => (
                        <li
                          key={highlight}
                          className="flex gap-2 text-xs leading-relaxed text-muted-foreground"
                        >
                          <span className="mt-1.5 size-1 shrink-0 rounded-full bg-primary/60" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter className="mt-auto flex flex-col items-start gap-4">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.map((tech) => (
                        <Badge
                          key={tech}
                          variant="outline"
                          className="border-primary/20 bg-primary/5 text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex w-full items-center gap-3">
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 border-primary/30 hover:border-primary/60 hover:bg-primary/10 gap-1.5"
                        nativeButton={false}
                        render={
                          <Link
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          />
                        }
                      >
                        GitHub
                        <ArrowUpRightIcon className="size-3.5" />
                      </Button>
                      {project.liveUrl && (
                        <Button
                          size="sm"
                          className="flex-1 gap-1.5"
                          nativeButton={false}
                          render={
                            <Link
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                            />
                          }
                        >
                          Live Demo
                          <ArrowUpRightIcon className="size-3.5" />
                        </Button>
                      )}
                    </div>
                  </CardFooter>
                </Card>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </AnimatedSection>
  );
}
