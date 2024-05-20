import EmailPhoneNoVerificationForm from "../EmailPhoneNoVerificationForm";
import { EContactChangeType } from "../../../../../constants/enums";

const EmailVerificationForm = () => {
  return <EmailPhoneNoVerificationForm type={EContactChangeType.Email} />;
};

export default EmailVerificationForm;
