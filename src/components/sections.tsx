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
  CalendarDays,
  Martini,
  Sandwich,
  ExternalLink,
  BadgeDollarSign,
} from "lucide-react";
import { Logo } from "./Logo";
import { useI18n } from "@/lib/i18n";
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

const scheduleDanya = [
  { day: "sat", slots: ["Circuit", "Kick Boxing", "Hips & Abs"] },
  { day: "sun", slots: ["Pilates", "Hawssa Dance Fitness", "20/20/20"] },
  { day: "mon", slots: ["Upper Body", "Core", "Tabata"] },
  { day: "tue", slots: ["Stick", "Yoga", "Zumba"] },
  { day: "wed", slots: ["Step", "HIIT", "Mix"] },
  { day: "thu", slots: ["Lower Body", "Body Shape", "Balls"] },
] as const;

const scheduleAbeer = [
  { day: "sat", slots: ["Tabata Workout", "Dumbbell", "Tabata Workout"] },
  { day: "sun", slots: ["Step Workout", "Mix Power Workout", "Step Workout"] },
  { day: "mon", slots: ["Pilates Workout", "", "Pilates Workout"] },
  { day: "tue", slots: ["Ball Workout", "Boxing Workout", "Ball Workout"] },
  { day: "wed", slots: ["Zumba", "Zumba", "Zumba"] },
  { day: "thu", slots: ["Dumbbell", "Yoga", "Dumbbell"] },
] as const;

const localizedProductNames: Record<string, { ar: string; en: string }> = {
  "Whey Protein Shake": { ar: "شيك بروتين", en: "Whey Protein Shake" },
  "Iced Coffee": { ar: "آيسد كوفي", en: "Iced Coffee" },
  "Hot Coffee": { ar: "قهوة ساخنة", en: "Hot Coffee" },
  "Protein Bar": { ar: "بروتين بار", en: "Protein Bar" },
  "Mineral Water": { ar: "مياه معدنية", en: "Mineral Water" },
  "Healthy Snack Box": { ar: "سناك صحي", en: "Healthy Snack Box" },
  "BCAA Supplement": { ar: "مكمل BCAA", en: "BCAA Supplement" },
  "Pre-Workout": { ar: "بري ووركاوت", en: "Pre-Workout" },
  "Zero Biscuits": { ar: "بسكويت زيرو", en: "Zero Biscuits" },
  "Protein Wafer": { ar: "ويفر بروتين", en: "Protein Wafer" },
};

function cx(...classes: Array<string | false | undefined>) {
  return classes.filter(Boolean).join(" ");
}

