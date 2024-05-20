import { FiSearch } from "react-icons/fi";

const CandidatesCard = ({
  firstName,
  lastName,
  imgURL,
  fcCategory,
  profileStatus,
}: any) => {
  return (
    <div className="flex h-[14.063rem] w-[16.5rem]  flex-col  items-start justify-start gap-y-2 rounded-lg bg-white pl-5 pr-2 pt-4 tracking-wide shadow-candidatesCard min-[320px]:w-[17rem] min-[320px]:pl-6">
      <div
        className="flex h-20 w-20 items-center justify-center rounded-full bg-primary-475   text-2xl font-semibold
      text-white"
      >
        {imgURL ? (
          <img
            className="h-fit w-fit rounded-full"
            src={imgURL}
            alt="candidate"
          />
        ) : (
          <span>
            {firstName.charAt(0).toUpperCase()}
            {lastName.charAt(0).toUpperCase()}
          </span>
        )}
      </div>

      <div className="flex flex-col items-start justify-center gap-y-[0.625rem]">
        <div className="text-base font-semibold text-grey-700 ">
          {firstName} {lastName}
        </div>
        <div className="flex items-center justify-center gap-x-[0.25rem] text-grey-550">
          <span>
            <FiSearch className="h-4 w-4 " />
          </span>
          <span className=" text-base font-normal ">{fcCategory}</span>
        </div>
        <div className="text-grey-330 text-base font-normal">
          Status - {profileStatus}
        </div>
      </div>
    </div>
  );
};

export default CandidatesCard;

