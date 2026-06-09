type FAQItemProps = {
  question: string;
  answer: string;
};

export function FAQItem({ question, answer }: FAQItemProps) {
  return (
    <details className="group rounded-sm border border-rice-linen bg-white p-5">
      <summary className="cursor-pointer list-none font-semibold text-rice-charcoal">
        <span className="mr-3 text-rice-leaf">Q.</span>
        {question}
      </summary>
      <p className="mt-4 border-t border-rice-linen pt-4 text-sm leading-7 text-rice-muted">
        <span className="mr-3 font-semibold text-rice-gold">A.</span>
        {answer}
      </p>
    </details>
  );
}
