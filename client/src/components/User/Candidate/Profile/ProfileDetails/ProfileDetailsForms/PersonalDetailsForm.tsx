import { formStyles } from "../../../../../../constants/styles";
import {
  countries,
  genders,
} from "../../../../../../constants/dropdownOptions";
import { useAppDispatch, useAppSelector } from "../../../../../../redux/store";
import CustomSelect from "../../../../../../util/userUtils/CustomSelectDropdown";
import { getYearsArray } from "../../../../../../util/helpers";
import { useState } from "react";
import { MdDeleteForever } from "react-icons/md";
import {
  handleChangeEmailClick,
  handleChangePhoneNoClick,
} from "../../../../../../redux/slices/userSlice";
import { Link } from "react-router-dom";
import editIcon from "../../../../../../assets/images/mailNoEdit.svg";

interface ILanguage {
  name: string;
  read: boolean;
  write: boolean;
  speak: boolean;
}

const PersonalDetailsForm = () => {
  const { user } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  const handleSelectChange = (value: string) => {
    console.log("temporary function", value);
  };

  const birthYears = getYearsArray(1960, 2008);

  const [languages, setLanguages] = useState<ILanguage[]>([
    { name: "", read: false, write: false, speak: false },
  ]);

  const handleLanguageInputChange = (
    index: number,
    key: keyof ILanguage,
    value: string | boolean,
  ) => {
    const newLanguages: ILanguage[] = [...languages];
    newLanguages[index] = {
      ...newLanguages[index],
      [key]: value as string | boolean, // Assertion for TypeScript
    };

    setLanguages(newLanguages);
  };

  const handleAddLanguageBtnClick = () => {
    setLanguages([
      ...languages,
      { name: "", read: false, write: false, speak: false },
    ]);
  };

  const deleteLanguage = (index: number) => {
    const newLanguages = [...languages];
    newLanguages.splice(index, 1);
    setLanguages(newLanguages);
  };

  return (
    <form className="flex  h-fit w-full flex-col gap-10  sm:mb-[4.5rem] min-[1024px]:pr-10 min-[1400px]:pr-32">
      <div className="basicInfo ">
        <h3 className="mb-6 text-sm font-medium tracking-wide text-grey-700 sm:text-[1.12rem]">
          Basic Info
        </h3>
        <div className="flex flex-col gap-6 sm:gap-8 ">
          <div>
            <label>
              <span className={`${formStyles.userLabel}  `}>First Name</span>
              <input
                type="text"
                className={` ${formStyles.userInput}`}
                defaultValue={user?.firstName}
              />
            </label>
          </div>
          <div>
            <label>
              <span className={`${formStyles.userLabel}  `}>Last Name</span>
              <input
                type="text"
                className={` ${formStyles.userInput}`}
                defaultValue={user?.lastName}
              />
            </label>
          </div>
          <div>
            <label>
              <span className={`${formStyles.userLabelRequired}`}>
                Year Of Birth
              </span>
              <div className="mt-3 select-none  sm:mt-4">
                <CustomSelect
                  width="w-full"
                  dropdownHeight="h-40 sm:h-44"
                  placeholder="
                Select your birth year"
                  options={birthYears}
                  onChange={handleSelectChange}
                />
              </div>
            </label>
          </div>
          <div>
            <label>
              <span className={`${formStyles.userLabel}  `}>Email</span>
              <div className="relative h-fit ">
                <input
                  type="text"
                  className={` ${formStyles.userInput} truncate pr-16`}
                  value={user?.emailId}
                  readOnly
                />
                <Link to="/candidate/change-email" className="h-fit w-fit">
                  <span
                    className="absolute right-2 top-[1.4rem] mr-2 cursor-pointer text-sm font-normal text-primary-500 underline underline-offset-1 sm:right-4 sm:top-[1.89rem]  sm:mr-0"
                    onClick={() => dispatch(handleChangeEmailClick())}
                  >
                    <img
                      src={editIcon}
                      alt="edit"
                      className="inline sm:hidden"
                    />
                    <span className="hidden sm:inline">Change email</span>
                  </span>
                </Link>
              </div>
            </label>
          </div>

          <div>
            <label>
              <span className={`${formStyles.userLabel} truncate  `}>
                Contact Number
              </span>
              <div
                className={`relative  mt-3 flex h-10 w-full items-center justify-center rounded border border-grey-100 bg-grey-95  text-sm font-normal tracking-wide text-grey-700 
              transition-all duration-200 ease-linear focus-within:border-primary-650  sm:mt-4 sm:h-12 `}
              >
                <input
                  type="text"
                  value={user?.phoneNoISD}
                  className="h-9 w-14 truncate rounded-l-sm border-r border-grey-100 bg-inherit text-center outline-none"
                  readOnly
                />
                <input
                  type="text"
                  className="w-full  truncate  rounded bg-inherit pl-4 pr-16 outline-none "
                  value={user?.phoneNo}
                  readOnly
                />
                <Link to="/candidate/change-phoneNo">
                  <span
                    className=" absolute right-2 top-2 mr-2 cursor-pointer  text-sm font-normal text-primary-500 underline underline-offset-1 sm:right-4 sm:top-3.5 sm:mr-0"
                    onClick={() => dispatch(handleChangePhoneNoClick())}
                  >
                    <img
                      src={editIcon}
                      alt="edit"
                      className=" inline sm:hidden"
                    />
                    <span className="hidden sm:inline">Change phoneNo</span>
                  </span>
                </Link>
              </div>
            </label>
          </div>
          <div>
            <label>
              <span className={`${formStyles.userLabelRequired}`}>Gender</span>
              <div className="mt-3 select-none  sm:mt-4">
                <CustomSelect
                  width="w-full"
                  dropdownHeight=" h-[6rem] sm:h-[6.8rem]"
                  placeholder="
                Select your gender"
                  options={genders}
                  onChange={handleSelectChange}
                />
              </div>
            </label>
          </div>
          <div>
            <label>
              <span className={`${formStyles.userLabel}  `}>LinkedIn URL</span>
              <input
                type="text"
                className={` ${formStyles.userInput}`}
                placeholder="Enter the URL"
              />
            </label>
          </div>
        </div>
      </div>

      <div className="currentLocation">
        <h3 className="mb-6 text-sm font-medium tracking-wide text-grey-700 sm:text-[1.12rem]">
          Current Location
        </h3>

        <div className="flex flex-col gap-6 sm:gap-8 ">
          <div>
            <label>
              <span className={`${formStyles.userLabelRequired} `}>
                Country
              </span>
              <input
                type="text"
                className={` ${formStyles.userInput}`}
                value="India"
                readOnly
              />
            </label>
          </div>
          <div>
            <label>
              <span className={`${formStyles.userLabelRequired}  `}>State</span>
              <div className="mt-3 select-none  sm:mt-4">
                <CustomSelect
                  width="w-full"
                  dropdownHeight="h-40 sm:h-44"
                  placeholder="
                Select your state"
                  options={countries}
                  onChange={handleSelectChange}
                />
              </div>
            </label>
          </div>
          <div>
            <label>
              <span className={`${formStyles.userLabelRequired}  `}>City</span>
              <div className="mt-3 select-none  sm:mt-4">
                <CustomSelect
                  width="w-full"
                  dropdownHeight="h-40 sm:h-44"
                  placeholder="Select your city"
                  options={countries}
                  onChange={handleSelectChange}
                />
              </div>
            </label>
          </div>
        </div>
      </div>

      <div className="language flex flex-col ">
        <h3 className="mb-6 text-sm font-medium tracking-wide text-grey-700 sm:text-[1.12rem]">
          Language
        </h3>

        {languages.map((language, index) => (
          <div key={index} className="language-item mb-4">
            <label>
              <span className={`${formStyles.userLabelRequired}  `}>
                {" "}
                Language
              </span>
              <input
                type="text"
                className={` ${formStyles.userInput}`}
                placeholder="Enter language name"
                onChange={(e) =>
                  handleLanguageInputChange(index, "name", e.target.value)
                }
                required
              />
            </label>

            <div className="mt-[0.875rem] flex items-center justify-between">
              <div className="flex flex-wrap items-center justify-start gap-x-[0.813rem]">
                <label className=" flex items-center justify-start text-sm font-normal text-grey-550  sm:text-[0.95rem]">
                  <input
                    type="checkbox"
                    name="read"
                    className="mr-2 accent-primary-500"
                    checked={language.read}
                    onChange={(e) =>
                      handleLanguageInputChange(index, "read", e.target.checked)
                    }
                  />
                  Read
                </label>
                <label className="sm:text-[0.95rem]sm:text-base flex items-center justify-start text-sm font-normal  text-grey-550  sm:text-[0.95rem]">
                  <input
                    type="checkbox"
                    name="write"
                    className="mr-2  accent-primary-500"
                    checked={language.write}
                    onChange={(e) =>
                      handleLanguageInputChange(
                        index,
                        "write",
                        e.target.checked,
                      )
                    }
                  />
                  Write
                </label>
                <label className=" flex items-center justify-start text-sm font-normal text-grey-550 sm:text-[0.95rem]">
                  <input
                    type="checkbox"
                    name="speak"
                    className="mr-2 accent-primary-500 "
                    checked={language.speak}
                    onChange={(e) =>
                      handleLanguageInputChange(
                        index,
                        "speak",
                        e.target.checked,
                      )
                    }
                  />
                  Speak
                </label>
              </div>

              <span
                className="h-fit w-fit "
                onClick={() => deleteLanguage(index)}
              >
                <MdDeleteForever className="cursor-pointer text-xl text-primary-400 sm:text-3xl" />
              </span>
            </div>
          </div>
        ))}

        <button
          type="button"
          className="mt-1 text-left text-[0.813rem] font-medium tracking-wide text-primary-500 sm:text-base"
          onClick={handleAddLanguageBtnClick}
        >
          {languages.length ? "Add more" : "Add Language"}
        </button>
      </div>
    </form>
  );
};

export default PersonalDetailsForm;
