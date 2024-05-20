import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IFormSlice } from "../../constants/interfaces/slice";
import { EUserType } from "../../constants/enums";
import { userCategories } from "../../constants/register";

const initialState: IFormSlice = {
  email: "",
  emailError: null,
  loginEmailValidated: false,
  otpValidated: false,
  isLoginFormOpen: false,
  isOtpTimerReseted: false,
  isFormStartOpen: false,
  isFormRegisterOpen: false,
  isFormGetOtpOpen: false,
  isFormDoneOpen: false,
  isEmployerProgessBarOpen: false,
  categoryCheckboxCount: 0,
  candidateCategories: userCategories.candidate,
  volunteerCategories: userCategories.volunteer,
  employerCategories: userCategories.employer,
  categoryCheckboxError: "",
  organizationDomain: "",
  isOrganizationDomainVerified: false,
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    handleEmailChange: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    validateEmail: (state) => {
      const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
      if (!emailRegex.test(state.email)) {
        state.emailError = "Please enter a valid email address";
      } else {
        state.emailError = "";
      }
    },
    validateLoginEmail: (state) => {
      state.loginEmailValidated = state.emailError !== null;
    },
    handleLoginEditClick: (state) => {
      state.loginEmailValidated = false;
    },
    validateOtp: (state) => {
      state.otpValidated = true;
    },
    openLoginForm: (state) => {
      state.isLoginFormOpen = true;
    },
    closeLoginForm: (state) => {
      state.isLoginFormOpen = false;
    },
    resetOtpValidation: (state) => {
      state.otpValidated = false;
      state.isOtpTimerReseted = true;
    },
    openFormStart: (state) => {
      state.isEmployerProgessBarOpen = true;
      state.isFormStartOpen = true;
      state.isFormRegisterOpen = false;
      state.isFormGetOtpOpen = false;
      state.isFormDoneOpen = false;
    },
    openFormRegister: (state) => {
      state.isFormStartOpen = false;
      state.isFormRegisterOpen = true;
      state.isFormGetOtpOpen = false;
      state.isFormDoneOpen = false;
    },
    openFormGetOtp: (state, action: PayloadAction<string>) => {
      state.categoryCheckboxError = "";

      if (action.payload !== EUserType.Candidate) {
        if (state.categoryCheckboxCount < 1) {
          state.categoryCheckboxError = "Please Select atleast 1";
          return;
        } else if (state.categoryCheckboxCount > 2) {
          state.categoryCheckboxError = "maximum 2 you can select";
          return;
        }
      }
      state.isFormStartOpen = false;
      state.isFormRegisterOpen = false;
      state.isFormDoneOpen = false;
      state.isFormGetOtpOpen = true;
    },
    openFormDone: (state) => {
      state.isFormRegisterOpen = false;
      state.isFormStartOpen = false;
      state.isFormGetOtpOpen = false;
      state.isFormDoneOpen = true;
    },

    handleCandidateCategorySelect: (
      state,
      action: PayloadAction<string | undefined>,
    ) => {
      const title = action.payload?.toLowerCase();
      state.candidateCategories.map((c) => {
        c.selected = c.name.toLowerCase() === title;
      });
    },

    handleCategoryCheckboxClick: (state, action: PayloadAction<string>) => {
      const title = action.payload.toLowerCase();
      state.volunteerCategories.map((c) => {
        if (c.name.toLowerCase() === title) c.selected = !c.selected;
      });
      state.employerCategories.map((c) => {
        if (c.name.toLowerCase() === title) c.selected = !c.selected;
      });
    },

    calculateSelectedCategoryCount: (state, action: PayloadAction<string>) => {
      const baseURL = action.payload.toLowerCase();
      state.categoryCheckboxCount = 0;

      if (baseURL === EUserType.Volunteer) {
        state.volunteerCategories.map((c) => {
          c.selected && state.categoryCheckboxCount++;
        });
      }

      if (baseURL === EUserType.Employer) {
        state.employerCategories.map((c) => {
          c.selected && state.categoryCheckboxCount++;
        });
      }
    },

    handleOrganizationDomainChange: (state, action: PayloadAction<string>) => {
      state.organizationDomain = action.payload;
    },

    verifyOrganizationDomain: () => {
      // const fetchData = async () => {
      //   try {
      //     const apiKey = "OgHla4P1PAgH7L9B63AfR47ioTyQVJ9E";
      //     const domainToCheck = state.organizationDomain; // Replace with the actual domain you want to check
      //     const myHeaders = new Headers();
      //     myHeaders.append("apikey", apiKey);
      //     const requestOptions: IApiHeaders = {
      //       method: "GET",
      //       redirect: "follow",
      //       headers: myHeaders,
      //     };
      //     const response = await fetch(
      //       `https://api.apilayer.com/whois/check?domain=${domainToCheck}`,
      //       requestOptions
      //     );
      //     const { result } = await response.json();
      //     if (result !== undefined && typeof result === "string") {
      //       if (result === "registered") {
      //         console.log("valid");
      //       } else {
      //         console.log("invalid");
      //       }
      //     }
      //   } catch (error) {
      //     console.error("Error:", error);
      //   }
      // };
      // fetchData();
    },
  },
});

export const {
  handleEmailChange,
  validateEmail,
  validateLoginEmail,
  validateOtp,
  openLoginForm,
  closeLoginForm,
  handleLoginEditClick,
  resetOtpValidation,
  openFormStart,
  openFormRegister,
  openFormDone,
  openFormGetOtp,
  handleCategoryCheckboxClick,
  handleCandidateCategorySelect,
  calculateSelectedCategoryCount,
  handleOrganizationDomainChange,
  verifyOrganizationDomain,
} = formSlice.actions;

export default formSlice.reducer;
