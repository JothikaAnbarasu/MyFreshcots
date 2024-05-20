import { volunteerCardData } from "../../constants";
import HomeSectionCard from "../../util/homeUtils/HomeSectionCard";

const VolunteerContent = () => {
  return (
    <div className=" mb-16 flex w-full flex-wrap items-center justify-center gap-8 sm:px-14  md:px-0 lg:gap-14 ">
      {volunteerCardData.map(({ title, description, registerURL }, index) => {
        return (
          <HomeSectionCard
            title={title}
            description={description}
            registerURL={registerURL}
            key={index}
            index={index}
          />
        );
      })}
    </div>
  );
};

export default VolunteerContent;
