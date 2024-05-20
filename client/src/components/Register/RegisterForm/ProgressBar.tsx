import { useAppSelector } from "../../../redux/store";

const ProgressBar = () => {
  const { isFormRegisterOpen, isFormDoneOpen, isFormGetOtpOpen } =
    useAppSelector((state) => state.form);

  return (
    <div className="mb-10 flex h-full w-full items-center justify-center">
      <div className="flex flex-col items-center justify-center ">
        <div className="mb-[0.3rem] flex md:hidden">
          <svg width="261" height="14" viewBox="0 0 261 14" className="none">
            <path
              d="M8 7H130"
              className={`${
                isFormRegisterOpen ? "stroke-grey-50" : "stroke-primary-450"
              }`}
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <path
              d="M129 7H251"
              className={`${
                isFormDoneOpen ? "stroke-primary-450" : "stroke-grey-50"
              }`}
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <circle cx="7" cy="7" r="7" className="fill-primary-450" />
            <circle
              cx="131"
              cy="7"
              r="7"
              className={`${
                isFormRegisterOpen ? "fill-grey-50" : "fill-primary-450"
              }`}
            />
            <circle
              cx="254"
              cy="7"
              r="7"
              className={`${
                isFormDoneOpen ? "fill-primary-450" : "fill-grey-50"
              }`}
            />
          </svg>
        </div>
        <div className=" mb-[0.3rem] hidden md:flex">
          <svg width="380" height="20" viewBox="0 0 380 20" className="none">
            <path
              d="M12 10H180"
              className={`${
                isFormRegisterOpen ? "stroke-grey-50" : "stroke-primary-450"
              }`}
              strokeWidth="4"
              strokeLinecap="round"
            />
            <path
              d="M194 10H362"
              className={`${
                isFormDoneOpen ? "stroke-primary-450" : "stroke-grey-50"
              }`}
              strokeWidth="4"
              strokeLinecap="round"
            />
            <circle cx="10" cy="10" r="10" className="fill-primary-450" />
            <circle
              cx="190"
              cy="10"
              r="10"
              className={`${
                isFormRegisterOpen ? "fill-grey-50" : "fill-primary-450"
              }`}
            />
            <circle
              cx="370"
              cy="10"
              r="10"
              className={`${
                isFormDoneOpen ? "fill-primary-450" : "fill-grey-50"
              }`}
            />
          </svg>
        </div>

        <div className="flex w-full items-center justify-between text-center text-xs font-medium">
          <div className="-ml-2  text-primary-450 min-[320px]:-ml-3">
            Register
          </div>
          <div
            className={`${
              isFormGetOtpOpen || isFormDoneOpen
                ? "text-primary-450"
                : "text-grey-300"
            } -ml-2`}
          >
            Get Otp
          </div>
          <div
            className={`${
              isFormDoneOpen ? "text-primary-450" : "text-grey-300"
            } -mr-2  `}
          >
            Done
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
