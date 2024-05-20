import { useParams } from "react-router-dom";
import { IRegister } from "../../constants/interfaces/register";
import { EUserType } from "../../constants/enums";
import { layout } from "../../constants/styles";

interface IRegisterExplanation {
  register: IRegister[];
}
const RegisterExplanation = ({ register }: IRegisterExplanation) => {
  const { category } = useParams();

  const foundCandidate = register.find(
    (candidate) => candidate.title.toLowerCase() === category,
  );

  return (
    <>
      <div className="mb-[7.4rem] mt-24 hidden h-full w-full items-center justify-center gap-1 px-32  min-[1020px]:flex">
        <ul className="flex h-[20rem] w-[17rem] flex-col items-center justify-between  gap-[11rem] text-left  text-lg  font-medium tracking-wide">
          {foundCandidate?.details[0]}
          {foundCandidate?.details[1]}
        </ul>
        <div className="flex ">
          <div className="flex flex-col py-4 lg:-mr-12">
            <div
              className={`${layout.arc} rounded-tr-[100%]  border-t-2 border-b-transparent border-l-transparent border-r-transparent `}
            ></div>
            <div
              className={`${layout.arc}  rounded-br-[100%]   border-b-2 border-l-transparent border-r-transparent border-t-transparent `}
            ></div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div>
              <img
                src={foundCandidate?.imageURL}
                className="h-[18.75rem] w-[18.75rem] "
              />
            </div>
          </div>
          <div className="flex flex-col py-4 lg:-ml-12">
            <div
              className={`${layout.arc}  rounded-tl-[100%] border-t-2 border-b-transparent border-l-transparent border-r-transparent `}
            ></div>
            <div
              className={`${layout.arc}  rounded-bl-[100%]  border-b-2 border-l-transparent border-r-transparent border-t-transparent `}
            ></div>
          </div>
        </div>

        <ul className="ml-2 flex h-[20rem] w-[17rem] flex-col items-center justify-between gap-[11rem] text-left  text-lg   font-medium tracking-wide">
          {foundCandidate?.details[2]}
          {foundCandidate?.details[3]}
        </ul>
      </div>

      {foundCandidate?.baseURL.split("-")[0] === EUserType.Candidate && (
        <div className=" mb-16 hidden items-center justify-center text-2xl font-semibold tracking-wide text-grey-700 md:flex">
          Kick start your candidate journey by filling the form below!
        </div>
      )}
    </>
  );
};

export default RegisterExplanation;
