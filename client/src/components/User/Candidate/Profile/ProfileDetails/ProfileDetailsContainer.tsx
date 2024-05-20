import { candidateProfileDetailsCardData } from "../../../../../constants/user";
import ProfileDetailsCard from "./ProfileDetailsCard";
import VideoProfile from "./VideoProfile";
import BasicsDetails from "./BasicsDetails";
import AddProfileDetailsContainer from "./ProfileDetailsForms/AddProfileDetailsContainer";
import CompletedProfileDetailsCard from "./CompletedProfileDetailsCard";
import {  useAppSelector } from "../../../../../redux/store";
import RecordView from "../../../../../components/User/Candidate/Profile/VedioRecorder";
import SendInviteWrapper from "../SendInvite/SendInviteWrapper";

const ProfileDetailsContainer = () => {
  const { candidateProfileDetailsCards, isVedioRecorderOpen } = useAppSelector(
    (state) => state.user,
  );

  return (
    <div className=" mx-4 h-fit w-[67%] grow  xs:mx-6 ss:mx-8  sm:mx-12 md:mx-14 xl:max-w-[1500px] ">
      <hr className=" mb-8 mt-4 hidden  max-w-[46rem]  border-t-2 border-dashed border-grey-150 min-[840px]:max-w-[50rem] min-[1024px]:block min-[1400px]:max-w-[58rem]" />
      <div
        className=" block text-xl font-semibold tracking-wide text-grey-700 
      min-[1024px]:hidden"
      >
        About
      </div>
      <div className="flex flex-col justify-center gap-14 xs:px-4 ss:px-8 min-[1024px]:px-0  ">
        <BasicsDetails />
        <VideoProfile />
        {candidateProfileDetailsCardData.map((datas, i) => {
          const showCompletedCard = candidateProfileDetailsCards.find(
            (obj) => obj.title === datas.title,
          )?.isDetailsSaved;
          return (
            <div
              className="max-w-[46rem] min-[840px]:max-w-[50rem] min-[1400px]:max-w-[58rem]"
              key={i}
            >
              {showCompletedCard ? (
                <CompletedProfileDetailsCard
                  title={datas.title}
                  completedProfileDetailsCardContent={
                    datas.completedDetailsComponent
                  }
                  addBtnText={datas.completedAddBtnText}
                  editIcon={datas.completedEditIcon}
                />
              ) : (
                <ProfileDetailsCard {...datas} />
              )}
              <hr
                className={` mt-14 hidden border-t-2  border-dashed border-grey-150
                 ${i !== 0 && "min-[1024px]:block"}
                 `}
              />
              <AddProfileDetailsContainer />
            </div>
          );
        })}
      </div>
      {isVedioRecorderOpen && <RecordView />}

      <SendInviteWrapper />
    </div>
  );
};

export default ProfileDetailsContainer;
