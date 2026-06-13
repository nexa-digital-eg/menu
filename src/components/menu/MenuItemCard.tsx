"use client";

import type { MenuItem, Locale } from "@/data/buffalo-burger";
import { restaurant } from "@/data/buffalo-burger";
import { useCart } from "@/lib/cart-store";
import { ItemBadge, AllergenList, SpicyIndicator } from "./Badges";
import { Plus, Flame } from "lucide-react";

export default function MenuItemCard({
  item,
  locale,
}: {
  item: MenuItem;
  locale: Locale;
}) {
  const add = useCart((s) => s.add);
  const open = useCart((s) => s.open);
  const currency = restaurant.currency[locale];
  const soldOut = item.available === false;

  const handleAdd = () => {
    if (soldOut) return;
    add({
      id: item.id,
      nameAr: item.name.ar,
      nameEn: item.name.en,
      price: item.price,
      image: item.image,
    });
    open();
  };

  return (
    <div
      className={`group relative flex gap-4 p-3 rounded-2xl border transition-all ${
        soldOut
          ? "border-gray-100 bg-gray-50 opacity-60"
          : "border-gray-100 bg-white hover:border-red-200 hover:shadow-md"
      }`}
    >
      {/* Image */}
      <div className="relative flex-shrink-0">
        <div className="w-24 h-24 rounded-xl bg-gradient-to-br from-amber-50 to-red-50 flex items-center justify-center text-5xl">
          {item.image}
        </div>
        {soldOut && (
          <div className="absolute inset-0 rounded-xl bg-black/40 flex items-center justify-center">
            <span className="text-white text-[11px] font-bold px-2 py-1 bg-gray-900/80 rounded-lg">
              {locale === "ar" ? "نفذت الكمية" : "Sold Out"}
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-bold text-gray-900 leading-tight">
            {item.name[locale]}
          </h3>
          {item.spicyLevel ? <SpicyIndicator level={item.spicyLevel} /> : null}
        </div>

        {/* Badges */}
        {item.badges?.length ? (
          <div className="flex flex-wrap gap-1.5 mt-1.5">
            {item.badges.map((b) => (
              <ItemBadge key={b} badge={b} locale={locale} />
            ))}
          </div>
        ) : null}

        <p className="text-sm text-gray-500 mt-1.5 line-clamp-2 leading-relaxed">
          {item.description[locale]}
        </p>

        {item.allergens?.length ? (
          <AllergenList allergens={item.allergens} locale={locale} />
        ) : null}

        {/* Price + Add */}
        <div className="flex items-center justify-between mt-3">
          <div className="flex items-baseline gap-2">
            <span className="text-lg font-extrabold text-red-600">
              {item.price}
            </span>
            <span className="text-xs text-gray-400">{currency}</span>
            {item.priceBefore && (
              <span className="text-xs text-gray-400 line-through">
                {item.priceBefore}
              </span>
            )}
            {item.calories && (
              <span className="text-[11px] text-gray-400 flex items-center gap-0.5">
                <Flame className="w-3 h-3" />
                {item.calories} {locale === "ar" ? "سعرة" : "cal"}
              </span>
            )}
          </div>

          <button
            onClick={handleAdd}
            disabled={soldOut}
            aria-label={locale === "ar" ? "أضف للسلة" : "Add to cart"}
            className={`flex items-center justify-center w-9 h-9 rounded-xl transition-all ${
              soldOut
                ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                : "bg-red-600 text-white hover:bg-red-700 hover:scale-105 shadow-sm shadow-red-500/30"
            }`}
          >
            <Plus className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
