"use client";

import {
  BrainCircuitIcon,
  CloudIcon,
  Code2Icon,
  CpuIcon,
  DatabaseIcon,
  LayersIcon,
  LightbulbIcon,
  PlugIcon,
} from "lucide-react";
import { skills } from "@/lib/data";
import { AnimatedSection } from "@/components/animated-section";
import { SectionHeader } from "@/components/section-header";
import { SkillCard } from "@/components/skill-card";

const skillCategories = [
  {
    title: "Languages",
    icon: Code2Icon,
    items: skills.languages,
  },
  {
    title: "Frontend",
    icon: LayersIcon,
    items: skills.frontend,
  },
  {
    title: "Backend",
    icon: CpuIcon,
    items: skills.backend,
  },
  {
    title: "Databases",
    icon: DatabaseIcon,
    items: skills.databases,
  },
  {
    title: "Cloud & DevOps",
    icon: CloudIcon,
    items: skills.cloudDevops,
  },
  {
    title: "System Design",
    icon: BrainCircuitIcon,
    items: skills.systemDesign,
  },
  {
    title: "Testing & Tools",
    icon: PlugIcon,
    items: skills.testingTools,
  },
  {
    title: "Core CS",
    icon: LightbulbIcon,
    items: skills.coreCs,
  },
] as const;

export function Skills() {
  return (
    <AnimatedSection id="skills" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Skills"
          title="Technical toolkit"
          description="Hover over each card to explore the technologies and concepts I work with."
        />

        <div className="grid auto-rows-fr grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {skillCategories.map((category, index) => (
            <SkillCard
              key={category.title}
              title={category.title}
              icon={category.icon}
              items={category.items}
              index={index}
            />
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
