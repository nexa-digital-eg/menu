import type { Badge, Allergen, Locale } from "@/data/buffalo-burger";
import { Flame, Star, Sparkles, Tag, Wheat, Milk, Egg, Nut } from "lucide-react";

const badgeConfig: Record<
  Badge,
  { ar: string; en: string; className: string; icon: React.ElementType }
> = {
  bestseller: {
    ar: "الأكثر مبيعاً",
    en: "Bestseller",
    className: "bg-amber-100 text-amber-700",
    icon: Star,
  },
  new: {
    ar: "جديد",
    en: "New",
    className: "bg-emerald-100 text-emerald-700",
    icon: Sparkles,
  },
  spicy: {
    ar: "حار",
    en: "Spicy",
    className: "bg-red-100 text-red-700",
    icon: Flame,
  },
  offer: {
    ar: "عرض",
    en: "Offer",
    className: "bg-purple-100 text-purple-700",
    icon: Tag,
  },
};

export function ItemBadge({ badge, locale }: { badge: Badge; locale: Locale }) {
  const cfg = badgeConfig[badge];
  const Icon = cfg.icon;
  return (
    <span
      className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-bold ${cfg.className}`}
    >
      <Icon className="w-3 h-3" />
      {cfg[locale]}
    </span>
  );
}

const allergenConfig: Record<
  Allergen,
  { ar: string; en: string; icon: React.ElementType }
> = {
  gluten: { ar: "جلوتين", en: "Gluten", icon: Wheat },
  dairy: { ar: "ألبان", en: "Dairy", icon: Milk },
  egg: { ar: "بيض", en: "Egg", icon: Egg },
  sesame: { ar: "سمسم", en: "Sesame", icon: Nut },
  soy: { ar: "صويا", en: "Soy", icon: Nut },
  mustard: { ar: "خردل", en: "Mustard", icon: Nut },
};

export function AllergenList({
  allergens,
  locale,
}: {
  allergens: Allergen[];
  locale: Locale;
}) {
  if (!allergens?.length) return null;
  return (
    <div className="flex flex-wrap items-center gap-1.5 mt-2">
      {allergens.map((a) => {
        const cfg = allergenConfig[a];
        const Icon = cfg.icon;
        return (
          <span
            key={a}
            className="inline-flex items-center gap-1 text-[10px] text-gray-400"
            title={cfg[locale]}
          >
            <Icon className="w-3 h-3" />
            {cfg[locale]}
          </span>
        );
      })}
    </div>
  );
}

export function SpicyIndicator({ level }: { level: number }) {
  if (!level) return null;
  return (
    <span className="inline-flex items-center">
      {Array.from({ length: level }).map((_, i) => (
        <Flame key={i} className="w-3.5 h-3.5 text-red-500" />
      ))}
    </span>
  );
}
