import { formStyles } from "../../../../../constants/styles";
import { useAppSelector } from "../../../../../redux/store";
import PhoneNoInputForm from "./PhoneNoInputForm";
import PhoneNoUpdatedMsg from "./PhoneNoUpdatedMsg";
import PhoneNoVerificationForm from "./PhoneNoVerificationForm";

const ChangePhoneFormWrapper = () => {
  const {
    isChangePhoneNoInputOpen,
    isChangePhoneNoVerificationOpen,
    isChangePhoneNoUpdatedOpen,
  } = useAppSelector((state) => state.user);

  return (
    <div className={`${formStyles.changeEmailPhoneNoFormWrapper}`}>
      {isChangePhoneNoInputOpen && <PhoneNoInputForm />}
      {isChangePhoneNoVerificationOpen && <PhoneNoVerificationForm />}
      {isChangePhoneNoUpdatedOpen && <PhoneNoUpdatedMsg />}
    </div>
  );
};

export default ChangePhoneFormWrapper;
