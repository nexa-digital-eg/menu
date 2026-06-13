"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

export default function Footer() {
  const t = useTranslations();

  const columns = [
    {
      title: t("footer.product"),
      links: [
        { label: t("nav.features"), href: "#features" },
        { label: t("nav.pricing"), href: "#pricing" },
        { label: t("nav.templates"), href: "#" },
      ],
    },
    {
      title: t("footer.company"),
      links: [
        { label: t("footer.about"), href: "#" },
        { label: t("footer.blog"), href: "#" },
        { label: t("footer.careers"), href: "#" },
      ],
    },
    {
      title: t("footer.support"),
      links: [
        { label: t("footer.helpCenter"), href: "#" },
        { label: t("footer.documentation"), href: "#" },
        { label: t("nav.contact"), href: "#contact" },
      ],
    },
    {
      title: t("footer.legal"),
      links: [
        { label: t("footer.privacy"), href: "#" },
        { label: t("footer.terms"), href: "#" },
      ],
    },
  ];

  return (
    <footer className="bg-gray-950 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
          {/* Brand */}
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center">
                <span className="text-white font-bold text-lg">M</span>
              </div>
              <span className="text-xl font-bold text-white">
                {t("brand.name")}
              </span>
            </Link>
            <p className="text-sm leading-relaxed max-w-xs">
              {t("footer.description")}
            </p>
          </div>

          {/* Link Columns */}
          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-semibold text-white mb-4">
                {col.title}
              </h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm hover:text-primary-400 transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm">
          © {new Date().getFullYear()} {t("brand.name")}. {t("footer.rights")}.
        </div>
      </div>
    </footer>
  );
}
