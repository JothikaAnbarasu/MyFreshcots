import blankProfilePic from "../../../../../assets/images/blankProfilePic.svg";
import { useAppSelector } from "../../../../../redux/store";
import CircularProgressBar from "../../../../../util/userUtils/CircularProgressbar";
import PercentageBadge from "../PercentageBadge";

const ImageWrapper = () => {
  const { profileCompletionPercentage: percentage } = useAppSelector(
    (state) => state.user,
  );

  const element = (
    <img
      src={blankProfilePic}
      className=" absolute left-1/2 top-1/2 flex  -translate-x-1/2 -translate-y-1/2 scale-110 items-center justify-center rounded-full sm:scale-[2]"
      alt="Blank Profile Picture"
    />
  );
  return (
    <div className=" img-wrapper relative mb-7 flex  items-center justify-center sm:w-48 ">
      <div className=" flex  sm:hidden ">
        <CircularProgressBar
          size={72}
          percentage={percentage}
          strokeWidth={8}
          gapOffsetInput={9}
          rotateDeg={108}
          element={element}
        />
      </div>

      <div className=" hidden sm:flex">
        <CircularProgressBar
          percentage={percentage}
          size={130}
          strokeWidth={6}
          element={element}
          gapOffsetInput={17}
          rotateDeg={100}
        />
      </div>

      <div
        className={`left-13 absolute -bottom-2.5 flex h-[1.13256rem] w-[2.59831rem] items-center justify-center  rounded-[3.19788rem]  border-[0.5px] border-gray-100 bg-white py-[0.19rem] text-[0.6rem]  font-medium tracking-wide ${
          percentage < 100 ? "text-orange" : "text-green-600"
        }  shadow-sm sm:-bottom-5 sm:h-[1.35rem] sm:w-[2.6rem] sm:text-[0.73288rem] sm:font-semibold sm:shadow-sm`}
      >
        {percentage}%
      </div>
      <div className="left-1/5 absolute top-1/3 sm:hidden">
        <PercentageBadge percentage={5} />
      </div>
      <div className="left-1/5 absolute top-[56%] hidden items-center justify-center gap-0.5 rounded-[0.25rem] bg-grey-25 p-[0.32rem] sm:inline-flex">
        <p className="text-base font-normal tracking-wide text-grey-750">
          Upload
        </p>
        <PercentageBadge
          percentage={5}
          textColor="orange"
          bgColor="white"
          fontSize="text-[0.625rem]"
        />
      </div>
    </div>
  );
};

export default ImageWrapper;
