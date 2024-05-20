import EmailPhoneNoInputForm from "../EmailPhoneNoInputForm";
import { EContactChangeType } from "../../../../../constants/enums";

const EmailInputForm = () => {
  return <EmailPhoneNoInputForm type={EContactChangeType.Email} />;
};

export default EmailInputForm;
