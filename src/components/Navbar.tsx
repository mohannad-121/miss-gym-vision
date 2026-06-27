import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, LayoutDashboard, Languages } from "lucide-react";
import { Logo } from "./Logo";
import { useI18n } from "@/lib/i18n";

const linkKeys = [
  ["home", "#home"],
  ["about", "#about"],
  ["gallery", "#gallery"],
  ["menu", "#menu"],
  ["schedule", "#schedule"],
  ["classes", "#classes"],
  ["location", "#location"],
  ["contact", "#contact"],
] as const;

export function Navbar() {
  const { t, toggleLanguage } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    fn();
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? "border-b border-white/10 bg-background/75 backdrop-blur-xl" : "bg-transparent"}`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <a href="#home" className="shrink-0">
          <Logo size="md" />
        </a>

        <nav className="hidden items-center gap-6 lg:flex">
          {linkKeys.map(([key, href]) => (
            <a
              key={href}
              href={href}
              className="relative text-sm font-medium text-white/80 transition-colors after:absolute after:bottom-[-6px] after:left-0 after:h-[2px] after:w-0 after:bg-gradient-pink after:transition-all hover:text-white hover:after:w-full"
            >
              {t.nav[key]}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-2 rounded-full border border-white/15 px-3 py-2 text-sm font-semibold text-white/80 transition hover:border-pink-hot/50 hover:text-white"
          >
            <Languages size={16} /> {t.nav.switch}
          </button>
          <Link
            to="/admin"
            className="flex items-center gap-2 rounded-full border border-white/15 px-3 py-2 text-sm text-white/70 transition hover:border-pink-hot/50 hover:text-white"
          >
            <LayoutDashboard size={16} /> {t.nav.admin}
          </Link>
          <a
            href="#classes"
            className="rounded-full bg-gradient-pink px-5 py-2.5 text-sm font-semibold text-white glow-pink transition-transform hover:scale-105"
          >
            {t.nav.bookNow}
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="p-2 text-white lg:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="space-y-4 border-t border-white/10 px-6 py-6 glass animate-fade-up lg:hidden">
          {linkKeys.map(([key, href]) => (
            <a
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="block py-1 text-white/80 hover:text-white"
            >
              {t.nav[key]}
            </a>
          ))}
          <button onClick={toggleLanguage} className="flex items-center gap-2 py-1 text-white/80">
            <Languages size={16} /> {t.nav.switch}
          </button>
          <Link
            to="/admin"
            onClick={() => setOpen(false)}
            className="flex items-center gap-2 py-1 text-white/80"
          >
            <LayoutDashboard size={16} /> {t.nav.adminPreview}
          </Link>
          <a
            href="#classes"
            onClick={() => setOpen(false)}
            className="block rounded-full bg-gradient-pink px-5 py-3 text-center font-semibold text-white"
          >
            {t.nav.bookNow}
          </a>
        </div>
      )}
    </header>
  );
}
