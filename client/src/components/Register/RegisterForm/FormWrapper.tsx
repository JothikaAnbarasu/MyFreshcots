import FormRegister from "./FormRegister";
import FormGetOtp from "./FormGetOtp";
import FormDone from "./FormDone";
import { useAppDispatch, useAppSelector } from "../../../redux/store";
import ProgressBar from "./ProgressBar";
import EmployerProgressBar from "./EmployerProgressBar";
import FormStart from "./FormStart";
import { useParams } from "react-router-dom";
import {
  openFormRegister,
  openFormStart,
} from "../../../redux/slices/formSlice";
import { useEffect } from "react";
import { IRegister } from "../../../constants/interfaces/register";
import { EEmployerCategory } from "../../../constants/enums";

interface IFormWrapper {
  register: IRegister[];
}

const FormWrapper = ({ register }: IFormWrapper) => {
  const {
    isFormRegisterOpen,
    isFormGetOtpOpen,
    isFormDoneOpen,
    isFormStartOpen,
    isEmployerProgessBarOpen,
  } = useAppSelector((state) => state.form);

  const dispatch = useAppDispatch();
  const { category } = useParams();

  useEffect(() => {
    if (
      category === EEmployerCategory.Employment ||
      category === EEmployerCategory.Internship
    ) {
      dispatch(openFormStart());
    } else {
      dispatch(openFormRegister());
    }
  }, []);

  return (
    <div className="flex  h-fit w-full items-center justify-center sm:h-fit">
      <div className=" w-full bg-white px-10 py-8 sm:mx-[5rem]  sm:rounded-lg sm:border sm:border-grey-100  min-[1024px]:w-[60rem] md:w-[62rem] lg:w-[64rem]">
        {isEmployerProgessBarOpen ? <EmployerProgressBar /> : <ProgressBar />}
        {isFormStartOpen && <FormStart />}
        {isFormRegisterOpen && <FormRegister register={register} />}
        {isFormGetOtpOpen && <FormGetOtp />}
        {isFormDoneOpen && <FormDone />}
      </div>
    </div>
  );
};

export default FormWrapper;
