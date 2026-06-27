// Mock data store backed by localStorage for the admin demo.
import { useEffect, useState } from "react";

export type Product = {
  id: string;
  name: string;
  category: "Drinks" | "Protein" | "Snacks" | "Supplements";
  price: string;
  image: string;
  available: boolean;
  description: string;
};
export type GalleryItem = {
  id: string;
  title: string;
  category: "Gym Place" | "Equipment" | "Classes" | "Protein Bar";
  image: string;
  description: string;
};
export type ClassItem = {
  id: string;
  name: string;
  duration: string;
  trainer: string;
  price: string;
  image: string;
  available: boolean;
  description: string;
};
export type Booking = {
  id: string;
  name: string;
  phone: string;
  classType: string;
  date: string;
  time: string;
  goal: string;
  notes: string;
  status: "Pending" | "Confirmed" | "Cancelled" | "Contacted";
};
export type Offer = {
  id: string;
  title: string;
  description: string;
  image: string;
  validUntil: string;
  active: boolean;
};
export type Settings = {
  gymName: string;
  phone: string;
  whatsapp: string;
  instagram: string;
  facebook: string;
  mapsLink: string;
  address: string;
  hours: string;
};

const uid = () => Math.random().toString(36).slice(2, 10);

const img = (q: string, n = 1) =>
  `https://images.unsplash.com/photo-${q}?auto=format&fit=crop&w=1200&q=80&sig=${n}`;

export const defaultSettings: Settings = {
  gymName: "Miss Gym Fitness",
  phone: "+962 79 257 0090",
  whatsapp: "+962792570090",
  instagram: "https://www.instagram.com/missgymjo/",
  facebook: "https://facebook.com/missgym",
  mapsLink: "https://maps.app.goo.gl/FdX8UUSwYnJjog3z9",
  address: "Jordan - Miss Gym Fitness",
  hours: "Daily: 8:00 AM - 9:00 PM",
};

export const defaultProducts: Product[] = [
  {
    id: uid(),
    name: "Whey Protein Shake",
    category: "Protein",
    price: "Ask for price",
    image:
      "https://images.unsplash.com/photo-1622818425825-aacd2c7e4f2a?auto=format&fit=crop&w=900&q=80",
    available: true,
    description: "Chocolate, vanilla & strawberry",
  },
  {
    id: uid(),
    name: "Iced Coffee",
    category: "Drinks",
    price: "Ask for price",
    image:
      "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=900&q=80",
    available: true,
    description: "Cold brew with oat milk",
  },
  {
    id: uid(),
    name: "Hot Coffee",
    category: "Drinks",
    price: "Ask for price",
    image:
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=900&q=80",
    available: true,
    description: "Freshly brewed espresso",
  },
  {
    id: uid(),
    name: "Protein Bar",
    category: "Protein",
    price: "Ask for price",
    image:
      "https://images.unsplash.com/photo-1622484212385-1d4caa4b8c6e?auto=format&fit=crop&w=900&q=80",
    available: true,
    description: "20g protein, low sugar",
  },
  {
    id: uid(),
    name: "Zero Biscuits",
    category: "Snacks",
    price: "Ask for price",
    image:
      "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=900&q=80",
    available: true,
    description: "Zero sugar biscuits and cookies",
  },
  {
    id: uid(),
    name: "Protein Wafer",
    category: "Snacks",
    price: "Ask for price",
    image:
      "https://images.unsplash.com/photo-1606312619070-d48b4c652a52?auto=format&fit=crop&w=900&q=80",
    available: true,
    description: "Light wafers and protein snacks",
  },
  {
    id: uid(),
    name: "Mineral Water",
    category: "Drinks",
    price: "Ask for price",
    image:
      "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?auto=format&fit=crop&w=900&q=80",
    available: true,
    description: "500ml bottle",
  },
  {
    id: uid(),
    name: "Healthy Snack Box",
    category: "Snacks",
    price: "Ask for price",
    image:
      "https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?auto=format&fit=crop&w=900&q=80",
    available: false,
    description: "Mixed nuts & dried fruit",
  },
  {
    id: uid(),
    name: "BCAA Supplement",
    category: "Supplements",
    price: "Ask for price",
    image:
      "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?auto=format&fit=crop&w=900&q=80",
    available: true,
    description: "Recovery & endurance",
  },
  {
    id: uid(),
    name: "Pre-Workout",
    category: "Supplements",
    price: "Ask for price",
    image:
      "https://images.unsplash.com/photo-1579722821273-0f6c1b5d0c4b?auto=format&fit=crop&w=900&q=80",
    available: true,
    description: "Clean energy boost",
  },
];

