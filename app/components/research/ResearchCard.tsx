import { Badge } from "@/components/ui/badge";

type ResearchCardProps = {
  title: string;
  status: string;
  description: string;
  tags: string[];
};

export function ResearchCard({
  title,
  status,
  description,
  tags,
}: ResearchCardProps) {
  return (
    <article
      className="
        rounded-2xl
        border
        border-white/10
        bg-white/[0.03]
        p-8
        transition-all
        duration-300
        hover:border-[#65FF9A]/40
        hover:bg-white/[0.05]
      "
    >
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-semibold">
          {title}
        </h3>

        <Badge>{status}</Badge>
      </div>

      <p className="mt-5 text-foreground/70 leading-7">
        {description}
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <Badge
            key={tag}
            variant="secondary"
          >
            {tag}
          </Badge>
        ))}
      </div>
    </article>
  );
}