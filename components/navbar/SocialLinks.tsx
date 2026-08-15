import Link from "next/link";

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
          transition-colors
          duration-200
          hover:bg-white/5
          hover:text-[#65FF9A]
        "
      >
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          className="h-5 w-5 fill-current"
        >
          <path d="M12 2C6.477 2 2 6.477 2 12c0 4.419 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.866-.013-1.7-2.782.604-3.369-1.342-3.369-1.342-.455-1.157-1.11-1.465-1.11-1.465-.908-.621.069-.608.069-.608 1.004.071 1.532 1.031 1.532 1.031.892 1.529 2.341 1.087 2.91.832.091-.647.349-1.087.636-1.338-2.22-.253-4.555-1.111-4.555-4.943 0-1.091.39-1.984 1.029-2.682-.103-.253-.446-1.272.098-2.65 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0 1 12 6.844a9.58 9.58 0 0 1 2.504.337c1.909-1.294 2.748-1.025 2.748-1.025.546 1.378.203 2.397.1 2.65.64.698 1.028 1.591 1.028 2.682 0 3.841-2.339 4.687-4.566 4.936.359.309.678.919.678 1.852 0 1.337-.012 2.415-.012 2.744 0 .267.18.578.688.48A10.001 10.001 0 0 0 22 12c0-5.523-4.477-10-10-10Z" />
        </svg>
      </Link>

      <Link
        href="https://www.linkedin.com/in/tanishqmeshram/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className="
          rounded-lg
          p-2
          text-foreground/70
          transition-colors
          duration-200
          hover:bg-white/5
          hover:text-[#65FF9A]
        "
      >
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          className="h-5 w-5 fill-current"
        >
          <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V8.99h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.38 4.28 5.48v6.27ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM3.56 20.45h3.57V8.99H3.56v11.46ZM22.22 0H1.78C.8 0 0 .78 0 1.74v20.52C0 23.22.8 24 1.78 24h20.44c.98 0 1.78-.78 1.78-1.74V1.74C24 .78 23.2 0 22.22 0Z" />
        </svg>
      </Link>
    </div>
  );
}