import { MouseEventHandler } from "react";
import OTPField from "../../components/Navbar/LoginForm/otpField";
import { formStyles } from "../../constants/styles";

interface IOtpFormContentProps {
  editEmailValue: string;
  editEmailOnClick: MouseEventHandler<HTMLSpanElement>;
}
const OtpFormContent = ({
  editEmailValue,
  editEmailOnClick,
}: IOtpFormContentProps) => {
  return (
    <>
      <div className="mb-1 sm:mb-5 ">
        <div className="text-lg font-semibold text-grey-700 sm:mb-3 sm:text-[2rem]">
          Enter OTP
        </div>
        <div className="text-sm font-medium text-grey-400">
          We’ve sent an OTP to your email
        </div>
      </div>
      <div className="sm:mb-2">
        <label className=" text-base font-medium text-grey-400 ">Email</label>
        <br />

        <div className={`${formStyles.editEmailBoxWrapper}`}>
          <input
            type="email"
            value={editEmailValue}
            className=" h-full w-full  bg-inherit outline-none "
            disabled
          />
          <span
            onClick={editEmailOnClick}
            className="cursor-pointer text-center underline decoration-dotted underline-offset-4"
          >
            Edit
          </span>
        </div>
      </div>

      <div className="mb-3 sm:mb-4">
        <label className="text-base font-medium text-grey-400 ">
          Enter Your OTP
        </label>
        <br />
        <div className="mt-2">
          <OTPField />
        </div>
      </div>
    </>
  );
};

export default OtpFormContent;
