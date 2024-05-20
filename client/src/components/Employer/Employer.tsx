import EmployerContent from "./EmployerContent";
import { regLinks } from "../../constants";
import RegisterBtn from "../../util/homeUtils/RegisterBtn";
import EmployerHeading from "../../util/homeUtils/HomeSectionHeading";
import { EUserType } from "../../constants/enums";

const Employer = () => {
  return (
    <div id="employer" className="section h-fit w-full">
      {regLinks.map((link) => {
        if (link.id === EUserType.Employer) {
          return (
            <div key={link.id}>
              <EmployerHeading
                title={link.title}
                highlights={link.highlights}
              />
              <EmployerContent />
              <div className="mb-28 hidden  items-baseline justify-center sm:flex">
                <RegisterBtn url={link.registerURL} />
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};

export default Employer;
