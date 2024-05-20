import EmailPhoneNoInputForm from "../EmailPhoneNoInputForm";
import { EContactChangeType } from "../../../../../constants/enums";

const PhoneNoInputForm = () => {
  return <EmailPhoneNoInputForm type={EContactChangeType.Phone} />;
};

export default PhoneNoInputForm;
