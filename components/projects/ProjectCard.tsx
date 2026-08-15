import Link from "next/link";
import { Badge } from "@/components/ui/badge";

type ProjectCardProps = {
  title: string;
  description: string;
  stack: string[];
  github: string;
  status: string;
};

export function ProjectCard({
  title,
  description,
  stack,
  github,
  status,
}: ProjectCardProps) {
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
      "
    >
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-semibold">{title}</h3>
        <Badge>{status}</Badge>
      </div>

      <p className="mt-5 leading-7 text-foreground/70">
        {description}
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {stack.map((item) => (
          <Badge key={item} variant="secondary">
            {item}
          </Badge>
        ))}
      </div>

      <div className="mt-8 flex gap-3">
        <Link
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-flex
            h-9
            items-center
            justify-center
            rounded-lg
            bg-primary
            px-3
            text-sm
            font-medium
            text-primary-foreground
            transition-colors
            hover:bg-primary/80
          "
        >
          GitHub
        </Link>
      </div>
    </article>
  );
}