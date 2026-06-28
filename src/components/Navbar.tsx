import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, LayoutDashboard, Languages } from "lucide-react";
import { Logo } from "./Logo";
import { useLanguage } from "@/lib/language";

const links = [
  { label: "Home", ar: "الرئيسية", href: "#home" },
  { label: "About", ar: "عن النادي", href: "#about" },
  { label: "Subscriptions", ar: "الاشتراكات", href: "#subscriptions" },
  { label: "Gallery", ar: "الصور", href: "#gallery" },
  { label: "Menu", ar: "المنيو", href: "#menu" },
  { label: "Classes", ar: "الحصص", href: "#classes" },
  { label: "Location", ar: "الموقع", href: "#location" },
  { label: "Contact", ar: "تواصل", href: "#contact" },
];

export function Navbar() {
  const { text, toggleLanguage } = useLanguage();
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
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "backdrop-blur-xl bg-background/70 border-b border-white/10" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        <a href="#home" className="shrink-0">
          <Logo size="md" />
        </a>

        <nav className="hidden lg:flex items-center gap-7">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-white/80 hover:text-white transition-colors font-medium relative after:absolute after:bottom-[-6px] after:left-0 after:h-[2px] after:w-0 after:bg-gradient-pink after:transition-all hover:after:w-full"
            >
              {text(l.label, l.ar)}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-2 text-sm text-white/70 hover:text-white px-3 py-2 rounded-full border border-white/15 hover:border-pink-hot/50 transition"
          >
            <Languages size={16} /> {text("العربية", "English")}
          </button>
          <Link
            to="/admin"
            className="flex items-center gap-2 text-sm text-white/70 hover:text-white px-3 py-2 rounded-full border border-white/15 hover:border-pink-hot/50 transition"
          >
            <LayoutDashboard size={16} /> {text("Admin", "الإدارة")}
          </Link>
          <a
            href="#classes"
            className="bg-gradient-pink text-white font-semibold text-sm px-5 py-2.5 rounded-full glow-pink hover:scale-105 transition-transform"
          >
            {text("Book Now", "احجزي الآن")}
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-white p-2"
          aria-label="Toggle menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden glass border-t border-white/10 px-6 py-6 space-y-4 animate-fade-up">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block text-white/80 hover:text-white py-1"
            >
              {text(l.label, l.ar)}
            </a>
          ))}
          <button onClick={toggleLanguage} className="flex items-center gap-2 text-white/80 py-1">
            <Languages size={16} /> {text("العربية", "English")}
          </button>
          <Link
            to="/admin"
            onClick={() => setOpen(false)}
            className="flex items-center gap-2 text-white/80 py-1"
          >
            <LayoutDashboard size={16} /> {text("Admin Preview", "معاينة الإدارة")}
          </Link>
          <a
            href="#classes"
            onClick={() => setOpen(false)}
            className="block text-center bg-gradient-pink text-white font-semibold px-5 py-3 rounded-full"
          >
            {text("Book Now", "احجزي الآن")}
          </a>
        </div>
      )}
    </header>
  );
}
