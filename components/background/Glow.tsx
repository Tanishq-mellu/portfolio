export function Glow() {
  return (
    <div
      className="
        absolute
        inset-0
        pointer-events-none
      "
    >
      <div
        className="
          absolute
          left-1/2
          top-40
          h-[600px]
          w-[600px]
          -translate-x-1/2
          rounded-full
          bg-[#65FF9A]/5
          blur-3xl
        "
      />
    </div>
  );
}