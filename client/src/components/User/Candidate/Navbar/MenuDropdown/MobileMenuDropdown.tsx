import { useAppDispatch, useAppSelector } from "../../../../../redux/store";
import { handleMenuDropdownClick } from "../../../../../redux/slices/userSlice";
import MenuDropdownLinks from "./MenuDropdownLinks";

const MobileMenuDropdown = () => {
  const { isMenuDropdownOpen } = useAppSelector((state) => state.user);

  const dispatch = useAppDispatch();

  return (
    <>
      {isMenuDropdownOpen && (
        <div
          className=" fixed inset-0 z-[500] flex items-center justify-center bg-[rgba(0,0,0,0.6)]"
          onClick={() => {
            dispatch(handleMenuDropdownClick(false));
          }}
        ></div>
      )}

      <div
        className={`fixed left-0 top-0 h-fit w-full -translate-y-full bg-white py-4 transition-all duration-500 ease-linear ${
          isMenuDropdownOpen && "z-[1000] translate-y-0"
        } `}
      >
        <MenuDropdownLinks />
      </div>
    </>
  );
};

export default MobileMenuDropdown;
