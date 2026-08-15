import Link from "next/link";

export function Logo() {
  return (
    <Link
      href="/"
      className="font-mono text-sm font-semibold tracking-wide"
    >
      {">"} TANISHQ_MESHRAM
      <span className="animate-pulse text-[#65FF9A]">▋</span>
    </Link>
  );
}