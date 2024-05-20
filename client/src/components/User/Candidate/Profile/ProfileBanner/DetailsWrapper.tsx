import { FiSearch } from "react-icons/fi";
import { LuMailOpen } from "react-icons/lu";
import { PiPhone } from "react-icons/pi";
import { useAppSelector } from "../../../../../redux/store";

const DetailsWrapper = () => {
  const { user } = useAppSelector((state) => state.user);
  return (
    <div className="details-wrapper mb-2 grow min-[900px]:mb-0 min-[900px]:mr-4 md:mr-6 lg:mr-8">
      <div className=" text-center text-base font-semibold tracking-wide text-grey-650 sm:text-[1.25rem] min-[900px]:mb-[1.3rem] min-[900px]:text-left min-[900px]:tracking-wider">
        {user?.firstName} {user?.lastName}
      </div>
      <div className="flex items-center justify-center  gap-x-[0.38rem]   text-sm font-normal tracking-wide text-grey-600 sm:text-base min-[900px]:mb-2 min-[900px]:justify-start  min-[900px]:gap-x-[0.5rem] min-[900px]:tracking-wider md:mb-[1.12rem]">
        <span>
          <FiSearch className="h-[0.875rem]  w-[0.875rem] min-[900px]:h-5 min-[900px]:w-5" />
        </span>
        {user?.subCategory}
      </div>
      <div className="hidden items-center justify-start  gap-x-[0.38rem] text-sm font-normal  tracking-wide text-grey-600 min-[900px]:mb-2 min-[900px]:flex min-[900px]:gap-x-[0.5rem] min-[900px]:text-base min-[900px]:tracking-wider md:mb-[1.12rem]">
        <span>
          <LuMailOpen className="h-[0.875rem]  w-[0.875rem] min-[900px]:h-5 min-[900px]:w-5" />
        </span>
        <p className="break-all leading-tight">{user?.emailId}</p>
      </div>
      <div className="hidden items-center  justify-start gap-x-[0.38rem]  text-sm font-normal tracking-wide text-grey-600 min-[900px]:mb-2 min-[900px]:flex  min-[900px]:gap-x-[0.5rem] min-[900px]:text-base min-[900px]:tracking-wider md:mb-[1.12rem]">
        <span>
          <PiPhone className="h-[0.875rem]  w-[0.875rem] min-[900px]:h-5 min-[900px]:w-5" />
        </span>
        {user?.phoneNo}
      </div>
    </div>
  );
};

export default DetailsWrapper;
