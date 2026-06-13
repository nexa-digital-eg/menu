"use client";

import { useTranslations, useLocale } from "next-intl";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function CtaSection() {
  const t = useTranslations("cta");
  const locale = useLocale();
  const Arrow = locale === "ar" ? ArrowLeft : ArrowRight;

  return (
    <section id="contact" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 p-12 lg:p-20 text-center overflow-hidden">
          {/* Background decorations */}
          <div className="absolute top-0 start-0 w-64 h-64 bg-primary-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 end-0 w-80 h-80 bg-accent-400/10 rounded-full blur-3xl" />

          <div className="relative">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
              {t("title")}
            </h2>
            <p className="mt-4 text-lg text-primary-100 max-w-2xl mx-auto">
              {t("description")}
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#"
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-bold text-primary-700 bg-white hover:bg-primary-50 rounded-2xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                {t("button")}
                <Arrow className="w-5 h-5 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
              </a>
              <a
                href="#"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white border-2 border-white/30 hover:border-white/60 rounded-2xl transition-all"
              >
                {t("secondary")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
