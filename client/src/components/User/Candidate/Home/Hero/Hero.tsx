import { userCountCardData } from "../../../../../constants/user";
import CompleteProfileBtn from "../CompleteProfileBtn";
import UserCountCard from "./UserCountCard";

const Hero = () => {
  return (
    <div className="mb-[7.35rem] flex flex-col items-center justify-center gap-y-8 pt-[5.813rem] sm:mb-[7.5rem] sm:gap-y-10 sm:pt-[6.5rem] ">
      <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-5 sm:gap-x-6 ">
        {userCountCardData.map(({ userType, count }, i) => {
          return <UserCountCard userType={userType} count={count} key={i} />;
        })}
      </div>
      <div className="text-[0.938rem] font-medium tracking-wide text-grey-700 min-[1024px]:text-xl">
        {" "}
        Want your profile to be listed?
      </div>
      <CompleteProfileBtn />
    </div>
  );
};

export default Hero;
