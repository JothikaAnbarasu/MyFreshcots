import { FiSearch } from "react-icons/fi";
import { CiYoutube } from "react-icons/ci";

const RecruitedCandidatesCard = ({
  imgURL,
  candidateName,
  fcCategory,
  hiringCompanyName,
  vedio,
  feedback,
}: any) => {
  return (
    <div className="relative h-[16.393rem] w-[15.438rem] rounded-lg shadow-recruitedCandidatesCard sm:h-[17.25rem] sm:w-[19rem]">
      <div className="absolute -top-[20%] left-1/2 z-[50] h-[5.607rem] w-[5.607rem]  -translate-x-1/2 transform rounded-full ">
        <img src={imgURL} className="h-fit w-fit rounded-full" />
      </div>

      <div className=" flex h-[59%]  flex-col items-center justify-end gap-y-[0.625rem] rounded-t-lg bg-peach-300  px-2 pb-[0.875rem] tracking-wide">
        <div className="w-full truncate text-center text-base font-semibold  ">
          {candidateName}
        </div>
        <div className="flex items-center justify-center gap-x-[0.438rem] text-sm font-normal">
          <span>
            <FiSearch className="h-4 w-4 " />
          </span>
          {fcCategory}
        </div>
        <div className="w-full truncate text-center text-sm font-normal">
          Hired by{" "}
          <span className="font-semibold text-primary-500">
            {hiringCompanyName}
          </span>
        </div>
      </div>
      {vedio ? (
        <div className="bg-grey-80 flex h-[41%] items-center justify-center rounded-b-lg">
          <CiYoutube className="text-3xl text-grey-550" />
        </div>
      ) : (
        <div className=" h-[41%] w-full  rounded-b-lg bg-white px-[1.75rem] py-[0.75rem] text-[0.688rem] font-normal sm:pb-4 sm:pt-[0.875rem] sm:text-xs">
          <p className=" lite-scrollbar line-clamp-5 h-full  w-full overflow-y-scroll tracking-wide ">
            {feedback}
          </p>
        </div>
      )}
    </div>
  );
};

export default RecruitedCandidatesCard;

