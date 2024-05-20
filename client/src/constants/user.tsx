import CompletedEducationalDetailsContent from "../components/User/Candidate/Profile/ProfileDetails/CompletedEducationalDetailsContent";
import CompletedExperienceContent from "../components/User/Candidate/Profile/ProfileDetails/CompletedExperienceContent";
import CompletedKeySkillsContent from "../components/User/Candidate/Profile/ProfileDetails/CompletedKeySkillsContent";
import CompletedPersonalDetailsContent from "../components/User/Candidate/Profile/ProfileDetails/CompletedPersonalDetailsContent";
import CompletedProfileSummaryContent from "../components/User/Candidate/Profile/ProfileDetails/CompletedProfileSummaryContent";
import CompletedProjectsContent from "../components/User/Candidate/Profile/ProfileDetails/CompletedProjectsContent";
import SelectAreaOfInterestContent from "../components/User/Candidate/Profile/ProfileDetails/SelectAreaOfInterestContent";
import {
  ICandidateProfileDetailsCardData,
  ICandidateProfileSidebarLinks,
  ICandidateProfileVedioCardData,
  IRecruitedCandidatesCardData,
  IUserCountCardData,
  IUserTabsData,
} from "./interfaces/user";
import arusSvg from "../assets/images/arusSvg.svg";

//temp
import jeeva from "../assets/images/temp/jeeva.png";
import akhilesh from "../assets/images/temp/akhilesh.png";
import prasanna from "../assets/images/temp/prasanna.png";
import shakthiVel from "../assets/images/temp/shakthVel.png";
import lalKrishna from "../assets/images/temp/lalKrishna.png";
import sonali from "../assets/images/temp/sonali.png";
import narendra from "../assets/images/temp/narendra.png";
import harsh from "../assets/images/temp/harsh.png";
import saranya from "../assets/images/temp/saranya.png";
import deepshikha from "../assets/images/temp/deepshikha.png";
import elan from "../assets/images/temp/elan.png";
import mathan from "../assets/images/temp/mathan.png";
import sivaDhanush from "../assets/images/temp/sivaDhanush.png";
import mahidhar from "../assets/images/temp/mahidhar.png";

export const candidateUserTabsData: IUserTabsData[] = [
  {
    title: "Home",
    url: "candidate/home",
  },
  {
    title: "Your Profile",
    url: "candidate/profile",
  },
  {
    title: "HR Screening",
    url: "candidate/hr-screening",
  },
  {
    title: "Technical Interview",
    url: "candidate/technical-interview",
  },
  {
    title: "Get Offer",
    url: "candidate/get-offer",
  },
];

export const candidateProfileSidebarLinks: ICandidateProfileSidebarLinks[] = [
  {
    linkName: "About",
    url: "#about",
    percentageBadgeInput: 40,
  },
  {
    linkName: "Personal Details",
    url: "#personaldetails",
    percentageBadgeInput: 20,
  },
  {
    linkName: "Education",
    url: "#educationaldetails",
    percentageBadgeInput: 10,
  },
  {
    linkName: "Key Skills",
    url: "#keyskills",
    percentageBadgeInput: 15,
  },
  {
    linkName: "Projects",
    url: "#projects",
    percentageBadgeInput: null,
  },
  {
    linkName: "Experience",
    url: "#experience",
    percentageBadgeInput: null,
  },
];

export const candidateProfileVedioCardData: ICandidateProfileVedioCardData[] = [
  {
    title: "Self Introduction Video",
    description:
      "Secure a top spot by uploading a 99-seconds intro video and control its visibility on the settings page.",
    percentageBadgeInput: 25,
    recordNowBtn: true,
  },
  {
    title: "HR Screening",
    description:
      "After the HR Screening process is finalized, the video will be uploaded and accessible in this designated area",
  },
  {
    title: "Technical Interview",
    description:
      "After the Technical Interview process is completed, the video will be updated here.",
  },
];

