type StatsCardProps = {
  value: string;
  label: string;
};

export function StatsCard({
  value,
  label,
}: StatsCardProps) {
  return (
    <div
      className="
        rounded-xl
        border
        border-white/10
        bg-white/[0.03]
        p-6
      "
    >
      <p className="font-mono text-4xl text-[#65FF9A]">
        {value}
      </p>

      <p className="mt-2 text-sm text-foreground/60">
        {label}
      </p>
    </div>
  );
}