// useContactStore.js
import create from "zustand";

const useContactStore = create((set) => ({
  phone: "",
  whatsapp: false,
  calls: false,
  emailChecked: false,
  email: "",
  error: "",
  isButtonDisabled: true,
  snackbarOpen: false,
  setPhone: (phone) => set({ phone }),
  setWhatsapp: (whatsapp) => set({ whatsapp }),
  setCalls: (calls) => set({ calls }),
  setEmailChecked: (checked) => set({ emailChecked: checked }),
  setEmail: (email) => set({ email }),
  setError: (error) => set({ error }),
  setIsButtonDisabled: (disabled) => set({ isButtonDisabled: disabled }),
  setSnackbarOpen: (open) => set({ snackbarOpen: open }),
}));

export default useContactStore;
