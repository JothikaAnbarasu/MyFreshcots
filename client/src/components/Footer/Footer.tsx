import FooterLogo from "../../assets/images/footerLogo.svg";
import { layout } from "../../../src/constants/styles";
import { Link } from "react-router-dom";
import { openModal } from "../../redux/slices/appSlice";
import Modal from "../../components/Modal";
import { useAppSelector, useAppDispatch } from "../../redux/store";
import { EModalName } from "../../constants/enums";

const Footer = () => {
  const { isSubscriptionModalOpen } = useAppSelector((state) => state.app);
  const dispatch = useAppDispatch();
  return (
    <>
      <div className="flex  h-fit w-full flex-col-reverse  gap-10 bg-primary-700 p-3 px-9 py-6 sm:flex-row sm:py-6">
        <div className="flex w-full items-center justify-center sm:w-6/12 sm:justify-end ">
          <div className=" flex flex-col items-center justify-center gap-2 sm:gap-4">
            <div className="order-3 sm:order-1 ">
              <img
                src={FooterLogo}
                alt="logo"
                className=" tracker-wider h-6  w-28 sm:h-fit sm:w-fit"
              />
            </div>
            <div
              className=" order-1 mb-4 
          flex items-center justify-center gap-3 text-center text-sm font-medium tracking-wide text-white underline-offset-4 sm:order-2 sm:mb-0 sm:text-base"
            >
              <Link to="/contact-us" className="hover:underline ">
                Contact Us
              </Link>
              <span>|</span>
              <a href="#" className="hover:underline  ">
                Terms & Conditions
              </a>
              <span>|</span>
              <a href="#" className="hover:underline">
                Privacy Policy{" "}
              </a>
            </div>

            <div className="order-4 text-center text-xs font-normal tracking-wide text-white sm:text-sm">
              Copyright © {new Date().getFullYear()} freshcots | All Rights
              Reserved.
            </div>
          </div>
        </div>
        <div className="flex w-full items-center justify-center sm:w-6/12 ">
          <form
            name="form-newsletter"
            className="flex h-64 w-64 flex-col items-center justify-evenly gap-0 rounded-lg bg-white py-2 xs:w-80 xs:gap-3 sm:py-4 md:h-64 md:w-96"
          >
            <div className=" text-lg font-medium uppercase tracking-wide text-grey-700 sm:text-[1.375rem]">
              News Letter
            </div>
            <div
              className="w-10/12 px-0 text-center text-xs font-normal tracking-wide text-grey-400 
            sm:text-[0.82rem] sm:font-medium"
            >
              By subscribing our news letter you will be getting monthly update
              about freshcots
            </div>
            <input
              type="email"
              name="subscription-email-input"
              className="mx-2 mb-0 h-10 w-11/12 rounded-sm bg-primary-50 px-3 outline-none placeholder:text-sm placeholder:font-medium placeholder:tracking-wide placeholder:text-grey-400 xs:mb-1 xs:h-12"
              placeholder="Enter your email"
              required
            />

            <button
              type="button"
              onClick={() => {
                dispatch(openModal(EModalName.SubscriptionPopup));
              }}
              className={`${layout.button} mx-2 mb-0 h-10 w-11/12  p-2.5  uppercase xs:mx-0  xs:mb-2 xs:h-12`}
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {isSubscriptionModalOpen && (
        <Modal modalName={EModalName.SubscriptionPopup} />
      )}
    </>
  );
};

export default Footer;