export const candidateProfileDetailsCardData: ICandidateProfileDetailsCardData[] =
  [
    {
      title: "Profile Summary",
      mobileDescription:
        "Write a brief profile summary showcasing your career highlights, education, professional interests ",
      description:
        "Write a brief profile summary showcasing your career highlights, education, professional interests, and the career you're seeking, Write a meaningful summary of more than 50 characters ",
      addProfileDetailsDesc:
        "Write a personal summary about your educational achievements, skills and dream job in more than 50 characters.",
      addBtnText: "Add Profile Summary",
      percentageBadgeInput: 10,
      btnClick: () => {
        console.log("temporary function");
      },
      completedDetailsComponent: <CompletedProfileSummaryContent />,
      completedEditIcon: true,
    },

    {
      title: "Select Areas of Interest",
      mobileDescription: "",
      percentageBadgeInput: 5,
      completedDetailsComponent: <SelectAreaOfInterestContent />,
    },
    {
      title: "Personal Details",
      mobileDescription:
        "Enhance your profile strength by adding your Date of birth, Gender, Location, State, etc...",
      description:
        "Enhance your profile strength by adding your Date of birth, Gender, Location, State, City, Languages, linkedin URL etc..",
      addBtnText: "Add Personal Details",
      percentageBadgeInput: 20,
      btnClick: () => {
        console.log("temporary function");
      },
      completedDetailsComponent: <CompletedPersonalDetailsContent />,
    },
    {
      title: "Educational Details",
      mobileDescription:
        "Enhance your profile strength by adding your education details, including school, college, and degree.",
      description:
        "Enhance your profile strength by adding your education details, including school, college, and degree.",
      addBtnText: "Add Educational Details",
      percentageBadgeInput: 10,
      btnClick: () => {
        console.log("temporary function");
      },
      completedDetailsComponent: <CompletedEducationalDetailsContent />,
      completedAddBtnText: "Add more",
    },
    {
      title: "Key Skills",
      mobileDescription:
        "Pick and rate your best skills to showcase them on your profile.",
      description:
        "Add your top 5 skills and self - ratings. This allows recruiters to quickly identify your core strengths and expertise.",
      addProfileDetailsDesc:
        "Pick and self rate your best skills to showcase them on your profile",
      addBtnText: "Add Key Skills",
      percentageBadgeInput: 10,
      btnClick: () => {
        console.log("temporary function");
      },
      completedDetailsComponent: <CompletedKeySkillsContent />,
      completedEditIcon: true,
    },
    {
      title: "Projects",
      mobileDescription:
        "Your project details will be the key to making a strong impression and standing out in the crowd.",
      description:
        "Your project details will be the key to making a strong impression and standing out in the crowd.",
      addBtnText: "Add Projects",
      btnClick: () => {
        console.log("temporary function");
      },
      completedDetailsComponent: <CompletedProjectsContent />,
      completedAddBtnText: "Add more",
    },
    {
      title: "Experience",
      mobileDescription:
        "Provide a glimpse into your professional journey and expertise. ",
      description:
        "Providing a glimpse into your professional journey and expertise. Your job title is your gateway to making a lasting impact and standing out in the crowd. ",
      addBtnText: "Add Experience",
      btnClick: () => {
        console.log("temporary function");
      },
      completedDetailsComponent: <CompletedExperienceContent />,
      completedAddBtnText: "Add more",
    },
  ];

export const userCountCardData: IUserCountCardData[] = [
  { userType: "candidates", count: 330 },
  { userType: "employers", count: 87 },
  { userType: "volunteers", count: 240 },
];

