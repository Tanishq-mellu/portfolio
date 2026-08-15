import { Logo } from "./Logo";
import { NavLinks } from "./NavLinks";
import { SocialLinks } from "./SocialLinks";

export function Navbar() {
  return (
    <header
      className="
        sticky
        top-0
        z-50
        border-b
        border-white/5
        bg-background/70
        backdrop-blur-xl
      "
    >
      <div className="container-page flex h-16 items-center justify-between">
        <Logo />

        <div className="hidden lg:block">
          <NavLinks />
        </div>

        <SocialLinks />
      </div>
    </header>
  );
}