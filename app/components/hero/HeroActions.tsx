import Link from "next/link";
import { Button } from "@/components/ui/button";

export function HeroActions() {
  return (
    <div className="mt-10 flex flex-wrap gap-4">
      <Button
        asChild
        className="
          h-12
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
        <Link href="#research">
          Read Research
        </Link>
      </Button>

      <Button
        variant="outline"
        asChild
        className="
          h-12
          rounded-xl
          border-white/10
          bg-transparent
          px-6
          transition-all
          duration-200
          hover:bg-white/5
        "
      >
        <Link
          href="https://github.com/Tanishq-mellu"
          target="_blank"
        >
          View GitHub
        </Link>
      </Button>
    </div>
  );
}