export const recruitedCandidatesCardData: IRecruitedCandidatesCardData[] = [
  {
    imgURL: jeeva,
    candidateName: "Jeeva Santiago",
    fcCategory: "Switching",
    hiringCompanyName: "Arus",
    vedio: true,
    feedback:
      " Lorem ipsum dolor sit amet consectetur. Tristique tellus cursus malesuada sit. Sit ut nulla condimentum erat. Et in commodo venenatis ndimentum erat. Et in commodo venenatis ndimentum erat. Et in commodo venenatis ndimentum erat. Et in commodo venenatis ut mauris lobortis laoreetend.",
  },
  {
    imgURL: akhilesh,
    candidateName: "Agileshh A V",
    fcCategory: "Returning",
    hiringCompanyName: "Bosch",
    vedio: false,
    feedback:
      "Lorem ipsum dolor sit amet consectetur. Tristique tellus cursus malesuada sit. Sit ut nulla condimentum erat. Et in commodo veneipsum dolor sit amet consectetur. Tristique tellus cursus malesuada sit. Sit ut nulla condimentum erat. Et in commodo venenatis ut mauris lobortis laoreet ipsum dolor sit amet consectetur. Tristique tellus cursus malesuada sit. Sit ut nulla condimentum erat. Et in commodo venenatis ut mauris lobortis laoreet natis ut mauris lobortis laoreet.",
  },
  {
    imgURL: prasanna,
    candidateName: "Prasanna B",
    fcCategory: "Switching",
    hiringCompanyName: "Wipro",
    vedio: false,
    feedback:
      "Lorem ipsum dolor sit amet consectetur. Tristique tellus cursus malesuada sit. Sit ut nulla condimentum erat. Et in commodo venenatis ut mauris lobortis laoreet.",
  },
  {
    imgURL: jeeva,
    candidateName: "Jeeva Santiago",
    fcCategory: "Switching",
    hiringCompanyName: "Arus",
    vedio: true,
    feedback:
      " Lorem ipsum dolor sit amet consectetur. Tristique tellus cursus malesuada sit. Sit ut nulla condimentum erat. Et in commodo venenatis ndimentum erat. Et in commodo venenatis ndimentum erat. Et in commodo venenatis ndimentum erat. Et in commodo venenatis ut mauris lobortis laoreetend.",
  },
  {
    imgURL: akhilesh,
    candidateName: "Agileshh A V",
    fcCategory: "Returning",
    hiringCompanyName: "Bosch",
    vedio: false,
    feedback:
      "Lorem ipsum dolor sit amet consectetur. Tristique tellus cursus malesuada sit. Sit ut nulla condimentum erat. Et in commodo venenatis ut mauris lobortis laoreet.",
  },
  {
    imgURL: prasanna,
    candidateName: "Prasanna B",
    fcCategory: "Switching",
    hiringCompanyName: "Wipro",
    vedio: false,
    feedback:
      "Lorem ipsum dolor sit amet consectetur. Tristique tellus cursus malesuada sit. Sit ut nulla condimentum erat. Et in commodo venenatis ut mauris lobortis laoreet.",
  },
  {
    imgURL: jeeva,
    candidateName: "Jeeva Santiago",
    fcCategory: "Switching",
    hiringCompanyName: "Arus",
    vedio: true,
    feedback:
      " Lorem ipsum dolor sit amet consectetur. Tristique tellus cursus malesuada sit. Sit ut nulla condimentum erat. Et in commodo venenatis ndimentum erat. Et in commodo venenatis ndimentum erat. Et in commodo venenatis ndimentum erat. Et in commodo venenatis ut mauris lobortis laoreetend.",
  },
  {
    imgURL: akhilesh,
    candidateName: "Agileshh A V",
    fcCategory: "Returning",
    hiringCompanyName: "Bosch",
    vedio: false,
    feedback:
      "Lorem ipsum dolor sit amet consectetur. Tristique tellus cursus malesuada sit. Sit ut nulla condimentum erat. Et in commodo venenatis ut mauris lobortis laoreet.",
  },
  {
    imgURL: prasanna,
    candidateName: "Prasanna B",
    fcCategory: "Switching",
    hiringCompanyName: "Wipro",
    vedio: false,
    feedback:
      "Lorem ipsum dolor sit amet consectetur. Tristique tellus cursus malesuada sit. Sit ut nulla condimentum erat. Et in commodo venenatis ut mauris lobortis laoreet.",
  },
];

export const candidatesListCardData = [
  {
    firstName: "Sakthivel ",
    lastName: "T",
    imgURL: shakthiVel,
    fcCategory: "Switching",
    profileStatus: "Profile Completion",
  },
  {
    firstName: "Jothika",
    lastName: "Anbarasu",
    imgURL: null,
    fcCategory: "Students",
    profileStatus: "HR Screening",
  },
  {
    firstName: "Lal",
    lastName: "Krishna",
    imgURL: lalKrishna,
    fcCategory: "Returning",
    profileStatus: "Technical",
  },
  {
    firstName: "Sonali",
    lastName: "Choudhury",
    imgURL: sonali,
    fcCategory: "Freshgrads",
    profileStatus: "HR Screening",
  },
  {
    firstName: "Narendrareddy",
    lastName: "T",
    imgURL: narendra,
    fcCategory: "Switching",
    profileStatus: "Technical",
  },
  {
    firstName: "Rajeshwari",
    lastName: "Ramasamy",
    imgURL: null,
    fcCategory: "Freshgrads",
    profileStatus: "Profile Completion",
  },
  {
    firstName: "Harsh",
    lastName: "Naidu",
    imgURL: harsh,
    fcCategory: "Returning",
    profileStatus: "Technical",
  },
  {
    firstName: "Saranya",
    lastName: "Asokumar",
    imgURL: saranya,
    fcCategory: "Returning",
    profileStatus: "HR Screening",
  },
  // {
  //   firstName: "",
  //   lastName: "",
  //   imgURL: "",
  //   fcCategory: "",
  //   profileStatus: "",
  // },
];

