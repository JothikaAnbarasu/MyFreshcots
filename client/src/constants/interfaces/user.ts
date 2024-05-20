import { ReactNode } from "react";

export interface IUserTabsData {
  title: string;
  url: string;
}

export interface ICandidateProfileSidebarLinks {
  linkName: string;
  url: string;
  percentageBadgeInput: number | null;
}

export interface ICandidateProfileVedioCardData {
  title: string;
  description: string;
  percentageBadgeInput?: number;
  recordNowBtn?: boolean;
}

export interface ICandidateProfileDetailsCardData {
  title: string;
  mobileDescription: string;
  description?: string;
  addProfileDetailsDesc?: string;
  addBtnText?: string;
  percentageBadgeInput?: number;
  btnClick?: Function;
  formContent?: ReactNode;
  completedDetailsComponent?: ReactNode;
  completedEditIcon?: boolean;
  completedAddBtnText?: string;
}

export interface IUserCountCardData {
  userType: string;
  count: number;
}

export interface IRecruitedCandidatesCardData {
  imgURL: string;
  candidateName: string;
  fcCategory: string;
  hiringCompanyName: string;
  vedio: boolean;
  feedback: string;
}
