import { candidatesListCardData } from "../../../../../constants/user";
import { useScreenWidth } from "../../../../../util/customHooks";
import CandidatesCard from "./CandidatesCard";

const CandidatesCardsWrapper = () => {
  const screenWidth = useScreenWidth();

  return (
    <div className="mb-[2.375rem] grid max-w-[1500px] grid-cols-1 gap-x-6 gap-y-7 ss:grid-cols-2 sm:mb-[4.6rem] sm:gap-x-12 sm:px-8 min-[1024px]:grid-cols-3 md:grid-cols-4">
      {candidatesListCardData
        .slice(0, screenWidth >= 1024 ? 8 : 4)
        .map((datas, i) => {
          return <CandidatesCard {...datas} key={i} />;
        })}
    </div>
  );
};

export default CandidatesCardsWrapper;
