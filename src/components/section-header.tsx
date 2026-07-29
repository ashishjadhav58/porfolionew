import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";

type SectionHeaderProps = {
  label: string;
  title: string;
  description?: string;
  className?: string;
};

export function SectionHeader({
  label,
  title,
  description,
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn("mb-10 md:mb-14", className)}>
      <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-primary">
        {label}
      </p>
      <h2 className="font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
          {description}
        </p>
      )}
      <Separator className="mt-6 bg-gradient-to-r from-primary/60 via-primary/20 to-transparent" />
    </div>
  );
}
