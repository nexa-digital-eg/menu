"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface CartLine {
  id: string;
  nameAr: string;
  nameEn: string;
  price: number;
  image: string;
  qty: number;
}

interface CartState {
  lines: CartLine[];
  isOpen: boolean;
  add: (item: Omit<CartLine, "qty">) => void;
  remove: (id: string) => void;
  decrement: (id: string) => void;
  clear: () => void;
  open: () => void;
  close: () => void;
  count: () => number;
  total: () => number;
}

export const useCart = create<CartState>()(
  persist(
    (set, get) => ({
      lines: [],
      isOpen: false,
      add: (item) =>
        set((state) => {
          const existing = state.lines.find((l) => l.id === item.id);
          if (existing) {
            return {
              lines: state.lines.map((l) =>
                l.id === item.id ? { ...l, qty: l.qty + 1 } : l
              ),
            };
          }
          return { lines: [...state.lines, { ...item, qty: 1 }] };
        }),
      decrement: (id) =>
        set((state) => ({
          lines: state.lines
            .map((l) => (l.id === id ? { ...l, qty: l.qty - 1 } : l))
            .filter((l) => l.qty > 0),
        })),
      remove: (id) =>
        set((state) => ({ lines: state.lines.filter((l) => l.id !== id) })),
      clear: () => set({ lines: [] }),
      open: () => set({ isOpen: true }),
      close: () => set({ isOpen: false }),
      count: () => get().lines.reduce((sum, l) => sum + l.qty, 0),
      total: () => get().lines.reduce((sum, l) => sum + l.price * l.qty, 0),
    }),
    { name: "buffalo-burger-cart" }
  )
);
