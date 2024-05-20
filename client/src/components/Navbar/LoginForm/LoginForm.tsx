import LoginFormEmail from "./LoginFormEmail";
import LoginFormOtp from "./LoginFormOtp";
import { LiaTimesSolid } from "react-icons/lia";
import { closeLoginForm } from "../../../redux/slices/formSlice";
import { useAppDispatch, useAppSelector } from "../../../redux/store";
import FormFooter from "../../../util/homeUtils/FormFooter";

const LoginForm = () => {
  const { loginEmailValidated, isLoginFormOpen } = useAppSelector(
    (state) => state.form,
  );

  const dispatch = useAppDispatch();

  return (
    <>
      <div
        className={`${
          isLoginFormOpen &&
          "fixed inset-0 z-30 hidden items-center  justify-center bg-[rgba(0,0,0,0.6)] transition-all duration-300 ease-linear  sm:flex "
        }`}
        onClick={() => {
          dispatch(closeLoginForm());
        }}
      ></div>

      <div
        className={`fixed right-0 top-0 flex h-full w-full flex-col items-center justify-between bg-white  transition-all
    duration-300  ease-linear sm:w-[52%] md:w-[45%]
    ${isLoginFormOpen ? "transform-x-0 z-50 " : "-z-50 translate-x-full"} 
  `}
      >
        <div className=" flex w-full flex-col gap-6  px-6  pt-4 xs:pl-12 xs:pt-8  ">
          <button
            type="button"
            className="text-2xl font-bold text-grey-700"
            onClick={() => {
              dispatch(closeLoginForm());
            }}
          >
            <LiaTimesSolid />
          </button>
          {loginEmailValidated ? <LoginFormOtp /> : <LoginFormEmail />}
        </div>

        <div className="pb-2">
          <FormFooter />
        </div>
      </div>
    </>
  );
};

export default LoginForm;
