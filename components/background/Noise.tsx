export function Noise() {
  return (
    <div
      aria-hidden="true"
      className="
        absolute
        inset-0
        opacity-[0.025]
        pointer-events-none
      "
      style={{
        backgroundImage:
          "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)",
        backgroundSize: "18px 18px",
      }}
    />
  );
}