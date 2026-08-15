import { contributions } from "./open-source-data";
import { ContributionCard } from "./ContributionCard";
import { StatsCard } from "./StatsCard";

export function OpenSource() {
  return (
    <section
      id="opensource"
      className="container-page section"
    >
      <div className="mb-14">
        <p className="text-sm uppercase tracking-[0.3em] text-[#65FF9A]">
          Open Source
        </p>

        <h2 className="mt-4 text-5xl font-bold">
          Engineering Through Open Source
        </h2>

        <p className="mt-5 max-w-2xl text-lg text-foreground/70">
          Contributing to security, infrastructure, and
          open-source software projects across the ecosystem.
        </p>
      </div>

      <div className="mb-12 grid gap-6 md:grid-cols-3">
        <StatsCard value="30+" label="Contributions" />
        <StatsCard value="25+" label="Repositories" />
        <StatsCard value="10+" label="Merged PRs" />
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        {contributions.map((item) => (
          <ContributionCard
            key={item.project}
            {...item}
          />
        ))}
      </div>
    </section>
  );
}