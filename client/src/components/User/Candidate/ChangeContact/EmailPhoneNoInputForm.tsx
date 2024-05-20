import { useDispatch } from "react-redux";
import { formStyles, layout } from "../../../../constants/styles";
import {
  openChangeEmailVerification,
  openChangePhoneNoVerification,
} from "../../../../redux/slices/userSlice";
import { EContactChangeType } from "../../../../constants/enums";

const EmailPhoneNoInputForm = ({ type }: { type: string }) => {
  const dispatch = useDispatch();

  const handleSendOtpClick = () => {
    if (type === EContactChangeType.Email) {
      dispatch(openChangeEmailVerification());
    } else if (type === EContactChangeType.Phone) {
      dispatch(openChangePhoneNoVerification());
    }
  };

  return (
    <div className=" w-full  px-2 pt-3  min-[320px]:px-4 xs:px-8 min-[1024px]:px-10 min-[1024px]:pt-12 ">
      <div className="mb-10 ">
        <label className=" text-base font-medium tracking-wide text-grey-700">
          Enter new{" "}
          {type === EContactChangeType.Email ? "email" : "phone number"}
          <div className="mt-[1.125rem] flex h-12 w-full items-center justify-center rounded border border-grey-100 text-sm font-normal tracking-wide text-grey-700 outline-none transition-all duration-200 ease-linear  focus-within:border-primary-650  ss:w-[33.188rem]">
            {type === EContactChangeType.Phone && (
              <input
                type="text"
                value="+91"
                readOnly
                className="  h-11 w-12  rounded-l-sm border-r border-grey-100 bg-white text-center text-sm font-normal tracking-wide text-grey-700 outline-none  ss:w-[3.875rem]"
              />
            )}
            <input
              type={type === EContactChangeType.Email ? "email" : "tel"}
              className=" h-11  w-full rounded  px-6 text-sm font-normal tracking-wide text-grey-700  outline-none sm:px-[1.75rem]"
            />
          </div>
        </label>
      </div>
      <button
        className={`${layout.button} ${formStyles.changeEmailPhoneNoButton}`}
        disabled={false}
        onClick={handleSendOtpClick}
      >
        Send OTP
      </button>
    </div>
  );
};

export default EmailPhoneNoInputForm;
