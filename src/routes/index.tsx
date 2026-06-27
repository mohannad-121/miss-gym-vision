import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "sonner";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat, DemoBadge } from "@/components/Floating";
import {
  Hero, About, Gallery, Menu, Classes, Location, Offers, AIAssistant, Contact,
} from "@/components/sections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Miss Gym Fitness — Women's Gym in Jordan" },
      { name: "description", content: "A premium women-focused fitness space in Jordan. Private classes, dance, Zumba, personal training, protein bar and more." },
      { property: "og:title", content: "Miss Gym Fitness — Women's Gym in Jordan" },
      { property: "og:description", content: "Train strong, feel confident. Women-focused gym in Jordan." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Toaster position="top-right" theme="dark" richColors />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Gallery />
        <Menu />
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
