import {
  MobileRegisterExplanation,
  RegisterExplanation,
  RegisterForm,
  RegisterTabs,
} from "../components";
import { employerRegisterData } from "../constants/register";

const EmployerRegister = () => {
  return (
    <div className="h-full w-full bg-pageBg pb-20 sm:pb-32">
      <RegisterTabs register={employerRegisterData} />
      <MobileRegisterExplanation register={employerRegisterData} />
      <RegisterExplanation register={employerRegisterData} />
      <RegisterForm register={employerRegisterData} />
    </div>
  );
};

export default EmployerRegister;
