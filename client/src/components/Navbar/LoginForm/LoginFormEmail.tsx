import { layout } from "../../../constants/styles";
import {
  handleEmailChange,
  validateEmail,
  validateLoginEmail,
  closeLoginForm,
} from "../../../redux/slices/formSlice";
import { useAppDispatch, useAppSelector } from "../../../redux/store";
import { Link } from "react-router-dom";

const LoginFormEmail = () => {
  const dispatch = useAppDispatch();
  const { email, emailError } = useAppSelector((state) => state.form);

  return (
    <>
      <h2 className="mb-1  text-lg font-semibold text-grey-700 sm:mb-1  sm:text-[2rem]">
        Log in
      </h2>
      <div className="mb-3 sm:mb-4">
        <label className="text-sm font-medium text-grey-400 sm:text-base ">
          Email
          <br />
          <input
            type="email"
            value={email}
            className={` mt-2 h-10 w-full rounded  border border-grey-100 bg-white text-sm focus:border-primary-400 xs:h-12 xs:w-96 sm:text-base md:h-12 md:w-[28rem] md:px-8 ${
              emailError && "border-red-100 focus:border-red-100"
            } px-3 py-2 text-grey-700 outline-none placeholder:text-sm placeholder:font-normal placeholder:text-grey-350 sm:placeholder:text-base `}
            placeholder="john123@gmail.com"
            onChange={(e) => {
              dispatch(handleEmailChange(e.target.value));
            }}
            onBlur={() => {
              dispatch(validateEmail());
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") dispatch(validateEmail());
            }}
          />
        </label>

        {emailError && (
          <p className="mt-1 text-xs font-medium text-red-100 ">{emailError}</p>
        )}
      </div>
      <div>
        <button
          type="button"
          className={`${layout.button}  h-fit w-fit px-5 py-1.5 text-sm  xs:px-10 xs:py-2 sm:text-lg`}
          disabled={emailError !== ""}
          onClick={() => {
            dispatch(validateLoginEmail());
          }}
        >
          Login
        </button>
      </div>
      <div className="text-sm font-medium text-grey-400  sm:text-base">
        New User?{" "}
        <Link
          className="font-semibold text-primary-500"
          to="/#candidate"
          onClick={() => {
            dispatch(closeLoginForm());
          }}
        >
          Register{" "}
        </Link>
      </div>
    </>
  );
};

export default LoginFormEmail;
