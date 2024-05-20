import { useNavigate } from "react-router-dom";
import { layout } from "../../../constants/styles";
import {
  closeLoginForm,
  handleLoginEditClick,
} from "../../../redux/slices/formSlice";
import { handleLogin } from "../../../redux/slices/userSlice";
import { useAppDispatch, useAppSelector } from "../../../redux/store";
import OtpFormContent from "../../../util/homeUtils/OtpFormContent";

const LoginFormOtp = () => {
  const { email, emailError, otpValidated } = useAppSelector(
    (state) => state.form,
  );
  const dispatch = useAppDispatch();

  //temp
  const navigate = useNavigate();
  //temp
  const navigateToCandidateHome = () => {
    setTimeout(() => {
      navigate("/candidate/home"); //will check the url location and navigate to respective category home page
    }, 100);
  };

  return (
    <>
      <OtpFormContent
        editEmailValue={email}
        editEmailOnClick={() => {
          dispatch(handleLoginEditClick());
        }}
      />
      <div>
        <button
          type="button"
          className={`${layout.button}  h-fit w-fit  px-5 py-1.5 text-sm   xs:px-10 xs:py-2 sm:text-lg`}
          disabled={!otpValidated || emailError !== ""}
          onClick={() => {
            dispatch(closeLoginForm());
            dispatch(handleLogin());
            navigateToCandidateHome(); //temp
          }}
        >
          Continue
        </button>
      </div>
    </>
  );
};

export default LoginFormOtp;
