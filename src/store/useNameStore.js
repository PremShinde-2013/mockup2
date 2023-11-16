// useNameStore.js
import create from "zustand";

const useNameStore = create((set) => ({
  name: "",
  showLetterError: false,
  showEmptyError: false,
  isButtonDisabled: true,
  setName: (name) => set({ name }),
  setShowLetterError: (show) => set({ showLetterError: show }),
  setShowEmptyError: (show) => set({ showEmptyError: show }),
  setIsButtonDisabled: (disabled) => set({ isButtonDisabled: disabled }),
}));

export default useNameStore;
