// useElectricityBillStore.js
import create from "zustand";

const useElectricityBillStore = create((set) => ({
  sliderValue: 4000,
  sanctionedLoad: "",
  showAlert: false,
  showNumberError: false,
  isButtonDisabled: true,
  setSliderValue: (value) => set({ sliderValue: value }),
  setSanctionedLoad: (load) => set({ sanctionedLoad: load }),
  setShowAlert: (show) => set({ showAlert: show }),
  setShowNumberError: (show) => set({ showNumberError: show }),
  setIsButtonDisabled: (disabled) => set({ isButtonDisabled: disabled }),
}));

export default useElectricityBillStore;
