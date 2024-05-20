import { useState } from "react";

const CompletedProfileSummaryContent = () => {
  const [showMore, setShowMore] = useState(true);

  const tempContent = {
    description:
      "Recent graduate, Eager to leverage academic knowledge and internship experience to contribute effectively to your team. Strong problem-solving skills and a dedication to learning and growth. Ready to tackle challenges and make a positive impact ",
  };

  return (
    <div className="do-text-wrap text-sm font-normal leading-tight tracking-wide text-grey-700  sm:text-base ">
      {tempContent.description.length > 250 && showMore
        ? `${tempContent.description.substring(0, 250)}.. `
        : `${tempContent.description} `}
      {tempContent.description.length > 250 && (
        <span
          className="cursor-pointer whitespace-nowrap text-right text-xs font-medium text-grey-550 underline underline-offset-1 sm:text-sm"
          onClick={() => setShowMore(!showMore)}
        >
          {showMore ? "show more" : "show less"}
        </span>
      )}
    </div>
  );
};

export default CompletedProfileSummaryContent;
