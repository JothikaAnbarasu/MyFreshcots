import { Link } from "react-router-dom";
import mobileEditIconSvg from "../../../../../assets/images/mobileEditIcon.svg";

const CompletedPersonalDetailsContent = () => {
  const tempContent = {
    firstName: "Tamil",
    lastName: "Selvan",
    yearOfBirth: "2001",
    email: "tamil08062001@gmail.com",
    contactNo: "8072357709",
    gender: "Male", //optional
    linkedInURL: null, //optional
    country: "India",
    state: "TamilNadu",
    city: "Chennai",
    languages: [
      { name: "English", read: true, write: true, speak: true },
      { name: "Tamil", read: true, write: true, speak: true },
      { name: "Kannada", read: false, write: false, speak: true },
    ], //optional
  };
  return (
    <div className="flex w-full  flex-col gap-10 tracking-wide ">
      <div>
        <h5 className="mb-4 flex text-sm  font-medium text-grey-600 sm:text-[1.125rem]">
          <span> Basic Info </span>
          <img
            src={mobileEditIconSvg}
            alt="edit"
            className="ml-2 block h-fit w-fit cursor-pointer "
          />
        </h5>

        <div className="grid grid-cols-2 items-start gap-x-4 gap-y-5 sm:grid-cols-3 sm:gap-x-20 ">
          <div className="flex flex-col items-start justify-center gap-2">
            <span className=" text-xs font-normal text-grey-550  sm:text-sm">
              First Name
            </span>
            <span className="w-full truncate  text-sm font-normal text-grey-600  sm:text-base sm:font-medium">
              {tempContent.firstName}
            </span>
          </div>
          <div className="flex flex-col items-start justify-center gap-2 sm:col-span-2">
            <span className="w-full truncate  text-xs font-normal text-grey-550 sm:text-sm">
              Last Name
            </span>
            <span className="text-sm font-normal text-grey-600  sm:text-base sm:font-medium">
              {tempContent.lastName}
            </span>
          </div>
          <div className="flex flex-col items-start justify-center gap-2">
            <span className="text-xs font-normal text-grey-550 sm:text-sm">
              Year of Birth
            </span>
            <span className="text-sm font-normal text-grey-600  sm:text-base sm:font-medium">
              {tempContent.yearOfBirth}
            </span>
          </div>
          <div className="flex   flex-col items-start justify-center gap-2 sm:col-span-2 ">
            <span className="text-xs font-normal text-grey-550 sm:text-sm">
              Email
            </span>
            <span className=" w-full truncate text-sm font-normal text-grey-600  sm:text-base sm:font-medium">
              {tempContent.email}
            </span>
          </div>
          <div className="flex flex-col items-start justify-center gap-2">
            <span className="text-xs font-normal text-grey-550 sm:text-sm">
              Contact Number
            </span>
            <span className=" w-full truncate  text-sm font-normal text-grey-600  sm:text-base sm:font-medium">
              {tempContent.contactNo}
            </span>
          </div>
          <div className="flex flex-col items-start justify-center gap-2 sm:col-span-2 ">
            <span className="text-xs font-normal text-grey-550 sm:text-sm ">
              LinkedIn URL
            </span>

            {tempContent.linkedInURL ? (
              <Link
                to={tempContent.linkedInURL}
                className="w-full truncate text-xs font-medium text-blue-400 underline underline-offset-1 sm:text-sm "
                target="_blank"
              >
                {tempContent.linkedInURL}
              </Link>
            ) : (
              <button className="text-sm font-normal text-primary-500 sm:text-base sm:font-medium">
                Add now
              </button>
            )}
          </div>
          {tempContent.gender && (
            <div className="flex flex-col items-start justify-center gap-2">
              <span className="text-xs font-normal text-grey-550 sm:text-sm">
                Gender
              </span>
              <span className="text-sm font-normal text-grey-600  sm:text-base sm:font-medium">
                {tempContent.gender}
              </span>
            </div>
          )}
        </div>
      </div>
      <div>
        <h5 className="mb-4 flex text-sm  font-medium text-grey-600 sm:text-[1.125rem]">
          <span> Current Location </span>
          <img
            src={mobileEditIconSvg}
            alt="edit"
            className="ml-2 block h-fit w-fit cursor-pointer "
          />
        </h5>
        <div className="grid grid-cols-2 items-start gap-x-4 gap-y-5 sm:grid-cols-3 sm:gap-x-20 ">
          <div className="flex  flex-col items-start justify-center gap-2">
            <span className=" text-xs font-normal text-grey-550 sm:text-sm">
              Country
            </span>
            <span className="do-text-wrap  text-sm font-normal text-grey-600  sm:text-base sm:font-medium">
              {tempContent.country}
            </span>
          </div>
          <div className=" flex flex-col items-start justify-center gap-2">
            <span className="text-xs font-normal text-grey-550 sm:text-sm">
              State
            </span>
            <span className="do-text-wrap  text-sm font-normal text-grey-600  sm:text-base sm:font-medium">
              {tempContent.state}
            </span>
          </div>
          <div className="flex  flex-col items-start justify-center gap-2">
            <span className="text-xs font-normal text-grey-550 sm:text-sm">
              City
            </span>
            <span className="do-text-wrap  text-sm font-normal  text-grey-600 sm:text-base sm:font-medium">
              {tempContent.city}
            </span>
          </div>
        </div>
      </div>
      <div>
        <h5 className="mb-4 flex text-sm  font-medium text-grey-600 sm:text-[1.125rem]">
          <span> Language </span>
          <img
            src={mobileEditIconSvg}
            alt="edit"
            className="ml-2 block h-fit w-fit cursor-pointer "
          />
        </h5>
        {tempContent.languages &&
          tempContent.languages.map(({ name, read, write, speak }, i) => {
            return (
              <div
                key={i}
                className="mb-4 grid grid-cols-1 items-start gap-x-4 gap-y-5 sm:grid-cols-3 sm:gap-x-20 "
              >
                <div className="flex  flex-col items-start justify-center gap-2">
                  <span className="text-xs font-normal text-grey-550 sm:text-sm">
                    Language Name
                  </span>
                  <span className="do-text-wrap  text-sm font-normal text-grey-600  sm:text-base sm:font-medium">
                    {name}
                  </span>
                </div>
                <div className="flex flex-col  items-start justify-center gap-2 sm:col-span-2">
                  <span className="text-xs font-normal text-grey-550 sm:text-sm">
                    Good in
                  </span>
                  <span className="text-sm font-normal text-grey-600 sm:text-base sm:font-medium">
                    {read && "Read"}
                    {read && write && ", "}
                    {write && "Write"}
                    {write && speak && ", "}
                    {speak && "Speak"}
                  </span>
                </div>
              </div>
            );
          })}

        <button className="text-sm font-normal text-primary-500 sm:text-base sm:font-medium">
          Add languages
        </button>
      </div>
    </div>
  );
};

export default CompletedPersonalDetailsContent;

