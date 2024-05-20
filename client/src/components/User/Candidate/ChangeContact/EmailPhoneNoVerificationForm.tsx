import { useDispatch } from "react-redux";
import { formStyles, layout } from "../../../../constants/styles";
import OTPField from "../../../Navbar/LoginForm/otpField";
import {
  openChangeEmailInput,
  openChangeEmailUpdated,
  openChangePhoneNoInput,
  openChangePhoneNoUpdated,
} from "../../../../redux/slices/userSlice";
import { EContactChangeType } from "../../../../constants/enums";

const EmailPhoneNoVerificationForm = ({ type }: { type: string }) => {
  const dispatch = useDispatch();

  const handleEditClick = () => {
    if (type === EContactChangeType.Email) {
      dispatch(openChangeEmailInput());
    } else if (type === EContactChangeType.Phone) {
      dispatch(openChangePhoneNoInput());
    }
  };

  const handleOnSubmit = () => {
    if (type === EContactChangeType.Email) {
      dispatch(openChangeEmailUpdated());
    } else if (type === EContactChangeType.Phone) {
      dispatch(openChangePhoneNoUpdated());
    }
  };

  return (
    <div className="w-full px-2 pt-3 min-[320px]:px-4 xs:px-8 min-[1024px]:px-10 min-[1024px]:pt-10">
      <div className="mb-10 min-[1024px]:mb-[1.75rem] ">
        <label className="text-base font-medium tracking-wide text-grey-700">
          New {type === EContactChangeType.Email ? "Email" : "Phone number"}
          <div
            className={`${formStyles.editEmailBoxWrapper} mt-[1.125rem] px-6 sm:w-[33.188rem] md:w-[33.188rem]`}
          >
            <input
              type={type === EContactChangeType.Email ? "email" : "tel"}
              value={
                type === EContactChangeType.Email
                  ? "temp@gmail.com"
                  : "1234567890"
              }
              className="h-full w-full bg-inherit font-normal outline-none"
              disabled
            />
            <span
              className="cursor-pointer text-center font-medium underline underline-offset-4"
              onClick={handleEditClick}
            >
              Edit
            </span>
          </div>
        </label>
      </div>
      <div className="mb-3 sm:mb-4">
        <label className="text-base font-medium text-grey-700">
          Enter Your OTP
        </label>

        <div className="mb-10 mt-[1.125rem] w-full min-[1024px]:mb-8">
          <OTPField
            resendOtpgap="xs:gap-x-[4rem] sm:gap-x-[10rem] md:gap-x-[10rem]"
            otpBoxSize="sm:h-12 sm:w-12"
            resendOtpTextStyles="font-normal"
          />
        </div>
        <button
          type="submit"
          className={`${layout.button} ${formStyles.changeEmailPhoneNoButton}`}
          disabled={false}
          onClick={handleOnSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default EmailPhoneNoVerificationForm;
