import { IoMdArrowDropdown } from "react-icons/io";

const AreasOfInteresSelectBox = ({ isRotated }: any) => {
  return (
    <>
      <div className=" mb-4   flex h-8 w-[13rem] cursor-pointer  items-center justify-between rounded border border-grey-100 px-[1.3rem]  text-xs font-normal  text-placeholderText min-[300px]:w-[14.5625rem] ss:w-72 sm:h-[2.935rem] sm:w-[22.5rem] sm:px-8  sm:text-base ">
        <span className="select-none ">Select upto three</span>
        <IoMdArrowDropdown
          className={`h-6 w-6 text-grey-550 ${
            isRotated ? "rotate-180" : "rotate-0"
          } `}
        />
      </div>
    </>
  );
};

export default AreasOfInteresSelectBox;
