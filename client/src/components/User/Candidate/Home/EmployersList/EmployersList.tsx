import { employersListData } from "../../../../../constants/user";

const EmployersList = () => {
  return (
    <div className="flex w-full  w-full flex-col items-center justify-center pb-[5.625rem] pt-16 tracking-wide  sm:py-[6.5rem] md:py-[9rem]">
      <h2 className="mb-10 text-center text-xl font-medium tracking-wide text-orange sm:mb-16 md:mb-[6rem]">
        Employers
      </h2>

      {/* temp */}
      <div className="flex max-w-[1500px] flex-wrap items-center justify-center gap-x-16 gap-y-12 px-2 sm:gap-x-20 min-[1024px]:gap-x-[6.75rem]">
        {employersListData.map((data, i) => {
          return (
            <img
              src={data.logoimg}
              alt={data.companyName}
              key={i}
              className="h-fit w-fit"
            />
          );
        })}
      </div>
    </div>
  );
};

export default EmployersList;
