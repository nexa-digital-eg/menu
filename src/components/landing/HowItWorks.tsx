"use client";

import { useTranslations } from "next-intl";
import { Pencil, QrCode, ShoppingBag } from "lucide-react";

const steps = [
  { key: "step1", icon: Pencil, color: "from-primary-500 to-primary-600" },
  { key: "step2", icon: QrCode, color: "from-accent-500 to-accent-600" },
  { key: "step3", icon: ShoppingBag, color: "from-purple-500 to-purple-600" },
];

export default function HowItWorks() {
  const t = useTranslations("howItWorks");

  return (
    <section id="how-it-works" className="py-24 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-4">
            {t("sectionBadge")}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
            {t("title")}
          </h2>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map(({ key, icon: Icon, color }, idx) => (
            <div key={key} className="relative text-center">
              {/* Step Number */}
              <div className="relative inline-flex mb-6">
                <div
                  className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${color} flex items-center justify-center shadow-lg`}
                >
                  <Icon className="w-9 h-9 text-white" />
                </div>
                <div className="absolute -top-2 -end-2 w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center text-sm font-bold text-gray-900">
                  {idx + 1}
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {t(`${key}.title`)}
              </h3>
              <p className="text-gray-600 leading-relaxed max-w-sm mx-auto">
                {t(`${key}.description`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
