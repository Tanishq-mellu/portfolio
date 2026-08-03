import Link from "next/link";
import { Button } from "@/components/ui/button";

export function HeroActions() {
  return (
    <div className="mt-10 flex flex-wrap gap-4">
      <Button asChild>
        <Link href="#research">
          Read Research
        </Link>
      </Button>

      <Button
        variant="outline"
        asChild
      >
        <Link href="https://github.com/Tanishq-mellu">
          View GitHub
        </Link>
      </Button>
    </div>
  );
}