import { ArrowDown } from "lucide-react";

export function ScrollIndicator() {
  return (
    <div className="mt-20 flex items-center gap-2 text-sm text-foreground/50">
      <ArrowDown className="h-4 w-4 animate-bounce" />
      <span>Scroll to explore</span>
    </div>
  );
}