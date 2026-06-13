"use client";

import { useCart } from "@/lib/cart-store";
import { restaurant, loyalty } from "@/data/buffalo-burger";
import type { Locale } from "@/data/buffalo-burger";
import { X, Plus, Minus, Trash2, ShoppingBag, MessageCircle } from "lucide-react";

export default function CartDrawer({ locale }: { locale: Locale }) {
  const { lines, isOpen, close, add, decrement, remove, clear, total } =
    useCart();
  const currency = restaurant.currency[locale];
  const isAr = locale === "ar";
  const sum = total();
  const points = Math.floor(sum * loyalty.pointsPerEGP);

  const checkoutWhatsApp = () => {
    const itemsText = lines
      .map((l) => `• ${isAr ? l.nameAr : l.nameEn} ×${l.qty} = ${l.price * l.qty} ${currency}`)
      .join("\n");
    const msg = isAr
      ? `طلب جديد من بافلو برجر 🐃🍔\n\n${itemsText}\n\nالإجمالي: ${sum} ${currency}`
      : `New order from Buffalo Burger 🐃🍔\n\n${itemsText}\n\nTotal: ${sum} ${currency}`;
    const url = `https://wa.me/${restaurant.social.whatsapp}?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank");
  };

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-50 transition-opacity"
          onClick={close}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 bottom-0 ${isAr ? "start-0" : "end-0"} w-full max-w-md bg-white z-50 shadow-2xl transition-transform duration-300 flex flex-col ${
          isOpen
            ? "translate-x-0"
            : isAr
              ? "-translate-x-full rtl:translate-x-full"
              : "translate-x-full rtl:-translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-100">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-red-600" />
            <h2 className="font-bold text-gray-900">
              {isAr ? "طلبك" : "Your Order"}
            </h2>
          </div>
          <button
            onClick={close}
            className="p-2 text-gray-400 hover:text-gray-700 rounded-lg hover:bg-gray-100"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Lines */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {lines.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center text-gray-400">
              <div className="text-6xl mb-4">🛒</div>
              <p>{isAr ? "سلتك فاضية" : "Your cart is empty"}</p>
              <p className="text-sm mt-1">
                {isAr ? "ضيف برجر وابدأ طلبك!" : "Add a burger to start!"}
              </p>
            </div>
          ) : (
            lines.map((l) => (
              <div
                key={l.id}
                className="flex items-center gap-3 p-2 rounded-xl border border-gray-100"
              >
                <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-amber-50 to-red-50 flex items-center justify-center text-3xl">
                  {l.image}
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-sm text-gray-900 truncate">
                    {isAr ? l.nameAr : l.nameEn}
                  </h4>
                  <p className="text-red-600 font-bold text-sm">
                    {l.price * l.qty} {currency}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => decrement(l.id)}
                    className="w-7 h-7 rounded-lg bg-gray-100 text-gray-700 flex items-center justify-center hover:bg-gray-200"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-5 text-center font-bold text-sm">
                    {l.qty}
                  </span>
                  <button
                    onClick={() =>
                      add({
                        id: l.id,
                        nameAr: l.nameAr,
                        nameEn: l.nameEn,
                        price: l.price,
                        image: l.image,
                      })
                    }
                    className="w-7 h-7 rounded-lg bg-red-600 text-white flex items-center justify-center hover:bg-red-700"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => remove(l.id)}
                    className="w-7 h-7 rounded-lg text-gray-300 hover:text-red-500 flex items-center justify-center"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {lines.length > 0 && (
          <div className="border-t border-gray-100 p-4 space-y-3">
            {/* Loyalty points */}
            {loyalty.enabled && (
              <div className="flex items-center justify-between text-sm bg-amber-50 text-amber-700 px-3 py-2 rounded-xl">
                <span>{isAr ? "نقاط الولاء" : "Loyalty points"}</span>
                <span className="font-bold">
                  +{points} {isAr ? "نقطة" : "pts"}
                </span>
              </div>
            )}

            <div className="flex items-center justify-between">
              <span className="text-gray-500">{isAr ? "الإجمالي" : "Total"}</span>
              <span className="text-2xl font-extrabold text-gray-900">
                {sum} <span className="text-sm text-gray-400">{currency}</span>
              </span>
            </div>

            <button
              onClick={checkoutWhatsApp}
              className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-green-600 hover:bg-green-700 text-white font-bold transition-colors shadow-lg shadow-green-500/25"
            >
              <MessageCircle className="w-5 h-5" />
              {isAr ? "اطلب عبر واتساب" : "Order via WhatsApp"}
            </button>

            <button
              onClick={clear}
              className="w-full text-sm text-gray-400 hover:text-red-500 transition-colors"
            >
              {isAr ? "تفريغ السلة" : "Clear cart"}
            </button>
          </div>
        )}
      </div>
    </>
  );
}
