import { useNavigate } from "react-router-dom";
import { layout } from "../../../constants/styles";
import {
  openFormDone,
  openFormRegister,
} from "../../../redux/slices/formSlice";
import { useAppDispatch } from "../../../redux/store";
import FormFooter from "../../../util/homeUtils/FormFooter";
import OtpFormContent from "../../../util/homeUtils/OtpFormContent";
import { EUserType } from "../../../constants/enums";
import { handleRegister } from "../../../redux/slices/userSlice";

const FormGetOtp = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const userType = location.pathname.split("/")[1].split("-")[0];

  //temp
  const handleRegistration = () => {
    if (userType === EUserType.Candidate) {
      setTimeout(() => {
        dispatch(handleRegister());
        navigate("/candidate/home"); //will check the url location and navigate to respective category home page
      }, 4000);
    }
  };

  return (
    <form
      name="form-otp"
      className="flex w-full flex-col items-start justify-between gap-7 gap-x-24 sm:gap-4 lg:px-[0.813rem]"
      onSubmit={(e) => {
        e.preventDefault();
        dispatch(openFormDone());
      }}
    >
      <OtpFormContent
        editEmailValue="temp.@gmail.com"
        editEmailOnClick={() => {
          dispatch(openFormRegister());
        }}
      />

      <div className="mt-36 self-center align-baseline sm:mt-48">
        <button
          type="submit"
          className={`${layout.button} h-12 w-44 p-2.5 sm:w-[12rem]`}
          disabled={false}
          onClick={handleRegistration}
        >
          Submit
        </button>
      </div>

      <div className=" hidden w-full min-[1020px]:block">
        <FormFooter />
      </div>
    </form>
  );
};

export default FormGetOtp;
