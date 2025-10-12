import { create } from "zustand";
import type { Product } from "../api/productApi";

type ProductStore = {
  selectedProduct: Product | null;
  setSelectedProduct: (product: Product | null) => void;
};

export const useProductStore = create<ProductStore>((set) => ({
  selectedProduct: null,
  setSelectedProduct: (product) => set({ selectedProduct: product }),
}));
