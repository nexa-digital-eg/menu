import type { Metadata } from "next";
import { hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import BuffaloBurgerMenu from "@/components/menu/BuffaloBurgerMenu";
import type { Locale } from "@/data/buffalo-burger";

export const metadata: Metadata = {
  title: "بافلو برجر — المنيو | Buffalo Burger Menu",
  description:
    "منيو مطعم بافلو برجر — متخصصون في كل أنواع البرجر. اطلب أونلاين عبر واتساب. Buffalo Burger digital menu — specialists in all kinds of burgers.",
};

export default async function BuffaloBurgerPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return <BuffaloBurgerMenu locale={locale as Locale} />;
}
