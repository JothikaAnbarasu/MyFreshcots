import { formStyles } from "../../../../../../constants/styles";
import { months } from "../../../../../../constants/dropdownOptions";
import CustomSelect from "../../../../../../util/userUtils/CustomSelectDropdown";
import { getYearsArray } from "../../../../../../util/helpers";

const EducationalDetailsForm = () => {
  const handleSelectChange = (value: string) => {
    console.log("temporary function", value);
  };

  const years = getYearsArray(1990);

  return (
    <form className="flex  h-fit w-full flex-col gap-6 sm:mb-[4.5rem]  sm:gap-8 min-[1024px]:pr-10 min-[1400px]:pr-32">
      <div>
        <label>
          <span className={`${formStyles.userLabelRequired}  `}>
            Institute/School
          </span>
          <input
            type="text"
            className={` ${formStyles.userInput}`}
            placeholder="Type your institute or school"
            required
          />
        </label>
      </div>

      <div>
        <label>
          <span className={`${formStyles.userLabelRequired}  `}>State</span>
          <input
            type="text"
            className={` ${formStyles.userInput}`}
            placeholder="Type your institute or school state"
            required
          />
        </label>
      </div>

      <div>
        <label>
          <span className={`${formStyles.userLabelRequired}  `}>City</span>
          <input
            type="text"
            className={` ${formStyles.userInput}`}
            placeholder="Type your institute or school city"
            required
          />
        </label>
      </div>

      <div>
        <label>
          <span className={`${formStyles.userLabelRequired}  `}>Course</span>
          <input
            type="text"
            className={` ${formStyles.userInput}`}
            placeholder="Type your course (ex: BE, ME, B.com)"
            required
          />
        </label>
      </div>

      <div>
        <label>
          <span className={`${formStyles.userLabelRequired}  `}>
            Major Department
          </span>
          <input
            type="text"
            className={` ${formStyles.userInput}`}
            placeholder="Type your department"
            required
          />
        </label>
      </div>

      <div>
        <label>
          <span className={`${formStyles.userLabelRequired} `}>
            Course Duration
          </span>
          <div className="mt-3 flex w-fit flex-col  gap-y-2  sm:mt-4  sm:w-full sm:flex-row ">
            <div
              className="flex select-none flex-row items-center justify-stretch gap-2
            min-[320px]:gap-x-[3.063rem] sm:gap-x-4 lg:gap-y-8 "
            >
              <CustomSelect
                width="sm:w-[10rem]"
                dropdownHeight="sm:h-[9rem]"
                placeholder={"Month"}
                options={months}
                onChange={handleSelectChange}
              />
              <CustomSelect
                width="sm:w-[10rem]"
                dropdownHeight="sm:h-[9rem]"
                placeholder={"Year"}
                options={years}
                onChange={handleSelectChange}
              />
            </div>
            <div className="font-nomral flex w-full items-center justify-center text-center text-sm tracking-wide text-grey-600">
              To
            </div>
            <div className="flex select-none flex-row items-center justify-stretch gap-2 min-[320px]:gap-x-[3.063rem] sm:gap-x-4 lg:gap-y-8 ">
              <CustomSelect
                width="sm:w-[10rem]"
                dropdownHeight="sm:h-[9rem]"
                placeholder={"Month"}
                options={months}
                onChange={handleSelectChange}
              />
              <CustomSelect
                width="sm:w-[10rem]"
                dropdownHeight="sm:h-[9rem]"
                placeholder={"Year"}
                options={years}
                onChange={handleSelectChange}
              />
            </div>
          </div>
        </label>
      </div>

      <div>
        <label>
          <span className={`${formStyles.userLabel}  `}>Course Type</span>
          <div className="flex flex-wrap items-center justify-start gap-x-4">
            <label className=" mt-3 flex items-center justify-center text-sm font-normal  text-grey-550 sm:mt-4 sm:text-base">
              <input
                type="radio"
                name="work-mode"
                className="mr-2 accent-primary-500  "
              />
              Full Time
            </label>
            <label className=" mt-3 flex items-center justify-center text-sm font-normal  text-grey-550 sm:mt-4 sm:text-base ">
              <input
                type="radio"
                name="work-mode"
                className="mr-2 accent-primary-500 "
              />
              Part Time
            </label>
            <label className=" mt-3 flex items-center justify-center text-sm font-normal  text-grey-550 sm:mt-4 sm:text-base ">
              <input
                type="radio"
                name="work-mode"
                className="mr-2 accent-primary-500 "
              />
              Correspondence
            </label>
          </div>
        </label>
      </div>
      <div>
        <label>
          <span className={`${formStyles.userLabel}  `}>Marks</span>
          <input
            type="text"
            className={` ${formStyles.userInput}`}
            placeholder="Type in percentage"
          />
        </label>
      </div>
    </form>
  );
};

export default EducationalDetailsForm;
