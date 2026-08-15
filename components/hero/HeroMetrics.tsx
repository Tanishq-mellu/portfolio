type Metric = {
  value: string;
  label: string;
};

const metrics: Metric[] = [
  {
    value: "2+",
    label: "Research Projects",
  },
  {
    value: "15+",
    label: "Open Source Contributions",
  },
  {
    value: "1",
    label: "Patent",
  },
];

export function HeroMetrics() {
  return (
    <div className="mt-16 flex flex-wrap gap-12">
      {metrics.map((metric) => (
        <div key={metric.label}>
          <p className="font-mono text-3xl text-[#65FF9A]">
            {metric.value}
          </p>

          <p className="mt-2 text-sm text-foreground/60">
            {metric.label}
          </p>
        </div>
      ))}
    </div>
  );
}