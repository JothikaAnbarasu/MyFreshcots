import { Link } from "react-router-dom";
import { IVolunteerEmployerCardData } from "../../constants/interfaces/home";

interface IEmployerCardProps extends IVolunteerEmployerCardData {
  index: number;
}

const HomeSectionCard = (props: IEmployerCardProps) => {
  return (
    <Link
      to={props.registerURL}
      data-aos="flip-up"
      data-aos-delay={`${props.index * 50}`}
      className=" flex h-48 w-[16.4rem]  flex-col items-start justify-center gap-4 rounded-lg border border-cyan-700 border-opacity-20 bg-white 
      px-7 py-6 shadow-homeCard sm:pointer-events-none sm:px-6 sm:shadow-none lg:h-[13.063rem] lg:w-[16.4rem]"
    >
      <div className=" mt-4 h-[20%] justify-self-start text-lg font-semibold leading-7 tracking-wider text-grey-700 ss:mt-0 sm:text-[1.375rem]  ">
        {props.title}
      </div>
      <div className="mb-6 h-[80%] justify-self-start text-sm  font-normal leading-5 tracking-wide text-grey-500 sm:font-medium">
        {props.description}
      </div>
    </Link>
  );
};

export default HomeSectionCard;
