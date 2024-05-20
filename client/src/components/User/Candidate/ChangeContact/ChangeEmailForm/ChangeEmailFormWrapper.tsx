import EmailInputForm from "./EmailInputForm";
import EmailVerificationForm from "./EmailVerificationForm";
import EmailUpdatedMsg from "./EmailUpdatedMsg";
import { useAppSelector } from "../../../../../redux/store";
import { formStyles } from "../../../../../constants/styles";

const ChangeEmail = () => {
  const {
    isChangeEmailInputOpen,
    isChangeEmailVerificationOpen,
    isChangeEmailUpdatedOpen,
  } = useAppSelector((state) => state.user);

  return (
    <div className={`${formStyles.changeEmailPhoneNoFormWrapper}`}>
      {isChangeEmailInputOpen && <EmailInputForm />}
      {isChangeEmailVerificationOpen && <EmailVerificationForm />}
      {isChangeEmailUpdatedOpen && <EmailUpdatedMsg />}
    </div>
  );
};

export default ChangeEmail;
