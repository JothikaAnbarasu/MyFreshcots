import { FiArrowRight } from "react-icons/fi";
import { ICandidatePanelData } from "../../constants/interfaces/home";
import { Link } from "react-router-dom";

interface ICandidatePanelProps extends ICandidatePanelData {
  index: number;
}

const CandidatePanel = (props: ICandidatePanelProps) => {
  return (
    <div
      data-aos={`${props.index % 2 === 0 ? "fade-right" : "fade-left"}`}
      className="flex w-96 items-center justify-center pl-[1.6rem]  pr-[1.3rem]  min-[340px]:pl-[2.4rem] min-[340px]:pr-[2.4rem]
        sm:px-0 "
    >
      <div className="h-full w-fit">
        <img
          src={props.imageURL}
          alt="candidates search"
          className="mr-4  h-full w-10 sm:mr-0 sm:w-16  "
        />
      </div>

      <div className="flex w-full flex-col items-start justify-start gap-1 pt-0 sm:gap-0 sm:pt-11 ">
        <div className=" text-lg font-semibold  leading-loose  tracking-wide text-grey-700 sm:mb-2  sm:text-2xl sm:leading-10">
          {props.title}
        </div>
        <div className=" mb-1 text-sm  font-normal leading-snug tracking-wide  text-grey-600 sm:text-base  sm:leading-7   ">
          {props.description}
        </div>

        <Link
          to={props.registerURL}
          className="flex items-center justify-center gap-1 text-base font-semibold leading-7 tracking-wide  text-primary-500 transition-all duration-300 
          ease-linear hover:gap-2 "
        >
          <span>Register</span>
          <span className="mt-[0.2rem] text-[1.25rem]">
            <FiArrowRight />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default CandidatePanel;
