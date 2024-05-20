import { useState } from "react";
import { formStyles } from "../../../../../../constants/styles";
import {
  employmentTypes,
  months,
  workModes,
} from "../../../../../../constants/dropdownOptions";

import CustomSelect from "../../../../../../util/userUtils/CustomSelectDropdown";
import { getYearsArray } from "../../../../../../util/helpers";

const ExperienceForm = () => {
  const [text, setText] = useState<string>("");
  const maxLength = 1000;

  const handleTextAreaChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    const { value } = event.target;
    if (value.length <= maxLength) {
      setText(value);
    }
  };

  const handleSelectChange = (value: string) => {
    console.log("temporary function", value);
  };

  const years = getYearsArray(1970);

  return (
    <form className="flex  h-fit w-full flex-col gap-6 sm:mb-[4.5rem] sm:gap-8 min-[1024px]:pr-10 min-[1400px]:pr-32">
      <div>
        <label>
          <span className={`${formStyles.userLabelRequired}  `}>Your Role</span>
          <input
            type="text"
            className={` ${formStyles.userInput}`}
            placeholder="Ex: front end deveoper"
            required
          />
        </label>
      </div>

      <div>
        <label>
          <span className={`${formStyles.userLabelRequired}  `}>
            Employment Type
          </span>
          <div className="mt-3 select-none sm:mt-4">
            <CustomSelect
              width="w-full"
              dropdownHeight="sm:h-[9rem]"
              placeholder="Please Select"
              options={employmentTypes}
              onChange={handleSelectChange}
            />
          </div>
        </label>
      </div>

      <div>
        <label>
          <span className={`${formStyles.userLabelRequired}  `}>
            Company Name
          </span>
          <input
            type="text"
            className={` ${formStyles.userInput}`}
            placeholder="Type the company name"
            required
          />
        </label>
      </div>
      <div>
        <label>
          <span className={`${formStyles.userLabelRequired}  `}>
            Industry Type
          </span>
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
          <span className={`${formStyles.userLabelRequired}  `}>Location</span>
          <input
            type="text"
            className={` ${formStyles.userInput}`}
            placeholder="Ex: Banglore, Chennai"
            required
          />
        </label>
      </div>
      <div>
        <label>
          <span className={`${formStyles.userLabelRequired}`}>Work Mode</span>

          <div className="mt-3 select-none  sm:mt-4">
            <CustomSelect
              width="w-full"
              dropdownHeight=" h-[6rem] sm:h-[6.8rem]"
              placeholder="Ex: Onsite, Hybrid, Remote"
              options={workModes}
              onChange={handleSelectChange}
            />
          </div>
        </label>
      </div>

      <div>
        <label>
          <span className={`${formStyles.userLabelRequired}  `}>Duration</span>
          <div className="mt-3 flex w-fit flex-col  gap-y-2 sm:mt-4  sm:w-full sm:flex-row ">
            <div className="flex  select-none flex-row items-center justify-stretch gap-2 min-[320px]:gap-x-[3.063rem] sm:gap-x-4 lg:gap-y-8 ">
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
            <div className="flex  select-none flex-row items-center justify-stretch gap-2 min-[320px]:gap-x-[3.063rem] sm:gap-x-4 lg:gap-y-8  ">
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
          <span className={`${formStyles.userLabel}   `}>Desciption</span>
          <textarea
            className={`${formStyles.userInput} lite-scrollbar my-3 h-[7.625rem] w-full resize-none  rounded-lg px-4 py-3 sm:mb-0 sm:mt-4 sm:h-[8.125rem] sm:px-[1.625rem] sm:py-5`}
            placeholder="Type here"
            maxLength={maxLength}
            value={text}
            onChange={handleTextAreaChange}
          ></textarea>
          <span className="flex w-full justify-end text-right  text-xs font-normal leading-none tracking-wide text-grey-700 sm:text-sm">
            {text.length}/{maxLength}
          </span>
        </label>
      </div>
    </form>
  );
};

export default ExperienceForm;
