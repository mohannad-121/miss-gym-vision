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

const PRODUCT_IMAGES = {
  wheyShake:
    "https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=900&q=80",
  icedCoffee:
    "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=900&q=80",
  hotCoffee:
    "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=900&q=80",
  proteinBar:
    "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=900&q=80",
  mineralWater:
    "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?auto=format&fit=crop&w=900&q=80",
  snackBox:
    "https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?auto=format&fit=crop&w=900&q=80",
  supplements:
    "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?auto=format&fit=crop&w=900&q=80",
} as const;

const WOMEN_FITNESS_IMAGES = {
  studio:
    "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=80",
  strength:
    "https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=1200&q=80",
  training:
    "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1200&q=80",
  dance:
    "https://images.unsplash.com/photo-1547153760-18fc86324498?auto=format&fit=crop&w=1200&q=80",
  nutrition:
    "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=1200&q=80",
} as const;

export const defaultSettings: Settings = {
  gymName: "Miss Gym Fitness",
  phone: "+962792570090",
  whatsapp: "+962792570090",
  instagram: "https://www.instagram.com/missgymjo/",
  facebook: "https://facebook.com/missgym",
  mapsLink: "https://maps.app.goo.gl/FdX8UUSwYnJjog3z9",
  address: "الاوتوستراد مقابل بوظة المنال فوق حلويات الصديق, Zarqa",
  hours: "Daily: 8:00 AM - 9:00 PM",
};

export const defaultProducts: Product[] = [
  {
    id: uid(),
    name: "Whey Protein Shake",
    category: "Protein",
    price: "Ask for price",
    image: PRODUCT_IMAGES.wheyShake,
    available: true,
    description: "Chocolate, vanilla & strawberry",
  },
  {
    id: uid(),
    name: "Iced Coffee",
    category: "Drinks",
    price: "Ask for price",
    image: PRODUCT_IMAGES.icedCoffee,
    available: true,
    description: "Cold brew with oat milk",
  },
  {
    id: uid(),
    name: "Hot Coffee",
    category: "Drinks",
    price: "Ask for price",
    image: PRODUCT_IMAGES.hotCoffee,
    available: true,
    description: "Freshly brewed espresso",
  },
  {
    id: uid(),
    name: "Protein Bar",
    category: "Protein",
    price: "Ask for price",
    image: PRODUCT_IMAGES.proteinBar,
    available: true,
    description: "20g protein, low sugar",
  },
  {
    id: uid(),
    name: "Mineral Water",
    category: "Drinks",
    price: "Ask for price",
    image: PRODUCT_IMAGES.mineralWater,
    available: true,
    description: "500ml bottle",
  },
  {
    id: uid(),
    name: "Healthy Snack Box",
    category: "Snacks",
    price: "Ask for price",
    image: PRODUCT_IMAGES.snackBox,
    available: false,
    description: "Mixed nuts & dried fruit",
  },
  {
    id: uid(),
    name: "BCAA Supplement",
    category: "Supplements",
    price: "Ask for price",
    image: PRODUCT_IMAGES.supplements,
    available: true,
    description: "Recovery & endurance",
  },
  {
    id: uid(),
    name: "Pre-Workout",
    category: "Supplements",
    price: "Ask for price",
    image: PRODUCT_IMAGES.supplements,
    available: true,
    description: "Clean energy boost",
  },
];

export const defaultGallery: GalleryItem[] = [
  {
    id: uid(),
    title: "Main Training Floor",
    category: "Gym Place",
    image: WOMEN_FITNESS_IMAGES.studio,
    description: "Spacious, bright, women-only space",
  },
  {
    id: uid(),
    title: "Cardio Zone",
    category: "Equipment",
    image: WOMEN_FITNESS_IMAGES.training,
    description: "Modern treadmills & bikes",
  },
  {
    id: uid(),
    title: "Strength Area",
    category: "Equipment",
    image: WOMEN_FITNESS_IMAGES.strength,
    description: "Free weights & racks",
  },
  {
    id: uid(),
    title: "Zumba Class",
    category: "Classes",
    image: WOMEN_FITNESS_IMAGES.studio,
    description: "High-energy group sessions",
  },
  {
    id: uid(),
    title: "Dance Studio",
    category: "Classes",
    image: WOMEN_FITNESS_IMAGES.dance,
    description: "Mirrored studio with sound system",
  },
  {
    id: uid(),
    title: "Protein Bar Counter",
    category: "Protein Bar",
    image: PRODUCT_IMAGES.icedCoffee,
    description: "Smoothies, shakes & snacks",
  },
  {
    id: uid(),
    title: "Functional Zone",
    category: "Equipment",
    image: WOMEN_FITNESS_IMAGES.training,
    description: "Kettlebells & TRX",
  },
  {
    id: uid(),
    title: "Lounge Area",
    category: "Gym Place",
    image: WOMEN_FITNESS_IMAGES.studio,
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
    image: WOMEN_FITNESS_IMAGES.training,
    available: true,
    description: "One-on-one tailored workout",
  },
  {
    id: uid(),
    name: "Dance Class",
    duration: "45 min",
    trainer: "Coach Mira",
    price: "Ask for price",
    image: WOMEN_FITNESS_IMAGES.dance,
    available: true,
    description: "Fun, expressive choreography",
  },
  {
    id: uid(),
    name: "Zumba Class",
    duration: "50 min",
    trainer: "Coach Sara",
    price: "Ask for price",
    image: WOMEN_FITNESS_IMAGES.studio,
    available: true,
    description: "Latin-inspired cardio party",
  },
  {
    id: uid(),
    name: "Personal Training",
    duration: "60 min",
    trainer: "Coach Dina",
    price: "Ask for price",
    image: WOMEN_FITNESS_IMAGES.training,
    available: true,
    description: "Personalized coaching plan",
  },
  {
    id: uid(),
    name: "Strength Training",
    duration: "60 min",
    trainer: "Coach Rama",
    price: "Ask for price",
    image: WOMEN_FITNESS_IMAGES.strength,
    available: true,
    description: "Build lean muscle safely",
  },
  {
    id: uid(),
    name: "Weight Loss Program",
    duration: "8 weeks",
    trainer: "Coach Lana",
    price: "Ask for price",
    image: WOMEN_FITNESS_IMAGES.studio,
    available: true,
    description: "Structured progressive program",
  },
  {
    id: uid(),
    name: "Nutrition Guidance",
    duration: "45 min",
    trainer: "Coach Dina",
    price: "Ask for price",
    image: WOMEN_FITNESS_IMAGES.nutrition,
    available: true,
    description: "Custom nutrition plan",
  },
];

