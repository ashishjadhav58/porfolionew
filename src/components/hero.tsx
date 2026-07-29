"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowDownIcon, ArrowUpRightIcon, MailIcon } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { personalInfo, stats } from "@/lib/data";
import { FadeIn } from "@/components/animated-section";
import { LiveClock } from "@/components/live-clock";
import { ResumeDownloadButton } from "@/components/resume-download-button";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-16">
      <div className="pointer-events-none absolute inset-0">
        <div className="animate-pulse-glow absolute -top-32 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-primary/15 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-[420px] w-[420px] rounded-full bg-primary/8 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.12] dark:opacity-[0.18]"
          style={{
            backgroundImage:
              "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <FadeIn>
          <Badge
            variant="outline"
            className="mb-6 gap-2 border-primary/30 bg-primary/10 px-3 py-1.5 text-primary"
          >
            <span className="relative flex size-2 shrink-0">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-green-500 opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.8)]" />
            </span>
            Available for Software Engineering roles
          </Badge>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="flex flex-col gap-3 sm:gap-4">
            <h1 className="max-w-4xl font-heading text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Hi, I&apos;m{" "}
              <span className="text-gradient">{personalInfo.name}</span>
            </h1>
            <LiveClock />
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="mt-4 font-heading text-xl font-medium text-primary sm:text-2xl">
            {personalInfo.title}
          </p>
        </FadeIn>

        <FadeIn delay={0.3}>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {personalInfo.tagline}
          </p>
        </FadeIn>

        <FadeIn delay={0.4}>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button
              size="lg"
              className="shadow-[0_0_24px_var(--glow)] transition-shadow hover:shadow-[0_0_32px_var(--glow)]"
              nativeButton={false}
              render={<Link href="#projects" />}
            >
              View Projects
              <ArrowDownIcon />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-primary/30 hover:border-primary/60 hover:bg-primary/10"
              nativeButton={false}
              render={
                <Link
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                />
              }
            >
              GitHub
              <ArrowUpRightIcon />
            </Button>
            <ResumeDownloadButton />
          </div>
        </FadeIn>

        <FadeIn delay={0.5}>
          <TooltipProvider>
            <div className="mt-8 flex flex-wrap items-center gap-2">
              <HoverCard>
                <HoverCardTrigger
                  delay={200}
                  closeDelay={100}
                  render={
                    <Button
                      variant="ghost"
                      size="icon"
                      className="hover:bg-primary/10 hover:text-primary"
                      nativeButton={false}
                      render={
                        <Link
                          href={personalInfo.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        />
                      }
                    />
                  }
                >
                  <FaGithub />
                </HoverCardTrigger>
                <HoverCardContent className="border-primary/20">
                  <p className="font-medium">GitHub</p>
                  <p className="text-muted-foreground">
                    @{personalInfo.githubUsername}
                  </p>
                </HoverCardContent>
              </HoverCard>

              <HoverCard>
                <HoverCardTrigger
                  delay={200}
                  closeDelay={100}
                  render={
                    <Button
                      variant="ghost"
                      size="icon"
                      className="hover:bg-primary/10 hover:text-primary"
                      nativeButton={false}
                      render={
                        <Link
                          href={personalInfo.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                        />
                      }
                    />
                  }
                >
                  <FaLinkedin />
                </HoverCardTrigger>
                <HoverCardContent className="border-primary/20">
                  <p className="font-medium">LinkedIn</p>
                  <p className="text-muted-foreground">
                    {personalInfo.linkedin.replace("https://", "")}
                  </p>
                </HoverCardContent>
              </HoverCard>

              <Tooltip>
                <TooltipTrigger
                  delay={200}
                  render={
                    <Button
                      variant="ghost"
                      size="icon"
                      className="hover:bg-primary/10 hover:text-primary"
                      nativeButton={false}
                      render={<Link href={`mailto:${personalInfo.email}`} />}
                    />
                  }
                >
                  <MailIcon />
                </TooltipTrigger>
                <TooltipContent>{personalInfo.email}</TooltipContent>
              </Tooltip>
            </div>
          </TooltipProvider>
        </FadeIn>

        <FadeIn delay={0.6}>
          <div className="mt-16 flex flex-nowrap gap-2 overflow-x-auto pb-1 sm:gap-3 lg:overflow-visible [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                className="min-w-[6.5rem] flex-1 shrink-0 sm:min-w-[7rem]"
                whileHover={{ y: -4, scale: 1.03 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
              >
                <Card className="interactive-card h-full border-border/50 bg-card/60 backdrop-blur-sm">
                  <CardContent className="flex h-full min-h-[88px] flex-col justify-center px-3 py-4 sm:min-h-[96px] sm:px-4">
                    <p className="font-heading text-xl font-bold tracking-tight text-primary sm:text-2xl">
                      {stat.value}
                    </p>
                    <p className="mt-1 line-clamp-2 text-[10px] leading-tight text-muted-foreground sm:text-xs">
                      {stat.label}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.7}>
          <div className="mt-16 flex justify-center">
            <Button
              variant="ghost"
              size="icon"
              className="animate-bounce rounded-full text-primary hover:bg-primary/10"
              nativeButton={false}
              render={<Link href="#about" aria-label="Scroll to about section" />}
            >
              <ArrowDownIcon className="size-5" />
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
