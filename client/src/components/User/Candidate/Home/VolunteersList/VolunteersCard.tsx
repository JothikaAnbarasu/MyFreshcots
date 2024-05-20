import { CiYoutube } from "react-icons/ci";

const VolunteersCard = ({
  firstName,
  lastName,
  imgURL,
  role,
  yearsOfExperience,
  vedio,
  profileSummary,
}: any) => {
  return (
    <div
      className="flex h-[15rem] w-[16.5rem] flex-col rounded-lg  bg-white tracking-wide shadow-candidatesCard  min-[320px]:w-[17.5rem] 
    min-[340px]:w-[20.5rem] sm:w-[21.625rem]"
    >
      <div className="flex h-1/2  w-full items-center justify-center gap-x-[0.875rem] border-b-[1px] border-b-grey-100 px-[0.875rem]">
        <div
          className="flex h-20 w-20 items-center justify-center rounded-full bg-primary-475   text-2xl font-semibold
      text-white"
        >
          {true ? (
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
        <div className="flex w-[60%] flex-col items-start justify-center gap-y-[0.3rem] ">
          <h3 className=" w-full truncate text-base font-semibold text-grey-700">
            {firstName} {lastName}
          </h3>
          <h4 className="w-full truncate text-sm font-normal text-grey-550">
            {role}
          </h4>
          <p className="w-full truncate text-sm font-normal text-grey-330 ">
            {yearsOfExperience} {yearsOfExperience > 1 ? "years " : "year "}
            experience
          </p>
        </div>
      </div>
      <div className="flex  h-1/2 w-full flex-col items-center justify-center px-[1.25rem] pb-5 pt-[0.875rem]">
        <h4 className="mb-4  text-sm font-medium text-grey-330 ">
          Why am I here?
        </h4>
        <div className="">
          {vedio ? (
            <CiYoutube className="text-3xl text-grey-550" />
          ) : (
            <p className="lite-scrollbar  line-clamp-2 h-full w-full overflow-y-scroll text-left text-sm text-grey-250">
              {profileSummary}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default VolunteersCard;