export const defaultOffers: Offer[] = [
  {
    id: uid(),
    title: "Monthly Membership Offer",
    description: "Full access to gym, classes, and protein bar perks.",
    image: WOMEN_FITNESS_IMAGES.strength,
    validUntil: "End of month",
    active: true,
  },
  {
    id: uid(),
    title: "Private Class Package",
    description: "5 private sessions with personalized coaching.",
    image: WOMEN_FITNESS_IMAGES.training,
    validUntil: "Limited time",
    active: true,
  },
  {
    id: uid(),
    title: "Protein Bar Combo",
    description: "Shake + protein bar + water bundle.",
    image: PRODUCT_IMAGES.wheyShake,
    validUntil: "While supplies last",
    active: true,
  },
];

const productImagesByName: Record<string, string> = {
  "Whey Protein Shake": PRODUCT_IMAGES.wheyShake,
  "Iced Coffee": PRODUCT_IMAGES.icedCoffee,
  "Hot Coffee": PRODUCT_IMAGES.hotCoffee,
  "Protein Bar": PRODUCT_IMAGES.proteinBar,
  "Mineral Water": PRODUCT_IMAGES.mineralWater,
  "Healthy Snack Box": PRODUCT_IMAGES.snackBox,
  "BCAA Supplement": PRODUCT_IMAGES.supplements,
  "Pre-Workout": PRODUCT_IMAGES.supplements,
};

const galleryImagesByTitle: Record<string, string> = {
  "Main Training Floor": WOMEN_FITNESS_IMAGES.studio,
  "Cardio Zone": WOMEN_FITNESS_IMAGES.training,
  "Strength Area": WOMEN_FITNESS_IMAGES.strength,
  "Zumba Class": WOMEN_FITNESS_IMAGES.studio,
  "Dance Studio": WOMEN_FITNESS_IMAGES.dance,
  "Protein Bar Counter": PRODUCT_IMAGES.icedCoffee,
  "Functional Zone": WOMEN_FITNESS_IMAGES.training,
  "Lounge Area": WOMEN_FITNESS_IMAGES.studio,
};

const classImagesByName: Record<string, string> = {
  "Private Fitness Session": WOMEN_FITNESS_IMAGES.training,
  "Dance Class": WOMEN_FITNESS_IMAGES.dance,
  "Zumba Class": WOMEN_FITNESS_IMAGES.studio,
  "Personal Training": WOMEN_FITNESS_IMAGES.training,
  "Strength Training": WOMEN_FITNESS_IMAGES.strength,
  "Weight Loss Program": WOMEN_FITNESS_IMAGES.studio,
  "Nutrition Guidance": WOMEN_FITNESS_IMAGES.nutrition,
};

const offerImagesByTitle: Record<string, string> = {
  "Monthly Membership Offer": WOMEN_FITNESS_IMAGES.strength,
  "Private Class Package": WOMEN_FITNESS_IMAGES.training,
  "Protein Bar Combo": PRODUCT_IMAGES.wheyShake,
};

const replaceImages = <T extends { image: string }>(
  items: T[],
  byKey: Record<string, string>,
  getKey: (item: T) => string,
) =>
  items.map((item) => ({
    ...item,
    image: byKey[getKey(item)] ?? item.image,
  }));

function useLocal<T>(key: string, initial: T, normalize?: (value: T) => T) {
  const [val, setVal] = useState<T>(() => {
    if (typeof window === "undefined") return initial;
    try {
      const raw = localStorage.getItem(key);
      const value = raw ? (JSON.parse(raw) as T) : initial;
      return normalize ? normalize(value) : value;
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

export const useProducts = () =>
  useLocal("mg_products", defaultProducts, (items) =>
    replaceImages(items, productImagesByName, (item) => item.name),
  );
export const useGallery = () =>
  useLocal("mg_gallery", defaultGallery, (items) =>
    replaceImages(items, galleryImagesByTitle, (item) => item.title),
  );
export const useClasses = () =>
  useLocal("mg_classes", defaultClasses, (items) =>
    replaceImages(items, classImagesByName, (item) => item.name),
  );
export const useBookings = () => useLocal<Booking[]>("mg_bookings", []);
export const useOffers = () =>
  useLocal("mg_offers", defaultOffers, (items) =>
    replaceImages(items, offerImagesByTitle, (item) => item.title),
  );
export const useSettings = () =>
  useLocal("mg_settings", defaultSettings, (settings) => ({
    ...settings,
    phone: defaultSettings.phone,
    whatsapp: defaultSettings.whatsapp,
    address: defaultSettings.address,
    hours: defaultSettings.hours,
  }));

export const newId = uid;
export { img };
