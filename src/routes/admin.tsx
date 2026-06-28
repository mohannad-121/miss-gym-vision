import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Toaster, toast } from "sonner";
import {
  LayoutDashboard,
  Package,
  Image as ImageIcon,
  Calendar,
  Inbox,
  Tag,
  Settings as SettingsIcon,
  ArrowLeft,
  Plus,
  Trash2,
  Edit3,
  Check,
  X,
  Languages,
} from "lucide-react";
import { Logo } from "@/components/Logo";
import { useLanguage } from "@/lib/language";
import {
  useProducts,
  useGallery,
  useClasses,
  useBookings,
  useOffers,
  useSettings,
  newId,
  type Product,
  type GalleryItem,
  type ClassItem,
  type Offer,
} from "@/lib/mockData";

export const Route = createFileRoute("/admin")({
  head: () => ({ meta: [{ title: "Admin Dashboard - Miss Gym" }] }),
  component: Admin,
});

type Tab = "dashboard" | "products" | "gallery" | "classes" | "bookings" | "offers" | "settings";

function Admin() {
  const { text, toggleLanguage, dir, language } = useLanguage();
  const [tab, setTab] = useState<Tab>("dashboard");

  const nav: { id: Tab; label: string; ar: string; icon: typeof Package }[] = [
    {
      id: "dashboard",
      label: "Dashboard",
      ar: "\u0644\u0648\u062d\u0629 \u0627\u0644\u062a\u062d\u0643\u0645",
      icon: LayoutDashboard,
    },
    {
      id: "products",
      label: "Products",
      ar: "\u0627\u0644\u0645\u0646\u062a\u062c\u0627\u062a",
      icon: Package,
    },
    { id: "gallery", label: "Gallery", ar: "\u0627\u0644\u0635\u0648\u0631", icon: ImageIcon },
    { id: "classes", label: "Classes", ar: "\u0627\u0644\u062d\u0635\u0635", icon: Calendar },
    {
      id: "bookings",
      label: "Bookings",
      ar: "\u0627\u0644\u062d\u062c\u0648\u0632\u0627\u062a",
      icon: Inbox,
    },
    { id: "offers", label: "Offers", ar: "\u0627\u0644\u0639\u0631\u0648\u0636", icon: Tag },
    {
      id: "settings",
      label: "Settings",
      ar: "\u0627\u0644\u0625\u0639\u062f\u0627\u062f\u0627\u062a",
      icon: SettingsIcon,
    },
  ];
  const activeLabel = nav.find((n) => n.id === tab);

  return (
    <div className="min-h-screen bg-background text-foreground flex" dir={dir} lang={language}>
      <Toaster position="top-right" theme="dark" richColors />

      {/* Sidebar */}
      <aside className="w-64 shrink-0 border-r border-white/10 bg-[#0a0a0a] hidden md:flex flex-col">
        <div className="p-5 border-b border-white/10">
          <Logo size="sm" />
        </div>
        <nav className="p-3 space-y-1 flex-1">
          {nav.map((n) => (
            <button
              key={n.id}
              onClick={() => setTab(n.id)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition ${
                tab === n.id
                  ? "bg-gradient-pink text-white glow-pink"
                  : "text-white/70 hover:bg-white/5 hover:text-white"
              }`}
            >
              <n.icon size={16} /> {text(n.label, n.ar)}
            </button>
          ))}
        </nav>
        <Link
          to="/"
          className="m-3 flex items-center gap-2 text-sm text-white/60 hover:text-white px-3 py-2 rounded-xl border border-white/10"
        >
          <ArrowLeft size={14} />{" "}
          {text(
            "Back to Site",
            "\u0627\u0644\u0639\u0648\u062f\u0629 \u0644\u0644\u0645\u0648\u0642\u0639",
          )}
        </Link>
      </aside>

      <div className="flex-1 min-w-0">
        {/* Top bar */}
        <div className="border-b border-white/10 px-6 py-4 flex items-center justify-between gap-4">
          <div>
            <div className="text-xs text-pink-hot font-bold uppercase tracking-widest">
              {text("Admin", "\u0627\u0644\u0625\u062f\u0627\u0631\u0629")}
            </div>
            <h1 className="text-xl font-black text-white capitalize">
              {activeLabel ? text(activeLabel.label, activeLabel.ar) : tab}
            </h1>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={toggleLanguage}
              className="glass px-3 py-1.5 rounded-full text-xs font-semibold"
            >
              <Languages size={13} className="inline me-1" />
              {text("\u0627\u0644\u0639\u0631\u0628\u064a\u0629", "English")}
            </button>
            <div className="glass-pink px-3 py-1.5 rounded-full text-xs font-semibold">
              {text(
                "Demo Preview",
                "\u0645\u0639\u0627\u064a\u0646\u0629 \u062a\u062c\u0631\u064a\u0628\u064a\u0629",
              )}
            </div>
          </div>
        </div>

        {/* Mobile tabs */}
        <div className="md:hidden border-b border-white/10 overflow-x-auto flex gap-1 p-2">
          {nav.map((n) => (
            <button
              key={n.id}
              onClick={() => setTab(n.id)}
              className={`px-3 py-1.5 rounded-lg text-xs shrink-0 ${tab === n.id ? "bg-gradient-pink text-white" : "text-white/60"}`}
            >
              {text(n.label, n.ar)}
            </button>
          ))}
        </div>

        <div className="p-6 max-w-7xl">
          <div className="glass-pink rounded-2xl px-5 py-3 text-sm text-white mb-6">
            {text(
              "This is an admin dashboard preview. Real login and database can be added in the full version.",
              "\u0647\u0630\u0647 \u0645\u0639\u0627\u064a\u0646\u0629 \u0644\u0644\u0648\u062d\u0629 \u0627\u0644\u0625\u062f\u0627\u0631\u064a\u0629. \u064a\u0645\u0643\u0646 \u0625\u0636\u0627\u0641\u0629 \u062a\u0633\u062c\u064a\u0644 \u062f\u062e\u0648\u0644 \u0648\u0642\u0627\u0639\u062f\u0629 \u0628\u064a\u0627\u0646\u0627\u062a \u0641\u064a \u0627\u0644\u0646\u0633\u062e\u0629 \u0627\u0644\u0643\u0627\u0645\u0644\u0629.",
            )}
          </div>

          {tab === "dashboard" && <Dashboard />}
          {tab === "products" && <ProductsAdmin />}
          {tab === "gallery" && <GalleryAdmin />}
          {tab === "classes" && <ClassesAdmin />}
          {tab === "bookings" && <BookingsAdmin />}
          {tab === "offers" && <OffersAdmin />}
          {tab === "settings" && <SettingsAdmin />}
        </div>
      </div>
    </div>
  );
}

/* -------------------- DASHBOARD -------------------- */
function Dashboard() {
  const { text } = useLanguage();
  const [products] = useProducts();
  const [gallery] = useGallery();
  const [bookings] = useBookings();
  const [classes] = useClasses();
  const [offers] = useOffers();

  const stats = [
    {
      label: text(
        "Total Products",
        "\u0625\u062c\u0645\u0627\u0644\u064a \u0627\u0644\u0645\u0646\u062a\u062c\u0627\u062a",
      ),
      value: products.length,
      icon: Package,
    },
    {
      label: text(
        "Available Products",
        "\u0627\u0644\u0645\u0646\u062a\u062c\u0627\u062a \u0627\u0644\u0645\u062a\u0648\u0641\u0631\u0629",
      ),
      value: products.filter((p) => p.available).length,
      icon: Check,
    },
    {
      label: text("Gallery Images", "\u0635\u0648\u0631 \u0627\u0644\u0645\u0639\u0631\u0636"),
      value: gallery.length,
      icon: ImageIcon,
    },
    {
      label: text(
        "Pending Bookings",
        "\u062d\u062c\u0648\u0632\u0627\u062a \u0642\u064a\u062f \u0627\u0644\u0627\u0646\u062a\u0638\u0627\u0631",
      ),
      value: bookings.filter((b) => b.status === "Pending").length,
      icon: Inbox,
    },
    {
      label: text(
        "Active Classes",
        "\u0627\u0644\u062d\u0635\u0635 \u0627\u0644\u0646\u0634\u0637\u0629",
      ),
      value: classes.filter((c) => c.available).length,
      icon: Calendar,
    },
    {
      label: text(
        "Active Offers",
        "\u0627\u0644\u0639\u0631\u0648\u0636 \u0627\u0644\u0646\u0634\u0637\u0629",
      ),
      value: offers.filter((o) => o.active).length,
      icon: Tag,
    },
  ];
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {stats.map((s) => (
        <div key={s.label} className="glass rounded-2xl p-5 flex items-center gap-4">
          <div className="h-12 w-12 rounded-xl bg-gradient-pink grid place-items-center">
            <s.icon size={20} />
          </div>
          <div>
            <div className="text-xs text-white/60 uppercase tracking-wider">{s.label}</div>
            <div className="text-3xl font-black text-white">{s.value}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

/* -------------------- Reusable input -------------------- */
function Field({
  label,
  value,
  onChange,
  type = "text",
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
}) {
  return (
    <label className="block">
      <span className="text-[10px] uppercase tracking-widest text-white/50 font-bold">{label}</span>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-1 w-full bg-background border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:border-pink-hot outline-none"
      />
    </label>
  );
}

function Select({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: readonly string[];
}) {
  return (
    <label className="block">
      <span className="text-[10px] uppercase tracking-widest text-white/50 font-bold">{label}</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-1 w-full bg-background border border-white/10 rounded-lg px-3 py-2 text-sm text-white"
      >
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </label>
  );
}

/* -------------------- PRODUCTS -------------------- */
function ProductsAdmin() {
  const { text } = useLanguage();
  const [items, setItems] = useProducts();
  const [editing, setEditing] = useState<Product | null>(null);

  const blank = (): Product => ({
    id: newId(),
    name: "",
    category: "Drinks",
    price: "Ask for price",
    image: "",
    available: true,
    description: "",
  });
  const save = (p: Product) => {
    setItems(
      items.some((i) => i.id === p.id) ? items.map((i) => (i.id === p.id ? p : i)) : [...items, p],
    );
    toast.success(text("Saved", "\u062a\u0645 \u0627\u0644\u062d\u0641\u0638"));
    setEditing(null);
  };
  const remove = (id: string) => {
    setItems(items.filter((i) => i.id !== id));
    toast.success(text("Deleted", "\u062a\u0645 \u0627\u0644\u062d\u0630\u0641"));
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between">
        <h3 className="text-lg font-bold">
          {text(
            "Manage Products",
            "\u0625\u062f\u0627\u0631\u0629 \u0627\u0644\u0645\u0646\u062a\u062c\u0627\u062a",
          )}
        </h3>
        <button
          onClick={() => setEditing(blank())}
          className="bg-gradient-pink text-white text-sm font-semibold px-4 py-2 rounded-lg flex items-center gap-2"
        >
          <Plus size={14} />{" "}
          {text("Add Product", "\u0625\u0636\u0627\u0641\u0629 \u0645\u0646\u062a\u062c")}
        </button>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((p) => (
          <div key={p.id} className="glass rounded-2xl overflow-hidden">
            <img src={p.image} alt={p.name} className="aspect-video w-full object-cover" />
            <div className="p-4">
              <div className="flex justify-between gap-2">
                <div>
                  <div className="text-[10px] uppercase text-pink-hot font-bold">{p.category}</div>
                  <div className="font-bold">{p.name}</div>
                </div>
                <span
                  className={`text-[10px] px-2 py-1 rounded-full h-fit ${p.available ? "bg-green-500/15 text-green-400" : "bg-red-500/15 text-red-400"}`}
                >
                  {p.available
                    ? text("Available", "\u0645\u062a\u0648\u0641\u0631")
                    : text("Sold Out", "\u063a\u064a\u0631 \u0645\u062a\u0648\u0641\u0631")}
                </span>
              </div>
              <div className="text-xs text-white/50 mt-1">{p.price}</div>
              <div className="flex gap-2 mt-3">
                <button
                  onClick={() => setEditing(p)}
                  className="flex-1 text-xs py-1.5 rounded-lg border border-white/10 hover:border-pink-hot flex items-center justify-center gap-1"
                >
                  <Edit3 size={12} /> {text("Edit", "\u062a\u0639\u062f\u064a\u0644")}
                </button>
                <button
                  onClick={() => remove(p.id)}
                  className="px-3 text-xs py-1.5 rounded-lg border border-white/10 hover:border-red-500 hover:text-red-400"
                >
                  <Trash2 size={12} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {editing && (
        <Modal
          onClose={() => setEditing(null)}
          title={
            items.some((i) => i.id === editing.id)
              ? text("Edit Product", "\u062a\u0639\u062f\u064a\u0644 \u0645\u0646\u062a\u062c")
              : text("New Product", "\u0645\u0646\u062a\u062c \u062c\u062f\u064a\u062f")
          }
        >
          <div className="grid sm:grid-cols-2 gap-3">
            <Field
              label={text("Name", "\u0627\u0644\u0627\u0633\u0645")}
              value={editing.name}
              onChange={(v) => setEditing({ ...editing, name: v })}
            />
            <Select
              label={text("Category", "\u0627\u0644\u0641\u0626\u0629")}
              value={editing.category}
              onChange={(v) => setEditing({ ...editing, category: v as Product["category"] })}
              options={["Drinks", "Protein", "Snacks", "Supplements"]}
            />
            <Field
              label={text("Price", "\u0627\u0644\u0633\u0639\u0631")}
              value={editing.price}
              onChange={(v) => setEditing({ ...editing, price: v })}
            />
            <Field
              label={text(
                "Image URL",
                "\u0631\u0627\u0628\u0637 \u0627\u0644\u0635\u0648\u0631\u0629",
              )}
              value={editing.image}
              onChange={(v) => setEditing({ ...editing, image: v })}
            />
            <Select
              label={text("Availability", "\u0627\u0644\u062a\u0648\u0641\u0631")}
              value={editing.available ? "Available" : "Sold Out"}
              onChange={(v) => setEditing({ ...editing, available: v === "Available" })}
              options={["Available", "Sold Out"]}
            />
            <Field
              label={text("Description", "\u0627\u0644\u0648\u0635\u0641")}
              value={editing.description}
              onChange={(v) => setEditing({ ...editing, description: v })}
            />
          </div>
          <button
            onClick={() => save(editing)}
            className="mt-4 w-full bg-gradient-pink py-2.5 rounded-lg font-semibold"
          >
            {text("Save", "\u062d\u0641\u0638")}
          </button>
        </Modal>
      )}
    </div>
  );
}

/* -------------------- GALLERY -------------------- */
function GalleryAdmin() {
  const { text } = useLanguage();
  const [items, setItems] = useGallery();
  const [editing, setEditing] = useState<GalleryItem | null>(null);
  const blank = (): GalleryItem => ({
    id: newId(),
    title: "",
    category: "Gym Place",
    image: "",
    description: "",
  });
  const save = (g: GalleryItem) => {
    setItems(
      items.some((i) => i.id === g.id) ? items.map((i) => (i.id === g.id ? g : i)) : [...items, g],
    );
    toast.success(text("Saved", "\u062a\u0645 \u0627\u0644\u062d\u0641\u0638"));
    setEditing(null);
  };
  const remove = (id: string) => {
    setItems(items.filter((i) => i.id !== id));
    toast.success(text("Deleted", "\u062a\u0645 \u0627\u0644\u062d\u0630\u0641"));
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between">
        <h3 className="text-lg font-bold">
          {text("Manage Gallery", "\u0625\u062f\u0627\u0631\u0629 \u0627\u0644\u0635\u0648\u0631")}
        </h3>
        <button
          onClick={() => setEditing(blank())}
          className="bg-gradient-pink text-white text-sm font-semibold px-4 py-2 rounded-lg flex items-center gap-2"
        >
          <Plus size={14} />{" "}
          {text("Add Image", "\u0625\u0636\u0627\u0641\u0629 \u0635\u0648\u0631\u0629")}
        </button>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {items.map((g) => (
          <div key={g.id} className="glass rounded-xl overflow-hidden">
            <img src={g.image} alt={g.title} className="aspect-square w-full object-cover" />
            <div className="p-3">
              <div className="text-[10px] uppercase text-pink-hot font-bold">{g.category}</div>
              <div className="font-bold text-sm">{g.title}</div>
              <div className="flex gap-2 mt-2">
                <button
                  onClick={() => setEditing(g)}
                  className="flex-1 text-[11px] py-1 rounded border border-white/10"
                >
                  <Edit3 size={10} className="inline" />{" "}
                  {text("Edit", "\u062a\u0639\u062f\u064a\u0644")}
                </button>
                <button
                  onClick={() => remove(g.id)}
                  className="px-2 py-1 rounded border border-white/10 hover:text-red-400"
                >
                  <Trash2 size={10} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {editing && (
        <Modal
          onClose={() => setEditing(null)}
          title={text(
            "Gallery Item",
            "\u0639\u0646\u0635\u0631 \u0627\u0644\u0645\u0639\u0631\u0636",
          )}
        >
          <div className="grid sm:grid-cols-2 gap-3">
            <Field
              label={text("Title", "\u0627\u0644\u0639\u0646\u0648\u0627\u0646")}
              value={editing.title}
              onChange={(v) => setEditing({ ...editing, title: v })}
            />
            <Select
              label={text("Category", "\u0627\u0644\u0641\u0626\u0629")}
              value={editing.category}
              onChange={(v) => setEditing({ ...editing, category: v as GalleryItem["category"] })}
              options={["Gym Place", "Equipment", "Classes", "Protein Bar"]}
            />
            <Field
              label={text(
                "Image URL",
                "\u0631\u0627\u0628\u0637 \u0627\u0644\u0635\u0648\u0631\u0629",
              )}
              value={editing.image}
              onChange={(v) => setEditing({ ...editing, image: v })}
            />
            <Field
              label={text("Description", "\u0627\u0644\u0648\u0635\u0641")}
              value={editing.description}
              onChange={(v) => setEditing({ ...editing, description: v })}
            />
          </div>
          <button
            onClick={() => save(editing)}
            className="mt-4 w-full bg-gradient-pink py-2.5 rounded-lg font-semibold"
          >
            {text("Save", "\u062d\u0641\u0638")}
          </button>
        </Modal>
      )}
    </div>
  );
}

/* -------------------- CLASSES -------------------- */
function ClassesAdmin() {
  const { text } = useLanguage();
  const [items, setItems] = useClasses();
  const [editing, setEditing] = useState<ClassItem | null>(null);
  const blank = (): ClassItem => ({
    id: newId(),
    name: "",
    duration: "",
    trainer: "",
    price: "Ask for price",
    image: "",
    available: true,
    description: "",
  });
  const save = (c: ClassItem) => {
    setItems(
      items.some((i) => i.id === c.id) ? items.map((i) => (i.id === c.id ? c : i)) : [...items, c],
    );
    toast.success(text("Saved", "\u062a\u0645 \u0627\u0644\u062d\u0641\u0638"));
    setEditing(null);
  };
  const remove = (id: string) => {
    setItems(items.filter((i) => i.id !== id));
    toast.success(text("Deleted", "\u062a\u0645 \u0627\u0644\u062d\u0630\u0641"));
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between">
        <h3 className="text-lg font-bold">
          {text("Manage Classes", "\u0625\u062f\u0627\u0631\u0629 \u0627\u0644\u062d\u0635\u0635")}
        </h3>
        <button
          onClick={() => setEditing(blank())}
          className="bg-gradient-pink text-white text-sm font-semibold px-4 py-2 rounded-lg flex items-center gap-2"
        >
          <Plus size={14} />{" "}
          {text("Add Class", "\u0625\u0636\u0627\u0641\u0629 \u062d\u0635\u0629")}
        </button>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((c) => (
          <div key={c.id} className="glass rounded-2xl overflow-hidden">
            <img src={c.image} alt={c.name} className="aspect-video w-full object-cover" />
            <div className="p-4">
              <div className="font-bold">{c.name}</div>
              <div className="text-xs text-white/60">
                {c.duration} · {c.trainer}
              </div>
              <div className="text-xs text-white/50 mt-1">{c.price}</div>
              <div className="flex gap-2 mt-3">
                <button
                  onClick={() => setEditing(c)}
                  className="flex-1 text-xs py-1.5 rounded-lg border border-white/10 flex items-center justify-center gap-1"
                >
                  <Edit3 size={12} /> {text("Edit", "\u062a\u0639\u062f\u064a\u0644")}
                </button>
                <button
                  onClick={() => remove(c.id)}
                  className="px-3 text-xs py-1.5 rounded-lg border border-white/10 hover:text-red-400"
                >
                  <Trash2 size={12} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {editing && (
        <Modal onClose={() => setEditing(null)} title={text("Class", "\u062d\u0635\u0629")}>
          <div className="grid sm:grid-cols-2 gap-3">
            <Field
              label={text("Class Name", "\u0627\u0633\u0645 \u0627\u0644\u062d\u0635\u0629")}
              value={editing.name}
              onChange={(v) => setEditing({ ...editing, name: v })}
            />
            <Field
              label={text("Duration", "\u0627\u0644\u0645\u062f\u0629")}
              value={editing.duration}
              onChange={(v) => setEditing({ ...editing, duration: v })}
            />
            <Field
              label={text("Trainer", "\u0627\u0644\u0645\u062f\u0631\u0628\u0629")}
              value={editing.trainer}
              onChange={(v) => setEditing({ ...editing, trainer: v })}
            />
            <Field
              label={text("Price", "\u0627\u0644\u0633\u0639\u0631")}
              value={editing.price}
              onChange={(v) => setEditing({ ...editing, price: v })}
            />
            <Field
              label={text(
                "Image URL",
                "\u0631\u0627\u0628\u0637 \u0627\u0644\u0635\u0648\u0631\u0629",
              )}
              value={editing.image}
              onChange={(v) => setEditing({ ...editing, image: v })}
            />
            <Select
              label={text("Availability", "\u0627\u0644\u062a\u0648\u0641\u0631")}
              value={editing.available ? "Available" : "Unavailable"}
              onChange={(v) => setEditing({ ...editing, available: v === "Available" })}
              options={["Available", "Unavailable"]}
            />
            <Field
              label={text("Description", "\u0627\u0644\u0648\u0635\u0641")}
              value={editing.description}
              onChange={(v) => setEditing({ ...editing, description: v })}
            />
          </div>
          <button
            onClick={() => save(editing)}
            className="mt-4 w-full bg-gradient-pink py-2.5 rounded-lg font-semibold"
          >
            {text("Save", "\u062d\u0641\u0638")}
          </button>
        </Modal>
      )}
    </div>
  );
}

/* -------------------- BOOKINGS -------------------- */
function BookingsAdmin() {
  const { text } = useLanguage();
  const [bookings, setBookings] = useBookings();
  const setStatus = (id: string, status: "Confirmed" | "Cancelled" | "Contacted") => {
    setBookings(bookings.map((b) => (b.id === id ? { ...b, status } : b)));
    toast.success(
      text(
        `Marked as ${status}`,
        "\u062a\u0645 \u062a\u062d\u062f\u064a\u062b \u0627\u0644\u062d\u0627\u0644\u0629",
      ),
    );
  };

  if (!bookings.length) {
    return (
      <div className="glass rounded-2xl p-10 text-center text-white/60">
        {text(
          "No bookings yet. Submit one from the homepage to see it here.",
          "\u0644\u0627 \u062a\u0648\u062c\u062f \u062d\u062c\u0648\u0632\u0627\u062a \u0628\u0639\u062f.",
        )}
      </div>
    );
  }

  return (
    <div className="glass rounded-2xl overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-white/5 text-left text-xs uppercase tracking-wider text-white/60">
            <tr>
              {[
                text("Customer", "\u0627\u0644\u0639\u0645\u064a\u0644\u0629"),
                text("Phone", "\u0627\u0644\u0647\u0627\u062a\u0641"),
                text("Class", "\u0627\u0644\u062d\u0635\u0629"),
                text("Date", "\u0627\u0644\u062a\u0627\u0631\u064a\u062e"),
                text("Time", "\u0627\u0644\u0648\u0642\u062a"),
                text("Goal", "\u0627\u0644\u0647\u062f\u0641"),
                text("Status", "\u0627\u0644\u062d\u0627\u0644\u0629"),
                text("Actions", "\u0625\u062c\u0631\u0627\u0621\u0627\u062a"),
              ].map((h) => (
                <th key={h} className="px-4 py-3">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {bookings.map((b) => (
              <tr key={b.id} className="border-t border-white/5">
                <td className="px-4 py-3 font-semibold">{b.name}</td>
                <td className="px-4 py-3 text-white/70">{b.phone}</td>
                <td className="px-4 py-3 text-white/70">{b.classType}</td>
                <td className="px-4 py-3 text-white/70">{b.date || "—"}</td>
                <td className="px-4 py-3 text-white/70">{b.time || "—"}</td>
                <td className="px-4 py-3 text-white/70">{b.goal || "—"}</td>
                <td className="px-4 py-3">
                  <span
                    className={`text-[10px] px-2 py-1 rounded-full font-bold ${
                      b.status === "Confirmed"
                        ? "bg-green-500/15 text-green-400"
                        : b.status === "Cancelled"
                          ? "bg-red-500/15 text-red-400"
                          : b.status === "Contacted"
                            ? "bg-blue-500/15 text-blue-400"
                            : "bg-yellow-500/15 text-yellow-400"
                    }`}
                  >
                    {b.status}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <div className="flex gap-1">
                    <button
                      onClick={() => setStatus(b.id, "Confirmed")}
                      title="Confirm"
                      className="p-1.5 rounded border border-white/10 hover:border-green-500 hover:text-green-400"
                    >
                      <Check size={12} />
                    </button>
                    <button
                      onClick={() => setStatus(b.id, "Contacted")}
                      title="Contacted"
                      className="p-1.5 rounded border border-white/10 hover:border-blue-500 hover:text-blue-400"
                    >
                      <Inbox size={12} />
                    </button>
                    <button
                      onClick={() => setStatus(b.id, "Cancelled")}
                      title="Cancel"
                      className="p-1.5 rounded border border-white/10 hover:border-red-500 hover:text-red-400"
                    >
                      <X size={12} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

/* -------------------- OFFERS -------------------- */
function OffersAdmin() {
  const { text } = useLanguage();
  const [items, setItems] = useOffers();
  const [editing, setEditing] = useState<Offer | null>(null);
  const blank = (): Offer => ({
    id: newId(),
    title: "",
    description: "",
    image: "",
    validUntil: "",
    active: true,
  });
  const save = (o: Offer) => {
    setItems(
      items.some((i) => i.id === o.id) ? items.map((i) => (i.id === o.id ? o : i)) : [...items, o],
    );
    toast.success(text("Saved", "\u062a\u0645 \u0627\u0644\u062d\u0641\u0638"));
    setEditing(null);
  };
  const remove = (id: string) => {
    setItems(items.filter((i) => i.id !== id));
    toast.success(text("Deleted", "\u062a\u0645 \u0627\u0644\u062d\u0630\u0641"));
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between">
        <h3 className="text-lg font-bold">
          {text(
            "Manage Offers",
            "\u0625\u062f\u0627\u0631\u0629 \u0627\u0644\u0639\u0631\u0648\u0636",
          )}
        </h3>
        <button
          onClick={() => setEditing(blank())}
          className="bg-gradient-pink text-white text-sm font-semibold px-4 py-2 rounded-lg flex items-center gap-2"
        >
          <Plus size={14} />{" "}
          {text("Add Offer", "\u0625\u0636\u0627\u0641\u0629 \u0639\u0631\u0636")}
        </button>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((o) => (
          <div key={o.id} className="glass rounded-2xl overflow-hidden">
            <img src={o.image} alt={o.title} className="aspect-video w-full object-cover" />
            <div className="p-4">
              <div className="flex justify-between gap-2">
                <div className="font-bold">{o.title}</div>
                <span
                  className={`text-[10px] px-2 py-1 rounded-full h-fit ${o.active ? "bg-green-500/15 text-green-400" : "bg-white/5 text-white/40"}`}
                >
                  {o.active
                    ? text("Active", "\u0646\u0634\u0637")
                    : text("Inactive", "\u063a\u064a\u0631 \u0646\u0634\u0637")}
                </span>
              </div>
              <p className="text-xs text-white/60 mt-1">{o.description}</p>
              <div className="flex gap-2 mt-3">
                <button
                  onClick={() => setEditing(o)}
                  className="flex-1 text-xs py-1.5 rounded-lg border border-white/10"
                >
                  <Edit3 size={12} className="inline" />{" "}
                  {text("Edit", "\u062a\u0639\u062f\u064a\u0644")}
                </button>
                <button
                  onClick={() => remove(o.id)}
                  className="px-3 text-xs py-1.5 rounded-lg border border-white/10 hover:text-red-400"
                >
                  <Trash2 size={12} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {editing && (
        <Modal onClose={() => setEditing(null)} title={text("Offer", "\u0639\u0631\u0636")}>
          <div className="grid sm:grid-cols-2 gap-3">
            <Field
              label={text("Title", "\u0627\u0644\u0639\u0646\u0648\u0627\u0646")}
              value={editing.title}
              onChange={(v) => setEditing({ ...editing, title: v })}
            />
            <Field
              label={text("Valid Until", "\u0635\u0627\u0644\u062d \u062d\u062a\u0649")}
              value={editing.validUntil}
              onChange={(v) => setEditing({ ...editing, validUntil: v })}
            />
            <Field
              label={text(
                "Image URL",
                "\u0631\u0627\u0628\u0637 \u0627\u0644\u0635\u0648\u0631\u0629",
              )}
              value={editing.image}
              onChange={(v) => setEditing({ ...editing, image: v })}
            />
            <Select
              label={text("Status", "\u0627\u0644\u062d\u0627\u0644\u0629")}
              value={editing.active ? "Active" : "Inactive"}
              onChange={(v) => setEditing({ ...editing, active: v === "Active" })}
              options={["Active", "Inactive"]}
            />
            <div className="sm:col-span-2">
              <Field
                label={text("Description", "\u0627\u0644\u0648\u0635\u0641")}
                value={editing.description}
                onChange={(v) => setEditing({ ...editing, description: v })}
              />
            </div>
          </div>
          <button
            onClick={() => save(editing)}
            className="mt-4 w-full bg-gradient-pink py-2.5 rounded-lg font-semibold"
          >
            {text("Save", "\u062d\u0641\u0638")}
          </button>
        </Modal>
      )}
    </div>
  );
}

/* -------------------- SETTINGS -------------------- */
function SettingsAdmin() {
  const { text } = useLanguage();
  const [settings, setSettings] = useSettings();
  return (
    <div className="glass rounded-2xl p-6 max-w-2xl">
      <div className="grid sm:grid-cols-2 gap-4">
        <Field
          label={text("Gym Name", "\u0627\u0633\u0645 \u0627\u0644\u0646\u0627\u062f\u064a")}
          value={settings.gymName}
          onChange={(v) => setSettings({ ...settings, gymName: v })}
        />
        <Field
          label={text("Phone Number", "\u0631\u0642\u0645 \u0627\u0644\u0647\u0627\u062a\u0641")}
          value={settings.phone}
          onChange={(v) => setSettings({ ...settings, phone: v })}
        />
        <Field
          label={text("WhatsApp Number", "\u0631\u0642\u0645 \u0648\u0627\u062a\u0633\u0627\u0628")}
          value={settings.whatsapp}
          onChange={(v) => setSettings({ ...settings, whatsapp: v })}
        />
        <Field
          label={text(
            "Instagram URL",
            "\u0631\u0627\u0628\u0637 \u0625\u0646\u0633\u062a\u063a\u0631\u0627\u0645",
          )}
          value={settings.instagram}
          onChange={(v) => setSettings({ ...settings, instagram: v })}
        />
        <Field
          label={text(
            "Facebook URL",
            "\u0631\u0627\u0628\u0637 \u0641\u064a\u0633\u0628\u0648\u0643",
          )}
          value={settings.facebook}
          onChange={(v) => setSettings({ ...settings, facebook: v })}
        />
        <Field
          label={text(
            "Google Maps Link",
            "\u0631\u0627\u0628\u0637 \u062e\u0631\u0627\u0626\u0637 Google",
          )}
          value={settings.mapsLink}
          onChange={(v) => setSettings({ ...settings, mapsLink: v })}
        />
        <div className="sm:col-span-2">
          <Field
            label={text("Address", "\u0627\u0644\u0639\u0646\u0648\u0627\u0646")}
            value={settings.address}
            onChange={(v) => setSettings({ ...settings, address: v })}
          />
        </div>
        <div className="sm:col-span-2">
          <Field
            label={text(
              "Opening Hours",
              "\u0633\u0627\u0639\u0627\u062a \u0627\u0644\u0639\u0645\u0644",
            )}
            value={settings.hours}
            onChange={(v) => setSettings({ ...settings, hours: v })}
          />
        </div>
      </div>
      <button
        onClick={() =>
          toast.success(
            text(
              "Settings saved",
              "\u062a\u0645 \u062d\u0641\u0638 \u0627\u0644\u0625\u0639\u062f\u0627\u062f\u0627\u062a",
            ),
          )
        }
        className="mt-4 bg-gradient-pink text-white font-semibold px-5 py-2.5 rounded-lg"
      >
        {text(
          "Save Changes",
          "\u062d\u0641\u0638 \u0627\u0644\u062a\u063a\u064a\u064a\u0631\u0627\u062a",
        )}
      </button>
    </div>
  );
}

/* -------------------- Modal -------------------- */
function Modal({
  children,
  onClose,
  title,
}: {
  children: React.ReactNode;
  onClose: () => void;
  title: string;
}) {
  return (
    <div
      className="fixed inset-0 z-[60] bg-black/80 backdrop-blur-sm grid place-items-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-surface rounded-2xl border border-white/10 max-w-2xl w-full p-6 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={onClose} className="absolute top-3 right-3 text-white/60 hover:text-white">
          <X size={18} />
        </button>
        <h3 className="font-black text-lg mb-4">{title}</h3>
        {children}
      </div>
    </div>
  );
}
