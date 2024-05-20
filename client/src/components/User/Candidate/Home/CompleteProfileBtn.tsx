import { Link } from "react-router-dom";
import { layout } from "../../../../constants/styles";

const CompleteProfileBtn = () => {
  return (
    <Link
      to="/candidate/profile"
      className={`${layout.button} px-[1.063rem] py-[0.688rem] text-sm  min-[1024px]:px-[1.781rem] min-[1024px]:py-[0.875rem] min-[1024px]:text-base `}
    >
      Complete Your Profile
    </Link>
  );
};

export default CompleteProfileBtn;
