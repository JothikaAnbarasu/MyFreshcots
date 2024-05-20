import { useAppSelector } from "../../../../../redux/store";
import RadarChart from "./RadarChart";

const RadarChartWrapper = () => {
  const { isRadarChartVisible } = useAppSelector((state) => state.user);

  return (
    <>
      {isRadarChartVisible ? (
        <RadarChart />
      ) : (
        <div className="radarchart-wrapper w-fit px-4 min-[320px]:px-[1.9rem] sm:px-0">
          <div
            className="flex h-fit  items-center justify-center rounded-lg bg-softCyan-200  px-4 py-4 text-center text-xs font-normal tracking-wider text-grey-550 sm:h-36 sm:w-[18rem] sm:text-base md:w-[23rem] md:px-16
      "
          >
            Once you profile becomes 100% you will be eligible for a HR
            screening
          </div>
        </div>
      )}
    </>
  );
};

export default RadarChartWrapper;
