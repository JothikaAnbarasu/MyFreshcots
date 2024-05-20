import { useState } from "react";
import { Link } from "react-router-dom";
import mobileEditIconSvg from "../../../../../assets/images/mobileEditIcon.svg";

const CompletedProjectsContent = () => {
  const [showMore, setShowMore] = useState(true);

  const tempContent = {
    projectName: "Testopia",
    linkURL: "https://test-freshcots.azurewebsites.net",
    linkText: "", //optional
    duration: {
      fromMonth: "Jan",
      fromYear: "2018",
      toMonth: "Aug",
      toYear: "2019",
    },

    description:
      "Testopia is an online Test writing platform, Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta minus obcaecati numquam quod, libero pariatur similique necessitatibus dignissimos. Distinctio, quisquam!", //optional
  };

  return (
    <div className="flex w-full flex-col gap-3 tracking-wide">
      <h3 className="flex text-sm font-medium text-grey-750 sm:text-base">
        <p className="do-text-wrap "> {tempContent.projectName}</p>
        <img
          src={mobileEditIconSvg}
          alt="edit"
          className="ml-2 block h-fit w-fit cursor-pointer "
        />
      </h3>
      <Link
        to={tempContent.linkURL}
        className="w-full text-xs font-medium text-blue-400 underline underline-offset-1 sm:text-sm "
        target="_blank"
      >
        {tempContent.linkText ? (
          <p className="truncate">{tempContent.linkText} </p>
        ) : (
          <p className="truncate"> {tempContent.linkURL} </p>
        )}
      </Link>
      <div className="text-xs font-normal text-grey-550 sm:text-sm  ">
        {tempContent.duration.fromMonth} {tempContent.duration.fromYear} -{" "}
        {tempContent.duration.toMonth} {tempContent.duration.toYear}
      </div>
      <div>
        <span className="text-xs font-normal  text-grey-550 sm:text-sm">
          {tempContent.description.length > 55 && showMore
            ? `${tempContent.description.substring(0, 55)}.. `
            : `${tempContent.description} `}
        </span>

        {tempContent.description.length > 55 && (
          <span
            className="cursor-pointer whitespace-nowrap text-right text-xs font-medium text-grey-550 underline underline-offset-1 sm:text-sm"
            onClick={() => setShowMore(!showMore)}
          >
            {showMore ? "show more" : "show less"}
          </span>
        )}
      </div>
    </div>
  );
};

export default CompletedProjectsContent;
