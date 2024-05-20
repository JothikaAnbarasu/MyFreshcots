import freshgradsRegister from "../assets/images/freshgradsRegister.svg";
import switchingRegister from "../assets/images/switchingRegister.svg";
import returningRegister from "../assets/images/returningRegister.svg";
import studentsRegister from "../assets/images/studentsRegister.svg";
import hrRegister from "../assets/images/hrRegister.svg";
import expertsRegister from "../assets/images/expertsRegister.svg";
import developersRegister from "../assets/images/developersRegister.svg";
import generalRegister from "../assets/images/generalRegister.svg";
import internshipRegister from "../assets/images/internshipRegister.svg";
import employmentRegister from "../assets/images/employmentRegister.svg";
import { IRegister } from "./interfaces/register";

export const candidateRegisterData: IRegister[] = [
  {
    baseURL: "candidate-register",
    title: "Freshgrads",
    imageURL: freshgradsRegister,

    details: [
      <li>
        Recently Graduated From
        <span className="text-primary-500"> College?</span>
      </li>,
      <li>
        Got Frustrated by applying so
        <span className="text-primary-500"> many companies?</span>
      </li>,
      <li>
        Don't Know the right path to
        <span className="text-primary-500"> start my career?</span>
      </li>,
      <li>
        Don't Know how to get my
        <span className="text-primary-500"> first job?</span>
      </li>,
    ],
  },

  {
    baseURL: "candidate-register",
    title: "Switching",
    imageURL: switchingRegister,

    details: [
      <li>
        Are you encountering <span className="text-primary-500">obstacles</span>{" "}
        while switching job domains?
      </li>,
      <li>
        Need <span className="text-primary-500">Guidance</span> and{" "}
        <span className="text-primary-500">Support</span>?
      </li>,
      <li>
        Wondering how to make a successful{" "}
        <span className="text-primary-500">switch to a different </span> job
        field?
      </li>,

      <li>
        Ready for a<span className="text-primary-500"> Change?</span>
      </li>,
    ],
  },

  {
    baseURL: "candidate-register",
    title: "Returning",
    imageURL: returningRegister,

    details: [
      <li>
        Struggling to
        <span className="text-primary-500"> re-enter the job </span>market after
        a break?
      </li>,
      <li>
        Seeking a <span className="text-primary-500"> smooth path </span> back
        to the job market after a break?
      </li>,
      <li>
        Feeling unsure about how to make a{" "}
        <span className="text-primary-500"> successful comeback? </span>
      </li>,
      <li>
        Not sure where to <span className="text-primary-500">start</span> or
        what to expect?
      </li>,
    ],
  },

  {
    baseURL: "candidate-register",
    title: "Students",
    imageURL: studentsRegister,

    details: [
      <li>
        Wondering how to navigate the{" "}
        <span className="text-primary-500">competitive internship </span>
        landscape?
      </li>,
      <li>
        Ready to take your learning{" "}
        <span className="text-primary-500">beyond the classroom? </span>
      </li>,
      <li>
        Looking to gain
        <span className="text-primary-500"> practical skills </span>for future
        success?
      </li>,
      <li>
        Want to gain{" "}
        <span className="text-primary-500"> real-world experience </span> and
        kick-start my career?
      </li>,
    ],
  },
];

export const volunteerRegisterData: IRegister[] = [
  {
    baseURL: "volunteer-register",
    title: "HR",
    imageURL: hrRegister,

    details: [
      <li>
        Conducting basic candidate{" "}
        <span className=" text-primary-500">screening interviews</span>
      </li>,
      <li>
        Evaluating qualifications and{" "}
        <span className=" text-primary-500">skills competently</span>
      </li>,
      <li>
        Coordinating initial candidate{" "}
        <span className=" text-primary-500">contact efficiently</span>
      </li>,
      <li>
        Ensuring candidate{" "}
        <span className=" text-primary-500">information accuracy</span>
      </li>,
    ],
  },
  {
    baseURL: "volunteer-register",
    title: "Experts",
    imageURL: expertsRegister,

    details: [
      <li>
        Analyze candidate{" "}
        <span className=" text-primary-500">qualifications and skills.</span>
      </li>,
      <li>
        Conduct recorded{" "}
        <span className=" text-primary-500">technical interviews</span>
      </li>,
      <li>
        Rate and assess{" "}
        <span className=" text-primary-500">candidate abilities</span>
      </li>,
      <li>
        Share technical insights and{" "}
        <span className=" text-primary-500">knowledge.</span>
      </li>,
    ],
  },
  {
    baseURL: "volunteer-register",
    title: "Mentors",
    imageURL: developersRegister,

    details: [
      <li>
        Provide <span className=" text-primary-500">motivational support</span>{" "}
        to overcome challenges.
      </li>,
      <li>
        Conduct <span className=" text-primary-500">coaching sessions</span> for
        skill enhancement.
      </li>,
      <li>
        Offer personalized{" "}
        <span className=" text-primary-500">career guidance </span>for success.
      </li>,
      <li>
        Assist in resume and{" "}
        <span className=" text-primary-500">portfolio development.</span>
      </li>,
    ],
  },
  {
    baseURL: "volunteer-register",
    title: "General",
    imageURL: generalRegister,

    details: [
      <li>
        {" "}
        <span className=" text-primary-500">Review</span> and{" "}
        <span className=" text-primary-500">authenticate </span>user information
      </li>,
      <li>
        Support data{" "}
        <span className=" text-primary-500">quality assurance</span>
      </li>,
      <li>
        Verify user <span className=" text-primary-500">activity status</span>{" "}
        etc...
      </li>,
      <li>
        Manage, maintain, and{" "}
        <span className=" text-primary-500">secure data</span>
      </li>,
    ],
  },
];

export const employerRegisterData: IRegister[] = [
  {
    baseURL: "employer-register",
    title: "Internship",
    imageURL: internshipRegister,
    details: [
      <li>
        Ready to Find and Onboard{" "}
        <span className="text-primary-500">Talented Interns?</span>
      </li>,
      <li>
        Simplify Your{" "}
        <span className="text-primary-500">Intern Recruitment</span> Efforts
        with Us!
      </li>,
      <li>
        {" "}
        Access In-Depth{" "}
        <span className="text-primary-500">Candidate Impressions </span>for
        Informed Decision-Making.
      </li>,
      <li>
        {" "}
        Streamline the{" "}
        <span className="text-primary-500">Initial Evaluation </span>Process.
      </li>,
    ],
  },
  {
    baseURL: "employer-register",
    title: "Employment",
    imageURL: employmentRegister,
    details: [
      <li>
        Ready to Strengthen Your Team with{" "}
        <span className="text-primary-500">New Employees?</span>{" "}
      </li>,
      <li>
        Gain Insight into
        <span className="text-primary-500"> Candidates' Abilities</span> at a
        Glance.
      </li>,
      <li>
        {" "}
        Expedite Initial
        <span className="text-primary-500"> Candidate Assessments</span> with
        Precision.
      </li>,
      <li>
        Effortlessly Find and Hire{" "}
        <span className="text-primary-500">Top Professionals!</span>
      </li>,
    ],
  },
];

export const userCategories = {
  candidate: [
    { name: "freshgrads", selected: false },
    { name: "switching", selected: false },
    { name: "returning", selected: false },
    { name: "students", selected: false },
  ],
  volunteer: [
    { name: "hr", selected: false },
    { name: "experts", selected: false },
    { name: "mentors", selected: false },
    { name: "general", selected: false },
  ],
  employer: [
    { name: "internship", selected: false },
    { name: "employment", selected: false },
  ],
};
