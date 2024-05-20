import {
  RegisterExplanation,
  RegisterForm,
  RegisterTabs,
  MobileRegisterExplanation,
} from "../components";
import { candidateRegisterData } from "../constants/register";

const CandidateRegister = () => {
  return (
    <div className=" h-full w-full bg-pageBg pb-20 sm:pb-32">
      <RegisterTabs register={candidateRegisterData} />
      <MobileRegisterExplanation register={candidateRegisterData} />
      <RegisterExplanation register={candidateRegisterData} />
      <RegisterForm register={candidateRegisterData} />
    </div>
  );
};

export default CandidateRegister;
