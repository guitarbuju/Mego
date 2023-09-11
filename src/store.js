import { create } from "zustand";

const useSelectedToyStore = create((set) => ({
  selectedToy: null,
  cart: [], // Initialize an empty array for the cart
  setSelectedToy: (toy) => set({ selectedToy: toy }),
  addToCart: (toy) => set((state) => ({ cart: [...state.cart, toy] })),
  removeFromCart: (index) =>
  set((state) => ({ cart: state.cart.filter((_, i) => i !== index) })),
  resetCart: () => set({ cart: [] }),
}));

export { useSelectedToyStore };
