import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FileText, Github } from "lucide-react";

type PublicationCardProps = {
  title: string;
 venue: string;
  year: string;
  status: string;
  abstract: string;
  keywords: string[];
  pdf: string;
  code: string;
};

export function PublicationCard({
  title,
  venue,
  year,
  status,
  abstract,
  keywords,
  pdf,
  code,
}: PublicationCardProps) {
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
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-2xl font-semibold">
            {title}
          </h3>

          <p className="mt-2 text-sm text-[#65FF9A]">
            {venue} • {year}
          </p>
        </div>

        <Badge>{status}</Badge>
      </div>

      <p className="mt-6 leading-7 text-foreground/70">
        {abstract}
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {keywords.map((keyword) => (
          <Badge
            key={keyword}
            variant="secondary"
          >
            {keyword}
          </Badge>
        ))}
      </div>

      <div className="mt-8 flex gap-3">
        <Button asChild>
          <Link href={pdf} target="_blank">
            <FileText className="mr-2 h-4 w-4" />
            PDF
          </Link>
        </Button>

        <Button
          variant="outline"
          asChild
        >
          <Link href={code} target="_blank">
            <Github className="mr-2 h-4 w-4" />
            Code
          </Link>
        </Button>
      </div>
    </article>
  );
}