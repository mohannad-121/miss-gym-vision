import { Instagram, MapPin, Phone, Clock } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";
import { defaultSettings } from "@/lib/mockData";
import { useI18n } from "@/lib/i18n";

export function Footer() {
  const { t } = useI18n();
  return (
    <footer className="mt-20 border-t border-white/10 bg-[#0a0a0a]">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-4">
        <div className="space-y-4">
          <Logo size="md" />
          <p className="max-w-xs text-sm leading-6 text-white/60">{t.footer.text}</p>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
            {t.footer.links}
          </h4>
          <ul className="space-y-2 text-sm text-white/60">
            <li>
              <a href="#about" className="hover:text-pink-hot">
                {t.nav.about}
              </a>
            </li>
            <li>
              <a href="#gallery" className="hover:text-pink-hot">
                {t.nav.gallery}
              </a>
            </li>
            <li>
              <a href="#menu" className="hover:text-pink-hot">
                {t.nav.menu}
              </a>
            </li>
            <li>
              <a href="#schedule" className="hover:text-pink-hot">
                {t.nav.schedule}
              </a>
            </li>
            <li>
              <a href="#classes" className="hover:text-pink-hot">
                {t.nav.classes}
              </a>
            </li>
            <li>
              <Link to="/admin" className="hover:text-pink-hot">
                {t.nav.adminPreview}
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
            {t.footer.visit}
          </h4>
          <ul className="space-y-3 text-sm text-white/60">
            <li className="flex items-start gap-2">
              <MapPin size={16} className="mt-0.5 text-pink-hot" /> {defaultSettings.address}
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} className="text-pink-hot" /> {defaultSettings.phone}
            </li>
            <li className="flex items-center gap-2">
              <Clock size={16} className="text-pink-hot" /> {defaultSettings.hours}
            </li>
            <li>
              <a
                href={defaultSettings.mapsLink}
                target="_blank"
                rel="noreferrer"
                className="text-pink-hot hover:underline"
              >
                {t.location.mapLink}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
            {t.footer.follow}
          </h4>
          <a
            href={defaultSettings.instagram}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-white/80 transition hover:border-transparent hover:bg-gradient-pink hover:text-white"
          >
            <Instagram size={18} /> @missgymjo
          </a>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-white/40">
        {t.footer.copyright} © {new Date().getFullYear()}
      </div>
    </footer>
  );
}