export const employersListData = [
  { companyName: "ArusInfo", logoimg: arusSvg },
  { companyName: "ArusInfo", logoimg: arusSvg },
  { companyName: "ArusInfo", logoimg: arusSvg },
  { companyName: "ArusInfo", logoimg: arusSvg },
];

export const volunteersListCardData = [
  {
    firstName: "Deepshikha",
    lastName: "Panigrahi",
    imgURL: deepshikha,
    role: "HR Executive",
    yearsOfExperience: 10,
    vedio: null,
    profileSummary:
      "I aim to contribute to FreshCots in an HR role, bringing my skills.Lorem ipsum dolor sit, amet consectetur adipisicing elit.Nemo, nostrum?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora, cupiditate. nostrum?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora, cupiditate. nostrum?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora, cupiditate.",
  },
  {
    firstName: "Elan",
    lastName: "Chezhian",
    imgURL: elan,
    role: "Data Engineer",
    yearsOfExperience: "20",
    vedio: true,
    profileSummary:
      "I aim to contribute to FreshCots in an HR role, bringing my skills.Lorem ipsum dolor sit, amet consectetur adipisicing elit.Nemo, nostrum?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora, cupiditate. nostrum?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora, cupiditate. nostrum?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora, cupiditate.",
  },
  {
    firstName: "Mathan",
    lastName: "Nayagam",
    imgURL: mathan,
    role: "Data Analyst",
    yearsOfExperience: "15",
    vedio: true,
    profileSummary:
      "I aim to contribute to FreshCots in an HR role, bringing my skills.Lorem ipsum dolor sit, amet consectetur adipisicing elit.Nemo, nostrum?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora, cupiditate. nostrum?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora, cupiditate. nostrum?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora, cupiditate.",
  },
  {
    firstName: "Narendrareddy",
    lastName: "T",
    imgURL: narendra,
    role: "Data Engineer",
    yearsOfExperience: "7",
    vedio: false,
    profileSummary:
      "I aim to contribute to FreshCots in an HR role, bringing my skills.Lorem ipsum dolor sit, amet consectetur adipisicing elit.Nemo, nostrum?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora, cupiditate. nostrum?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora, cupiditate. nostrum?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora, cupiditate.",
  },
  {
    firstName: "Sivadanush",
    lastName: "Balan",
    imgURL: sivaDhanush,
    role: "Project Management",
    yearsOfExperience: "1",
    vedio: true,
    profileSummary:
      "I aim to contribute to FreshCots in an HR role, bringing my skills.Lorem ipsum dolor sit, amet consectetur adipisicing elit.Nemo, nostrum?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora, cupiditate. nostrum?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora, cupiditate. nostrum?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora, cupiditate.",
  },
  {
    firstName: "Mahidharreddy",
    lastName: "Y",
    imgURL: mahidhar,
    role: "Frontend Development",
    yearsOfExperience: "5",
    vedio: false,
    profileSummary:
      "I aim to contribute to FreshCots in an HR role, bringing my skills.Lorem ipsum dolor sit, amet consectetur adipisicing elit.Nemo, nostrum?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora, cupiditate. nostrum?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora, cupiditate. nostrum?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora, cupiditate.",
  },
  {
    firstName: "Narendrareddy",
    lastName: "T",
    imgURL: narendra,
    role: "Backend Development",
    yearsOfExperience: "7",
    vedio: false,
    profileSummary:
      "I aim to contribute to FreshCots in an HR role, bringing my skills.Lorem ipsum dolor sit, amet consectetur adipisicing elit.Nemo, nostrum?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora, cupiditate. nostrum?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora, cupiditate. nostrum?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora, cupiditate.",
  },

  // {
  //   firstName: "",
  //   lastName: "",
  //   imgURL: "",
  //   role: "",
  //   yearsOfExperience: "",
  //   vedio: false,
  //   profileSummary:
  //     "I aim to contribute to FreshCots in an HR role, bringing my skills.Lorem ipsum dolor sit, amet consectetur adipisicing elit.Nemo, nostrum?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora, cupiditate. nostrum?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora, cupiditate. nostrum?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora, cupiditate.",
  // },
];
