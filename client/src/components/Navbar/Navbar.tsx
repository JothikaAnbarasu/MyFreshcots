import logo from "../../assets/images/freshcotsLogo.svg";
import MobileMenuDropdown from "./MobileMenuDropdown/MobileMenuDropdown";
import LoginForm from "../../components/Navbar/LoginForm/LoginForm";
import MenuIcon from "./MenuIcon";
import NavLinks from "./NavLinks";

const Navbar = () => {
  return (
    <div
      id="header"
      className={`fixed left-0 top-0  z-50 flex h-12  w-full items-center justify-center bg-white sm:h-16 lg:h-[4.5rem] `}
    >
      <MobileMenuDropdown />
      <div className="ml-2 flex w-full items-center  justify-start  min-[320px]:ml-4  xs:ml-8 sm:w-4/12 min-[1100px]:ml-16 lg:ml-[4.5rem]">
        <a href="/">
          <img
            className="h-[1.7rem] w-[8.4rem] xs:h-[2.3rem] xs:w-[9.1rem]"
            src={logo}
            alt="logo"
          />
        </a>
      </div>

      <div className="mr-2 flex items-center justify-end font-medium  text-grey-700 hover:text-primary-500  min-[320px]:mr-4  xs:mr-8 sm:hidden">
        <MenuIcon />
      </div>

      <div className={` hidden w-3/4 items-center justify-end sm:flex`}>
        <NavLinks />
      </div>

      <LoginForm />
    </div>
  );
};

export default Navbar;
