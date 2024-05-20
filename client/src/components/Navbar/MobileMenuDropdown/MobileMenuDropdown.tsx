import { layout } from "../../../constants/styles";
import { Link } from "react-router-dom";
import RegisterDropdown from "../RegisterDropdown/RegisterDropdown";
import { HiOutlineChevronDown } from "react-icons/hi2";
import { useAppDispatch, useAppSelector } from "../../../redux/store";
import {
  handleMenuDropdown,
  toggleMobileRegDropdown,
} from "../../../redux/slices/appSlice";
import { openLoginForm } from "../../../redux/slices/formSlice";

const MobileMenuDropdown = () => {
  const { isMenuOpen, isMobileRegDropdownOpen } = useAppSelector(
    (state) => state.app,
  );
  const dispatch = useAppDispatch();

  return (
    <>
      {isMenuOpen && (
        <div
          className=" fixed inset-0 z-[500] flex items-center justify-center  bg-[rgba(0,0,0,0.6)]"
          onClick={() => {
            dispatch(handleMenuDropdown(false));
          }}
        ></div>
      )}

      <div
        className={` fixed left-0 top-0 flex h-fit w-full -translate-y-full flex-col items-center justify-center gap-6 bg-white px-11 py-10 transition-all duration-500 ease-linear ${
          isMenuOpen && "z-[1000] translate-y-0"
        } `}
      >
        <Link
          to="/contact-us"
          onClick={() => {
            dispatch(handleMenuDropdown(false));
          }}
          className="text-base font-normal tracking-wide text-grey-700"
        >
          Contact Us
        </Link>
        <div className="w-full text-center text-base font-normal tracking-wide text-grey-700">
          <span
            onClick={() => {
              dispatch(toggleMobileRegDropdown());
            }}
          >
            Register
            <HiOutlineChevronDown
              className={`transform ${
                isMobileRegDropdownOpen ? "rotate-180" : "rotate-0"
              } ml-1 inline-flex font-bold transition-transform duration-150`}
            />
          </span>

          {isMobileRegDropdownOpen && <RegisterDropdown />}
        </div>
        <a href="#" className=" flex w-full items-center justify-center">
          <button
            type="button"
            className={`${layout.button} h-10 w-full p-2.5 text-sm font-medium  xs:w-9/12 `}
            onClick={() => {
              dispatch(handleMenuDropdown(false));
              dispatch(openLoginForm());
            }}
          >
            Login
          </button>
        </a>
      </div>
    </>
  );
};

export default MobileMenuDropdown;
