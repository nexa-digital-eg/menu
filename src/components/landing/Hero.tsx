"use client";

import { useTranslations } from "next-intl";
import {
  ArrowLeft,
  ArrowRight,
  Play,
  ScanLine,
  Store,
  BarChart3,
  Headphones,
} from "lucide-react";
import { useLocale } from "next-intl";

export default function Hero() {
  const t = useTranslations("hero");
  const locale = useLocale();
  const Arrow = locale === "ar" ? ArrowLeft : ArrowRight;

  const stats = [
    { value: "2,500+", label: t("stats.restaurants"), icon: Store },
    { value: "1M+", label: t("stats.scans"), icon: ScanLine },
    { value: "99.9%", label: t("stats.uptime"), icon: BarChart3 },
    { value: "24/7", label: t("stats.support"), icon: Headphones },
  ];

  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-accent-400/5" />
      <div className="absolute top-20 start-10 w-72 h-72 bg-primary-200/30 rounded-full blur-3xl" />
      <div className="absolute bottom-20 end-10 w-96 h-96 bg-accent-400/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-8">
            {t("badge")}
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-gray-900 leading-tight tracking-tight">
            {t("title")}
            <br />
            <span className="bg-gradient-to-l from-primary-600 to-primary-400 bg-clip-text text-transparent">
              {t("titleHighlight")}
            </span>
          </h1>

          {/* Description */}
          <p className="mt-6 text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            {t("description")}
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#pricing"
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-bold text-white bg-primary-600 hover:bg-primary-700 rounded-2xl transition-all shadow-lg shadow-primary-500/25 hover:shadow-xl hover:shadow-primary-500/30 hover:-translate-y-0.5"
            >
              {t("cta")}
              <Arrow className="w-5 h-5 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
            </a>
            <a
              href="#how-it-works"
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-gray-700 bg-white hover:bg-gray-50 border border-gray-200 rounded-2xl transition-all hover:shadow-md"
            >
              <Play className="w-5 h-5 text-primary-500" />
              {t("secondaryCta")}
            </a>
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-primary-100 text-primary-600 mb-3">
                  <stat.icon className="w-6 h-6" />
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold text-gray-900">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Menu Preview Mockup */}
        <div className="mt-20 relative mx-auto max-w-5xl">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200 bg-white">
            {/* Browser Bar */}
            <div className="flex items-center gap-2 px-4 py-3 bg-gray-100 border-b border-gray-200">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <div className="flex-1 mx-4">
                <div className="bg-white rounded-lg px-4 py-1.5 text-sm text-gray-400 text-center border border-gray-200">
                  your-restaurant.menuo.app
                </div>
              </div>
            </div>
            {/* Menu Content Preview */}
            <div className="p-8 bg-gradient-to-br from-gray-50 to-white min-h-[300px] flex items-center justify-center">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-3xl">
                {[
                  {
                    name: locale === "ar" ? "شاورما لحم" : "Beef Shawarma",
                    price: locale === "ar" ? "85 ج.م" : "85 EGP",
                    color: "from-orange-400 to-red-500",
                  },
                  {
                    name: locale === "ar" ? "فتّة بالسمن" : "Fattah with Ghee",
                    price: locale === "ar" ? "120 ج.م" : "120 EGP",
                    color: "from-amber-400 to-orange-500",
                  },
                  {
                    name: locale === "ar" ? "كنافة نابلسية" : "Nabulsi Kunafa",
                    price: locale === "ar" ? "65 ج.م" : "65 EGP",
                    color: "from-yellow-400 to-amber-500",
                  },
                ].map((item) => (
                  <div
                    key={item.name}
                    className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow"
                  >
                    <div
                      className={`h-32 bg-gradient-to-br ${item.color} flex items-center justify-center`}
                    >
                      <span className="text-4xl">🍽️</span>
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-gray-900 text-sm">
                        {item.name}
                      </h3>
                      <p className="text-primary-600 font-bold mt-1">
                        {item.price}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Glow effect */}
          <div className="absolute -inset-4 bg-gradient-to-r from-primary-500/20 via-transparent to-accent-500/20 rounded-3xl blur-2xl -z-10" />
        </div>
      </div>
    </section>
  );
}
