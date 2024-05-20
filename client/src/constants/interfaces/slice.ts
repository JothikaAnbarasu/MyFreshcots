export interface IAppSlice {
  isDropdownOpen: boolean;
  isMenuOpen: boolean;
  isMobileRegDropdownOpen: boolean;
  isRecruiterRegModalOpen: boolean;
  isSubscriptionModalOpen: boolean;
}

export interface IFormSlice {
  emailError: string | null;
  email: string;
  loginEmailValidated: boolean;
  otpValidated: boolean;
  isLoginFormOpen: boolean;
  isOtpTimerReseted: boolean;
  isFormStartOpen: boolean;
  isFormRegisterOpen: boolean;
  isFormGetOtpOpen: boolean;
  isFormDoneOpen: boolean;
  isEmployerProgessBarOpen: boolean;
  categoryCheckboxCount: number;
  candidateCategories: { name: string; selected: boolean }[];
  volunteerCategories: { name: string; selected: boolean }[];
  employerCategories: { name: string; selected: boolean }[];
  categoryCheckboxError: string;
  organizationDomain: string;
  isOrganizationDomainVerified: boolean;
}

export interface IUserSlice {
  isUserAuthenticated: boolean;
  user: { [index: string]: string } | null;
  hasNotification: boolean;
  profileCompletionPercentage: number;
  isAddProfileDetailsSectionOpen: boolean;
  isAreasOfInterestDropdownOpen: boolean;
  selectedAreasOfInterest: string[];
  addProfileDetailsSectionData: {
    title: string;
    percentageBadgeInput: number | undefined;
    desc: string;
  };
  defaultSkills: { skillName: string; rating: number | null }[];
  secondarySkill: { skillName: string; rating: number | null } | null;
  primarySkill: { skillName: string; rating: number | null } | null;
  otherSkills: string[];
  candidateProfileDetailsCards: { title: string; isDetailsSaved: boolean }[];
  isVedioRecorderOpen: boolean;
  isChangeEmailInputOpen: boolean;
  isChangeEmailVerificationOpen: boolean;
  isChangeEmailUpdatedOpen: boolean;
  isChangePhoneNoInputOpen: boolean;
  isChangePhoneNoVerificationOpen: boolean;
  isChangePhoneNoUpdatedOpen: boolean;
  isSendInviteSectionOpen: boolean;
  invitedEmails: string[];
  isRadarChartVisible: boolean;
  isMenuDropdownOpen: boolean;
}
