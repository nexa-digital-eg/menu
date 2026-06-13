"use client";

import { useState, useEffect, useRef } from "react";
import { menu, branches, restaurant } from "@/data/buffalo-burger";
import type { Locale } from "@/data/buffalo-burger";
import { useCart } from "@/lib/cart-store";
import MenuItemCard from "./MenuItemCard";
import CartDrawer from "./CartDrawer";
import {
  Star,
  MapPin,
  Clock,
  Phone,
  AtSign,
  ShoppingBag,
  Globe,
  Search,
  ChevronDown,
} from "lucide-react";

export default function BuffaloBurgerMenu({
  locale: initialLocale,
}: {
  locale: Locale;
}) {
  const [locale, setLocale] = useState<Locale>(initialLocale);
  const [activeCat, setActiveCat] = useState(menu[0].id);
  const [query, setQuery] = useState("");
  const [branchOpen, setBranchOpen] = useState(false);
  const [activeBranch, setActiveBranch] = useState(branches[0]);
  const isAr = locale === "ar";

  const open = useCart((s) => s.open);
  const lines = useCart((s) => s.lines);
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const count = mounted ? lines.reduce((s, l) => s + l.qty, 0) : 0;
  const total = mounted ? lines.reduce((s, l) => s + l.price * l.qty, 0) : 0;

  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  // Apply dir based on selected locale
  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = isAr ? "rtl" : "ltr";
  }, [locale, isAr]);

  const scrollToCat = (id: string) => {
    setActiveCat(id);
    sectionRefs.current[id]?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  // Filter items by search
  const filteredMenu = query.trim()
    ? menu
        .map((cat) => ({
          ...cat,
          items: cat.items.filter(
            (it) =>
              it.name[locale].toLowerCase().includes(query.toLowerCase()) ||
              it.description[locale].toLowerCase().includes(query.toLowerCase())
          ),
        }))
        .filter((cat) => cat.items.length > 0)
    : menu;

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* ===== Hero Header ===== */}
      <header className="relative bg-gradient-to-br from-stone-900 via-red-950 to-stone-900 text-white overflow-hidden">
        <div className="absolute top-0 end-0 text-[180px] opacity-10 leading-none -mt-6 -me-6 rotate-12">
          🍔
        </div>
        <div className="relative max-w-3xl mx-auto px-4 pt-6 pb-8">
          {/* Top bar */}
          <div className="flex items-center justify-between">
            <span className="text-xs px-2.5 py-1 rounded-full bg-amber-500/20 text-amber-300 font-medium">
              {isAr ? "باقة البيزنس" : "Business Plan"}
            </span>
            <button
              onClick={() => setLocale(isAr ? "en" : "ar")}
              className="flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
            >
              <Globe className="w-4 h-4" />
              {isAr ? "EN" : "عربي"}
            </button>
          </div>

          {/* Brand */}
          <div className="flex items-center gap-4 mt-6">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center text-5xl shadow-xl ring-4 ring-white/10">
              {restaurant.logo}
            </div>
            <div>
              <h1 className="text-3xl font-extrabold">
                {restaurant.name[locale]}
              </h1>
              <p className="text-amber-300 text-sm mt-1">
                {restaurant.tagline[locale]}
              </p>
              <div className="flex items-center gap-3 mt-2 text-sm text-white/80">
                <span className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                  {restaurant.rating}
                </span>
                <span className="text-white/40">•</span>
                <span>
                  {restaurant.reviewsCount.toLocaleString()}{" "}
                  {isAr ? "تقييم" : "reviews"}
                </span>
              </div>
            </div>
          </div>

          <p className="text-white/70 text-sm mt-4 leading-relaxed">
            {restaurant.description[locale]}
          </p>

          {/* Branch selector */}
          <div className="relative mt-5">
            <button
              onClick={() => setBranchOpen(!branchOpen)}
              className="w-full flex items-center justify-between gap-2 px-4 py-3 rounded-xl bg-white/10 hover:bg-white/15 transition-colors text-start"
            >
              <span className="flex items-center gap-2 text-sm">
                <MapPin className="w-4 h-4 text-amber-300" />
                {activeBranch.name[locale]}
              </span>
              <ChevronDown
                className={`w-4 h-4 transition-transform ${branchOpen ? "rotate-180" : ""}`}
              />
            </button>
            {branchOpen && (
              <div className="absolute inset-x-0 top-full mt-2 bg-white rounded-xl shadow-2xl z-20 overflow-hidden">
                {branches.map((b) => (
                  <button
                    key={b.id}
                    onClick={() => {
                      setActiveBranch(b);
                      setBranchOpen(false);
                    }}
                    className="w-full text-start px-4 py-3 hover:bg-gray-50 border-b border-gray-100 last:border-0"
                  >
                    <div className="font-semibold text-gray-900 text-sm">
                      {b.name[locale]}
                    </div>
                    <div className="text-xs text-gray-500 mt-0.5 flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {b.hours}
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Quick info */}
          <div className="grid grid-cols-3 gap-2 mt-3 text-center text-xs">
            <a
              href={`tel:${activeBranch.phone}`}
              className="flex flex-col items-center gap-1 py-2.5 rounded-xl bg-white/5 hover:bg-white/10"
            >
              <Phone className="w-4 h-4 text-amber-300" />
              {activeBranch.phone}
            </a>
            <a
              href={activeBranch.mapUrl}
              target="_blank"
              className="flex flex-col items-center gap-1 py-2.5 rounded-xl bg-white/5 hover:bg-white/10"
            >
              <MapPin className="w-4 h-4 text-amber-300" />
              {isAr ? "الموقع" : "Location"}
            </a>
            <a
              href={`https://instagram.com/${restaurant.social.instagram}`}
              target="_blank"
              className="flex flex-col items-center gap-1 py-2.5 rounded-xl bg-white/5 hover:bg-white/10"
            >
              <AtSign className="w-4 h-4 text-amber-300" />
              {isAr ? "تابعنا" : "Follow"}
            </a>
          </div>
        </div>
      </header>

      {/* ===== Sticky Search + Category Nav ===== */}
      <div className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <div className="max-w-3xl mx-auto px-4 py-3">
          {/* Search */}
          <div className="relative mb-3">
            <Search className="absolute top-1/2 -translate-y-1/2 start-3 w-4 h-4 text-gray-400" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={isAr ? "ابحث عن برجر..." : "Search for a burger..."}
              className="w-full ps-10 pe-4 py-2.5 rounded-xl bg-gray-100 text-sm focus:outline-none focus:ring-2 focus:ring-red-500/30"
            />
          </div>

          {/* Category pills */}
          <div className="flex gap-2 overflow-x-auto no-scrollbar -mx-1 px-1">
            {menu.map((cat) => (
              <button
                key={cat.id}
                onClick={() => scrollToCat(cat.id)}
                className={`flex-shrink-0 flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-all ${
                  activeCat === cat.id
                    ? "bg-red-600 text-white shadow-md shadow-red-500/25"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                <span>{cat.icon}</span>
                {cat.name[locale]}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ===== Menu Sections ===== */}
      <main className="max-w-3xl mx-auto px-4 py-6 space-y-8">
        {filteredMenu.length === 0 ? (
          <div className="text-center py-20 text-gray-400">
            <div className="text-5xl mb-3">🔍</div>
            {isAr ? "مفيش نتائج للبحث ده" : "No results found"}
          </div>
        ) : (
          filteredMenu.map((cat) => (
            <section
              key={cat.id}
              id={cat.id}
              ref={(el) => {
                sectionRefs.current[cat.id] = el;
              }}
              className="scroll-mt-32"
            >
              <h2 className="flex items-center gap-2 text-xl font-extrabold text-gray-900 mb-4">
                <span className="text-2xl">{cat.icon}</span>
                {cat.name[locale]}
                <span className="text-sm font-normal text-gray-400">
                  ({cat.items.length})
                </span>
              </h2>
              <div className="space-y-3">
                {cat.items.map((item) => (
                  <MenuItemCard key={item.id} item={item} locale={locale} />
                ))}
              </div>
            </section>
          ))
        )}

        {/* Footer */}
        <footer className="pt-8 text-center text-xs text-gray-400 border-t border-gray-100">
          <p className="mb-1">
            {restaurant.name[locale]} © {new Date().getFullYear()}
          </p>
          <p>
            {isAr ? "مدعوم بواسطة" : "Powered by"}{" "}
            <span className="font-bold text-red-600">منيو</span>
          </p>
        </footer>
      </main>

      {/* ===== Floating Cart Button ===== */}
      {count > 0 && (
        <button
          onClick={open}
          className="fixed bottom-5 inset-x-4 max-w-3xl mx-auto z-40 flex items-center justify-between px-5 py-3.5 rounded-2xl bg-red-600 text-white font-bold shadow-2xl shadow-red-500/40 hover:bg-red-700 transition-colors"
        >
          <span className="flex items-center gap-2">
            <span className="relative">
              <ShoppingBag className="w-5 h-5" />
              <span className="absolute -top-2 -end-2 w-5 h-5 rounded-full bg-amber-400 text-stone-900 text-[11px] flex items-center justify-center font-extrabold">
                {count}
              </span>
            </span>
            {isAr ? "عرض الطلب" : "View Order"}
          </span>
          <span>
            {total} {restaurant.currency[locale]}
          </span>
        </button>
      )}

      <CartDrawer locale={locale} />
    </div>
  );
}
