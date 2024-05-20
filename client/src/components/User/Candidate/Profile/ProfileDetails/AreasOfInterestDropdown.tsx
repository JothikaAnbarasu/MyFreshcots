import { useLayoutEffect, useState } from "react";
import { candidateAreaOfInterestOptions } from "../../../../../constants/dropdownOptions";
import { handleAreasOfInterestDropdownClick } from "../../../../../redux/slices/userSlice";
import { useAppDispatch, useAppSelector } from "../../../../../redux/store";

export const AreasOfInterestDropdown = () => {
  const dispatch = useAppDispatch();
  const { selectedAreasOfInterest } = useAppSelector((state) => state.user);

  const [dropdownPosition, setDropdownPosition] = useState<"top" | "bottom">(
    "bottom",
  );

  useLayoutEffect(() => {
    const dropdownElement = document.querySelector(".select-dropdown");
    if (dropdownElement) {
      const dropdownRect = dropdownElement.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate space below the dropdown
      const spaceBelow = windowHeight - dropdownRect.bottom;

      // Decide the position based on available space
      if (spaceBelow > dropdownRect.height - 120) {
        setDropdownPosition("bottom");
      } else {
        setDropdownPosition("top");
      }
    }
  }, []);

  return (
    <div
      className={`absolute  ${
        dropdownPosition === "top"
          ? "bottom-[3.1rem] sm:bottom-[4.1rem]"
          : "top-[2.1rem] sm:top-[3.1rem]"
      }  rounded-sm border bg-white shadow-sm  `}
    >
      <ul className="select-dropdown  my-2 h-[8.5rem]  w-[13rem]  overflow-y-scroll bg-white pr-1 min-[300px]:w-[14.4625rem] ss:w-[17.9rem] sm:h-[9.8rem] sm:w-[22.4rem]">
        {candidateAreaOfInterestOptions.map((option, i) => {
          return (
            <li
              data-scroll-class="aoi-dropdown-li"
              key={i}
              className={`${
                selectedAreasOfInterest.includes(option)
                  ? "border-l-2 border-l-primary-300"
                  : "border-l-2 border-l-transparent"
              }  mb-1 flex cursor-pointer select-none items-center justify-start py-2 pl-2 pr-4 text-xs text-gray-700 last:mb-0 hover:overflow-y-auto hover:bg-grey-150/40 sm:text-sm `}
              onClick={() => {
                dispatch(handleAreasOfInterestDropdownClick(option));
              }}
            >
              {option}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default AreasOfInterestDropdown;
