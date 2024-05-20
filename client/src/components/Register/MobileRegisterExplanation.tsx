import star from "../../assets/images/star.svg";
import { useParams } from "react-router-dom";
import { IRegister } from "../../constants/interfaces/register";

interface IMobileRegisterExplanation {
  register: IRegister[];
}

const MobileRegisterExplanation = ({
  register,
}: IMobileRegisterExplanation) => {
  const { category } = useParams();

  const foundCandidate = register.find(
    (candidate) => candidate.title.toLowerCase() === category,
  );

  return (
    <div className="mb-10 flex flex-col items-center justify-center min-[1020px]:hidden">
      <div className="mb-[4.2rem] flex items-center justify-center ">
        <img src={foundCandidate?.imageURL} className="h-[11.5rem] w-fit" />
      </div>
      <ul className="mx-14  flex list-none flex-col gap-6 min-[375px]:ml-16">
        {foundCandidate?.details.map((list, index) => {
          return (
            <div
              key={index}
              className="flex items-center justify-start text-[0.8125rem] font-medium tracking-wide text-grey-700 sm:text-base"
            >
              <img
                src={star}
                alt="star"
                className="mr-[0.75rem] mt-[0.2rem] h-4 w-4 self-start"
              />
              {list}
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default MobileRegisterExplanation;
