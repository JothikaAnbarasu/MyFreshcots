import CandidatePanel from "./CandidatePanel";
import { candidatePanelData } from "../../constants";

const CandidateContent = () => {
  return (
    <div className="marigin-auto flex w-full flex-wrap  items-center justify-center gap-y-12 sm:gap-y-2 sm:px-8 md:gap-x-8 md:px-0 lg:gap-x-[10rem] lg:gap-y-[5rem] xl:gap-x-48 xxl:gap-x-72 ">
      {candidatePanelData.map(
        ({ title, description, registerURL, imageURL }, index) => {
          return (
            <CandidatePanel
              index={index}
              title={title}
              description={description}
              registerURL={registerURL}
              imageURL={imageURL}
              key={index}
            />
          );
        },
      )}
    </div>
  );
};

export default CandidateContent;