/* ------------------------------- HERO ------------------------------- */
export function Hero() {
  const { t, dir } = useI18n();
  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-24">
      <div className="absolute inset-0 -z-10 luxury-grid" />
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2">
        <div className={cx("space-y-7 animate-fade-up", dir === "rtl" && "text-right")}>
          <div className="inline-flex items-center gap-2 rounded-full glass-pink px-4 py-1.5 text-xs font-semibold text-pink-soft">
            <Sparkles size={14} /> {t.hero.eyebrow}
          </div>
          <h1 className="text-5xl font-black leading-[1.08] md:text-6xl lg:text-7xl">
            {t.hero.titleA} <br />
            <span className="text-gradient-pink">{t.hero.titleB}</span>
          </h1>
          <p
            className={cx(
              "max-w-xl text-lg leading-8 text-white/72",
              dir === "rtl" && "mr-0 lg:mr-auto",
            )}
          >
            {t.hero.text}
          </p>
          <div
            className={cx("flex flex-wrap gap-3", dir === "rtl" && "justify-start lg:justify-end")}
          >
            <a
              href="#classes"
              className="flex items-center gap-2 rounded-full bg-gradient-pink px-6 py-3.5 font-semibold text-white glow-pink transition hover:scale-105"
            >
              {t.hero.cta} <ChevronRight className={dir === "rtl" ? "rotate-180" : ""} size={18} />
            </a>
            <a
              href="#menu"
              className="rounded-full glass px-6 py-3.5 font-semibold text-white transition hover:border-pink-hot/50"
            >
              {t.hero.menu}
            </a>
            <a
              href="https://maps.app.goo.gl/FdX8UUSwYnJjog3z9"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-full border border-white/15 px-6 py-3.5 font-semibold text-white transition hover:border-pink-hot/50"
            >
              <MapPin size={18} /> {t.hero.location}
            </a>
          </div>
          <div
            className={cx(
              "flex flex-wrap gap-6 pt-4",
              dir === "rtl" && "justify-start lg:justify-end",
            )}
          >
            {t.hero.stats.map(([n, label]) => (
              <div key={label}>
                <div className="text-3xl font-black text-gradient-pink">{n}</div>
                <div className="text-xs uppercase tracking-wider text-white/60">{label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative h-[520px] animate-fade-up lg:h-[620px]">
          <div className="absolute inset-0 overflow-hidden rounded-[2rem] glow-pink ring-1 ring-white/10">
            <img
              src="https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1400&q=85"
              alt="Women training at Miss Gym"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
            <div className="absolute inset-x-5 bottom-5">
              <div className="flex items-center gap-3 rounded-2xl glass p-4">
                <Logo size="sm" />
                <div className={cx("ml-auto", dir === "rtl" && "mr-auto ml-0 text-right")}>
                  <div className="text-xs text-white/60">{t.common.openToday}</div>
                  <div className="text-sm font-semibold text-white">{t.common.hours}</div>
                </div>
              </div>
            </div>
          </div>
          {t.hero.chips.map((chip, index) => (
            <div
              key={chip}
              className={cx(
                "absolute rounded-2xl px-4 py-2 text-xs font-semibold animate-float",
                index % 2 ? "glass" : "glass-pink",
                [
                  "-top-2 left-2",
                  "top-20 -right-4",
                  "top-1/2 -left-5",
                  "bottom-32 -right-5",
                  "-bottom-2 left-12",
                ][index],
              )}
              style={{ animationDelay: `${index * 0.4}s` }}
            >
              {chip}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------- ABOUT ------------------------------- */
export function About() {
  const { t } = useI18n();
  const icons = [Heart, Users, Target];
  return (
    <section id="about" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader eyebrow={t.about.eyebrow} title={t.about.title} />
        <div className="mt-12 grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <p className="text-lg leading-9 text-white/72">{t.about.text}</p>
          <div className="grid gap-4 sm:grid-cols-3">
            {t.about.values.map(([title, desc], index) => {
              const Icon = icons[index];
              return (
                <div
                  key={title}
                  className="rounded-2xl glass p-6 transition hover:border-pink-hot/40"
                >
                  <div className="mb-4 grid h-11 w-11 place-items-center rounded-xl bg-gradient-pink">
                    <Icon size={20} className="text-white" />
                  </div>
                  <div className="mb-1 font-bold text-white">{title}</div>
                  <div className="text-sm leading-6 text-white/62">{desc}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------- MEMBERSHIPS ------------------------------- */
export function Memberships() {
  const { t, dir } = useI18n();

  return (
    <section id="memberships" className="relative overflow-hidden bg-[#0c0c0e] py-24">
      <div className="absolute inset-0 -z-10 luxury-grid" />
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader eyebrow={t.memberships.eyebrow} title={t.memberships.title} />
        <p className="mx-auto mt-5 max-w-2xl text-center text-sm leading-7 text-white/62">
          {t.memberships.note}
        </p>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {t.memberships.plans.map((plan) => (
            <div
              key={plan.period}
              className={cx(
                "relative overflow-hidden rounded-[1.75rem] p-6 transition hover:-translate-y-1",
                plan.highlight ? "glass-pink glow-pink" : "glass",
              )}
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-pink" />
              <div className="mb-6 flex items-center justify-between gap-4">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-pink text-white shadow-card">
                  <BadgeDollarSign size={22} />
                </div>
                {plan.highlight && (
                  <span className="rounded-full border border-pink-hot/40 bg-pink-hot/15 px-3 py-1 text-xs font-bold text-pink-soft">
                    {t.memberships.bestValue}
                  </span>
                )}
              </div>
              <div
                className={cx("text-sm font-semibold text-white/60", dir === "rtl" && "text-right")}
              >
                {plan.period}
              </div>
              <div
                className={cx(
                  "mt-3 font-display text-4xl font-black text-white",
                  dir === "rtl" && "text-right",
                )}
              >
                {plan.price}
              </div>
              <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Hi! I want to subscribe to Miss Gym: ${plan.period} - ${plan.price}`)}`}
                target="_blank"
                rel="noreferrer"
                className="mt-7 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-pink py-3 text-sm font-semibold text-white transition hover:scale-[1.02]"
              >
                <MessageCircle size={16} /> {t.memberships.cta}
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
  const { t, lang } = useI18n();
  const [items] = useGallery();
  const cats = ["All", "Gym Place", "Equipment", "Classes", "Protein Bar"] as const;
  const catLabels = t.gallery.cats;
  const [active, setActive] = useState<(typeof cats)[number]>("All");
  const filtered = active === "All" ? items : items.filter((i) => i.category === active);

  return (
    <section id="gallery" className="bg-[#0c0c0e] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader eyebrow={t.gallery.eyebrow} title={t.gallery.title} />
        <div className="mb-10 mt-8 flex flex-wrap justify-center gap-2">
          {cats.map((cat, index) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={cx(
                "rounded-full px-4 py-2 text-sm font-semibold transition",
                active === cat
                  ? "bg-gradient-pink text-white glow-pink"
                  : "glass text-white/70 hover:text-white",
              )}
            >
              {catLabels[index]}
            </button>
          ))}
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((g) => (
            <div
              key={g.id}
              className="group relative aspect-[4/5] overflow-hidden rounded-2xl glass"
            >
              <img
                src={g.image}
                alt={g.title}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <span className="text-[10px] font-bold uppercase tracking-widest text-pink-hot">
                  {lang === "ar" ? catLabels[cats.indexOf(g.category)] : g.category}
                </span>
                <div className="mt-1 text-lg font-bold text-white">{g.title}</div>
                <div className="mt-1 text-xs text-white/70">{g.description}</div>
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
  const { t, lang } = useI18n();
  const [products] = useProducts();
  const cats = ["All", "Drinks", "Protein", "Snacks", "Supplements"] as const;
  const [active, setActive] = useState<(typeof cats)[number]>("All");
  const filtered = active === "All" ? products : products.filter((p) => p.category === active);
  const icons: Partial<Record<(typeof cats)[number], typeof Coffee>> = {
    Drinks: Coffee,
    Protein: Dumbbell,
    Snacks: Apple,
    Supplements: Pill,
  };

  return (
    <section id="menu" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader eyebrow={t.menu.eyebrow} title={t.menu.title} />
        <div className="mt-10 grid items-stretch gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative min-h-[420px] overflow-hidden rounded-[2rem] glass glow-pink">
            <img
              src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1200&q=85"
              alt="Miss Gym coffee drink"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="inline-flex items-center gap-2 rounded-full glass-pink px-4 py-2 text-sm font-semibold text-white">
                <Martini size={16} /> Miss Gym time
              </div>
              <h3 className="mt-4 text-3xl font-black text-white">
                Coffee & protein after training
              </h3>
            </div>
          </div>
          <div className="relative min-h-[420px] overflow-hidden rounded-[2rem] glass">
            <img
              src="https://images.unsplash.com/photo-1622484212385-1d4caa4b8c6e?auto=format&fit=crop&w=1200&q=85"
              alt="Protein bars and healthy snacks"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="inline-flex items-center gap-2 rounded-full glass-pink px-4 py-2 text-sm font-semibold text-white">
                <Sandwich size={16} /> Protein bars, wafers, zero snacks
              </div>
              <h3 className="mt-4 text-3xl font-black text-white">
                Healthy items ready at the gym
              </h3>
            </div>
          </div>
        </div>
        <div className="mb-10 mt-10 flex flex-wrap justify-center gap-2">
          {cats.map((cat, index) => {
            const Icon = icons[cat];
            return (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={cx(
                  "flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition",
                  active === cat
                    ? "bg-gradient-pink text-white glow-pink"
                    : "glass text-white/70 hover:text-white",
                )}
              >
                {Icon && <Icon size={14} />} {t.menu.cats[index]}
              </button>
            );
          })}
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {filtered.map((p) => {
            const label = localizedProductNames[p.name]?.[lang] || p.name;
            return (
              <div
                key={p.id}
                className="group overflow-hidden rounded-2xl glass transition hover:border-pink-hot/40"
              >
                <div className="aspect-square overflow-hidden bg-surface">
                  <img
                    src={p.image}
                    alt={label}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <div className="text-[10px] font-bold uppercase tracking-widest text-pink-hot">
                        {p.category}
                      </div>
                      <div className="mt-1 font-bold text-white">{label}</div>
                    </div>
                    <span
                      className={cx(
                        "rounded-full px-2 py-1 text-[10px] font-bold",
                        p.available
                          ? "bg-green-500/15 text-green-400"
                          : "bg-red-500/15 text-red-400",
                      )}
                    >
                      {p.available ? t.common.available : t.common.soldOut}
                    </span>
                  </div>
                  <div className="mt-2 text-xs text-white/50">{p.description}</div>
                  <div className="mt-3 text-sm font-semibold text-white/80">{p.price}</div>
                  <a
                    href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hi! I'd like to ask about: " + label)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-pink py-2.5 text-sm font-semibold text-white transition hover:scale-[1.02]"
                  >
                    <MessageCircle size={14} /> {t.common.askWhatsapp}
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------- SCHEDULE ------------------------------- */
export function Schedule() {
  const { t } = useI18n();
  return (
    <section id="schedule" className="bg-[#0c0c0e] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader eyebrow={t.schedule.eyebrow} title={t.schedule.title} />
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <ScheduleCard
            title={t.schedule.danya}
            times={["09:00", "11:00", "02:00"]}
            rows={scheduleDanya}
          />
          <ScheduleCard
            title={t.schedule.abeer}
            times={["4:30 - 5:30", "6 - 7", "7:30 - 8:15"]}
            rows={scheduleAbeer}
          />
        </div>
      </div>
    </section>
  );
}

function ScheduleCard({
  title,
  times,
  rows,
}: {
  title: string;
  times: string[];
  rows: ReadonlyArray<{
    day: keyof ReturnType<typeof useI18n>["t"]["schedule"]["days"];
    slots: readonly string[];
  }>;
}) {
  const { t } = useI18n();
  return (
    <div className="overflow-hidden rounded-[1.75rem] border border-pink-hot/25 bg-[#120f12] shadow-card">
      <div className="bg-gradient-to-r from-pink-hot/30 via-pink-hot/12 to-pink-hot/30 px-5 py-4 text-center">
        <div className="font-display text-xl font-black text-white">{title}</div>
      </div>
      <div className="grid grid-cols-[92px_repeat(3,minmax(0,1fr))] border-t border-white/10 text-center text-sm">
        <div className="bg-pink-hot/20 p-3 font-bold text-white" />
        {times.map((time) => (
          <div
            key={time}
            className="border-l border-white/10 bg-pink-hot/15 p-3 font-bold text-pink-soft"
          >
            {time}
          </div>
        ))}
        {rows.map((row) => (
          <div key={row.day} className="contents">
            <div className="border-t border-white/10 bg-pink-hot/20 p-3 font-display text-base font-black uppercase text-white">
              {t.schedule.days[row.day]}
            </div>
            {row.slots.map((slot, index) => (
              <div
                key={`${row.day}-${index}`}
                className="min-h-16 border-l border-t border-white/10 bg-white/[0.03] p-3 font-semibold text-white/90"
              >
                {slot || <span className="text-white/25">-</span>}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------- CLASSES ------------------------------- */
export function Classes() {
  const { t } = useI18n();
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
      toast.error(t.classes.error);
      return;
    }
    setBookings([
      ...bookings,
      { id: newId(), ...form, classType: selectedClass?.name || "", status: "Pending" },
    ]);
    toast.success(t.classes.success);
    setSelected(null);
    setForm({ name: "", phone: "", date: "", time: "", goal: "", notes: "" });
  };

  return (
    <section id="classes" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader eyebrow={t.classes.eyebrow} title={t.classes.title} />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {classes.map((c) => (
            <div
              key={c.id}
              className="group flex flex-col overflow-hidden rounded-2xl glass transition hover:border-pink-hot/40"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={c.image}
                  alt={c.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="text-lg font-bold text-white">{c.name}</div>
                <div className="mt-2 flex flex-wrap items-center gap-4 text-xs text-white/60">
                  <span className="flex items-center gap-1">
                    <Clock size={12} /> {c.duration}
                  </span>
                  <span>{c.trainer}</span>
                </div>
                <div className="mt-3 text-sm font-semibold text-white/80">{c.price}</div>
                <button onClick={() => setSelected(c.id)} className="mt-auto pt-4">
                  <span className="block rounded-xl bg-gradient-pink py-2.5 text-sm font-semibold text-white transition hover:scale-[1.02]">
                    {t.common.bookClass}
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {selectedClass && (
        <div
          className="fixed inset-0 z-[60] grid place-items-center bg-black/80 p-4 backdrop-blur-sm animate-fade-up"
          onClick={() => setSelected(null)}
        >
          <div
            className="relative w-full max-w-lg rounded-3xl border border-white/10 bg-surface p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute right-4 top-4 text-white/60 hover:text-white"
            >
              <X size={20} />
            </button>
            <div className="text-xs font-bold uppercase tracking-widest text-pink-hot">
              {t.classes.booking}
            </div>
            <h3 className="mt-1 text-2xl font-black text-white">{selectedClass.name}</h3>
            <p className="text-sm text-white/60">
              {selectedClass.duration} - {selectedClass.trainer}
            </p>
            <form onSubmit={submit} className="mt-5 space-y-3">
              <Input
                label={t.common.fullName}
                value={form.name}
                onChange={(v) => setForm({ ...form, name: v })}
              />
              <Input
                label={t.common.phone}
                value={form.phone}
                onChange={(v) => setForm({ ...form, phone: v })}
              />
              <div className="grid grid-cols-2 gap-3">
                <Input
                  label={t.common.date}
                  type="date"
                  value={form.date}
                  onChange={(v) => setForm({ ...form, date: v })}
                />
                <Input
                  label={t.common.time}
                  type="time"
                  value={form.time}
                  onChange={(v) => setForm({ ...form, time: v })}
                />
              </div>
              <Input
                label={t.common.goal}
                value={form.goal}
                onChange={(v) => setForm({ ...form, goal: v })}
              />
              <Input
                label={t.common.notes}
                value={form.notes}
                onChange={(v) => setForm({ ...form, notes: v })}
                textarea
              />
              <div className="flex gap-2 pt-2">
                <button
                  type="submit"
                  className="flex-1 rounded-xl bg-gradient-pink py-3 font-semibold text-white"
                >
                  {t.classes.submit}
                </button>
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Hi! I'd like to book: ${selectedClass.name}. Name: ${form.name || "-"}, Date: ${form.date || "-"}, Time: ${form.time || "-"}`)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="grid place-items-center rounded-xl bg-[#25D366] px-4 text-white"
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
      <span className="text-xs font-semibold text-white/60">{label}</span>
      {textarea ? (
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          rows={2}
          className="mt-1 w-full rounded-xl border border-white/10 bg-background px-3 py-2.5 text-sm text-white outline-none transition focus:border-pink-hot"
        />
      ) : (
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="mt-1 w-full rounded-xl border border-white/10 bg-background px-3 py-2.5 text-sm text-white outline-none transition focus:border-pink-hot"
        />
      )}
    </label>
  );
}

/* ------------------------------- LOCATION ------------------------------- */
export function Location() {
  const { t } = useI18n();
  const [settings] = useSettings();
  return (
    <section id="location" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader eyebrow={t.location.eyebrow} title={t.location.title} />
        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <div className="space-y-6 rounded-3xl glass p-8">
            <Info icon={MapPin} label={t.location.address} value={settings.address} />
            <Info icon={Clock} label={t.location.hours} value={settings.hours} />
            <Info icon={Phone} label={t.common.phone} value={settings.phone} />
            <Info icon={Instagram} label={t.common.instagram} value="@missgymjo" />
            <div className="flex flex-wrap gap-3 pt-4">
              <a
                href={settings.mapsLink}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-full bg-gradient-pink px-5 py-3 font-semibold text-white"
              >
                <MapPin size={16} /> {t.location.maps}
              </a>
              <a
                href={`https://wa.me/${settings.whatsapp.replace(/\D/g, "")}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-3 font-semibold text-white"
              >
                <MessageCircle size={16} /> {t.common.whatsapp}
              </a>
            </div>
          </div>
          <div className="relative grid aspect-[4/3] place-items-center overflow-hidden rounded-3xl glass p-8 text-center lg:aspect-auto">
            <div className="absolute inset-0 bg-gradient-to-br from-pink-hot/12 to-transparent" />
            <div className="relative">
              <MapPin size={48} className="mx-auto mb-4 text-pink-hot" />
              <div className="font-bold text-white">{t.location.mapTitle}</div>
              <div className="mt-2 max-w-xs text-sm text-white/60">{t.location.mapText}</div>
              <a
                href={settings.mapsLink}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-pink-hot hover:underline"
              >
                {t.location.mapLink} <ExternalLink size={14} />
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
      <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gradient-pink">
        <Icon size={18} />
      </div>
      <div className="min-w-0">
        <div className="text-xs font-bold uppercase tracking-widest text-pink-hot">{label}</div>
        <div className="mt-1 text-white">{value}</div>
      </div>
    </div>
  );
}

/* ------------------------------- OFFERS ------------------------------- */
export function Offers() {
  const { t } = useI18n();
  const [offers] = useOffers();
  return (
    <section className="bg-[#0c0c0e] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader eyebrow={t.offers.eyebrow} title={t.offers.title} />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {offers
            .filter((o) => o.active)
            .map((o) => (
              <div
                key={o.id}
                className="group overflow-hidden rounded-3xl glass transition hover:border-pink-hot/40"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={o.image}
                    alt={o.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute left-3 top-3 rounded-full glass-pink px-3 py-1 text-[10px] font-bold uppercase tracking-widest">
                    {t.offers.limited}
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-lg font-bold text-white">{o.title}</div>
                  <p className="mt-2 text-sm text-white/60">{o.description}</p>
                  <div className="mt-3 text-xs text-white/50">
                    {t.offers.valid} {o.validUntil}
                  </div>
                  <a
                    href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hi! I'd like to ask about the offer: " + o.title)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-pink py-2.5 text-sm font-semibold text-white"
                  >
                    {t.offers.ask}
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
  const { t } = useI18n();
  const messages = [
    { role: "user", text: t.assistant.questions[0] },
    { role: "ai", text: t.assistant.text },
  ];
  return (
    <section className="relative overflow-hidden py-24">
      <div className="absolute inset-0 -z-10 luxury-grid" />
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2">
        <div>
          <div className="mb-5 inline-flex items-center gap-2 rounded-full glass-pink px-3 py-1 text-xs font-bold">
            <Sparkles size={12} /> {t.assistant.eyebrow}
          </div>
          <h2 className="text-4xl font-black md:text-5xl">
            {t.assistant.titleA} <br />
            <span className="text-gradient-pink">{t.assistant.titleB}</span>
          </h2>
          <p className="mt-5 max-w-lg leading-8 text-white/70">{t.assistant.text}</p>
          <ul className="mt-6 space-y-3 text-sm text-white/70">
            {t.assistant.questions.map((q) => (
              <li key={q} className="flex items-start gap-2">
                <ChevronRight size={16} className="mt-0.5 shrink-0 text-pink-hot" /> {q}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-3xl glass p-5 glow-pink">
          <div className="flex items-center gap-3 border-b border-white/10 pb-4">
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-pink animate-pulse-glow">
              <Bot size={18} />
            </div>
            <div>
              <div className="text-sm font-bold text-white">Miss Gym Assistant</div>
              <div className="text-[10px] text-pink-soft">Demo preview</div>
            </div>
          </div>
          <div className="max-h-[300px] space-y-3 overflow-y-auto py-4">
            {messages.map((m, i) => (
              <div
                key={i}
                className={cx("flex", m.role === "user" ? "justify-end" : "justify-start")}
              >
                <div
                  className={cx(
                    "max-w-[80%] rounded-2xl px-4 py-2.5 text-sm",
                    m.role === "user"
                      ? "rounded-br-sm bg-gradient-pink text-white"
                      : "rounded-bl-sm bg-surface-2 text-white/90",
                  )}
                >
                  {m.text}
                </div>
              </div>
            ))}
          </div>
          <div className="flex gap-2 border-t border-white/10 pt-3">
            <input
              disabled
              placeholder={t.assistant.input}
              className="flex-1 rounded-xl border border-white/5 bg-surface-2 px-3 py-2.5 text-sm text-white/60"
            />
            <button
              disabled
              className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-pink"
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
  const { t } = useI18n();
  const [settings] = useSettings();
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success(t.classes.success);
    setForm({ name: "", phone: "", message: "" });
  };

  return (
    <section id="contact" className="bg-[#0c0c0e] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader eyebrow={t.contact.eyebrow} title={t.contact.title} />
        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <div className="space-y-4">
            <a
              href={`https://wa.me/${settings.whatsapp.replace(/\D/g, "")}`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 rounded-2xl glass p-5 transition hover:border-[#25D366]/50"
            >
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-[#25D366]">
                <MessageCircle />
              </div>
              <div>
                <div className="text-xs text-white/50">{t.common.whatsapp}</div>
                <div className="font-bold text-white">{t.contact.chat}</div>
              </div>
            </a>
            <a
              href={`tel:${settings.phone}`}
              className="flex items-center gap-4 rounded-2xl glass p-5 transition hover:border-pink-hot/50"
            >
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-pink">
                <Phone />
              </div>
              <div>
                <div className="text-xs text-white/50">{t.common.phone}</div>
                <div className="font-bold text-white">{settings.phone}</div>
              </div>
            </a>
            <a
              href={settings.instagram}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 rounded-2xl glass p-5 transition hover:border-pink-hot/50"
            >
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-pink">
                <Instagram />
              </div>
              <div>
                <div className="text-xs text-white/50">{t.common.instagram}</div>
                <div className="font-bold text-white">@missgymjo</div>
              </div>
            </a>
          </div>
          <form onSubmit={submit} className="space-y-3 rounded-3xl glass p-7">
            <Input
              label={t.common.name}
              value={form.name}
              onChange={(v) => setForm({ ...form, name: v })}
            />
            <Input
              label={t.common.phone}
              value={form.phone}
              onChange={(v) => setForm({ ...form, phone: v })}
            />
            <Input
              label={t.common.message}
              value={form.message}
              onChange={(v) => setForm({ ...form, message: v })}
              textarea
            />
            <button className="mt-2 w-full rounded-xl bg-gradient-pink py-3 font-semibold text-white">
              {t.common.send}
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
      <div className="inline-block text-xs font-bold uppercase tracking-[0.3em] text-pink-hot">
        {eyebrow}
      </div>
      <h2 className="mt-3 text-4xl font-black md:text-5xl">{title}</h2>
      <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-gradient-pink" />
    </div>
  );
}
