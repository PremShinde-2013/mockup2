import create from "zustand";

// Create a Zustand store
const useSolarQuotesStore = create((set) => ({
  selectedOption: null,
  isButtonDisabled: true,

  setSelectedOption: (option) => set((state) => ({ selectedOption: option })),
  setIsButtonDisabled: (disabled) =>
    set((state) => ({ isButtonDisabled: disabled })),
}));

export default useSolarQuotesStore;
