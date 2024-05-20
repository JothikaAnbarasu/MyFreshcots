import { useAppSelector } from "../../../redux/store";

function EmployerProgressBar() {
  const {
    isFormRegisterOpen,
    isFormDoneOpen,
    isFormGetOtpOpen,
    isFormStartOpen,
  } = useAppSelector((state) => state.form);
  return (
    <div className="mb-10 flex h-full w-full items-center justify-center">
      <div className="flex flex-col items-center justify-center ">
        <div className="blcck mb-[0.3rem] md:hidden ">
          <svg width="261" height="28" viewBox="0 0 261 28" fill="none">
            <path
              d="M8 14H85"
              className={`${
                isFormStartOpen ? "stroke-grey-50" : "stroke-primary-450"
              }`}
              strokeWidth="2.5"
              strokeLinecap="round"
            />

            <path
              d="M84 14H168"
              className={`${
                isFormDoneOpen || isFormGetOtpOpen
                  ? "stroke-primary-450"
                  : "stroke-grey-50"
              }`}
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <path
              d="M167 14H251"
              className={`${
                isFormDoneOpen ? "stroke-primary-450" : "stroke-grey-50"
              }`}
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <circle cx="7" cy="14" r="7" className="fill-primary-450" />
            <circle
              cx="85"
              cy="14"
              r="7"
              className={`${
                isFormRegisterOpen || !isFormStartOpen
                  ? "fill-primary-450"
                  : "fill-grey-50"
              }`}
            />
            <circle
              cx="168"
              cy="14"
              r="7"
              className={`${
                isFormGetOtpOpen || isFormDoneOpen
                  ? "fill-primary-450"
                  : "fill-grey-50"
              }`}
            />
            <circle
              cx="251"
              cy="14"
              r="7"
              className={`${
                isFormDoneOpen ? "fill-primary-450" : "fill-grey-50"
              }`}
            />
          </svg>
        </div>

        <div className="mb-[0.3rem] hidden md:flex">
          <svg width="562" height="20" viewBox="0 0 562 20" fill="none">
            <path
              d="M14 10H182"
              className={`${
                isFormStartOpen ? "stroke-grey-50" : "stroke-primary-450"
              }`}
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <path
              d="M194 10H362"
              className={`${
                isFormDoneOpen || isFormGetOtpOpen
                  ? "stroke-primary-450"
                  : "stroke-grey-50"
              }`}
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <path
              d="M376 10H544"
              className={`${
                isFormDoneOpen ? "stroke-primary-450" : "stroke-grey-50"
              }`}
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <circle cx="10" cy="10" r="10" className="fill-primary-450" />

            <circle
              cx="192"
              cy="10"
              r="10"
              className={`${
                isFormRegisterOpen || !isFormStartOpen
                  ? "fill-primary-450"
                  : "fill-grey-50"
              }`}
            />
            <circle
              cx="372"
              cy="10"
              r="10"
              className={`${
                isFormGetOtpOpen || isFormDoneOpen
                  ? "fill-primary-450"
                  : "fill-grey-50"
              }`}
            />
            <circle
              cx="552"
              cy="10"
              r="10"
              className={`${
                isFormDoneOpen ? "fill-primary-450" : "fill-grey-50"
              }`}
            />
          </svg>
        </div>

        <div className="flex w-full items-center justify-between text-center text-xs font-medium">
          <div className="-ml-2 text-primary-450 md:-ml-1.5">Start</div>

          <div
            className={`${
              isFormRegisterOpen || !isFormStartOpen
                ? "text-primary-450"
                : "text-grey-300"
            } -mr-2`}
          >
            Register
          </div>
          <div
            className={`${
              isFormGetOtpOpen || isFormDoneOpen
                ? "text-primary-450"
                : "text-grey-300"
            } `}
          >
            Get Otp
          </div>
          <div
            className={`${
              isFormDoneOpen ? "text-primary-450" : "text-grey-300"
            } -mr-1 `}
          >
            Done
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmployerProgressBar;
