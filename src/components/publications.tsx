"use client";

import Link from "next/link";
import { ArrowUpRightIcon, BookOpenIcon } from "lucide-react";
import { publications } from "@/lib/data";
import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from "@/components/animated-section";
import { SectionHeader } from "@/components/section-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function Publications() {
  return (
    <AnimatedSection id="publications" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Publications"
          title="Research & papers"
          description="Peer-reviewed work at the intersection of AI, remote sensing, and environmental monitoring."
        />

        <StaggerContainer className="grid gap-6">
          {publications.map((pub) => (
            <StaggerItem key={pub.doi}>
              <Link
                href={pub.paperUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <Card className="interactive-card border-border/50 bg-card/60 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1">
                  <CardHeader>
                    <CardAction>
                      <div className="flex size-9 items-center justify-center rounded-lg border border-primary/20 bg-primary/10 transition-colors group-hover:border-primary/40 group-hover:bg-primary/20">
                        <BookOpenIcon className="size-4 text-primary" />
                      </div>
                    </CardAction>
                    <div className="flex flex-wrap gap-2 pr-10">
                      <Badge variant="secondary">{pub.role}</Badge>
                      <Badge variant="outline">{pub.period}</Badge>
                    </div>
                    <CardTitle className="font-heading text-lg leading-snug transition-colors duration-300 group-hover:text-primary">
                      {pub.title}
                    </CardTitle>
                    <CardDescription>{pub.venue}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {pub.description}
                    </p>
                  </CardContent>
                  <CardFooter className="flex flex-col items-start gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <p className="font-mono text-xs text-muted-foreground">
                      DOI: {pub.doi}
                    </p>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-auto p-0 text-muted-foreground group-hover:text-primary"
                      tabIndex={-1}
                    >
                      Read paper
                      <ArrowUpRightIcon className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Button>
                  </CardFooter>
                </Card>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </AnimatedSection>
  );
}
