import NotificationIcon from "../../../../util/userUtils/NotificationIcon";
import { IoCaretDownSharp } from "react-icons/io5";
import CircularProgressBar from "../../../../util/userUtils/CircularProgressbar";
import { useAppDispatch, useAppSelector } from "../../../../redux/store";
import { handleMenuDropdownClick } from "../../../../redux/slices/userSlice";
import MenuDropdown from "./MenuDropdown/MenuDropdown";
import MobileMenuDropdown from "./MenuDropdown/MobileMenuDropdown";
import { useScreenWidth } from "../../../../util/customHooks";

const NavLinks = () => {
  const {
    profileCompletionPercentage: percentage,
    user,
    isMenuDropdownOpen,
  } = useAppSelector((state) => state.user);

  const dispatch = useAppDispatch();
  const screenWidth = useScreenWidth();

  let element = (
    <div
      className={`absolute left-1/2 top-1/2 flex h-[2.5rem] w-[2.5rem] -translate-x-1/2 -translate-y-1/2 select-none items-center justify-center rounded-full bg-cyan-800
          text-base font-normal tracking-wide text-white sm:scale-[1.0999]`}
    >
      {user?.firstName[0]}
      {user?.lastName[0]}
    </div>
  );

  return (
    <div className="relative">
      <div className=" mr-2 inline-flex items-center justify-center pb-1 min-[320px]:mr-5 xs:mr-9 sm:mr-16  sm:pb-0 lg:mr-[4.5rem] ">
        <span className=" mr-4 cursor-pointer min-[360px]:mr-6 sm:mr-12">
          <NotificationIcon />
        </span>
        <div className="relative mr-1 flex items-center justify-center min-[360px]:mr-2 sm:mr-3">
          <CircularProgressBar
            element={element}
            size={40}
            percentage={percentage}
            strokeWidth={4}
            gapOffsetInput={4.5}
            rotateDeg={132}
          />
          <div
            className={`absolute top-[2rem] flex h-[0.9375rem]  w-[2.0625rem] select-none items-center justify-center rounded-[3rem] bg-white  text-[0.625rem] font-medium tracking-wide ${
              percentage < 100 ? " text-orange" : "text-green-600"
            } shadow-md sm:top-9 `}
          >
            {percentage} %
          </div>
        </div>
        <IoCaretDownSharp
          className="cursor-pointer"
          onClick={() => dispatch(handleMenuDropdownClick(true))}
        />
      </div>

      {isMenuDropdownOpen &&
        (screenWidth < 768 ? <MobileMenuDropdown /> : <MenuDropdown />)}
    </div>
  );
};

export default NavLinks;
