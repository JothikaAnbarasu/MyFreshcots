import { useAppSelector } from "../../../../../redux/store";
import { IoMdCall, IoMdMailOpen } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { FaIdCardClip } from "react-icons/fa6";

const BasicsDetails = () => {
  const { user } = useAppSelector((state) => state.user);
  return (
    <div className="lex-col mt-3 w-full items-center justify-start rounded-lg  border border-grey-100  bg-white px-6 py-4 sm:py-[1.875rem] sm:pl-10  sm:pr-20 min-[900px]:hidden min-[1400px]:pr-48">
      <div className="mb-[0.62rem] text-base font-medium text-grey-700 ss:text-lg">
        Basic Details
      </div>
      <div className="my-4 flex flex-col gap-2 ">
        <div className=" flex items-center  justify-start gap-x-2 text-sm font-normal  tracking-wide text-grey-600 ss:gap-x-2  ss:text-base  ">
          <span>
            <FaIdCardClip className="h-4 w-4 text-grey-350/80 ss:h-5 ss:w-5" />
          </span>
          <p className="break-all leading-tight">ID: {user?.freshcotsID}</p>
        </div>
        <div className=" flex items-center  justify-start gap-x-2 text-sm font-normal  tracking-wide text-grey-600 ss:gap-x-2  ss:text-base  ">
          <span>
            <IoMdMailOpen className="h-4 w-4 text-grey-350/80 ss:h-5 ss:w-5" />
          </span>
          <p className="break-all leading-tight">{user?.emailId}</p>
        </div>
        <div className=" flex items-center  justify-start gap-x-2  text-sm font-normal tracking-wide text-grey-600 ss:gap-x-2 ss:text-base">
          <span>
            <IoMdCall className="h-4 w-4 text-grey-350/80 ss:h-5 ss:w-5" />
          </span>
          {user?.phoneNo}
        </div>
        <div className=" flex items-center  justify-start gap-x-2  text-sm font-normal tracking-wide text-grey-600 ss:gap-x-2 ss:text-base">
          <span>
            <FaLocationDot className="h-4 w-4 text-grey-350/80 ss:h-5 ss:w-5" />
          </span>
          Benguluru,Karnataka,IN
        </div>
      </div>
    </div>
  );
};

export default BasicsDetails;
