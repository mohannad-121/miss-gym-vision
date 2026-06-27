// Brand logo — text-based recreation inspired by Miss Gym Fitness identity.
export function Logo({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  const scale = size === "lg" ? "text-3xl" : size === "sm" ? "text-lg" : "text-2xl";
  const sub = size === "lg" ? "text-xs tracking-[0.5em]" : "text-[10px] tracking-[0.4em]";
  return (
    <div className="flex flex-col items-center leading-none select-none">
      <span className={`${scale} font-display font-black text-gradient-pink`}>
        MISS GYM
      </span>
      <span className={`${sub} text-pink-soft/80 font-semibold mt-0.5`}>
        FITNESS
      </span>
    </div>
  );
}
