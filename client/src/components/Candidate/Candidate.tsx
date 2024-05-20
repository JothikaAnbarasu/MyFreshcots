import CandidateContent from "./CandidateContent";
import { regLinks } from "../../constants";
import SectionArc from "../../util/homeUtils/SectionArc";
import CandidateHeading from "../../util/homeUtils/HomeSectionHeading";
import { EUserType } from "../../constants/enums";

const Candidate = () => {
  return (
    <div id="candidate" className="section  h-fit w-full ">
      {regLinks?.map((link) => {
        if (link.id === EUserType.Candidate) {
          return (
            <div key={link.id}>
              <CandidateHeading
                title={link.title}
                highlights={link.highlights}
              />
              <CandidateContent />
              <SectionArc />
            </div>
          );
        }
      })}
    </div>
  );
};

export default Candidate;
