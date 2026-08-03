import Link from "next/link";
import { Github, Linkedin } from "lucide-react";

export function SocialLinks() {
  return (
    <div className="flex items-center gap-2">
      <Link
        href="https://github.com/Tanishq-mellu"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
        className="
          rounded-lg
          p-2
          text-foreground/70
          transition-all
          duration-200
          hover:bg-white/5
          hover:text-foreground
        "
      >
        <Github className="h-4 w-4" />
      </Link>

      <Link
        href="https://linkedin.com/in/YOUR-LINKEDIN"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className="
          rounded-lg
          p-2
          text-foreground/70
          transition-all
          duration-200
          hover:bg-white/5
          hover:text-foreground
        "
      >
        <Linkedin className="h-4 w-4" />
      </Link>
    </div>
  );
}