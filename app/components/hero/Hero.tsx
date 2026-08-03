import { HeroActions } from "./HeroActions";
import { HeroBadge } from "./HeroBadge";
import { HeroDescription } from "./HeroDescription";
import { HeroHeading } from "./HeroHeading";

export function Hero() {
  return (
    <section
      className="
        container-page
        flex
        min-h-screen
        flex-col
        justify-center
      "
    >
      <HeroBadge />

      <HeroHeading />

      <HeroDescription />

      <HeroActions />
    </section>
  );
}