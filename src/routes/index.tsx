import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "sonner";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat, DemoBadge } from "@/components/Floating";
import {
  Hero,
  About,
  Memberships,
  Gallery,
  Menu,
  Schedule,
  Classes,
  Location,
  Offers,
  AIAssistant,
  Contact,
} from "@/components/sections";
import { I18nProvider, useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Miss Gym Fitness - Women's Gym in Jordan" },
      {
        name: "description",
        content:
          "A premium women-only fitness space in Jordan. Private classes, Zumba, personal training, protein bar and more.",
      },
      { property: "og:title", content: "Miss Gym Fitness - Women's Gym in Jordan" },
      {
        property: "og:description",
        content: "Train strong, feel confident. Women-only gym in Jordan.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <I18nProvider>
      <Page />
    </I18nProvider>
  );
}

function Page() {
  const { dir, lang } = useI18n();
  return (
    <div className="min-h-screen bg-background text-foreground" dir={dir} lang={lang}>
      <Toaster position="top-right" theme="dark" richColors />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Memberships />
        <Gallery />
        <Menu />
        <Schedule />
        <Classes />
        <Location />
        <Offers />
        <AIAssistant />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
      <DemoBadge />
    </div>
  );
}
