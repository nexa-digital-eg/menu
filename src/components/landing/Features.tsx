"use client";

import { useTranslations } from "next-intl";
import {
  Palette,
  QrCode,
  Zap,
  BarChart3,
  ShoppingCart,
  CreditCard,
  Sparkles,
  MessageCircle,
  ShieldCheck,
  Heart,
  Languages,
  GitBranch,
} from "lucide-react";

const featureKeys = [
  { key: "templates", icon: Palette, color: "text-violet-600 bg-violet-100" },
  { key: "qr", icon: QrCode, color: "text-primary-600 bg-primary-100" },
  { key: "updates", icon: Zap, color: "text-amber-600 bg-amber-100" },
  { key: "analytics", icon: BarChart3, color: "text-blue-600 bg-blue-100" },
  { key: "ordering", icon: ShoppingCart, color: "text-rose-600 bg-rose-100" },
  { key: "payments", icon: CreditCard, color: "text-emerald-600 bg-emerald-100" },
  { key: "ai", icon: Sparkles, color: "text-purple-600 bg-purple-100" },
  { key: "whatsapp", icon: MessageCircle, color: "text-green-600 bg-green-100" },
  { key: "allergens", icon: ShieldCheck, color: "text-red-600 bg-red-100" },
  { key: "loyalty", icon: Heart, color: "text-pink-600 bg-pink-100" },
  { key: "multilingual", icon: Languages, color: "text-indigo-600 bg-indigo-100" },
  { key: "branches", icon: GitBranch, color: "text-teal-600 bg-teal-100" },
];

export default function Features() {
  const t = useTranslations("features");

  return (
    <section id="features" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-4">
            {t("sectionBadge")}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
            {t("title")}
          </h2>
          <p className="mt-4 text-lg text-gray-600">{t("description")}</p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featureKeys.map(({ key, icon: Icon, color }) => (
            <div
              key={key}
              className="group relative p-6 rounded-2xl border border-gray-100 bg-white hover:border-primary-200 hover:shadow-lg hover:shadow-primary-500/5 transition-all duration-300"
            >
              <div
                className={`inline-flex items-center justify-center w-12 h-12 rounded-2xl ${color} mb-4`}
              >
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {t(`${key}.title`)}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {t(`${key}.description`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
