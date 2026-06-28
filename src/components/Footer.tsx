import { Instagram, Facebook, MapPin, Phone } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";
import { defaultSettings } from "@/lib/mockData";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0a0a0a] mt-20">
      <div className="mx-auto max-w-7xl px-6 py-14 grid gap-10 md:grid-cols-4">
        <div className="space-y-4">
          <Logo size="md" />
          <p className="text-sm text-white/60 max-w-xs">
            A women-focused fitness space in Jordan. Train strong, feel confident.
          </p>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
            Quick Links
          </h4>
          <ul className="space-y-2 text-sm text-white/60">
            <li>
              <a href="#about" className="hover:text-pink-hot">
                About
              </a>
            </li>
            <li>
              <a href="#gallery" className="hover:text-pink-hot">
                Gallery
              </a>
            </li>
            <li>
              <a href="#menu" className="hover:text-pink-hot">
                Menu
              </a>
            </li>
            <li>
              <a href="#classes" className="hover:text-pink-hot">
                Classes
              </a>
            </li>
            <li>
              <Link to="/admin" className="hover:text-pink-hot">
                Admin Preview
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
            Visit Us
          </h4>
          <ul className="space-y-3 text-sm text-white/60">
            <li className="flex items-start gap-2">
              <MapPin size={16} className="mt-0.5 text-pink-hot" />
              {defaultSettings.address}
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} className="text-pink-hot" />
              <span dir="ltr" className="font-mono text-left">
                {defaultSettings.phone}
              </span>
            </li>
            <li>
              <a
                href={defaultSettings.mapsLink}
                target="_blank"
                rel="noreferrer"
                className="text-pink-hot hover:underline"
              >
                Open in Google Maps
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Follow</h4>
          <div className="flex gap-3">
            <a
              href={defaultSettings.instagram}
              target="_blank"
              rel="noreferrer"
              className="h-10 w-10 grid place-items-center rounded-full border border-white/15 hover:bg-gradient-pink hover:border-transparent transition"
            >
              <Instagram size={18} />
            </a>
            <a
              href={defaultSettings.facebook}
              target="_blank"
              rel="noreferrer"
              className="h-10 w-10 grid place-items-center rounded-full border border-white/15 hover:bg-gradient-pink hover:border-transparent transition"
            >
              <Facebook size={18} />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-white/40">
        Demo website concept prepared for Miss Gym Fitness. © {new Date().getFullYear()}
      </div>
    </footer>
  );
}
