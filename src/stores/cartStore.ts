import { create } from 'zustand';

interface CartStore {
  cartModalOpen: boolean;
  setCartModalOpen: (value: boolean) => void;
}

export const useCartStore = create<CartStore>((set) => ({
  cartModalOpen: false,
  setCartModalOpen: (value) => set({ cartModalOpen: value })
}));
