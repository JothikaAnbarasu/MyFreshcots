import ProfileBanner from "../../../components/User/Candidate/Profile/ProfileBanner/ProfileBanner";
import ProfileDetailsContainer from "../../../components/User/Candidate/Profile/ProfileDetails/ProfileDetailsContainer";
import SidebarContainer from "../../../components/User/Candidate/Profile/Sidebar/SidebarContainer";

const CandidateProfile = () => {
  return (
    <>
      <div className=" bg-pageBg ">
        <ProfileBanner />
        <div className="flex w-full items-start justify-center pb-[2.69rem] sm:pb-[8.8rem] md:gap-7">
          <SidebarContainer />
          <ProfileDetailsContainer />
        </div>
      </div>
    </>
  );
};

export default CandidateProfile;
