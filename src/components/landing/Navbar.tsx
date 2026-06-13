"use client";

import { useTranslations, useLocale } from "next-intl";
import { Link, useRouter, usePathname } from "@/i18n/routing";
import { useState } from "react";
import { Menu, X, Globe } from "lucide-react";

export default function Navbar() {
  const t = useTranslations();
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleLocale = () => {
    const next = locale === "ar" ? "en" : "ar";
    router.replace(pathname, { locale: next });
  };

  const navLinks = [
    { href: "#features", label: t("nav.features") },
    { href: "#pricing", label: t("nav.pricing") },
    { href: "#how-it-works", label: t("nav.templates") },
    { href: "#contact", label: t("nav.contact") },
  ];

  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center">
              <span className="text-white font-bold text-lg">M</span>
            </div>
            <span className="text-xl font-bold text-gray-900">
              {t("brand.name")}
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-600 hover:text-primary-600 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={toggleLocale}
              className="flex items-center gap-1.5 px-3 py-1.5 text-sm text-gray-600 hover:text-gray-900 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <Globe className="w-4 h-4" />
              {locale === "ar" ? "EN" : "عربي"}
            </button>
            <a
              href="#"
              className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
            >
              {t("nav.login")}
            </a>
            <a
              href="#pricing"
              className="px-5 py-2 text-sm font-semibold text-white bg-primary-600 hover:bg-primary-700 rounded-xl transition-all shadow-sm hover:shadow-md"
            >
              {t("nav.getStarted")}
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-2 text-gray-600"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block text-sm font-medium text-gray-700 py-2"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="flex items-center gap-3 pt-3 border-t border-gray-100">
            <button
              onClick={toggleLocale}
              className="flex items-center gap-1.5 px-3 py-1.5 text-sm text-gray-600 rounded-lg bg-gray-100"
            >
              <Globe className="w-4 h-4" />
              {locale === "ar" ? "English" : "عربي"}
            </button>
            <a
              href="#pricing"
              className="flex-1 text-center px-4 py-2 text-sm font-semibold text-white bg-primary-600 rounded-xl"
            >
              {t("nav.getStarted")}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
