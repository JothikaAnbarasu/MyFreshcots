import candidateSearchFreshgrads from "../assets/images/candidateSearch1.svg";
import canddateSearchSwitching from "../assets/images/candidateSearch2.svg";
import candidateSearchReturning from "../assets/images/candidateSearch3.svg";
import candidateSearchStudents from "../assets/images/candidateSearch4.svg";
import thumbsUp from "../assets/images/thumb-up.svg";
import comingSoon from "../assets/images/comingSoon.jpg";
import {
  ICandidatePanelData,
  IVolunteerEmployerCardData,
  IModalData,
} from "./interfaces/home";

export const regLinks = [
  {
    id: "candidate",
    title: "Candidate",
    url: "/#candidate",
    highlights: ["Seek", "Secure", "Shine"],
    registerURL: "/candidate-register/",
  },
  {
    id: "volunteer",
    title: "Volunteer",
    url: "/#volunteer",
    highlights: ["Support", "Serve", "Stage"],
    registerURL: "/volunteer-register/hr",
  },
  {
    id: "employer",
    title: "Employer",
    url: "/#employer",
    highlights: ["Detect", "Define", "Deploy"],
    registerURL: "/employer-register/internship",
  },
];

export const candidatePanelData: ICandidatePanelData[] = [
  {
    title: "Freshgrads",
    imageURL: candidateSearchFreshgrads,
    description:
      "Empowering freshers on their journey to success. our platform is dedicated to guiding and assisting you in securing your first job opportunity. ",
    registerURL: "/candidate-register/freshgrads",
  },
  {
    title: "Switching",
    imageURL: canddateSearchSwitching,
    description:
      "Making a switch from one job field to another? we're here to help you navigate the change smoothly. join us to transition your career with ease.",
    registerURL: "/candidate-register/switching",
  },
  {
    title: "Returning",
    imageURL: candidateSearchReturning,
    description:
      "Bridge the gap in your career journey. our platform welcomes and supports professionals eager to rejoin their respective fields after a break.",
    registerURL: "/candidate-register/returning",
  },
  {
    title: "Students",
    imageURL: candidateSearchStudents,
    description:
      "Whether you're a student or a career explorer, we guide you on your path to valuable internship experiences. start building your future today.",
    registerURL: "/candidate-register/students",
  },
];

export const volunteerCardData: IVolunteerEmployerCardData[] = [
  {
    title: "HR",
    description: (
      <span>
        Your responsibility involves
        <span className=" text-primary-400"> screening candidates, </span>{" "}
        matching skills and enthusiasm with our mission...
      </span>
    ),
    registerURL: "/volunteer-register/hr",
  },
  {
    title: "Experts",
    description: (
      <span>
        Your role involves evaluating candidates, assessing their skills, and
        <span className=" text-primary-400">
          {" "}
          conducting technical interviews{" "}
        </span>
        in your field of expertise
      </span>
    ),
    registerURL: "/volunteer-register/experts",
  },
  {
    title: "Mentors",
    description: (
      <span>
        Your role includes providing guidance, support, motivation and{" "}
        <span className="  text-primary-400">coaching to empower mentees </span>
        in their growth.
      </span>
    ),
    registerURL: "/volunteer-register/mentors",
  },
  {
    title: "General",
    description: (
      <span>
        Your duties involve handling data, reviewing and
        <span className="  text-primary-400">
          {" "}
          validating user information,
        </span>{" "}
        and verifying user activity status
      </span>
    ),
    registerURL: "/volunteer-register/general",
  },
];

export const employerCardData: IVolunteerEmployerCardData[] = [
  {
    title: "Internship",
    description: (
      <span>
        Whether you're a startup or a well-established company, our platform is
        the perfect place to{" "}
        <span className="  text-primary-400">
          {" "}
          find enthusiastic and ambitious interns
        </span>
      </span>
    ),
    registerURL: "/employer-register/internship",
  },
  {
    title: "Employment",
    description: (
      <span>
        From startups to established firms,{" "}
        <span className="  text-primary-400">discover top talent </span>{" "}
        effortlessly on our platform for seamless team building and growth
      </span>
    ),
    registerURL: "/employer-register/employment",
  },
];

export const modalData: IModalData[] = [
  {
    name: "subscription-popup",
    imageURL: thumbsUp,
    buttonText: "got it !",
    confirmationText: "Thank you for subscribing!",
    additionalInfo:
      " You are now part of our community. Stay tuned for exciting updates and content.",
  },

  {
    name: "underConstruction-popup",
    imageURL: comingSoon,
    buttonText: "Explore",
    confirmationText: "Stay tuned for something special!",
    additionalInfo:
      "Our website is under construction and will be unveiled shortly.",
  },
];

export const mailid: string = "contact@freshcots.com";
