import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineChevronDown } from "react-icons/hi2";
import { handleRegDropdown } from "../../redux/slices/appSlice";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import RegisterDropdown from "./RegisterDropdown/RegisterDropdown";
import { openLoginForm } from "../../redux/slices/formSlice";
import { layout } from "../../constants/styles";
import { useClickOutside } from "../../util/customHooks";

const NavLinks = () => {
  const isDropdownOpen = useAppSelector((state) => state.app.isDropdownOpen);
  const dispatch = useAppDispatch();

  let dropdownRef = React.useRef<HTMLDivElement | null>(null);

  useClickOutside(dropdownRef, (e: { target: HTMLElement }) => {
    if (
      !dropdownRef.current?.contains(e.target) &&
      !e.target.closest('[data-scroll-class="hashlink"]')
    ) {
      dispatch(handleRegDropdown(false));
    }
  });

  return (
    <div
      className="mr-8 inline-flex items-center justify-start gap-8 bg-white
      min-[1100px]:mr-16 lg:mr-[4.5rem]"
    >
      <div className="relative ">
        <div
          className="flex cursor-pointer items-center justify-center text-base font-medium tracking-wider text-grey-700"
          onClick={() => {
            dispatch(handleRegDropdown(null));
          }}
          ref={dropdownRef}
        >
          <div className="select-none">Register as </div>
          <div className="p-1">
            <HiOutlineChevronDown
              className={`transform ${
                isDropdownOpen ? "rotate-180" : "rotate-0"
              } font-bold transition-transform duration-150`}
            />
          </div>
        </div>

        {isDropdownOpen && <RegisterDropdown />}
      </div>

      <Link
        to="/contact-us"
        className="text-base font-medium tracking-wider text-grey-700"
      >
        Contact Us
      </Link>
      <button
        type="button"
        className={`${layout.button} h-10 w-[6.5rem] p-2.5 `}
        onClick={() => {
          dispatch(openLoginForm());
        }}
      >
        Login
      </button>
    </div>
  );
};

export default NavLinks;
