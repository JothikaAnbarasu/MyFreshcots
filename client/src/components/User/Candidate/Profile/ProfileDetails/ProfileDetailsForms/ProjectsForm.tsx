import { formStyles } from "../../../../../../constants/styles";
import { useState } from "react";
import CustomSelect from "../../../../../../util/userUtils/CustomSelectDropdown";

import { months } from "../../../../../../constants/dropdownOptions";
import { getYearsArray } from "../../../../../../util/helpers";

const ProjectsForm = () => {
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
    <form className="flex  h-fit w-full flex-col gap-6  sm:mb-[4.5rem] sm:gap-8 min-[1024px]:pr-10 min-[1400px]:pr-32">
      <div>
        <label>
          <span className={`${formStyles.userLabelRequired}  `}>
            Name of the Project
          </span>
          <input
            type="text"
            className={` ${formStyles.userInput}`}
            placeholder="Type your project name"
            required
          />
        </label>
      </div>

      <div>
        <label>
          <span className={`${formStyles.userLabelRequired} `}>
            Project Link
          </span>
          <input
            type="url"
            className={` ${formStyles.userInput}`}
            placeholder="Paste your project link"
            required
          />
        </label>
      </div>

      <div>
        <label>
          <span className={`${formStyles.userLabelRequired}`}>Link Text</span>
          <input
            type="text"
            className={` ${formStyles.userInput}`}
            placeholder="Type the name to display on the link"
            required
          />
        </label>
      </div>

      <div>
        <label>
          <span className={`${formStyles.userLabelRequired} `}>
            Project Duration
          </span>
          <div className="mt-3 flex w-fit  flex-col  gap-y-2  sm:mt-4 sm:w-full sm:flex-row">
            <div
              className="flex flex-row items-center justify-stretch gap-2 min-[320px]:gap-x-[3.063rem]
            sm:gap-x-4 lg:gap-y-8 "
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
                options={months}
                onChange={handleSelectChange}
              />
            </div>
            <div className="font-nomral flex w-full  items-center justify-center text-center text-sm tracking-wide text-grey-600">
              To
            </div>
            <div className="flex flex-row items-center justify-stretch gap-2 min-[320px]:gap-x-[3.063rem] sm:gap-x-4 lg:gap-y-8  ">
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
          <span className={`${formStyles.userLabelRequired}`}>Desciption</span>
          <textarea
            className={`${formStyles.userInput} lite-scrollbar my-3 h-[7.625rem] w-full resize-none  rounded-lg px-4 py-3 sm:mb-0 sm:mt-4 sm:h-[8.125rem] sm:px-[1.625rem] sm:py-5 `}
            placeholder="Type here"
            value={text}
            maxLength={maxLength}
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

export default ProjectsForm;
