import logo from "../../../../assets/images/freshcotsLogo.svg";
import NavLinks from "./NavLinks";

const CandidateNavbar = () => {
  return (
    <div
      id="header"
      className={`fixed left-0 top-0  z-50 flex h-[4rem] w-full items-center justify-between bg-white sm:h-[4.3rem]  lg:h-[4.5rem] `}
    >
      <div className="ml-2 flex w-full items-center  justify-start  min-[320px]:ml-4  xs:ml-8 sm:w-4/12 min-[1100px]:ml-16 lg:ml-[4.5rem]">
        <a href="/candidate/home">
          <img
            className="h-[1.7rem] w-[8.4rem] xs:h-[2.3rem] xs:w-[9.1rem]"
            src={logo}
            alt="logo"
          />
        </a>
      </div>
      <div
        className={`flex
         w-3/4 items-center justify-end sm:flex`}
      >
        <NavLinks />
      </div>
    </div>
  );
};

export default CandidateNavbar;