export const defaultGallery: GalleryItem[] = [
  {
    id: uid(),
    title: "Main Training Floor",
    category: "Gym Place",
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80",
    description: "Spacious, bright, women-only space",
  },
  {
    id: uid(),
    title: "Cardio Zone",
    category: "Equipment",
    image:
      "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=1200&q=80",
    description: "Modern treadmills & bikes",
  },
  {
    id: uid(),
    title: "Strength Area",
    category: "Equipment",
    image:
      "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1200&q=80",
    description: "Free weights & racks",
  },
  {
    id: uid(),
    title: "Zumba Class",
    category: "Classes",
    image:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=80",
    description: "High-energy group sessions",
  },
  {
    id: uid(),
    title: "Dance Studio",
    category: "Classes",
    image:
      "https://images.unsplash.com/photo-1547153760-18fc86324498?auto=format&fit=crop&w=1200&q=80",
    description: "Mirrored studio with sound system",
  },
  {
    id: uid(),
    title: "Coffee Time",
    category: "Protein Bar",
    image:
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1200&q=80",
    description: "Coffee, shakes & post-workout drinks",
  },
  {
    id: uid(),
    title: "Protein Snacks",
    category: "Protein Bar",
    image:
      "https://images.unsplash.com/photo-1622484212385-1d4caa4b8c6e?auto=format&fit=crop&w=1200&q=80",
    description: "Protein bars, wafers and healthy snacks",
  },
  {
    id: uid(),
    title: "Functional Zone",
    category: "Equipment",
    image:
      "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1200&q=80",
    description: "Kettlebells & TRX",
  },
  {
    id: uid(),
    title: "Lounge Area",
    category: "Gym Place",
    image:
      "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?auto=format&fit=crop&w=1200&q=80",
    description: "Relax between sessions",
  },
];

export const defaultClasses: ClassItem[] = [
  {
    id: uid(),
    name: "Private Fitness Session",
    duration: "60 min",
    trainer: "Coach Lana",
    price: "Ask for price",
    image:
      "https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=1200&q=80",
    available: true,
    description: "One-on-one tailored workout",
  },
  {
    id: uid(),
    name: "Dance Class",
    duration: "45 min",
    trainer: "Coach Mira",
    price: "Ask for price",
    image:
      "https://images.unsplash.com/photo-1508973379184-7517410fb0bc?auto=format&fit=crop&w=1200&q=80",
    available: true,
    description: "Fun, expressive choreography",
  },
  {
    id: uid(),
    name: "Zumba Class",
    duration: "50 min",
    trainer: "Coach Sara",
    price: "Ask for price",
    image:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=80",
    available: true,
    description: "Latin-inspired cardio party",
  },
  {
    id: uid(),
    name: "Personal Training",
    duration: "60 min",
    trainer: "Coach Dina",
    price: "Ask for price",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1200&q=80",
    available: true,
    description: "Personalized coaching plan",
  },
  {
    id: uid(),
    name: "Strength Training",
    duration: "60 min",
    trainer: "Coach Rama",
    price: "Ask for price",
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80",
    available: true,
    description: "Build lean muscle safely",
  },
  {
    id: uid(),
    name: "Weight Loss Program",
    duration: "8 weeks",
    trainer: "Coach Lana",
    price: "Ask for price",
    image:
      "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=1200&q=80",
    available: true,
    description: "Structured progressive program",
  },
  {
    id: uid(),
    name: "Nutrition Guidance",
    duration: "45 min",
    trainer: "Coach Dina",
    price: "Ask for price",
    image:
      "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=1200&q=80",
    available: true,
    description: "Custom nutrition plan",
  },
];

export const defaultOffers: Offer[] = [
  {
    id: uid(),
    title: "Monthly Membership Offer",
    description: "Full access to gym, classes, and protein bar perks.",
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=80",
    validUntil: "End of month",
    active: true,
  },
  {
    id: uid(),
    title: "Private Class Package",
    description: "5 private sessions with personalized coaching.",
    image:
      "https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=1200&q=80",
    validUntil: "Limited time",
    active: true,
  },
  {
    id: uid(),
    title: "Protein Bar Combo",
    description: "Shake + protein bar + water bundle.",
    image:
      "https://images.unsplash.com/photo-1622818425825-aacd2c7e4f2a?auto=format&fit=crop&w=1200&q=80",
    validUntil: "While supplies last",
    active: true,
  },
];

function useLocal<T>(key: string, initial: T) {
  const [val, setVal] = useState<T>(() => {
    if (typeof window === "undefined") return initial;
    try {
      const raw = localStorage.getItem(key);
      return raw ? (JSON.parse(raw) as T) : initial;
    } catch (error) {
      console.warn("Could not read local storage", error);
      return initial;
    }
  });
  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(val));
    } catch (error) {
      console.warn("Could not write local storage", error);
    }
  }, [key, val]);
  return [val, setVal] as const;
}

export const useProducts = () => useLocal("mg_products", defaultProducts);
export const useGallery = () => useLocal("mg_gallery", defaultGallery);
export const useClasses = () => useLocal("mg_classes", defaultClasses);
export const useBookings = () => useLocal<Booking[]>("mg_bookings", []);
export const useOffers = () => useLocal("mg_offers", defaultOffers);
export const useSettings = () => useLocal("mg_settings", defaultSettings);

export const newId = uid;
export { img };
