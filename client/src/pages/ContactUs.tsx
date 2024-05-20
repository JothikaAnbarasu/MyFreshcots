import { mailid } from "../constants";
import mail from "../assets/images/mail.svg";
const ContactUs = () => {
  return (
    <div
      className={` flex h-full w-full flex-col items-center justify-center gap-8 bg-pageBg pb-[8.88rem] pt-12 sm:h-[82vh] xxl:pb-56 xxl:pt-20`}
    >
      <div className="flex flex-col items-center justify-center gap-[0.62rem] ">
        <img src={mail} alt="mail" />
        <div className=" text-xl font-semibold tracking-wide md:text-2xl">
          <span className="  text-grey-700">Contact Fresh</span>
          <span className=" text-primary-500">cots </span>
        </div>
        <div className="w-full text-center text-sm font-normal leading-snug tracking-wider text-grey-600 min-[320px]:w-[20rem] sm:w-96  md:text-base">
          For queries, demos or any other requests, please feel free to get in
          touch
        </div>
      </div>
      <div className="flex h-fit w-fit  items-center justify-center rounded-lg border border-grey-100 bg-white px-2 py-8 min-[340px]:px-4 sm:px-[7.56rem] sm:py-[3.8rem]">
        <div className="text-sm font-semibold tracking-wider text-grey-500 sm:text-base sm:font-bold">
          <span className="mr-1"> Email Us : </span>
        </div>
        <a
          href={`mailto:${mailid}`}
          className="text-[0.8rem] font-semibold tracking-wider  text-blue-300        
underline sm:text-base"
        >
          {mailid}
        </a>
      </div>
    </div>
  );
};

export default ContactUs;
