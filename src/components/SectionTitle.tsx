type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export function SectionTitle({ eyebrow, title, description }: SectionTitleProps) {
  return (
    <div className="max-w-3xl">
      {eyebrow ? (
        <p className="mb-3 text-sm font-semibold tracking-[0.16em] text-rice-leaf">{eyebrow}</p>
      ) : null}
      <h2 className="font-serif text-3xl leading-tight text-rice-charcoal sm:text-4xl">{title}</h2>
      {description ? <p className="mt-4 text-base leading-8 text-rice-muted sm:text-lg">{description}</p> : null}
    </div>
  );
}
