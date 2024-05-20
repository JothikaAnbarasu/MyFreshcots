import { regLinks } from "../../../constants";
import { RiArrowRightFill } from "react-icons/ri";
import {
  handleMenuDropdown,
  handleRegDropdown,
} from "../../../redux/slices/appSlice";
import { useAppDispatch } from "../../../redux/store";
import { Link } from "react-router-dom";

const RegisterDropdown = () => {
  const dispatch = useAppDispatch();

  return (
    <div className="static z-50 -ml-3 mt-2 flex w-full origin-top items-center justify-center rounded-md  bg-white py-1 shadow-none sm:absolute sm:left-0 sm:ml-0 sm:block sm:shadow-dropdown">
      <div className="w-fit p-1 sm:w-full">
        {regLinks.map(({ id, title, url }) => (
          <Link
            data-scroll-class="hashlink"
            key={id}
            to={url}
            className="align-end m-3 flex px-4 py-2 text-sm text-grey-700 hover:bg-primary-100 sm:m-0"
            onClick={() => {
              dispatch(handleMenuDropdown(false));
              dispatch(handleRegDropdown(false));
            }}
          >
            <span className="flex w-8 items-center justify-start align-middle text-primary-200 sm:hidden">
              <RiArrowRightFill />
            </span>

            <span className="w-22">{title}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RegisterDropdown;
