import CountUp from "react-countup";
import { IUserCountCardData } from "../../../../../constants/interfaces/user";
import { formatCount } from "../../../../../util/helpers";

interface IUserCountCard extends IUserCountCardData {}

const UserCountCard = ({ userType, count }: IUserCountCard) => {
  return (
    <div className=" shadow-userCountCard flex h-[4.375rem] w-40 flex-col items-center justify-center rounded bg-white text-base font-medium tracking-wide text-grey-700 sm:h-24 sm:w-48 min-[1024px]:h-[7.188rem] min-[1024px]:w-[16.813rem] min-[1024px]:text-xl">
      <span className="">
        <CountUp end={count} formattingFn={(value) => formatCount(value)} />
      </span>
      <span className="">
        {userType.charAt(0).toUpperCase() + userType.slice(1)}
      </span>
    </div>
  );
};

export default UserCountCard;
