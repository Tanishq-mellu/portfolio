import { publications } from "./publications-data";
import { PublicationCard } from "./PublicationCard";

export function Publications() {
  return (
    <section
      id="publications"
      className="container-page section"
    >
      <div className="mb-14">
        <p className="text-sm uppercase tracking-[0.3em] text-[#65FF9A]">
          Publications
        </p>

        <h2 className="mt-4 text-5xl font-bold">
          Research Publications
        </h2>

        <p className="mt-5 max-w-2xl text-lg text-foreground/70">
          Technical work spanning secure systems engineering,
          quantum cryptography, and cybersecurity.
        </p>
      </div>

      <div className="grid gap-8">
        {publications.map((publication) => (
          <PublicationCard
            key={publication.title}
            {...publication}
          />
        ))}
      </div>
    </section>
  );
}