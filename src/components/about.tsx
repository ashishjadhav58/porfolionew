"use client";

import { personalInfo } from "@/lib/data";
import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from "@/components/animated-section";
import { SectionHeader } from "@/components/section-header";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function About() {
  return (
    <AnimatedSection id="about" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="About"
          title="Engineering scalable systems end-to-end"
          description="From distributed backends to polished frontends — I ship production-ready software."
        />

        <StaggerContainer className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <StaggerItem>
            <Card className="interactive-card h-full border-border/50 bg-card/60 backdrop-blur-sm">
              <CardContent className="pt-6">
                <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                  {personalInfo.summary}
                </p>
              </CardContent>
            </Card>
          </StaggerItem>

          <StaggerItem>
            <Card className="interactive-card h-full border-border/50 bg-card/60 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="font-heading text-base">Quick Facts</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">
                    Location
                  </p>
                  <p className="mt-1 font-medium">{personalInfo.location}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">
                    Education
                  </p>
                  <p className="mt-1 font-medium">
                    B.E. Computer Engineering, 2026
                  </p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">
                    Focus
                  </p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {["Full-Stack", "Cloud", "Distributed Systems"].map((tag) => (
                      <Badge key={tag} variant="outline" className="border-primary/20 bg-primary/5 text-primary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </AnimatedSection>
  );
}
