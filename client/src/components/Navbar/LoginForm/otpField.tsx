import React, { useState, useEffect, useRef } from "react";
import { Timer } from "../../../util/helpers";
import {
  validateOtp,
  resetOtpValidation,
} from "../../../redux/slices/formSlice";
import { useAppDispatch, useAppSelector } from "../../../redux/store";

interface IOtpFieldProps {
  resendOtpgap?: string;
  otpBoxSize?: string;
  resendOtpTextStyles?: string;
}

const OTPField = ({
  resendOtpgap,
  otpBoxSize,
  resendOtpTextStyles,
}: IOtpFieldProps) => {
  let currenOtpIndex: number = 0;
  const { otpValidated } = useAppSelector((state) => state.form);
  const dispatch = useAppDispatch();
  const [otp, setOtp] = useState<string[]>(new Array(4).fill(""));
  const [activeOTPIndex, setActiveOTPIndex] = useState<number>(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleOnChange = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>): void => {
    const { value } = target;
    const newOTP: string[] = [...otp];
    newOTP[currenOtpIndex] = value.substring(value.length - 1);

    if (!value) setActiveOTPIndex(currenOtpIndex - 1);
    else setActiveOTPIndex(currenOtpIndex + 1);

    setOtp(newOTP);

    //Temporary function for changing the color of otp input boxes
    currenOtpIndex === 3
      ? dispatch(validateOtp())
      : dispatch(resetOtpValidation());
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number,
  ) => {
    currenOtpIndex = index;

    if (
      e.key === "e" ||
      e.key === "E" ||
      e.key === "." ||
      e.key === "+" ||
      e.key === "-"
    ) {
      e.preventDefault();
    }
    if (e.key === "Tab") {
      e.preventDefault();
      setActiveOTPIndex(currenOtpIndex + 1);
    }
    if (e.key === "Backspace" && !(e.target as HTMLInputElement).value) {
      e.preventDefault();
      setActiveOTPIndex(currenOtpIndex - 1);
    }
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, [activeOTPIndex]);

  return (
    <div
      className={`sm:mt-26 flex flex-col items-start justify-start  gap-4 xs:flex-row xs:items-center xs:gap-9 md:gap-[6.8rem] ${resendOtpgap} `}
    >
      <div className=" flex items-center justify-center space-x-4">
        {otp.map((_, index) => {
          return (
            <div key={index}>
              <input
                ref={index === activeOTPIndex ? inputRef : null}
                type="number"
                className={`spin-button-none h-10 w-10 rounded  border border-grey-100 bg-white text-center text-sm font-medium text-grey-600 outline-primary-200 xs:h-10 xs:w-10   sm:text-base ${
                  otpValidated && " border border-primary-500"
                } ${otpBoxSize}`}
                onChange={handleOnChange}
                onKeyDown={(e) => {
                  handleKeyDown(e, index);
                }}
                value={otp[index]}
              />
            </div>
          );
        })}
      </div>
      <div
        className={`cursor-pointer text-xs font-medium text-grey-550 underline decoration-dotted underline-offset-2 sm:text-sm ${resendOtpTextStyles}`}
        onClick={() => {
          setOtp(new Array(4).fill(""));

          //temporay function for changing colors
          dispatch(resetOtpValidation());
        }}
      >
        {/* temp */}
        Resend OTP in <Timer />
      </div>
    </div>
  );
};

export default OTPField;
