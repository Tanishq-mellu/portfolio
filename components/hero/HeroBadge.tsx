export function HeroBadge() {
  return (
    <div
      className="
        inline-flex
        items-center
        gap-2
        rounded-full
        border
        border-white/10
        bg-white/5
        px-4
        py-2
        text-sm
        font-medium
        text-[#65FF9A]
        backdrop-blur-md
      "
    >
      <span className="h-2 w-2 rounded-full bg-[#65FF9A]" />

      Systems Engineering · Cybersecurity · Research
    </div>
  );
}