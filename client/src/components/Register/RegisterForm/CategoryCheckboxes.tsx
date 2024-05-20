import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../redux/store";
import {
  handleCandidateCategorySelect,
  handleCategoryCheckboxClick,
} from "../../../redux/slices/formSlice";
import { useEffect } from "react";
import { EUserType } from "../../../constants/enums";

interface ICategoryCheckboxes {
  title: string;
  baseURL: string;
}

const CategoryCheckboxes = ({ title, baseURL }: ICategoryCheckboxes) => {
  const { category } = useParams();
  const dispatch = useAppDispatch();
  const { volunteerCategories, employerCategories, candidateCategories } =
    useAppSelector((state) => state.form);

  useEffect(() => {
    dispatch(handleCandidateCategorySelect(category));
  }, [category]);

  const isMatchingCategory =
    (baseURL === EUserType.Candidate &&
      candidateCategories.find(
        (c) => c.name.toLowerCase() === title.toLowerCase(),
      )?.selected) ||
    (baseURL === EUserType.Volunteer &&
      volunteerCategories.find(
        (c) => c.name.toLowerCase() === title.toLowerCase(),
      )?.selected) ||
    (baseURL === EUserType.Employer &&
      employerCategories.find(
        (c) => c.name.toLowerCase() === title.toLowerCase(),
      )?.selected);

  return (
    <div
      className={`h-10 w-[7rem] select-none sm:w-36 md:h-11 md:w-40 ${
        isMatchingCategory
          ? "bg-primary-450"
          : "border-1 border-grey-100 bg-primary-1000"
      }  flex cursor-pointer items-center justify-start gap-2 rounded  border pl-2 pr-1 sm:px-3`}
      onClick={() => {
        dispatch(handleCandidateCategorySelect(title));
        dispatch(handleCategoryCheckboxClick(title));
      }}
    >
      {baseURL === EUserType.Candidate && (
        <svg width="16" height="17" viewBox="0 0 16 17" fill="none">
          <circle
            cx="8"
            cy="8.5"
            r={`${isMatchingCategory ? "8" : "7.5"}`}
            className={`fill-primary-250 ${
              isMatchingCategory ? "none" : "stroke-grey-400"
            }`}
          />
          <circle
            cx="8"
            cy="8.5"
            r="5"
            className={`${
              isMatchingCategory ? "fill-primary-450" : "fill-primary-250"
            }`}
          />
        </svg>
      )}

      {(baseURL === EUserType.Volunteer || baseURL === EUserType.Employer) && (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <rect
            x="0.75"
            y="0.75"
            width="16.5"
            height="16.5"
            rx="1.25"
            className={`fill-white ${
              isMatchingCategory ? "stroke-primary-500" : "stroke-grey-400"
            }`}
            strokeWidth="1.5"
          />
          <path
            d="M6 9.66667L8.33333 12L13 7"
            className={`${isMatchingCategory ? "stroke-primary-500" : "none"}`}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}

      <div
        className={` ${
          isMatchingCategory ? "text-white" : "text-grey-400 "
        } text-xs font-medium tracking-wide sm:text-sm`}
      >
        {title}
      </div>
    </div>
  );
};

export default CategoryCheckboxes;
