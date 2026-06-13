"use client";

import { useTranslations } from "next-intl";
import { Check } from "lucide-react";

const plans = ["free", "starter", "pro", "business"] as const;

export default function Pricing() {
  const t = useTranslations("pricing");

  return (
    <section id="pricing" className="py-24 lg:py-32 bg-white">
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

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan) => {
            const isPro = plan === "pro";
            const features = t.raw(`${plan}.features`) as string[];

            return (
              <div
                key={plan}
                className={`relative rounded-2xl p-6 ${
                  isPro
                    ? "bg-primary-600 text-white ring-2 ring-primary-600 shadow-xl shadow-primary-500/20 scale-[1.02]"
                    : "bg-white text-gray-900 border border-gray-200 hover:border-primary-200 hover:shadow-lg"
                } transition-all duration-300`}
              >
                {isPro && (
                  <div className="absolute -top-3 start-1/2 -translate-x-1/2 rtl:translate-x-1/2 px-4 py-1 bg-accent-500 text-white text-xs font-bold rounded-full shadow-md">
                    {t("popular")}
                  </div>
                )}

                <div className="mb-6">
                  <h3
                    className={`text-lg font-bold ${isPro ? "text-white" : "text-gray-900"}`}
                  >
                    {t(`${plan}.name`)}
                  </h3>
                  <p
                    className={`text-sm mt-1 ${isPro ? "text-primary-100" : "text-gray-500"}`}
                  >
                    {t(`${plan}.description`)}
                  </p>
                </div>

                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-4xl font-extrabold">
                    {t(`${plan}.price`)}
                  </span>
                  <span
                    className={`text-sm ${isPro ? "text-primary-200" : "text-gray-500"}`}
                  >
                    {t(`${plan}.currency`)} {t(`${plan}.period`)}
                  </span>
                </div>

                <ul className="space-y-3 mb-8">
                  {features.map((feature: string) => (
                    <li key={feature} className="flex items-start gap-2.5">
                      <Check
                        className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                          isPro ? "text-primary-200" : "text-primary-500"
                        }`}
                      />
                      <span
                        className={`text-sm ${isPro ? "text-primary-50" : "text-gray-600"}`}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#"
                  className={`block w-full text-center py-3 px-4 rounded-xl text-sm font-bold transition-all ${
                    isPro
                      ? "bg-white text-primary-700 hover:bg-primary-50 shadow-md"
                      : "bg-primary-600 text-white hover:bg-primary-700 shadow-sm"
                  }`}
                >
                  {t(`${plan}.cta`)}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
