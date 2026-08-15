import Link from "next/link";

export function HeroActions() {
  return (
    <div className="mt-10 flex flex-wrap gap-4">
      <Link
        href="#projects"
        className="
          inline-flex
          h-12
          items-center
          justify-center
          rounded-xl
          bg-[#65FF9A]
          px-6
          font-medium
          text-[#08120F]
          transition-all
          duration-200
          hover:brightness-110
        "
      >
        View Projects
      </Link>

      <Link
        href="https://github.com/Tanishq-mellu"
        target="_blank"
        rel="noopener noreferrer"
        className="
          inline-flex
          h-12
          items-center
          justify-center
          rounded-xl
          border
          border-white/10
          bg-transparent
          px-6
          transition-all
          duration-200
          hover:bg-white/5
        "
      >
        View GitHub
      </Link>
    </div>
  );
}