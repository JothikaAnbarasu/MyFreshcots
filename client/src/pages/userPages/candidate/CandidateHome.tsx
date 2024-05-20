import CandidatesList from "../../../components/User/Candidate/Home/CandidatesList/CandidatesList";
import CompleteProfileBtn from "../../../components/User/Candidate/Home/CompleteProfileBtn";
import EmployersList from "../../../components/User/Candidate/Home/EmployersList/EmployersList";
import Hero from "../../../components/User/Candidate/Home/Hero/Hero";
import RecruitedCandidatesList from "../../../components/User/Candidate/Home/RecruitedCandidatesList/RecruitedCandidatesList";
import RegisteredUsersHeading from "../../../components/User/Candidate/Home/RegisteredUsersHeading";
import VolunteersList from "../../../components/User/Candidate/Home/VolunteersList/VolunteersList";

const CandidateHome = () => {
  return (
    <div className="h-full w-full bg-pageBg ">
      <Hero />
      <RecruitedCandidatesList />
      <RegisteredUsersHeading />
      <CandidatesList />
      <EmployersList />
      <VolunteersList />
      <div className="flex w-full items-center justify-center pb-40 sm:pb-[9.75rem]">
        <CompleteProfileBtn />
      </div>
    </div>
  );
};

export default CandidateHome;
