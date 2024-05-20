import SectionArc from "../../util/homeUtils/SectionArc";
import RegisterBtn from "../../util/homeUtils/RegisterBtn";
import VolunteerHeading from "../../util/homeUtils/HomeSectionHeading";
import VolunteerContent from "./VolunteerContent";
import { regLinks } from "../../constants";
import { EUserType } from "../../constants/enums";

const Volunteer = () => {
  return (
    <div id="volunteer" className="section h-fit w-full">
      {regLinks.map((link) => {
        if (link.id === EUserType.Volunteer) {
          return (
            <div key={link.id}>
              <VolunteerHeading
                title={link.title}
                highlights={link.highlights}
              />
              <VolunteerContent />
              <div className="hidden items-baseline justify-center sm:flex ">
                <RegisterBtn url={link.registerURL} />
              </div>
              <SectionArc />
            </div>
          );
        }
      })}
    </div>
  );
};

export default Volunteer;
