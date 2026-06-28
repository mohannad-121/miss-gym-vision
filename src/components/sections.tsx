import { useState } from "react";
import { toast } from "sonner";
import {
  Sparkles,
  Heart,
  Target,
  Users,
  MapPin,
  Phone,
  MessageCircle,
  Calendar,
  Clock,
  ChevronRight,
  Send,
  Bot,
  Instagram,
  Facebook,
  Dumbbell,
  Coffee,
  Apple,
  Pill,
  X,
  BadgeDollarSign,
} from "lucide-react";
import { Logo } from "./Logo";
import { useLanguage } from "@/lib/language";
import {
  useProducts,
  useGallery,
  useClasses,
  useBookings,
  useOffers,
  useSettings,
  newId,
} from "@/lib/mockData";

const whatsappNumber = "962792570090";
const displayPhone = "+962 79 257 0090";
const cleanPhone = (phone: string) => (phone.includes("XXX") ? displayPhone : phone);

/* ------------------------------- HERO ------------------------------- */
export function Hero() {
  const { text, isArabic } = useLanguage();
  return (
    <section id="home" className="relative pt-32 pb-24 overflow-hidden">
      {/* Glow background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 h-[600px] w-[600px] rounded-full bg-pink-hot/20 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-pink-hot/10 blur-[100px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-7 animate-fade-up">
          <div className="inline-flex items-center gap-2 glass-pink px-4 py-1.5 rounded-full text-xs text-pink-soft font-semibold">
            <Sparkles size={14} />{" "}
            {text(
              "Women-Focused Fitness in Jordan",
              "\u0646\u0627\u062f\u064a \u0646\u0633\u0627\u0626\u064a \u0641\u064a \u0627\u0644\u0623\u0631\u062f\u0646",
            )}
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05]">
            {text("Train Strong.", "\u062a\u0645\u0631\u0646\u064a \u0628\u0642\u0648\u0629.")}{" "}
            <br />
            <span className="text-gradient-pink">
              {text(
                "Feel Confident.",
                "\u0648\u0627\u0634\u0639\u0631\u064a \u0628\u0627\u0644\u062b\u0642\u0629.",
              )}
            </span>
          </h1>
          <p className="text-lg text-white/70 max-w-xl">
            {text(
              "Miss Gym Fitness is a women-focused fitness space in Jordan designed to help you build strength, confidence, and a healthier lifestyle.",
              "Miss Gym Fitness \u0645\u0633\u0627\u062d\u0629 \u0646\u0633\u0627\u0626\u064a\u0629 \u0641\u064a \u0627\u0644\u0623\u0631\u062f\u0646 \u062a\u0633\u0627\u0639\u062f\u0643 \u0639\u0644\u0649 \u0628\u0646\u0627\u0621 \u0627\u0644\u0642\u0648\u0629 \u0648\u0627\u0644\u062b\u0642\u0629 \u0648\u0646\u0645\u0637 \u062d\u064a\u0627\u0629 \u0635\u062d\u064a.",
            )}
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="#classes"
              className="bg-gradient-pink text-white font-semibold px-6 py-3.5 rounded-full glow-pink hover:scale-105 transition flex items-center gap-2"
            >
              {text(
                "Book a Private Class",
                "\u0627\u062d\u062c\u0632\u064a \u062d\u0635\u0629 \u062e\u0627\u0635\u0629",
              )}{" "}
              <ChevronRight size={18} className={isArabic ? "rotate-180" : ""} />
            </a>
            <a
              href="#menu"
              className="glass text-white font-semibold px-6 py-3.5 rounded-full hover:border-pink-hot/50 transition"
            >
              {text(
                "View Products Menu",
                "\u0634\u0627\u0647\u062f\u064a \u0645\u0646\u064a\u0648 \u0627\u0644\u0645\u0646\u062a\u062c\u0627\u062a",
              )}
            </a>
            <a
              href="https://maps.app.goo.gl/FdX8UUSwYnJjog3z9"
              target="_blank"
              rel="noreferrer"
              className="text-white font-semibold px-6 py-3.5 rounded-full border border-white/15 hover:border-pink-hot/50 transition flex items-center gap-2"
            >
              <MapPin size={18} />{" "}
              {text(
                "Open Location",
                "\u0627\u0641\u062a\u062d\u064a \u0627\u0644\u0645\u0648\u0642\u0639",
              )}
            </a>
          </div>

          <div className="flex gap-6 pt-4">
            {[
              {
                n: "500+",
                l: text(
                  "Happy Members",
                  "\u0645\u0634\u062a\u0631\u0643\u0629 \u0633\u0639\u064a\u062f\u0629",
                ),
              },
              {
                n: "20+",
                l: text(
                  "Weekly Classes",
                  "\u062d\u0635\u0629 \u0623\u0633\u0628\u0648\u0639\u064a\u0629",
                ),
              },
              {
                n: "10+",
                l: text(
                  "Expert Coaches",
                  "\u0645\u062f\u0631\u0628\u0627\u062a \u0645\u062d\u062a\u0631\u0641\u0627\u062a",
                ),
              },
            ].map((s) => (
              <div key={s.l}>
                <div className="text-3xl font-black text-gradient-pink">{s.n}</div>
                <div className="text-xs text-white/60 uppercase tracking-wider">{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Image with floating cards */}
        <div className="relative h-[500px] lg:h-[600px] animate-fade-up">
          <div className="absolute inset-0 rounded-3xl overflow-hidden glow-pink">
            <img
              src="https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=80"
              alt="Women training at Miss Gym"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="glass rounded-2xl p-4 flex items-center gap-3">
                <Logo size="sm" />
                <div className="ml-auto text-right">
                  <div className="text-xs text-white/60">
                    {text(
                      "Open Today",
                      "\u0645\u0641\u062a\u0648\u062d \u0627\u0644\u064a\u0648\u0645",
                    )}
                  </div>
                  <div className="text-sm font-semibold text-white">
                    {text(
                      "8 AM - 9 PM",
                      "8 \u0635\u0628\u0627\u062d\u0627 - 9 \u0645\u0633\u0627\u0621",
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating chips */}
          <div className="absolute -top-2 -left-4 glass-pink px-4 py-2 rounded-2xl text-xs font-semibold animate-float">
            {text("Women-focused gym", "\u0646\u0627\u062f\u064a \u0646\u0633\u0627\u0626\u064a")}
          </div>
          <div
            className="absolute top-20 -right-4 glass px-4 py-2 rounded-2xl text-xs font-semibold animate-float"
            style={{ animationDelay: "1s" }}
          >
            {text("Private sessions", "\u062c\u0644\u0633\u0627\u062a \u062e\u0627\u0635\u0629")}
          </div>
          <div
            className="absolute top-1/2 -left-6 glass-pink px-4 py-2 rounded-2xl text-xs font-semibold animate-float"
            style={{ animationDelay: "2s" }}
          >
            {text("Fitness classes", "\u062d\u0635\u0635 \u0631\u064a\u0627\u0636\u064a\u0629")}
          </div>
          <div
            className="absolute bottom-32 -right-6 glass px-4 py-2 rounded-2xl text-xs font-semibold animate-float"
            style={{ animationDelay: "1.5s" }}
          >
            {text("Protein bar", "\u0628\u0631\u0648\u062a\u064a\u0646 \u0628\u0627\u0631")}
          </div>
          <div
            className="absolute -bottom-2 left-12 glass-pink px-4 py-2 rounded-2xl text-xs font-semibold animate-float"
            style={{ animationDelay: "0.5s" }}
          >
            {text("Easy booking", "\u062d\u062c\u0632 \u0633\u0647\u0644")}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------- ABOUT ------------------------------- */
export function About() {
  const { text } = useLanguage();
  const values = [
    {
      icon: Heart,
      title: text(
        "Supportive Environment",
        "\u0628\u064a\u0626\u0629 \u062f\u0627\u0639\u0645\u0629",
      ),
      desc: text(
        "A welcoming space made by women, for women.",
        "\u0645\u0633\u0627\u062d\u0629 \u0645\u0631\u064a\u062d\u0629 \u0648\u0645\u062e\u0635\u0635\u0629 \u0644\u0644\u0646\u0633\u0627\u0621.",
      ),
    },
    {
      icon: Users,
      title: text(
        "Professional Training",
        "\u062a\u062f\u0631\u064a\u0628 \u0645\u062d\u062a\u0631\u0641",
      ),
      desc: text(
        "Certified coaches guiding every step of your journey.",
        "\u0645\u062f\u0631\u0628\u0627\u062a \u064a\u0633\u0627\u0639\u062f\u0646\u0643 \u0641\u064a \u0643\u0644 \u062e\u0637\u0648\u0629.",
      ),
    },
    {
      icon: Target,
      title: text(
        "Goal-Based Programs",
        "\u0628\u0631\u0627\u0645\u062c \u062d\u0633\u0628 \u0627\u0644\u0647\u062f\u0641",
      ),
      desc: text(
        "Tailored plans for strength, weight loss, and wellness.",
        "\u062e\u0637\u0637 \u0644\u0644\u0642\u0648\u0629\u060c \u062e\u0633\u0627\u0631\u0629 \u0627\u0644\u0648\u0632\u0646\u060c \u0648\u0627\u0644\u0635\u062d\u0629.",
      ),
    },
  ];
  return (
    <section id="about" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow={text("About Us", "\u0639\u0646 \u0627\u0644\u0646\u0627\u062f\u064a")}
          title={text("About Miss Gym Fitness", "\u0639\u0646 Miss Gym Fitness")}
        />
        <div className="grid lg:grid-cols-2 gap-12 items-center mt-12">
          <p className="text-lg text-white/70 leading-relaxed">
            {text(
              "Miss Gym Fitness is a dedicated women's fitness destination in Jordan offering a safe, supportive, and motivating environment. From personalized training and group classes to expert nutrition guidance and a relaxing protein bar, we provide everything you need to reach your fitness goals your way, at your pace.",
              "\u0645\u064a\u0633 \u062c\u064a\u0645 \u0641\u062a\u0646\u0633 \u0648\u062c\u0647\u0629 \u0631\u064a\u0627\u0636\u064a\u0629 \u0646\u0633\u0627\u0626\u064a\u0629 \u0641\u064a \u0627\u0644\u0623\u0631\u062f\u0646 \u062a\u0648\u0641\u0631 \u0628\u064a\u0626\u0629 \u0622\u0645\u0646\u0629 \u0648\u062f\u0627\u0639\u0645\u0629 \u0648\u0645\u062d\u0641\u0632\u0629. \u0645\u0646 \u0627\u0644\u062a\u062f\u0631\u064a\u0628 \u0627\u0644\u0634\u062e\u0635\u064a \u0648\u0627\u0644\u062d\u0635\u0635 \u0627\u0644\u062c\u0645\u0627\u0639\u064a\u0629 \u0625\u0644\u0649 \u0627\u0644\u0625\u0631\u0634\u0627\u062f \u0627\u0644\u063a\u0630\u0627\u0626\u064a \u0648\u0627\u0644\u0628\u0631\u0648\u062a\u064a\u0646 \u0628\u0627\u0631\u060c \u0643\u0644 \u0645\u0627 \u062a\u062d\u062a\u0627\u062c\u064a\u0646\u0647 \u0644\u0647\u062f\u0641\u0643 \u0645\u062a\u0648\u0641\u0631.",
            )}
          </p>
          <div className="grid sm:grid-cols-3 gap-4">
            {values.map((v) => (
              <div
                key={v.title}
                className="glass rounded-2xl p-6 hover:border-pink-hot/40 transition"
              >
                <div className="h-11 w-11 rounded-xl bg-gradient-pink grid place-items-center mb-4">
                  <v.icon size={20} className="text-white" />
                </div>
                <div className="font-bold text-white mb-1">{v.title}</div>
                <div className="text-sm text-white/60">{v.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------- SUBSCRIPTIONS ---------------------------- */
export function Subscriptions() {
  const { text } = useLanguage();
  const plans = [
    {
      period: "1 Month",
      arabic: "\u0627\u0634\u062a\u0631\u0627\u0643 \u0634\u0647\u0631",
      price: "25 \u062f\u064a\u0646\u0627\u0631",
      highlight: false,
    },
    {
      period: "3 Months",
      arabic: "\u0627\u0634\u062a\u0631\u0627\u0643 3 \u0623\u0634\u0647\u0631",
      price: "60 \u062f\u064a\u0646\u0627\u0631",
      highlight: true,
    },
    {
      period: "6 Months",
      arabic: "\u0627\u0634\u062a\u0631\u0627\u0643 6 \u0623\u0634\u0647\u0631",
      price: "110 \u062f\u064a\u0646\u0627\u0631",
      highlight: false,
    },
    {
      period: "12 Months",
      arabic: "\u0627\u0634\u062a\u0631\u0627\u0643 12 \u0634\u0647\u0631",
      price: "205 \u062f\u064a\u0646\u0627\u0631",
      highlight: false,
    },
  ];

  return (
    <section id="subscriptions" className="py-24 bg-[#0c0c0e]">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow={text(
            "Subscriptions",
            "\u0627\u0644\u0627\u0634\u062a\u0631\u0627\u0643\u0627\u062a",
          )}
          title={text(
            "Miss Gym Membership Prices",
            "\u0623\u0633\u0639\u0627\u0631 \u0627\u0634\u062a\u0631\u0627\u0643\u0627\u062a Miss Gym",
          )}
        />
        <p className="mx-auto mt-5 max-w-2xl text-center text-sm leading-7 text-white/60">
          {text(
            "Official Miss Gym subscription plans.",
            "أسعار الاشتراكات حسب منشور Miss Gym الرسمي.",
          )}
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-12">
          {plans.map((plan) => (
            <div
              key={plan.period}
              className={`relative overflow-hidden rounded-3xl p-6 transition hover:-translate-y-1 ${
                plan.highlight ? "glass-pink glow-pink" : "glass"
              }`}
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-pink" />
              <div className="flex items-center justify-between gap-4 mb-6">
                <div className="h-12 w-12 rounded-2xl bg-gradient-pink grid place-items-center">
                  <BadgeDollarSign size={22} className="text-white" />
                </div>
                {plan.highlight && (
                  <span className="rounded-full border border-pink-hot/40 bg-pink-hot/15 px-3 py-1 text-xs font-bold text-pink-soft">
                    {text(
                      "Best Value",
                      "\u0627\u0644\u0623\u0641\u0636\u0644 \u0642\u064a\u0645\u0629",
                    )}
                  </span>
                )}
              </div>
              <div className="text-sm font-semibold text-white/60">{plan.period}</div>
              <div className="mt-1 text-sm font-semibold text-pink-soft" dir="rtl">
                {plan.arabic}
              </div>
              <div className="mt-4 font-display text-4xl font-black text-white" dir="rtl">
                {plan.price}
              </div>
              <a
                href={`https://wa.me/962792570090?text=${encodeURIComponent(`Hi! I want to subscribe to Miss Gym: ${plan.arabic} = ${plan.price}`)}`}
                target="_blank"
                rel="noreferrer"
                className="mt-7 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-pink py-3 text-sm font-semibold text-white transition hover:scale-[1.02]"
              >
                <MessageCircle size={16} />{" "}
                {text(
                  "Subscribe on WhatsApp",
                  "\u0627\u0634\u062a\u0631\u0643\u064a \u0639\u0628\u0631 \u0648\u0627\u062a\u0633\u0627\u0628",
                )}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
/* ------------------------------- GALLERY ------------------------------- */
export function Gallery() {
  const { text } = useLanguage();
  const [items] = useGallery();
  const cats = ["All", "Gym Place", "Equipment", "Classes", "Protein Bar"] as const;
  const [active, setActive] = useState<(typeof cats)[number]>("All");
  const filtered = active === "All" ? items : items.filter((i) => i.category === active);

  return (
    <section id="gallery" className="py-24 bg-[#0c0c0e]">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow={text("Gallery", "\u0627\u0644\u0635\u0648\u0631")}
          title={text("Inside Miss Gym", "\u062f\u0627\u062e\u0644 Miss Gym")}
        />

        <div className="flex flex-wrap gap-2 justify-center mt-8 mb-10">
          {cats.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition ${
                active === c
                  ? "bg-gradient-pink text-white glow-pink"
                  : "glass text-white/70 hover:text-white"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((g) => (
            <div
              key={g.id}
              className="group relative aspect-[4/5] rounded-2xl overflow-hidden glass"
            >
              <img
                src={g.image}
                alt={g.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <span className="text-[10px] tracking-widest uppercase text-pink-hot font-bold">
                  {g.category}
                </span>
                <div className="text-lg font-bold text-white mt-1">{g.title}</div>
                <div className="text-xs text-white/70 mt-1">{g.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------- MENU ------------------------------- */
export function Menu() {
  const { text } = useLanguage();
  const [products] = useProducts();
  const cats = ["All", "Drinks", "Protein", "Snacks", "Supplements"] as const;
  const [active, setActive] = useState<(typeof cats)[number]>("All");
  const filtered = active === "All" ? products : products.filter((p) => p.category === active);
  const icons: Record<string, typeof Coffee> = {
    Drinks: Coffee,
    Protein: Dumbbell,
    Snacks: Apple,
    Supplements: Pill,
  };

  return (
    <section id="menu" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow={text(
            "Protein Bar",
            "\u0627\u0644\u0628\u0631\u0648\u062a\u064a\u0646 \u0628\u0627\u0631",
          )}
          title={text(
            "Protein Bar & Products",
            "\u0627\u0644\u0628\u0631\u0648\u062a\u064a\u0646 \u0628\u0627\u0631 \u0648\u0627\u0644\u0645\u0646\u062a\u062c\u0627\u062a",
          )}
        />

        <div className="flex flex-wrap gap-2 justify-center mt-8 mb-10">
          {cats.map((c) => {
            const Icon = icons[c];
            return (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition flex items-center gap-2 ${
                  active === c
                    ? "bg-gradient-pink text-white glow-pink"
                    : "glass text-white/70 hover:text-white"
                }`}
              >
                {Icon && <Icon size={14} />} {c}
              </button>
            );
          })}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {filtered.map((p) => (
            <div
              key={p.id}
              className="glass rounded-2xl overflow-hidden group hover:border-pink-hot/40 transition"
            >
              <div className="aspect-square overflow-hidden bg-surface">
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <div className="text-[10px] uppercase tracking-widest text-pink-hot font-bold">
                      {p.category}
                    </div>
                    <div className="font-bold text-white mt-1">{p.name}</div>
                  </div>
                  <span
                    className={`text-[10px] px-2 py-1 rounded-full font-bold ${p.available ? "bg-green-500/15 text-green-400" : "bg-red-500/15 text-red-400"}`}
                  >
                    {p.available ? "Available" : "Sold Out"}
                  </span>
                </div>
                <div className="text-xs text-white/50 mt-2">{p.description}</div>
                <div className="mt-3 text-sm text-white/80 font-semibold">{p.price}</div>
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hi! I'd like to ask about: " + p.name)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 w-full flex items-center justify-center gap-2 bg-gradient-pink text-white text-sm font-semibold py-2.5 rounded-xl hover:scale-[1.02] transition"
                >
                  <MessageCircle size={14} /> Ask on WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------- CLASSES ------------------------------- */
export function Classes() {
  const { text } = useLanguage();
  const [classes] = useClasses();
  const [bookings, setBookings] = useBookings();
  const [selected, setSelected] = useState<string | null>(null);
  const selectedClass = classes.find((c) => c.id === selected);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
    goal: "",
    notes: "",
  });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone) {
      toast.error("Please fill in name and phone.");
      return;
    }
    setBookings([
      ...bookings,
      { id: newId(), ...form, classType: selectedClass?.name || "", status: "Pending" },
    ]);
    toast.success("Booking received! We'll contact you shortly.");
    setSelected(null);
    setForm({ name: "", phone: "", date: "", time: "", goal: "", notes: "" });
  };

  return (
    <section id="classes" className="py-24 bg-[#0c0c0e]">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow={text("Classes", "\u0627\u0644\u062d\u0635\u0635")}
          title={text(
            "Book Your Private Class",
            "\u0627\u062d\u062c\u0632\u064a \u062d\u0635\u062a\u0643 \u0627\u0644\u062e\u0627\u0635\u0629",
          )}
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
          {classes.map((c) => (
            <div
              key={c.id}
              className="glass rounded-2xl overflow-hidden group hover:border-pink-hot/40 transition flex flex-col"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={c.image}
                  alt={c.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="font-bold text-white text-lg">{c.name}</div>
                <div className="flex items-center gap-4 mt-2 text-xs text-white/60">
                  <span className="flex items-center gap-1">
                    <Clock size={12} /> {c.duration}
                  </span>
                  <span>{c.trainer}</span>
                </div>
                <div className="text-sm text-white/80 font-semibold mt-3">{c.price}</div>
                <button onClick={() => setSelected(c.id)} className="mt-auto pt-4 w-full">
                  <span className="block bg-gradient-pink text-white text-sm font-semibold py-2.5 rounded-xl hover:scale-[1.02] transition">
                    Book This Class
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Booking modal */}
      {selectedClass && (
        <div
          className="fixed inset-0 z-[60] bg-black/80 backdrop-blur-sm grid place-items-center p-4 animate-fade-up"
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-surface rounded-3xl border border-white/10 max-w-lg w-full p-6 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 text-white/60 hover:text-white"
            >
              <X size={20} />
            </button>
            <div className="text-xs text-pink-hot font-bold uppercase tracking-widest">
              Booking Form
            </div>
            <h3 className="text-2xl font-black text-white mt-1">{selectedClass.name}</h3>
            <p className="text-sm text-white/60">
              {selectedClass.duration} · {selectedClass.trainer}
            </p>

            <form onSubmit={submit} className="mt-5 space-y-3">
              <Input
                label="Full Name"
                value={form.name}
                onChange={(v) => setForm({ ...form, name: v })}
              />
              <Input
                label="Phone Number"
                value={form.phone}
                onChange={(v) => setForm({ ...form, phone: v })}
              />
              <div className="grid grid-cols-2 gap-3">
                <Input
                  label="Date"
                  type="date"
                  value={form.date}
                  onChange={(v) => setForm({ ...form, date: v })}
                />
                <Input
                  label="Time"
                  type="time"
                  value={form.time}
                  onChange={(v) => setForm({ ...form, time: v })}
                />
              </div>
              <Input
                label="Fitness Goal"
                value={form.goal}
                onChange={(v) => setForm({ ...form, goal: v })}
              />
              <Input
                label="Notes"
                value={form.notes}
                onChange={(v) => setForm({ ...form, notes: v })}
                textarea
              />
              <div className="flex gap-2 pt-2">
                <button
                  type="submit"
                  className="flex-1 bg-gradient-pink text-white font-semibold py-3 rounded-xl"
                >
                  Submit Booking
                </button>
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Hi! I'd like to book: ${selectedClass.name}. Name: ${form.name || "-"}, Date: ${form.date || "-"}, Time: ${form.time || "-"}`)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 grid place-items-center rounded-xl bg-[#25D366] text-white"
                >
                  <MessageCircle size={18} />
                </a>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}

function Input({
  label,
  value,
  onChange,
  type = "text",
  textarea = false,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  textarea?: boolean;
}) {
  return (
    <label className="block">
      <span className="text-xs text-white/60 font-semibold">{label}</span>
      {textarea ? (
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          rows={2}
          className="mt-1 w-full bg-background border border-white/10 rounded-xl px-3 py-2.5 text-sm text-white focus:border-pink-hot outline-none transition"
        />
      ) : (
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="mt-1 w-full bg-background border border-white/10 rounded-xl px-3 py-2.5 text-sm text-white focus:border-pink-hot outline-none transition"
        />
      )}
    </label>
  );
}

/* ------------------------------- LOCATION ------------------------------- */
export function Location() {
  const { text } = useLanguage();
  const [settings] = useSettings();
  const phone = cleanPhone(settings.phone);
  const whatsapp = settings.whatsapp.includes("000000")
    ? whatsappNumber
    : settings.whatsapp.replace(/\D/g, "");
  return (
    <section id="location" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow={text("Visit Us", "\u0632\u0648\u0631\u064a\u0646\u0627")}
          title={text("Find Miss Gym Fitness", "\u0645\u0648\u0642\u0639 Miss Gym Fitness")}
        />
        <div className="grid lg:grid-cols-2 gap-8 mt-12">
          <div className="glass rounded-3xl p-8 space-y-6">
            <Info
              icon={MapPin}
              label={text("Address", "\u0627\u0644\u0639\u0646\u0648\u0627\u0646")}
              value={settings.address}
            />
            <Info
              icon={Clock}
              label={text(
                "Opening Hours",
                "\u0633\u0627\u0639\u0627\u062a \u0627\u0644\u0639\u0645\u0644",
              )}
              value={settings.hours}
            />
            <Info
              icon={Phone}
              label={text("Phone", "\u0627\u0644\u0647\u0627\u062a\u0641")}
              value={phone}
            />
            <div className="flex flex-wrap gap-3 pt-4">
              <a
                href={settings.mapsLink}
                target="_blank"
                rel="noreferrer"
                className="bg-gradient-pink text-white font-semibold px-5 py-3 rounded-full flex items-center gap-2"
              >
                <MapPin size={16} /> Open in Google Maps
              </a>
              <a
                href={`https://wa.me/${whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="bg-[#25D366] text-white font-semibold px-5 py-3 rounded-full flex items-center gap-2"
              >
                <MessageCircle size={16} /> WhatsApp
              </a>
            </div>
          </div>
          <div className="rounded-3xl overflow-hidden glass aspect-[4/3] lg:aspect-auto grid place-items-center text-center p-8 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-pink-hot/10 to-transparent" />
            <div className="relative">
              <MapPin size={48} className="text-pink-hot mx-auto mb-4" />
              <div className="text-white font-bold">Google Maps Embed</div>
              <div className="text-sm text-white/60 mt-2 max-w-xs">
                Google Maps embed will be added here after getting the official embed link.
              </div>
              <a
                href={settings.mapsLink}
                target="_blank"
                rel="noreferrer"
                className="inline-block mt-4 text-pink-hot text-sm font-semibold hover:underline"
              >
                View on Google Maps
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Info({ icon: Icon, label, value }: { icon: typeof MapPin; label: string; value: string }) {
  return (
    <div className="flex gap-4">
      <div className="h-10 w-10 shrink-0 rounded-xl bg-gradient-pink grid place-items-center">
        <Icon size={18} />
      </div>
      <div className="min-w-0">
        <div className="text-xs uppercase tracking-widest text-pink-hot font-bold">{label}</div>
        <div className="text-white mt-1">{value}</div>
      </div>
    </div>
  );
}

/* ------------------------------- OFFERS ------------------------------- */
export function Offers() {
  const { text } = useLanguage();
  const [offers] = useOffers();
  return (
    <section className="py-24 bg-[#0c0c0e]">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow={text("Special", "\u0639\u0631\u0648\u0636")}
          title={text(
            "Latest Offers",
            "\u0623\u062d\u062f\u062b \u0627\u0644\u0639\u0631\u0648\u0636",
          )}
        />
        <div className="grid md:grid-cols-3 gap-5 mt-12">
          {offers
            .filter((o) => o.active)
            .map((o) => (
              <div
                key={o.id}
                className="glass rounded-3xl overflow-hidden group hover:border-pink-hot/40 transition"
              >
                <div className="aspect-[16/10] overflow-hidden relative">
                  <img
                    src={o.image}
                    alt={o.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 glass-pink px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
                    {text(
                      "Limited",
                      "\u0644\u0641\u062a\u0631\u0629 \u0645\u062d\u062f\u0648\u062f\u0629",
                    )}
                  </div>
                </div>
                <div className="p-6">
                  <div className="font-bold text-white text-lg">{o.title}</div>
                  <p className="text-sm text-white/60 mt-2">{o.description}</p>
                  <div className="text-xs text-white/50 mt-3">
                    {text("Valid until:", "\u0635\u0627\u0644\u062d \u062d\u062a\u0649:")}{" "}
                    {o.validUntil}
                  </div>
                  <a
                    href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hi! I'd like to ask about the offer: " + o.title)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 w-full flex items-center justify-center gap-2 bg-gradient-pink text-white text-sm font-semibold py-2.5 rounded-xl"
                  >
                    {text(
                      "Ask About This Offer",
                      "\u0627\u0633\u0623\u0644\u064a \u0639\u0646 \u0627\u0644\u0639\u0631\u0636",
                    )}
                  </a>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------- AI ASSISTANT ------------------------------- */
export function AIAssistant() {
  const { text } = useLanguage();
  const messages = [
    {
      role: "user",
      text: text(
        "What membership is best for me?",
        "\u0645\u0627 \u0627\u0644\u0627\u0634\u062a\u0631\u0627\u0643 \u0627\u0644\u0623\u0646\u0633\u0628 \u0644\u064a\u061f",
      ),
    },
    {
      role: "ai",
      text: text(
        "I can help! Could you share your main goal - strength, weight loss, or general fitness?",
        "\u0623\u0642\u062f\u0631 \u0623\u0633\u0627\u0639\u062f\u0643! \u0645\u0627 \u0647\u062f\u0641\u0643 \u0627\u0644\u0623\u0633\u0627\u0633\u064a\u061f \u0642\u0648\u0629\u060c \u062e\u0633\u0627\u0631\u0629 \u0648\u0632\u0646\u060c \u0623\u0648 \u0644\u064a\u0627\u0642\u0629 \u0639\u0627\u0645\u0629\u061f",
      ),
    },
    {
      role: "user",
      text: text(
        "I'd like weight loss.",
        "\u0647\u062f\u0641\u064a \u062e\u0633\u0627\u0631\u0629 \u0627\u0644\u0648\u0632\u0646.",
      ),
    },
    {
      role: "ai",
      text: text(
        "Our Weight Loss Program (8 weeks) plus 2 weekly Zumba classes is a popular start. Want me to check availability?",
        "\u0628\u0631\u0646\u0627\u0645\u062c \u062e\u0633\u0627\u0631\u0629 \u0627\u0644\u0648\u0632\u0646 \u0645\u0639 \u062d\u0635\u0635 \u0632\u0648\u0645\u0628\u0627 \u0623\u0633\u0628\u0648\u0639\u064a\u0629 \u062e\u064a\u0627\u0631 \u0645\u0646\u0627\u0633\u0628 \u0644\u0644\u0628\u062f\u0621. \u0647\u0644 \u0623\u062a\u062d\u0642\u0642 \u0645\u0646 \u0627\u0644\u062a\u0648\u0641\u0631\u061f",
      ),
    },
  ];
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-pink-hot/20 blur-[120px]" />
      </div>
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 glass-pink px-3 py-1 rounded-full text-xs font-bold mb-5">
            <Sparkles size={12} />{" "}
            {text(
              "Optional Future Feature",
              "\u0645\u064a\u0632\u0629 \u0645\u0633\u062a\u0642\u0628\u0644\u064a\u0629",
            )}
          </div>
          <h2 className="text-4xl md:text-5xl font-black">
            {text("Coming Soon:", "\u0642\u0631\u064a\u0628\u0627:")} <br />
            <span className="text-gradient-pink">
              {text(
                "Miss Gym Smart Assistant",
                "\u0645\u0633\u0627\u0639\u062f Miss Gym \u0627\u0644\u0630\u0643\u064a",
              )}
            </span>
          </h2>
          <p className="text-white/70 mt-5 max-w-lg">
            {text(
              "Miss Gym Smart Assistant can later help visitors ask about memberships, classes, booking, opening hours, and fitness goals - all from your website, 24/7.",
              "\u0645\u0633\u0627\u0639\u062f Miss Gym \u0627\u0644\u0630\u0643\u064a \u064a\u0645\u0643\u0646\u0647 \u0645\u0633\u0627\u0639\u062f\u0629 \u0627\u0644\u0632\u0627\u0626\u0631\u0627\u062a \u0641\u064a \u0627\u0644\u0627\u0634\u062a\u0631\u0627\u0643\u0627\u062a\u060c \u0627\u0644\u062d\u0635\u0635\u060c \u0627\u0644\u062d\u062c\u0632\u060c \u0648\u0633\u0627\u0639\u0627\u062a \u0627\u0644\u0639\u0645\u0644.",
            )}
          </p>
          <ul className="mt-6 space-y-3 text-sm text-white/70">
            {[
              text(
                "What membership is best for me?",
                "\u0645\u0627 \u0627\u0644\u0627\u0634\u062a\u0631\u0627\u0643 \u0627\u0644\u0623\u0646\u0633\u0628 \u0644\u064a\u061f",
              ),
              text(
                "What classes do you offer?",
                "\u0645\u0627 \u0627\u0644\u062d\u0635\u0635 \u0627\u0644\u0645\u062a\u0648\u0641\u0631\u0629\u061f",
              ),
              text(
                "How can I book a private session?",
                "\u0643\u064a\u0641 \u0623\u062d\u062c\u0632 \u062c\u0644\u0633\u0629 \u062e\u0627\u0635\u0629\u061f",
              ),
              text(
                "What should I choose if my goal is weight loss?",
                "\u0645\u0627\u0630\u0627 \u0623\u062e\u062a\u0627\u0631 \u0625\u0630\u0627 \u0643\u0627\u0646 \u0647\u062f\u0641\u064a \u062e\u0633\u0627\u0631\u0629 \u0627\u0644\u0648\u0632\u0646\u061f",
              ),
              text(
                "What are your opening hours?",
                "\u0645\u0627 \u0633\u0627\u0639\u0627\u062a \u0627\u0644\u0639\u0645\u0644\u061f",
              ),
            ].map((q) => (
              <li key={q} className="flex items-start gap-2">
                <ChevronRight size={16} className="text-pink-hot mt-0.5 shrink-0" /> {q}
              </li>
            ))}
          </ul>
        </div>

        <div className="glass rounded-3xl p-5 glow-pink">
          <div className="flex items-center gap-3 pb-4 border-b border-white/10">
            <div className="h-10 w-10 rounded-xl bg-gradient-pink grid place-items-center animate-pulse-glow">
              <Bot size={18} />
            </div>
            <div>
              <div className="font-bold text-white text-sm">Miss Gym Assistant</div>
              <div className="text-[10px] text-pink-soft">Demo preview</div>
            </div>
          </div>
          <div className="space-y-3 py-4 max-h-[300px] overflow-y-auto">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] text-sm px-4 py-2.5 rounded-2xl ${
                    m.role === "user"
                      ? "bg-gradient-pink text-white rounded-br-sm"
                      : "bg-surface-2 text-white/90 rounded-bl-sm"
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}
          </div>
          <div className="flex gap-2 pt-3 border-t border-white/10">
            <input
              disabled
              placeholder={text(
                "Ask me anything...",
                "\u0627\u0633\u0623\u0644\u064a \u0623\u064a \u0634\u064a\u0621...",
              )}
              className="flex-1 bg-surface-2 rounded-xl px-3 py-2.5 text-sm text-white/60 border border-white/5"
            />
            <button
              disabled
              className="h-10 w-10 grid place-items-center rounded-xl bg-gradient-pink"
            >
              <Send size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------- CONTACT ------------------------------- */
export function Contact() {
  const { text } = useLanguage();
  const [settings] = useSettings();
  const phone = cleanPhone(settings.phone);
  const whatsapp = settings.whatsapp.includes("000000")
    ? whatsappNumber
    : settings.whatsapp.replace(/\D/g, "");
  const [form, setForm] = useState({ name: "", phone: "", message: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success(
      text(
        "Message sent! We'll reply soon.",
        "\u062a\u0645 \u0625\u0631\u0633\u0627\u0644 \u0627\u0644\u0631\u0633\u0627\u0644\u0629! \u0633\u0646\u062a\u0648\u0627\u0635\u0644 \u0645\u0639\u0643 \u0642\u0631\u064a\u0628\u0627.",
      ),
    );
    setForm({ name: "", phone: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 bg-[#0c0c0e]">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow={text(
            "Get In Touch",
            "\u062a\u0648\u0627\u0635\u0644\u064a \u0645\u0639\u0646\u0627",
          )}
          title={text(
            "Ready to Start?",
            "\u062c\u0627\u0647\u0632\u0629 \u062a\u0628\u062f\u0626\u064a\u061f",
          )}
        />

        <div className="grid lg:grid-cols-2 gap-8 mt-12">
          <div className="space-y-4">
            <a
              href={`https://wa.me/${whatsapp}`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 glass rounded-2xl p-5 hover:border-[#25D366]/50 transition"
            >
              <div className="h-12 w-12 grid place-items-center rounded-xl bg-[#25D366]">
                <MessageCircle />
              </div>
              <div>
                <div className="text-xs text-white/50">
                  {text("WhatsApp", "\u0648\u0627\u062a\u0633\u0627\u0628")}
                </div>
                <div className="font-bold text-white">
                  {text("Chat with us", "\u0631\u0627\u0633\u0644\u064a\u0646\u0627")}
                </div>
              </div>
            </a>
            <a
              href={`tel:${phone}`}
              className="flex items-center gap-4 glass rounded-2xl p-5 hover:border-pink-hot/50 transition"
            >
              <div className="h-12 w-12 grid place-items-center rounded-xl bg-gradient-pink">
                <Phone />
              </div>
              <div>
                <div className="text-xs text-white/50">
                  {text("Phone", "\u0627\u0644\u0647\u0627\u062a\u0641")}
                </div>
                <div className="font-bold text-white">{phone}</div>
              </div>
            </a>
            <div className="grid grid-cols-2 gap-4">
              <a
                href={settings.instagram}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 glass rounded-2xl p-5 hover:border-pink-hot/50 transition"
              >
                <Instagram className="text-pink-hot" />
                <div className="font-bold text-white text-sm">
                  {text("Instagram", "\u0625\u0646\u0633\u062a\u063a\u0631\u0627\u0645")}
                </div>
              </a>
              <a
                href={settings.facebook}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 glass rounded-2xl p-5 hover:border-pink-hot/50 transition"
              >
                <Facebook className="text-pink-hot" />
                <div className="font-bold text-white text-sm">
                  {text("Facebook", "\u0641\u064a\u0633\u0628\u0648\u0643")}
                </div>
              </a>
            </div>
          </div>

          <form onSubmit={submit} className="glass rounded-3xl p-7 space-y-3">
            <Input
              label={text("Name", "\u0627\u0644\u0627\u0633\u0645")}
              value={form.name}
              onChange={(v) => setForm({ ...form, name: v })}
            />
            <Input
              label={text("Phone", "\u0627\u0644\u0647\u0627\u062a\u0641")}
              value={form.phone}
              onChange={(v) => setForm({ ...form, phone: v })}
            />
            <Input
              label={text("Message", "\u0627\u0644\u0631\u0633\u0627\u0644\u0629")}
              value={form.message}
              onChange={(v) => setForm({ ...form, message: v })}
              textarea
            />
            <button className="w-full bg-gradient-pink text-white font-semibold py-3 rounded-xl mt-2">
              {text(
                "Send Message",
                "\u0625\u0631\u0633\u0627\u0644 \u0627\u0644\u0631\u0633\u0627\u0644\u0629",
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------- HELPERS ------------------------------- */
export function SectionHeader({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="text-center">
      <div className="inline-block text-xs uppercase tracking-[0.3em] text-pink-hot font-bold">
        {eyebrow}
      </div>
      <h2 className="text-4xl md:text-5xl font-black mt-3">{title}</h2>
      <div className="mx-auto mt-4 h-1 w-16 bg-gradient-pink rounded-full" />
    </div>
  );
}
