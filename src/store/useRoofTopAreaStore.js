// useRoofTopAreaStore.js
import create from "zustand";

const useRoofTopAreaStore = create((set) => ({
  roofTopArea: "",
  showNumberError: false,
  showEmptyError: false,
  isButtonDisabled: true,
  setRoofTopArea: (area) => set({ roofTopArea: area }),
  setShowNumberError: (show) => set({ showNumberError: show }),
  setShowEmptyError: (show) => set({ showEmptyError: show }),
  setIsButtonDisabled: (disabled) => set({ isButtonDisabled: disabled }),
}));

export default useRoofTopAreaStore;
