import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Code2, FileText } from "lucide-react";

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
          <h3 className="text-2xl font-semibold">{title}</h3>

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
          <Badge key={keyword} variant="secondary">
            {keyword}
          </Badge>
        ))}
      </div>

      <div className="mt-8 flex gap-3">
        {pdf ? (
  <Link
    href={pdf}
    target="_blank"
    rel="noopener noreferrer"
    className="
      inline-flex
      h-9
      items-center
      justify-center
      gap-2
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
    <FileText className="h-4 w-4" aria-hidden="true" />
    PDF
  </Link>
) : (
  <button
    type="button"
    disabled
    className="
      inline-flex
      h-9
      items-center
      justify-center
      gap-2
      rounded-lg
      bg-primary
      px-3
      text-sm
      font-medium
      text-primary-foreground
      opacity-60
      cursor-not-allowed
    "
  >
    <FileText className="h-4 w-4" aria-hidden="true" />
    PDF — Coming Soon
  </button>
)}

        {code ? (
  <Link
    href={code}
    target="_blank"
    rel="noopener noreferrer"
    className="
      inline-flex
      h-9
      items-center
      justify-center
      gap-2
      rounded-lg
      border
      border-border
      bg-background
      px-3
      text-sm
      font-medium
      transition-colors
      hover:bg-muted
      hover:text-foreground
    "
  >
    <Code2 className="h-4 w-4" aria-hidden="true" />
    Code
  </Link>
) : (
  <button
    type="button"
    disabled
    className="
      inline-flex
      h-9
      items-center
      justify-center
      gap-2
      rounded-lg
      border
      border-border
      bg-background
      px-3
      text-sm
      font-medium
      opacity-60
      cursor-not-allowed
    "
  >
    <Code2 className="h-4 w-4" aria-hidden="true" />
    Code — Coming Soon
  </button>
)}
      </div>
    </article>
  );
}
