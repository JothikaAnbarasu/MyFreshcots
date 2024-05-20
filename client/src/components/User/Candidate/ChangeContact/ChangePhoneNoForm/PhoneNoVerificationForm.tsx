import { EContactChangeType } from "../../../../../constants/enums";
import EmailPhoneNoVerificationForm from "../EmailPhoneNoVerificationForm";

const PhoneNoVerificationForm = () => {
  return <EmailPhoneNoVerificationForm type={EContactChangeType.Phone} />;
};

export default PhoneNoVerificationForm;
