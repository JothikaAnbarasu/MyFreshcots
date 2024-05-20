import { employerCardData } from "../../constants";
import HomeSectionCard from "../../util/homeUtils/HomeSectionCard";

const EmployerContent = () => {
  return (
    <div className=" mb-16 flex w-full flex-wrap items-center justify-center gap-14 sm:px-14 lg:px-0  ">
      {employerCardData.map(({ title, description, registerURL }, index) => {
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

export default EmployerContent;
