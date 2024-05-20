import {
  RegisterExplanation,
  RegisterForm,
  RegisterTabs,
  MobileRegisterExplanation,
} from "../components";
import { volunteerRegisterData } from "../constants/register";

const VolunteerRegister = () => {
  return (
    <div className="h-full w-full bg-pageBg pb-20 sm:pb-32 ">
      <RegisterTabs register={volunteerRegisterData} />
      <MobileRegisterExplanation register={volunteerRegisterData} />
      <RegisterExplanation register={volunteerRegisterData} />
      <RegisterForm register={volunteerRegisterData} />
    </div>
  );
};

export default VolunteerRegister;
