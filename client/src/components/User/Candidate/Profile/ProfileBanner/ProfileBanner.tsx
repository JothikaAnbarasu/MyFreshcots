import { useAppSelector } from "../../../../../redux/store";
import DetailsWrapper from "./DetailsWrapper";
import ImageWrapper from "./ImageWrapper";
import RadarChartWrapper from "./RadarChartWrapper";

const ProfileBanner = () => {
  const { isRadarChartVisible } = useAppSelector((state) => state.user);
  return (
    <>
      <div className=" flex w-full items-center justify-center px-4 pb-[2.5rem] pt-[3.5rem] min-[900px]:px-8 min-[900px]:pb-[3.5rem]  min-[900px]:pt-24 min-[1024px]:pt-[6.5rem] ">
        <div
          className={`flex h-fit w-[17rem] flex-col items-center justify-center rounded-lg border border-grey-100  bg-white pb-3 pt-6 min-[320px]:w-[18.9rem] min-[360px]:w-[19.5rem] xs:w-[20rem] sm:w-[25rem]  sm:px-4 sm:pb-4 sm:pt-8 min-[900px]:w-fit min-[900px]:max-w-[58rem] 
          min-[900px]:flex-row min-[900px]:gap-[1.2rem] min-[900px]:py-10 min-[1024px]:gap-8 min-[1024px]:px-7 md:max-w-6xl lg:px-10  ${
            isRadarChartVisible &&
            "sm:w-[32rem] sm:pb-8 sm:pt-12 min-[900px]:max-w-[60rem] min-[900px]:px-12 min-[900px]:pb-0 min-[900px]:pt-0 min-[1024px]:max-w-[62rem] min-[1024px]:px-12 min-[1024px]:pt-4 lg:px-12"
          } `}
        >
          <ImageWrapper />
          <DetailsWrapper />
          <RadarChartWrapper />
        </div>
      </div>
    </>
  );
};

export default ProfileBanner;

// padding-top: 1rem;
// max-width: 62rem;
// padding-left: 3rem;
// padding-right: 3rem;
