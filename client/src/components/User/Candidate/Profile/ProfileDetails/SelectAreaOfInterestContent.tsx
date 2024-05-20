import AreasOfInterestDropdown from "./AreasOfInterestDropdown";
import SkillChip from "./ProfileDetailsForms/SkillChip";
import AreasOfInteresSelectBox from "./AreasOfInteresSelectBox";
import {
  handleAreasOfInterestDropdown,
  deleteSelectedAreaOfInterest,
} from "../../../../../redux/slices/userSlice";
import { useAppDispatch, useAppSelector } from "../../../../../redux/store";
import { useRef } from "react";
import { useClickOutside } from "../../../../../util/customHooks";

const SelectAreaOfInterestContent = () => {
  let selectBoxRef = useRef<HTMLDivElement | null>(null);
  const dispatch = useAppDispatch();
  const { isAreasOfInterestDropdownOpen, selectedAreasOfInterest } =
    useAppSelector((state) => state.user);

  useClickOutside(selectBoxRef, (e: { target: HTMLElement }) => {
    if (
      !selectBoxRef.current?.contains(e.target) &&
      !e.target.closest('[data-scroll-class="aoi-dropdown-li"]')
    ) {
      dispatch(handleAreasOfInterestDropdown(false));
    }
  });

  return (
    <div className="mt-5">
      <div className="relative flex h-fit w-fit flex-col gap-x-2 gap-y-0  min-[1024px]:flex-row">
        <div
          onClick={() => {
            dispatch(
              handleAreasOfInterestDropdown(!isAreasOfInterestDropdownOpen),
            );
          }}
          ref={selectBoxRef}
          className={`h-fit w-fit ${isAreasOfInterestDropdownOpen && "hidden"}`}
        >
          <AreasOfInteresSelectBox isRotated={false} />
        </div>

        <div
          className={`h-fit w-fit ${
            !isAreasOfInterestDropdownOpen && "hidden"
          }`}
        >
          <AreasOfInteresSelectBox isRotated={true} />
        </div>

        {isAreasOfInterestDropdownOpen && <AreasOfInterestDropdown />}
      </div>
      <div className="mt-2 flex flex-wrap gap-2 ">
        {selectedAreasOfInterest.map((name, i) => {
          return (
            <SkillChip
              skillName={name}
              key={i}
              onCancel={() => {
                dispatch(deleteSelectedAreaOfInterest(name));
              }}
              fontSize="text-sm sm:text-base "
            />
          );
        })}
      </div>
    </div>
  );
};

export default SelectAreaOfInterestContent;
