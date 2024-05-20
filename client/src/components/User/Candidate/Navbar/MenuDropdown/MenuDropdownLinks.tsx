import { Link } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";
import { useAppDispatch } from "../../../../../redux/store";
import { handleMenuDropdownClick } from "../../../../../redux/slices/userSlice";

const MenuDropdownLinks = () => {
  const dispatch = useAppDispatch();

  return (
    <div
      className="flex h-fit w-full flex-col "
      onClick={() => dispatch(handleMenuDropdownClick(false))}
    >
      {/* <div className="flex h-10 items-center justify-center text-sm font-normal tracking-wide text-grey-700 hover:bg-[#D9F1F1] sm:justify-start sm:pl-4 min-[1024px]:hidden">
        Connect to mentors
      </div> */}

      <div className="flex h-10 items-center justify-center text-sm font-normal tracking-wide text-grey-700 hover:bg-[#D9F1F1] sm:justify-start sm:pl-4 min-[1024px]:hidden">
        Send Invite
      </div>
      <Link
        to="/candidate/contact-us"
        className="flex h-10 items-center justify-center text-sm font-normal tracking-wide text-grey-700 transition-all duration-100 ease-linear hover:bg-[#D9F1F1] sm:justify-start sm:pl-4"
      >
        Contact Us
      </Link>
      <button className="flex h-10 w-full items-center justify-center gap-x-2 text-sm font-normal tracking-wide text-[#aa2626] hover:bg-[#FFECEC] sm:justify-start sm:pl-4">
        <span className="h-fit w-fit">
          <FiLogOut className="text-base" />
        </span>
        Log out
      </button>
    </div>
  );
};

export default MenuDropdownLinks;
