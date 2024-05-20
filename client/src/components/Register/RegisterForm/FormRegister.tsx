import { formStyles, layout } from "../../../constants/styles";
import {
  calculateSelectedCategoryCount,
  openFormGetOtp,
} from "../../../redux/slices/formSlice";
import { useAppDispatch, useAppSelector } from "../../../redux/store";
import FormFooter from "../../../util/homeUtils/FormFooter";
import { IRegister } from "../../../constants/interfaces/register";
import CategoryCheckboxes from "./CategoryCheckboxes";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { EUserType } from "../../../constants/enums";

interface IFormRegisterProps {
  register: IRegister[];
}

const FormRegister = ({ register }: IFormRegisterProps) => {
  const { categoryCheckboxError } = useAppSelector((state) => state.form);
  const dispatch = useAppDispatch();

  const [isInviteBtnVisible, setIsInviteBtnVisible] = useState<boolean>(false);

  const handleInviteMeTextClick = () => {
    setIsInviteBtnVisible(!isInviteBtnVisible);
  };

  const location = useLocation();
  const userType = location.pathname.split("/")[1].split("-")[0];

  return (
    <form
      name="form-register"
      className="flex w-full flex-col items-center justify-center"
      onSubmit={(e) => {
        e.preventDefault();
        dispatch(
          calculateSelectedCategoryCount(register[0].baseURL.split("-")[0]),
        );
        dispatch(openFormGetOtp(register[0].baseURL.split("-")[0]));
      }}
    >
      <div className="flex w-full flex-col items-center justify-center gap-8  sm:flex-row sm:flex-wrap sm:gap-x-20 sm:gap-y-12   min-[1190px]:gap-x-[10rem] lg:gap-y-14 min-[1200px]:gap-x-20 xl:gap-x-[10rem]">
        <div>
          <label className={`${formStyles.label}`}>
            First Name
            <br />
            <input type="text" className={`${formStyles.input}`} />
          </label>
        </div>

        <div>
          <label className={`${formStyles.label}`}>
            Last Name
            <br />
            <input type="text" className={`${formStyles.input}`} />
          </label>
        </div>

        <div>
          <label className={`${formStyles.label}`}>
            Email
            <br />
            <input type="email" className={`${formStyles.input}`} />
          </label>
        </div>

        <div>
          <label className={`${formStyles.label}`}>
            Contact Number
            <br />
            <div className="mt-[0.87rem] flex h-11 w-[16.5rem] items-center justify-center rounded   border  border-grey-100  py-4 transition-all duration-200 ease-linear  focus-within:border-primary-450 min-[320px]:w-[17.5rem] ss:w-80 lg:h-12 lg:w-[21.75rem] ">
              <input
                type="text"
                value="+91"
                readOnly
                // placeholder="+91"
                className=" flex h-10 w-16 items-center justify-center  rounded-l-sm border-r border-grey-100 bg-white text-center text-base font-normal tracking-wide text-grey-600 outline-none  sm:font-medium lg:h-11"
              />

              <input
                type="tel"
                className="h-10  w-full rounded bg-white px-4 text-base font-normal tracking-wide  text-grey-600 outline-none sm:px-8 sm:font-medium lg:h-11 "
                placeholder="Enter 10 digit number"
              />
            </div>
          </label>
        </div>

        <div className="flex w-full flex-wrap items-center justify-center gap-4 px-0 min-[440px]:px-8  xs:px-16 min-[560px]:px-24 ss:px-0  ">
          {register &&
            register.map(({ title, baseURL }, index) => {
              return (
                <CategoryCheckboxes
                  title={title}
                  key={index}
                  baseURL={baseURL.split("-")[0]}
                />
              );
            })}

          <div className=" w-full text-center text-xs  font-normal text-red-100">
            {categoryCheckboxError}
          </div>
        </div>
      </div>

      {(userType === EUserType.Volunteer ||
        userType === EUserType.Candidate) && (
        <div className=" mt-4 flex w-full items-center justify-center ">
          <div className=" sm:border-grey-120 sm:bg-grey-110 border-none sm:rounded sm:border sm:border-solid sm:px-8 sm:py-4">
            <label className={`${formStyles.label} font-normal`}>
              Invitation Token
            </label>
            <div>
              <input
                type="text"
                className="text-grey-600font-normal mt-[0.87rem] h-11 w-[16.5rem] rounded  border  border-grey-100 bg-white px-4 text-base tracking-wide outline-none focus:border-primary-650 min-[320px]:w-[17.5rem] ss:w-80 sm:mt-4   sm:px-8 sm:font-medium lg:h-12 lg:w-[22rem]"
              />

              <div className="mt-2 text-sm font-normal text-grey-400 sm:text-[0.9rem] ">
                Don't have Invitation Token?
                <span
                  className="ml-1 cursor-pointer select-none font-medium text-primary-500 decoration-[1.5px] underline-offset-1 hover:underline "
                  onClick={handleInviteMeTextClick}
                >
                  Invite me
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      <div
        className={` mt-10 sm:mt-8 ${
          userType === EUserType.Employer ? "sm:mt-[3.9rem]" : "sm:mt-8"
        }`}
      >
        {isInviteBtnVisible ? (
          <button
            type="submit"
            className={`${layout.button} h-12 w-44 p-2.5 sm:w-[12rem] `}
            disabled={false}
          >
            Invite Me
          </button>
        ) : (
          <button
            type="submit"
            className={`${layout.button} h-12 w-44 p-2.5 sm:w-[12rem] `}
            disabled={false}
          >
            Register
          </button>
        )}
      </div>
      <div className="mt-4 hidden w-full min-[1020px]:block">
        <FormFooter />
      </div>
    </form>
  );
};

export default FormRegister;

//color
