import { Link } from "react-router-dom";
import { layout } from "../../constants/styles";

interface IRegisterBtn {
  url: string;
}

const RegisterBtn = (props: IRegisterBtn) => {
  return (
    <Link to={props.url}>
      <div>
        <button type="submit" className={`${layout.button} h-12 w-44  p-2.5`}>
          Register
        </button>
      </div>
    </Link>
  );
};

export default RegisterBtn;
