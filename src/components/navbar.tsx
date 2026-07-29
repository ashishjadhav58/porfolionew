"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { MenuIcon } from "lucide-react";
import { navLinks, personalInfo } from "@/lib/data";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { ThemeToggle } from "@/components/theme-toggle";
import { NavbarBitmoji } from "@/components/navbar-bitmoji";
import { ResumeDownloadButton } from "@/components/resume-download-button";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border/50 bg-background/80 backdrop-blur-xl"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="#"
          className="group flex items-center gap-2.5 transition-opacity hover:opacity-90"
        >
          <NavbarBitmoji />
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Button
              key={link.href}
              variant="ghost"
              size="sm"
              nativeButton={false}
              render={
                <Link href={link.href} className="text-muted-foreground hover:text-foreground" />
              }
            >
              {link.label}
            </Button>
          ))}
          <Separator orientation="vertical" className="mx-2 h-5" />
          <ThemeToggle />
          <Button
            size="sm"
            nativeButton={false}
            render={
              <Link
                href={`mailto:${personalInfo.email}`}
                target="_blank"
                rel="noopener noreferrer"
              />
            }
          >
            Get in touch
          </Button>
        </div>

        <div className="flex items-center gap-1 md:hidden">
          <ThemeToggle />
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              render={
                <Button variant="ghost" size="icon" className="md:hidden" />
              }
            >
              <MenuIcon />
              <span className="sr-only">Open menu</span>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-xs border-border/60">
              <SheetHeader>
                <SheetTitle className="text-left">{personalInfo.name}</SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-1 px-4">
                {navLinks.map((link) => (
                  <Button
                    key={link.href}
                    variant="ghost"
                    className="justify-start"
                    nativeButton={false}
                    render={<Link href={link.href} onClick={() => setOpen(false)} />}
                  >
                    {link.label}
                  </Button>
                ))}
                <Separator className="my-3" />
                <ResumeDownloadButton size="default" label="Download Resume" />
                <Button
                  nativeButton={false}
                  render={
                    <Link
                      href={`mailto:${personalInfo.email}`}
                      onClick={() => setOpen(false)}
                    />
                  }
                >
                  Get in touch
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
