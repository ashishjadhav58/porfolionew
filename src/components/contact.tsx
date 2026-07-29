"use client";

import Link from "next/link";
import { MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { personalInfo } from "@/lib/data";
import { AnimatedSection } from "@/components/animated-section";
import { SectionHeader } from "@/components/section-header";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const contactLinks = [
  {
    icon: MailIcon,
    label: "Email",
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
  },
  {
    icon: PhoneIcon,
    label: "Phone",
    value: personalInfo.phone,
    href: `tel:${personalInfo.phone.replace(/\s/g, "")}`,
  },
  {
    icon: MapPinIcon,
    label: "Location",
    value: personalInfo.location,
    href: null,
  },
  {
    icon: FaGithub,
    label: "GitHub",
    value: `@${personalInfo.githubUsername}`,
    href: personalInfo.github,
  },
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    value: personalInfo.linkedin.replace("https://", ""),
    href: personalInfo.linkedin,
  },
] as const;

export function Contact() {
  return (
    <AnimatedSection id="contact" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Contact"
          title="Let's build something together"
          description="Open to software engineering opportunities. Reach out — I'd love to connect."
        />

        <div className="grid gap-6 lg:grid-cols-[1fr_1.2fr]">
          <Card className="interactive-card border-border/50 bg-card/60 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="font-heading text-base">Get in touch</CardTitle>
              <CardDescription>
                Prefer email? I typically respond within 24 hours.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button
                className="w-full shadow-[0_0_20px_var(--glow)]"
                size="lg"
                nativeButton={false}
                render={
                  <Link href={`mailto:${personalInfo.email}`} />
                }
              >
                <MailIcon />
                Send an email
              </Button>
              <Button
                variant="outline"
                className="w-full border-primary/30 hover:border-primary/60 hover:bg-primary/10"
                size="lg"
                nativeButton={false}
                render={
                  <Link
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  />
                }
              >
                <FaLinkedin />
                Connect on LinkedIn
              </Button>
            </CardContent>
          </Card>

          <Card className="interactive-card border-border/50 bg-card/60 backdrop-blur-sm">
            <CardContent className="divide-y divide-border/40 pt-6">
              {contactLinks.map((link) => (
                <div
                  key={link.label}
                  className="flex items-center gap-4 py-4 first:pt-0 last:pb-0 transition-colors hover:bg-primary/5 rounded-lg px-2 -mx-2"
                >
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-primary/20 bg-primary/10">
                    <link.icon className="size-4 text-primary" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs uppercase tracking-wider text-muted-foreground">
                      {link.label}
                    </p>
                    {link.href ? (
                      <Link
                        href={link.href}
                        target={link.href.startsWith("http") ? "_blank" : undefined}
                        rel={
                          link.href.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
                        className="mt-0.5 block truncate text-sm font-medium transition-colors hover:text-primary"
                      >
                        {link.value}
                      </Link>
                    ) : (
                      <p className="mt-0.5 text-sm font-medium">{link.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </AnimatedSection>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border/40 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:px-6 lg:px-8">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <Link
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            GitHub
          </Link>
          <Separator orientation="vertical" className="h-4" />
          <Link
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            LinkedIn
          </Link>
          <Separator orientation="vertical" className="h-4" />
          <Link
            href={`mailto:${personalInfo.email}`}
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Email
          </Link>
        </div>
      </div>
    </footer>
  );
}
