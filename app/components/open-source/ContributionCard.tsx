import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight } from "lucide-react";

type ContributionCardProps = {
  project: string;
  role: string;
  description: string;
  technologies: string[];
  github: string;
};

export function ContributionCard({
  project,
  role,
  description,
  technologies,
  github,
}: ContributionCardProps) {
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
        <div>
          <h3 className="text-2xl font-semibold">{project}</h3>
          <p className="mt-1 text-sm text-[#65FF9A]">{role}</p>
        </div>

        <Link
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-foreground/60 hover:text-[#65FF9A]"
        >
          <ArrowUpRight className="h-5 w-5" />
        </Link>
      </div>

      <p className="mt-6 leading-7 text-foreground/70">
        {description}
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <Badge key={tech} variant="secondary">
            {tech}
          </Badge>
        ))}
      </div>
    </article>
  );
}