import { research } from "./research-data";
import { ResearchCard } from "./ResearchCard";

export function Research() {
  return (
    <section
      id="research"
      className="container-page section"
    >
      <div className="mb-14">
        <p className="text-sm uppercase tracking-[0.3em] text-[#65FF9A]">
          Research
        </p>

        <h2 className="mt-4 text-5xl font-bold">
          Current Research
        </h2>

        <p className="mt-5 max-w-2xl text-lg text-foreground/70">
          Exploring secure communication systems,
          quantum cryptography, distributed systems,
          and resilient software engineering.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        {research.map((item) => (
          <ResearchCard
            key={item.title}
            {...item}
          />
        ))}
      </div>
    </section>
  );
}