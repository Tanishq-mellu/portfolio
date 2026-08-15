type TimelineItemProps = {
  year: string;
  title: string;
  description: string;
};

export function TimelineItem({
  year,
  title,
  description,
}: TimelineItemProps) {
  return (
    <div className="relative border-l border-white/10 pb-10 pl-6">
      <span className="absolute -left-2 top-1 h-4 w-4 rounded-full bg-[#65FF9A]" />

      <p className="font-mono text-[#65FF9A]">
        {year}
      </p>

      <h3 className="mt-2 text-xl font-semibold">
        {title}
      </h3>

      <p className="mt-3 leading-7 text-foreground/70">
        {description}
      </p>
    </div>
  );
}