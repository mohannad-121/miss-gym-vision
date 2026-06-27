import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Toaster, toast } from "sonner";
import {
  LayoutDashboard, Package, Image as ImageIcon, Calendar, Inbox,
  Tag, Settings as SettingsIcon, ArrowLeft, Plus, Trash2, Edit3, Check, X,
} from "lucide-react";
import { Logo } from "@/components/Logo";
import {
  useProducts, useGallery, useClasses, useBookings, useOffers, useSettings,
  newId, type Product, type GalleryItem, type ClassItem, type Offer,
} from "@/lib/mockData";

export const Route = createFileRoute("/admin")({
  head: () => ({ meta: [{ title: "Admin Dashboard — Miss Gym" }] }),
  component: Admin,
});

type Tab = "dashboard" | "products" | "gallery" | "classes" | "bookings" | "offers" | "settings";

function Admin() {
  const [tab, setTab] = useState<Tab>("dashboard");

  const nav: { id: Tab; label: string; icon: typeof Package }[] = [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    { id: "products", label: "Products", icon: Package },
    { id: "gallery", label: "Gallery", icon: ImageIcon },
    { id: "classes", label: "Classes", icon: Calendar },
    { id: "bookings", label: "Bookings", icon: Inbox },
    { id: "offers", label: "Offers", icon: Tag },
    { id: "settings", label: "Settings", icon: SettingsIcon },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground flex">
      <Toaster position="top-right" theme="dark" richColors />

      {/* Sidebar */}
      <aside className="w-64 shrink-0 border-r border-white/10 bg-[#0a0a0a] hidden md:flex flex-col">
        <div className="p-5 border-b border-white/10"><Logo size="sm" /></div>
        <nav className="p-3 space-y-1 flex-1">
          {nav.map((n) => (
            <button
              key={n.id}
              onClick={() => setTab(n.id)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition ${
                tab === n.id ? "bg-gradient-pink text-white glow-pink" : "text-white/70 hover:bg-white/5 hover:text-white"
              }`}
            >
              <n.icon size={16} /> {n.label}
            </button>
          ))}
        </nav>
        <Link to="/" className="m-3 flex items-center gap-2 text-sm text-white/60 hover:text-white px-3 py-2 rounded-xl border border-white/10">
          <ArrowLeft size={14} /> Back to Site
        </Link>
      </aside>

      <div className="flex-1 min-w-0">
        {/* Top bar */}
        <div className="border-b border-white/10 px-6 py-4 flex items-center justify-between gap-4">
          <div>
            <div className="text-xs text-pink-hot font-bold uppercase tracking-widest">Admin</div>
            <h1 className="text-xl font-black text-white capitalize">{tab}</h1>
          </div>
          <div className="glass-pink px-3 py-1.5 rounded-full text-xs font-semibold">Demo Preview</div>
        </div>

        {/* Mobile tabs */}
        <div className="md:hidden border-b border-white/10 overflow-x-auto flex gap-1 p-2">
          {nav.map((n) => (
            <button key={n.id} onClick={() => setTab(n.id)}
              className={`px-3 py-1.5 rounded-lg text-xs shrink-0 ${tab === n.id ? "bg-gradient-pink text-white" : "text-white/60"}`}>
              {n.label}
            </button>
          ))}
        </div>

        <div className="p-6 max-w-7xl">
          <div className="glass-pink rounded-2xl px-5 py-3 text-sm text-white mb-6">
            🔒 This is an admin dashboard preview. Real login and database can be added in the full version.
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
  const [products] = useProducts();
  const [gallery] = useGallery();
  const [bookings] = useBookings();
  const [classes] = useClasses();
  const [offers] = useOffers();

  const stats = [
    { label: "Total Products", value: products.length, icon: Package },
    { label: "Available Products", value: products.filter((p) => p.available).length, icon: Check },
    { label: "Gallery Images", value: gallery.length, icon: ImageIcon },
    { label: "Pending Bookings", value: bookings.filter((b) => b.status === "Pending").length, icon: Inbox },
    { label: "Active Classes", value: classes.filter((c) => c.available).length, icon: Calendar },
    { label: "Active Offers", value: offers.filter((o) => o.active).length, icon: Tag },
  ];
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {stats.map((s) => (
        <div key={s.label} className="glass rounded-2xl p-5 flex items-center gap-4">
          <div className="h-12 w-12 rounded-xl bg-gradient-pink grid place-items-center"><s.icon size={20} /></div>
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
function Field({ label, value, onChange, type = "text" }: { label: string; value: string; onChange: (v: string) => void; type?: string }) {
  return (
    <label className="block">
      <span className="text-[10px] uppercase tracking-widest text-white/50 font-bold">{label}</span>
      <input type={type} value={value} onChange={(e) => onChange(e.target.value)}
        className="mt-1 w-full bg-background border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:border-pink-hot outline-none" />
    </label>
  );
}

function Select({ label, value, onChange, options }: { label: string; value: string; onChange: (v: string) => void; options: readonly string[] }) {
  return (
    <label className="block">
      <span className="text-[10px] uppercase tracking-widest text-white/50 font-bold">{label}</span>
      <select value={value} onChange={(e) => onChange(e.target.value)}
        className="mt-1 w-full bg-background border border-white/10 rounded-lg px-3 py-2 text-sm text-white">
        {options.map((o) => <option key={o} value={o}>{o}</option>)}
      </select>
    </label>
  );
}

/* -------------------- PRODUCTS -------------------- */
function ProductsAdmin() {
  const [items, setItems] = useProducts();
  const [editing, setEditing] = useState<Product | null>(null);

  const blank = (): Product => ({ id: newId(), name: "", category: "Drinks", price: "Ask for price", image: "", available: true, description: "" });
  const save = (p: Product) => {
    setItems(items.some((i) => i.id === p.id) ? items.map((i) => i.id === p.id ? p : i) : [...items, p]);
    toast.success("Saved"); setEditing(null);
  };
  const remove = (id: string) => { setItems(items.filter((i) => i.id !== id)); toast.success("Deleted"); };

  return (
    <div className="space-y-4">
      <div className="flex justify-between">
        <h3 className="text-lg font-bold">Manage Products</h3>
        <button onClick={() => setEditing(blank())} className="bg-gradient-pink text-white text-sm font-semibold px-4 py-2 rounded-lg flex items-center gap-2"><Plus size={14} /> Add Product</button>
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
                <span className={`text-[10px] px-2 py-1 rounded-full h-fit ${p.available ? "bg-green-500/15 text-green-400" : "bg-red-500/15 text-red-400"}`}>{p.available ? "Available" : "Sold Out"}</span>
              </div>
              <div className="text-xs text-white/50 mt-1">{p.price}</div>
              <div className="flex gap-2 mt-3">
                <button onClick={() => setEditing(p)} className="flex-1 text-xs py-1.5 rounded-lg border border-white/10 hover:border-pink-hot flex items-center justify-center gap-1"><Edit3 size={12} /> Edit</button>
                <button onClick={() => remove(p.id)} className="px-3 text-xs py-1.5 rounded-lg border border-white/10 hover:border-red-500 hover:text-red-400"><Trash2 size={12} /></button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {editing && (
        <Modal onClose={() => setEditing(null)} title={items.some((i) => i.id === editing.id) ? "Edit Product" : "New Product"}>
          <div className="grid sm:grid-cols-2 gap-3">
            <Field label="Name" value={editing.name} onChange={(v) => setEditing({ ...editing, name: v })} />
            <Select label="Category" value={editing.category} onChange={(v) => setEditing({ ...editing, category: v as Product["category"] })} options={["Drinks", "Protein", "Snacks", "Supplements"]} />
            <Field label="Price" value={editing.price} onChange={(v) => setEditing({ ...editing, price: v })} />
            <Field label="Image URL" value={editing.image} onChange={(v) => setEditing({ ...editing, image: v })} />
            <Select label="Availability" value={editing.available ? "Available" : "Sold Out"} onChange={(v) => setEditing({ ...editing, available: v === "Available" })} options={["Available", "Sold Out"]} />
            <Field label="Description" value={editing.description} onChange={(v) => setEditing({ ...editing, description: v })} />
          </div>
          <button onClick={() => save(editing)} className="mt-4 w-full bg-gradient-pink py-2.5 rounded-lg font-semibold">Save</button>
        </Modal>
      )}
    </div>
  );
}

/* -------------------- GALLERY -------------------- */
function GalleryAdmin() {
  const [items, setItems] = useGallery();
  const [editing, setEditing] = useState<GalleryItem | null>(null);
  const blank = (): GalleryItem => ({ id: newId(), title: "", category: "Gym Place", image: "", description: "" });
  const save = (g: GalleryItem) => {
    setItems(items.some((i) => i.id === g.id) ? items.map((i) => i.id === g.id ? g : i) : [...items, g]);
    toast.success("Saved"); setEditing(null);
  };
  const remove = (id: string) => { setItems(items.filter((i) => i.id !== id)); toast.success("Deleted"); };

  return (
    <div className="space-y-4">
      <div className="flex justify-between">
        <h3 className="text-lg font-bold">Manage Gallery</h3>
        <button onClick={() => setEditing(blank())} className="bg-gradient-pink text-white text-sm font-semibold px-4 py-2 rounded-lg flex items-center gap-2"><Plus size={14} /> Add Image</button>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {items.map((g) => (
          <div key={g.id} className="glass rounded-xl overflow-hidden">
            <img src={g.image} alt={g.title} className="aspect-square w-full object-cover" />
            <div className="p-3">
              <div className="text-[10px] uppercase text-pink-hot font-bold">{g.category}</div>
              <div className="font-bold text-sm">{g.title}</div>
              <div className="flex gap-2 mt-2">
                <button onClick={() => setEditing(g)} className="flex-1 text-[11px] py-1 rounded border border-white/10"><Edit3 size={10} className="inline" /> Edit</button>
                <button onClick={() => remove(g.id)} className="px-2 py-1 rounded border border-white/10 hover:text-red-400"><Trash2 size={10} /></button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {editing && (
        <Modal onClose={() => setEditing(null)} title="Gallery Item">
          <div className="grid sm:grid-cols-2 gap-3">
            <Field label="Title" value={editing.title} onChange={(v) => setEditing({ ...editing, title: v })} />
            <Select label="Category" value={editing.category} onChange={(v) => setEditing({ ...editing, category: v as GalleryItem["category"] })} options={["Gym Place", "Equipment", "Classes", "Protein Bar"]} />
            <Field label="Image URL" value={editing.image} onChange={(v) => setEditing({ ...editing, image: v })} />
            <Field label="Description" value={editing.description} onChange={(v) => setEditing({ ...editing, description: v })} />
          </div>
          <button onClick={() => save(editing)} className="mt-4 w-full bg-gradient-pink py-2.5 rounded-lg font-semibold">Save</button>
        </Modal>
      )}
    </div>
  );
}

/* -------------------- CLASSES -------------------- */
function ClassesAdmin() {
  const [items, setItems] = useClasses();
  const [editing, setEditing] = useState<ClassItem | null>(null);
  const blank = (): ClassItem => ({ id: newId(), name: "", duration: "", trainer: "", price: "Ask for price", image: "", available: true, description: "" });
  const save = (c: ClassItem) => {
    setItems(items.some((i) => i.id === c.id) ? items.map((i) => i.id === c.id ? c : i) : [...items, c]);
    toast.success("Saved"); setEditing(null);
  };
  const remove = (id: string) => { setItems(items.filter((i) => i.id !== id)); toast.success("Deleted"); };

  return (
    <div className="space-y-4">
      <div className="flex justify-between">
        <h3 className="text-lg font-bold">Manage Classes</h3>
        <button onClick={() => setEditing(blank())} className="bg-gradient-pink text-white text-sm font-semibold px-4 py-2 rounded-lg flex items-center gap-2"><Plus size={14} /> Add Class</button>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((c) => (
          <div key={c.id} className="glass rounded-2xl overflow-hidden">
            <img src={c.image} alt={c.name} className="aspect-video w-full object-cover" />
            <div className="p-4">
              <div className="font-bold">{c.name}</div>
              <div className="text-xs text-white/60">{c.duration} · {c.trainer}</div>
              <div className="text-xs text-white/50 mt-1">{c.price}</div>
              <div className="flex gap-2 mt-3">
                <button onClick={() => setEditing(c)} className="flex-1 text-xs py-1.5 rounded-lg border border-white/10 flex items-center justify-center gap-1"><Edit3 size={12} /> Edit</button>
                <button onClick={() => remove(c.id)} className="px-3 text-xs py-1.5 rounded-lg border border-white/10 hover:text-red-400"><Trash2 size={12} /></button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {editing && (
        <Modal onClose={() => setEditing(null)} title="Class">
          <div className="grid sm:grid-cols-2 gap-3">
            <Field label="Class Name" value={editing.name} onChange={(v) => setEditing({ ...editing, name: v })} />
            <Field label="Duration" value={editing.duration} onChange={(v) => setEditing({ ...editing, duration: v })} />
            <Field label="Trainer" value={editing.trainer} onChange={(v) => setEditing({ ...editing, trainer: v })} />
            <Field label="Price" value={editing.price} onChange={(v) => setEditing({ ...editing, price: v })} />
            <Field label="Image URL" value={editing.image} onChange={(v) => setEditing({ ...editing, image: v })} />
            <Select label="Availability" value={editing.available ? "Available" : "Unavailable"} onChange={(v) => setEditing({ ...editing, available: v === "Available" })} options={["Available", "Unavailable"]} />
            <Field label="Description" value={editing.description} onChange={(v) => setEditing({ ...editing, description: v })} />
          </div>
          <button onClick={() => save(editing)} className="mt-4 w-full bg-gradient-pink py-2.5 rounded-lg font-semibold">Save</button>
        </Modal>
      )}
    </div>
  );
}

/* -------------------- BOOKINGS -------------------- */
function BookingsAdmin() {
  const [bookings, setBookings] = useBookings();
  const setStatus = (id: string, status: "Confirmed" | "Cancelled" | "Contacted") => {
    setBookings(bookings.map((b) => b.id === id ? { ...b, status } : b));
    toast.success(`Marked as ${status}`);
  };

  if (!bookings.length) {
    return <div className="glass rounded-2xl p-10 text-center text-white/60">No bookings yet. Submit one from the homepage to see it here.</div>;
  }

  return (
    <div className="glass rounded-2xl overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-white/5 text-left text-xs uppercase tracking-wider text-white/60">
            <tr>
              {["Customer", "Phone", "Class", "Date", "Time", "Goal", "Status", "Actions"].map((h) => (
                <th key={h} className="px-4 py-3">{h}</th>
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
                  <span className={`text-[10px] px-2 py-1 rounded-full font-bold ${
                    b.status === "Confirmed" ? "bg-green-500/15 text-green-400" :
                    b.status === "Cancelled" ? "bg-red-500/15 text-red-400" :
                    b.status === "Contacted" ? "bg-blue-500/15 text-blue-400" :
                    "bg-yellow-500/15 text-yellow-400"
                  }`}>{b.status}</span>
                </td>
                <td className="px-4 py-3">
                  <div className="flex gap-1">
                    <button onClick={() => setStatus(b.id, "Confirmed")} title="Confirm" className="p-1.5 rounded border border-white/10 hover:border-green-500 hover:text-green-400"><Check size={12} /></button>
                    <button onClick={() => setStatus(b.id, "Contacted")} title="Contacted" className="p-1.5 rounded border border-white/10 hover:border-blue-500 hover:text-blue-400"><Inbox size={12} /></button>
                    <button onClick={() => setStatus(b.id, "Cancelled")} title="Cancel" className="p-1.5 rounded border border-white/10 hover:border-red-500 hover:text-red-400"><X size={12} /></button>
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
  const [items, setItems] = useOffers();
  const [editing, setEditing] = useState<Offer | null>(null);
  const blank = (): Offer => ({ id: newId(), title: "", description: "", image: "", validUntil: "", active: true });
  const save = (o: Offer) => {
    setItems(items.some((i) => i.id === o.id) ? items.map((i) => i.id === o.id ? o : i) : [...items, o]);
    toast.success("Saved"); setEditing(null);
  };
  const remove = (id: string) => { setItems(items.filter((i) => i.id !== id)); toast.success("Deleted"); };

  return (
    <div className="space-y-4">
      <div className="flex justify-between">
        <h3 className="text-lg font-bold">Manage Offers</h3>
        <button onClick={() => setEditing(blank())} className="bg-gradient-pink text-white text-sm font-semibold px-4 py-2 rounded-lg flex items-center gap-2"><Plus size={14} /> Add Offer</button>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((o) => (
          <div key={o.id} className="glass rounded-2xl overflow-hidden">
            <img src={o.image} alt={o.title} className="aspect-video w-full object-cover" />
            <div className="p-4">
              <div className="flex justify-between gap-2">
                <div className="font-bold">{o.title}</div>
                <span className={`text-[10px] px-2 py-1 rounded-full h-fit ${o.active ? "bg-green-500/15 text-green-400" : "bg-white/5 text-white/40"}`}>{o.active ? "Active" : "Inactive"}</span>
              </div>
              <p className="text-xs text-white/60 mt-1">{o.description}</p>
              <div className="flex gap-2 mt-3">
                <button onClick={() => setEditing(o)} className="flex-1 text-xs py-1.5 rounded-lg border border-white/10"><Edit3 size={12} className="inline" /> Edit</button>
                <button onClick={() => remove(o.id)} className="px-3 text-xs py-1.5 rounded-lg border border-white/10 hover:text-red-400"><Trash2 size={12} /></button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {editing && (
        <Modal onClose={() => setEditing(null)} title="Offer">
          <div className="grid sm:grid-cols-2 gap-3">
            <Field label="Title" value={editing.title} onChange={(v) => setEditing({ ...editing, title: v })} />
            <Field label="Valid Until" value={editing.validUntil} onChange={(v) => setEditing({ ...editing, validUntil: v })} />
            <Field label="Image URL" value={editing.image} onChange={(v) => setEditing({ ...editing, image: v })} />
            <Select label="Status" value={editing.active ? "Active" : "Inactive"} onChange={(v) => setEditing({ ...editing, active: v === "Active" })} options={["Active", "Inactive"]} />
            <div className="sm:col-span-2"><Field label="Description" value={editing.description} onChange={(v) => setEditing({ ...editing, description: v })} /></div>
          </div>
          <button onClick={() => save(editing)} className="mt-4 w-full bg-gradient-pink py-2.5 rounded-lg font-semibold">Save</button>
        </Modal>
      )}
    </div>
  );
}

/* -------------------- SETTINGS -------------------- */
function SettingsAdmin() {
  const [settings, setSettings] = useSettings();
  return (
    <div className="glass rounded-2xl p-6 max-w-2xl">
      <div className="grid sm:grid-cols-2 gap-4">
        <Field label="Gym Name" value={settings.gymName} onChange={(v) => setSettings({ ...settings, gymName: v })} />
        <Field label="Phone Number" value={settings.phone} onChange={(v) => setSettings({ ...settings, phone: v })} />
        <Field label="WhatsApp Number" value={settings.whatsapp} onChange={(v) => setSettings({ ...settings, whatsapp: v })} />
        <Field label="Instagram URL" value={settings.instagram} onChange={(v) => setSettings({ ...settings, instagram: v })} />
        <Field label="Facebook URL" value={settings.facebook} onChange={(v) => setSettings({ ...settings, facebook: v })} />
        <Field label="Google Maps Link" value={settings.mapsLink} onChange={(v) => setSettings({ ...settings, mapsLink: v })} />
        <div className="sm:col-span-2"><Field label="Address" value={settings.address} onChange={(v) => setSettings({ ...settings, address: v })} /></div>
        <div className="sm:col-span-2"><Field label="Opening Hours" value={settings.hours} onChange={(v) => setSettings({ ...settings, hours: v })} /></div>
      </div>
      <button onClick={() => toast.success("Settings saved")} className="mt-4 bg-gradient-pink text-white font-semibold px-5 py-2.5 rounded-lg">Save Changes</button>
    </div>
  );
}

/* -------------------- Modal -------------------- */
function Modal({ children, onClose, title }: { children: React.ReactNode; onClose: () => void; title: string }) {
  return (
    <div className="fixed inset-0 z-[60] bg-black/80 backdrop-blur-sm grid place-items-center p-4" onClick={onClose}>
      <div className="bg-surface rounded-2xl border border-white/10 max-w-2xl w-full p-6 relative" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="absolute top-3 right-3 text-white/60 hover:text-white"><X size={18} /></button>
        <h3 className="font-black text-lg mb-4">{title}</h3>
        {children}
      </div>
    </div>
  );
}
