import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IAppSlice } from "../../constants/interfaces/slice";
import { EModalName } from "../../constants/enums";

const initialState: IAppSlice = {
  isDropdownOpen: false,
  isMenuOpen: false,
  isMobileRegDropdownOpen: false,
  isRecruiterRegModalOpen: false,
  isSubscriptionModalOpen: false,
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    handleRegDropdown: (state, action: PayloadAction<boolean | null>) => {
      const isOpen = action.payload;
      if (isOpen === false) {
        state.isDropdownOpen = false;
      } else {
        state.isDropdownOpen = !state.isDropdownOpen;
      }
    },
    handleMenuDropdown: (state, action: PayloadAction<boolean>) => {
      const isOpen = action.payload;
      state.isMenuOpen = isOpen;
    },
    toggleMobileRegDropdown: (state) => {
      state.isMobileRegDropdownOpen = !state.isMobileRegDropdownOpen;
    },
    openModal: (state, action: PayloadAction<string>) => {
      const modalName = action.payload;
      if (modalName === EModalName.SubscriptionPopup) {
        state.isSubscriptionModalOpen = true;
      }
    },
    closeModal: (state) => {
      state.isSubscriptionModalOpen = false;
    },
  },
});

export const {
  handleRegDropdown,
  toggleMobileRegDropdown,
  handleMenuDropdown,
  openModal,
  closeModal,
} = appSlice.actions;

export default appSlice.reducer;
