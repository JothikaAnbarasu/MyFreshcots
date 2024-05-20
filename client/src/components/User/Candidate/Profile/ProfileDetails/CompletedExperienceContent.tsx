import { useState } from "react";
import mobileEditIconSvg from "../../../../../assets/images/mobileEditIcon.svg";

const CompletedExperienceContent = () => {
  const [showMore, setShowMore] = useState(true);

  const tempContent = {
    role: "UX Designer",
    employmentType: "Full Time",
    companyName: "Arus Info",
    industryType: "IT",
    Location: "Bangalore, Karnataka",
    workMode: "Onsite",
    duration: {
      fromMonth: "Jan",
      fromYear: "2018",
      toMonth: "Aug",
      toYear: "2019",
    },
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni atque laudantium ullam similique earum numquam dolorum. Nemo ullam voluptatum quaerat umquam dolorum. Nemo ullam voluptatum .", //optional
  };
  return (
    <div className="flex w-full flex-col gap-3 tracking-wide">
      <h3 className="flex text-sm font-medium text-grey-750 sm:text-base">
        <p className="do-text-wrap ">
          {" "}
          {tempContent.role}, {tempContent.employmentType}
        </p>
        <img
          src={mobileEditIconSvg}
          alt="edit"
          className="ml-2 block h-fit w-fit cursor-pointer "
        />
      </h3>
      <h4 className="do-text-wrap flex text-sm font-normal text-grey-750 sm:text-base ">
        {tempContent.companyName} ({tempContent.industryType}),{" "}
        {tempContent.Location}
      </h4>
      <div className="text-xs font-normal text-grey-550 sm:text-sm  ">
        {tempContent.duration.fromMonth} {tempContent.duration.fromYear} -{" "}
        {tempContent.duration.toMonth} {tempContent.duration.toYear}
      </div>

      {tempContent.description && (
        <div>
          <span className="text-xs font-normal  text-grey-550 sm:text-sm">
            {tempContent.description?.length > 55 && showMore
              ? `${tempContent.description.substring(0, 55)}.. `
              : `${tempContent.description} `}
          </span>

          {tempContent.description?.length > 55 && (
            <span
              className="cursor-pointer whitespace-nowrap text-right text-xs font-medium text-grey-550 underline underline-offset-1 sm:text-sm"
              onClick={() => setShowMore(!showMore)}
            >
              {showMore ? "show more" : "show less"}
            </span>
          )}
        </div>
      )}
    </div>
  );
};

export default CompletedExperienceContent;
