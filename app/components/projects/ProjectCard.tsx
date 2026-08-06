import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

type ProjectCardProps = {
  title: string;
  description: string;
  stack: string[];
  github: string;
  demo: string;
  status: string;
};

export function ProjectCard({
  title,
  description,
  stack,
  github,
  demo,
  status,
}: ProjectCardProps) {
  return (
    <article className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 transition-all duration-300 hover:border-[#65FF9A]/40">
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
        <Button asChild>
          <Link href={github} target="_blank">
            GitHub
          </Link>
        </Button>

        <Button variant="outline" asChild>
          <Link href={demo} target="_blank">
            Live Demo
          </Link>
        </Button>
      </div>
    </article>
  );
}