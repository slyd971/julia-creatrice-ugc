import { quote } from "@/content/site";

export function Quote() {
  return (
    <section className="pull-quote">
      <div className="wrap">
        <blockquote>{quote.text}</blockquote>
      </div>
    </section>
  );
}
