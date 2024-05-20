import VolunteersCard from "./VolunteersCard";
import { volunteersListCardData } from "../../../../../constants/user";
import { useScreenWidth } from "../../../../../util/customHooks";

const VolunteersCardWrapper = () => {
  const screenWidth = useScreenWidth();

  return (
    <div className="mb-[2.375rem] flex max-w-[1500px] flex-wrap items-center justify-center gap-x-6 gap-y-7 px-1  sm:mb-[4.6rem] sm:px-8 lg:gap-x-[3.625rem] lg:gap-y-[3.5rem] lg:px-20">
      {volunteersListCardData
        .slice(0, screenWidth >= 1024 ? 6 : 4)
        .map((datas, i) => {
          return <VolunteersCard {...datas} key={i} />;
        })}
    </div>
  );
};

export default VolunteersCardWrapper;
