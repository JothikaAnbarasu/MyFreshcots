import { TiVideo } from "react-icons/ti";
import PercentageBadge from "../PercentageBadge";
import { ICandidateProfileVedioCardData } from "../../../../../constants/interfaces/user";
import { useAppDispatch } from "../../../../../redux/store";
import { handleVedioRecorderVisibility } from "../../../../../redux/slices/userSlice";

const VedioProfileCard = ({
  title,
  description,
  percentageBadgeInput,
  recordNowBtn,
}: ICandidateProfileVedioCardData) => {
  const dispatch = useAppDispatch();

  return (
    <div
      className={`flex h-[10.94rem] w-[16.9375rem] flex-col  items-center justify-start rounded-lg border  border-grey-100 bg-white pb-4 ss:h-[12rem] ss:w-[18rem]  md:h-[15.5rem] md:w-[24.5rem] ${
        percentageBadgeInput ? "pt-2 ss:pt-3 md:pt-4" : "pt-6 ss:pt-7 md:pt-8"
      }`}
    >
      {percentageBadgeInput && (
        <PercentageBadge
          percentage={percentageBadgeInput}
          height={"h-[1.24763rem]"}
          width={"w-[2.9375rem]"}
        />
      )}

      <div className="mb-[0.67rem] text-sm font-medium tracking-wide text-grey-700 sm:text-base  md:text-lg first-letter:md:mb-3">
        {title}
      </div>

      {/* before upload */}
      <div
        className={` text-grey-320 mb-[1.05rem]
            text-center  text-[0.625rem] font-normal leading-[145.488%] tracking-wide sm:text-xs md:mb-8 ${
              percentageBadgeInput
                ? "px-6 min-[340px]:px-[2.12rem] md:mb-11 md:px-[3.125rem]"
                : "px-6 min-[340px]:px-[1.8rem] ss:px-[1.98rem] md:px-[3.625rem]"
            }`}
      >
        {description}
      </div>

      {recordNowBtn && (
        <button
          className="flex items-center justify-center  gap-1 rounded-sm bg-primary-500 p-3 text-xs font-medium tracking-wide text-white hover:bg-primary-600 md:px-[0.875rem] md:text-sm md:font-semibold"
          onClick={() => dispatch(handleVedioRecorderVisibility(true))}
        >
          <span> Record Now</span>{" "}
          <TiVideo className="h-[1.125rem] w-[1.188rem]" />
        </button>
      )}
    </div>
  );
};

export default VedioProfileCard;
