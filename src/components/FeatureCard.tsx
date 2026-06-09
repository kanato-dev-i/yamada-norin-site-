import type { LucideIcon } from "lucide-react";

type FeatureCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <article className="rounded-sm border border-rice-linen bg-white p-6">
      <Icon className="h-8 w-8 text-rice-leaf" aria-hidden="true" />
      <h3 className="mt-6 font-serif text-2xl text-rice-charcoal">{title}</h3>
      <p className="mt-4 text-sm leading-7 text-rice-muted">{description}</p>
    </article>
  );
}
