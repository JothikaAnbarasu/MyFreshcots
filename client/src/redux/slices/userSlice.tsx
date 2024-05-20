import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IUserSlice } from "../../constants/interfaces/slice";

const initialState: IUserSlice = {
  isUserAuthenticated: false, //initially
  // isUserAuthenticated: true, // after login
  // user: null, //initially
  user: {
    firstName: "Tamil",
    lastName: "Selvan",
    mainCateogory: "Candidate",
    subCategory: "Freshgrads",
    emailId: "tamil08062001@gmail.com",
    phoneNo: "9072357309",
    phoneNoISD: "+91",
    freshcotsID: "FCC-A0001",
  }, //after login

  //---user specific---
  hasNotification: true, //temp
  profileCompletionPercentage: 10, //temp
  selectedAreasOfInterest: [],
  defaultSkills: [
    { skillName: "Communication", rating: null },
    { skillName: "Critical thinking", rating: null },
    { skillName: "Personality", rating: null },
  ],
  primarySkill: null,
  secondarySkill: null,
  otherSkills: [],
  candidateProfileDetailsCards: [
    { title: "Profile Summary", isDetailsSaved: false },
    { title: "Select Areas of Interest", isDetailsSaved: false },
    { title: "Personal Details", isDetailsSaved: false },
    { title: "Educational Details", isDetailsSaved: false },
    { title: "Key Skills", isDetailsSaved: false },
    { title: "Projects", isDetailsSaved: false },
    { title: "Experience", isDetailsSaved: false },
  ], //temp
  invitedEmails: [],
  isRadarChartVisible: false, //temp

  //---common---
  isAddProfileDetailsSectionOpen: false,
  addProfileDetailsSectionData: {
    title: "",
    desc: "",
    percentageBadgeInput: undefined,
  },
  isAreasOfInterestDropdownOpen: false,
  isVedioRecorderOpen: false,
  isChangeEmailInputOpen: true,
  isChangeEmailVerificationOpen: false,
  isChangeEmailUpdatedOpen: false,
  isChangePhoneNoInputOpen: true,
  isChangePhoneNoVerificationOpen: false,
  isChangePhoneNoUpdatedOpen: false,
  isSendInviteSectionOpen: false,
  isMenuDropdownOpen: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    handleRegister: (
      state,
      // action: PayloadAction<{ [index: string]: string }>,
    ) => {
      //authentication logic
      state.isUserAuthenticated = true;
      // state.user = action.payload;
    },

    handleLogin: (
      state,
      // action: PayloadAction<{ [index: string]: string }>,
    ) => {
      //authentication logic
      state.isUserAuthenticated = true;
      // state.user = action.payload;
    },

    handleLogout: (state) => {
      state.isUserAuthenticated = false;
      state.user = null;
    },

    handleMenuDropdownClick: (state, action: PayloadAction<boolean>) => {
      state.isMenuDropdownOpen = action.payload;
    },

    handleAddProfileDetailsClick: (
      state,
      action: PayloadAction<{
        isOpen: boolean;
      }>,
    ) => {
      state.isAddProfileDetailsSectionOpen = action.payload.isOpen;
    },

    updateProfileDetailsFormData: (
      state,
      action: PayloadAction<{
        title?: string;
        desc?: string;
        percentageBadgeInput?: number | undefined;
      }>,
    ) => {
      const { title, desc, percentageBadgeInput } = action.payload;

      state.addProfileDetailsSectionData = {
        title: title || "",
        desc: desc || "",
        percentageBadgeInput: percentageBadgeInput || undefined,
      };
    },

    handleAreasOfInterestDropdown: (state, action: PayloadAction<boolean>) => {
      state.isAreasOfInterestDropdownOpen = action.payload;
    },

    handleAreasOfInterestDropdownClick: (
      state,
      action: PayloadAction<string>,
    ) => {
      const index = state.selectedAreasOfInterest.indexOf(action.payload);

      if (index !== -1) {
        state.selectedAreasOfInterest.splice(index, 1);
        if (state.selectedAreasOfInterest.length === 0) {
          state.profileCompletionPercentage =
            state.profileCompletionPercentage - 5;
        } 
      } else if (state.selectedAreasOfInterest.length < 3) {
        state.selectedAreasOfInterest.push(action.payload);
        if (state.selectedAreasOfInterest.length === 1) {
          state.profileCompletionPercentage =
            state.profileCompletionPercentage + 5;
        }
      }
    },

    deleteSelectedAreaOfInterest: (state, action: PayloadAction<string>) => {
      const index = state.selectedAreasOfInterest.indexOf(action.payload);
      state.selectedAreasOfInterest.splice(index, 1);

      if (state.selectedAreasOfInterest.length === 0) {
        state.profileCompletionPercentage =
          state.profileCompletionPercentage - 5;
      }
    },

    updateDefaultSkillsRating: (
      state,
      action: PayloadAction<{ name: string; value: number }>,
    ) => {
      const { name, value } = action.payload;
      state.defaultSkills = state.defaultSkills.map(({ skillName, rating }) => {
        if (skillName.toLowerCase() === name.toLowerCase()) {
          return { skillName, rating: value };
        }
        return { skillName, rating };
      });
    },

    updatePrimarySkill: (
      state,
      action: PayloadAction<{ skillName: string; rating: number | null }>,
    ) => {
      state.primarySkill = action.payload;
    },

    updateSecondarySkill: (
      state,
      action: PayloadAction<{ skillName: string; rating: number | null }>,
    ) => {
      state.secondarySkill = action.payload;
    },
    deletPrimarySkill: (state) => {
      state.primarySkill = null;
    },
    deleteSecondarySkill: (state) => {
      state.secondarySkill = null;
    },
    addOtherSkill: (state, action: PayloadAction<string>) => {
      state.otherSkills.push(action.payload);
    },
    deleteOtherSkill: (state, action: PayloadAction<string>) => {
      const skilltobeDeleted = action.payload.toLowerCase();
      state.otherSkills = state.otherSkills.filter(
        (skill) => skill.toLowerCase() !== skilltobeDeleted,
      );
    },

    //temp
    handleProfileDetailsFormSave: (
      state,
      action: PayloadAction<{ title: string; percentage: number | undefined }>,
    ) => {
      const formTitle = action.payload.title.toLowerCase().split(" ").join("");
      const percentage = action.payload.percentage;

      state.candidateProfileDetailsCards =
        state.candidateProfileDetailsCards.map(({ title, isDetailsSaved }) => {
          if (title.toLowerCase().split(" ").join("") === formTitle) {
            return { title, isDetailsSaved: true };
          }
          return { title, isDetailsSaved };
        });

      if (percentage) {
        state.profileCompletionPercentage =
          state.profileCompletionPercentage + percentage;
      }

      //temp
      if (formTitle === "keyskills") state.isRadarChartVisible = true;
    },

    handleVedioRecorderVisibility: (state, action: PayloadAction<boolean>) => {
      state.isVedioRecorderOpen = action.payload;
    },

    handleChangeEmailClick: (state) => {
      state.isChangeEmailInputOpen = true;
      state.isChangeEmailVerificationOpen = false;
      state.isChangeEmailUpdatedOpen = false;
    },

    handleChangePhoneNoClick: (state) => {
      state.isChangePhoneNoInputOpen = true;
      state.isChangePhoneNoVerificationOpen = false;
      state.isChangePhoneNoUpdatedOpen = false;
    },
    openChangeEmailInput: (state) => {
      state.isChangeEmailInputOpen = true;
      state.isChangeEmailVerificationOpen = false;
      state.isChangeEmailUpdatedOpen = false;
    },
    openChangeEmailVerification: (state) => {
      state.isChangeEmailInputOpen = false;
      state.isChangeEmailVerificationOpen = true;
      state.isChangeEmailUpdatedOpen = false;
      // if (state.user) {
      //   state.user.emailId = "updatedmail@gmail.com";
      // }
    },

    openChangeEmailUpdated: (state) => {
      state.isChangeEmailInputOpen = false;
      state.isChangeEmailVerificationOpen = false;
      state.isChangeEmailUpdatedOpen = true;
    },
    openChangePhoneNoInput: (state) => {
      state.isChangePhoneNoInputOpen = true;
      state.isChangePhoneNoVerificationOpen = false;
      state.isChangePhoneNoUpdatedOpen = false;
    },
    openChangePhoneNoVerification: (state) => {
      state.isChangePhoneNoInputOpen = false;
      state.isChangePhoneNoVerificationOpen = true;
      state.isChangePhoneNoUpdatedOpen = false;
      // if (state.user) {
      //   state.user.phoneNo = "updatednumber";
      // }
    },
    openChangePhoneNoUpdated: (state) => {
      state.isChangePhoneNoInputOpen = false;
      state.isChangePhoneNoVerificationOpen = false;
      state.isChangePhoneNoUpdatedOpen = true;
    },
    handleSendInvitationClick: (state, action: PayloadAction<boolean>) => {
      state.isSendInviteSectionOpen = action.payload;
    },

    updateInvitedEmails: (state, action: PayloadAction<string>) => {
      if (state.invitedEmails.length < 5) {
        state.invitedEmails.push(action.payload);
      }
    },
  },
});

export const {
  handleRegister,
  handleLogin,
  handleLogout,
  handleMenuDropdownClick,
  handleAreasOfInterestDropdown,
  handleAddProfileDetailsClick,
  handleAreasOfInterestDropdownClick,
  updatePrimarySkill,
  updateSecondarySkill,
  deletPrimarySkill,
  deleteSecondarySkill,
  addOtherSkill,
  deleteOtherSkill,
  updateDefaultSkillsRating,
  updateProfileDetailsFormData,
  deleteSelectedAreaOfInterest,
  handleProfileDetailsFormSave,
  handleVedioRecorderVisibility,
  handleChangeEmailClick,
  handleChangePhoneNoClick,
  openChangeEmailInput,
  openChangeEmailVerification,
  openChangeEmailUpdated,
  openChangePhoneNoInput,
  openChangePhoneNoVerification,
  openChangePhoneNoUpdated,
  handleSendInvitationClick,
  updateInvitedEmails,
} = userSlice.actions;

export default userSlice.reducer;
