"use client";

import { education } from "@/lib/data";
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
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function Education() {
  return (
    <AnimatedSection id="education" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Education"
          title="Academic background"
          description="Strong foundation in computer engineering with consistent academic performance."
        />

        <StaggerContainer className="grid gap-6 lg:grid-cols-2">
          {education.map((edu) => (
            <StaggerItem key={edu.institution}>
              <Card className="interactive-card h-full border-border/50 bg-card/60 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <CardTitle className="font-heading text-base leading-snug">
                      {edu.institution}
                    </CardTitle>
                    <Badge variant="outline">{edu.period}</Badge>
                  </div>
                  <CardDescription>{edu.location}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="font-medium">{edu.degree}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{edu.score}</p>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </AnimatedSection>
  );
}
