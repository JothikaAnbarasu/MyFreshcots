import { layout } from "../../../../../../constants/styles";
import ProfileDetailsHeading from "../ProfileDetailsHeading";
import { useAppDispatch, useAppSelector } from "../../../../../../redux/store";
import {
  handleAddProfileDetailsClick,
  handleProfileDetailsFormSave,
} from "../../../../../../redux/slices/userSlice";
import {
  useDisableDocumentScroll,
  useIsMobile,
} from "../../../../../../util/customHooks";
import { useEffect, useRef, Suspense } from "react";
import { BsXLg } from "react-icons/bs";
import ExperienceForm from "./ExperienceForm";
import ProfileSummaryForm from "./ProfileSummaryForm";
import PersonalDetailsForm from "./PersonalDetailsForm";
import EducationalDetailsForm from "./EducationalDetailsForm";
import ProjectsForm from "./ProjectsForm";
import KeySkillsForm from "./KeySkillsForm";

const AddProfileDetailsWrapper = () => {
  const { isAddProfileDetailsSectionOpen, addProfileDetailsSectionData } =
    useAppSelector((state) => state.user);

  useDisableDocumentScroll(isAddProfileDetailsSectionOpen);

  const isMobile = useIsMobile();

  const dispatch = useAppDispatch();

  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isAddProfileDetailsSectionOpen) {
      wrapperRef.current?.scroll({ top: 0, behavior: "smooth" });
    }
  }, [isAddProfileDetailsSectionOpen]);

  // Rendering the appropriate form component based on the data
  const renderFormContent = () => {
    switch (
      addProfileDetailsSectionData.title.toLowerCase().split(" ").join("")
    ) {
      case "profilesummary":
        return <ProfileSummaryForm />;
      case "personaldetails":
        return <PersonalDetailsForm />;
      case "educationaldetails":
        return <EducationalDetailsForm />;
      case "projects":
        return <ProjectsForm />;
      case "keyskills":
        return <KeySkillsForm />;
      case "experience":
        return <ExperienceForm />;
      default:
        return null;
    }
  };

  // Conditionally set the height of the wrapper based on screen height
  const wrapperHeight =
    window.innerHeight < 550
      ? "min-[1024px]:h-[90vh]"
      : addProfileDetailsSectionData.title.toLowerCase().split(" ").join("") ===
          "profilesummary"
        ? "min-[1024px]:h-[33.5rem]"
        : "min-[1024px]:h-[38rem]";

  //no scrollbar
  return (
    <div
      className={` profileform-wrapper-common relative h-full w-full pb-28  pt-8 sm:px-[4.375rem] sm:py-[3.75rem]   min-[1024px]:w-[60rem]  min-[1024px]:rounded-2xl min-[1024px]:bg-white min-[1400px]:w-[68rem] ${wrapperHeight}`}
    >
      <div
        ref={wrapperRef}
        className={` h-full w-full overflow-y-auto min-[1024px]:w-[99%] ${
          isMobile ? "no-scrollbar" : "lite-scrollbar"
        }`}
      >
        <span className="hidden min-[1024px]:inline">
          <BsXLg
            className="absolute right-[3.5rem] top-[3.9rem] cursor-pointer text-xl font-semibold text-grey-750"
            onClick={() => {
              dispatch(handleAddProfileDetailsClick({ isOpen: false }));
            }}
          />
        </span>
        <div
          className={`profileform-heading-common ${
            addProfileDetailsSectionData.desc !== ""
              ? "mb-4 sm:mb-4"
              : "mb-6 sm:mb-10"
          }  `}
        >
          <ProfileDetailsHeading
            title={addProfileDetailsSectionData.title}
            percentageBadgeInput={
              addProfileDetailsSectionData.percentageBadgeInput
            }
            fontSize="text-base sm:text-xl"
          />
        </div>

        {addProfileDetailsSectionData.desc !== "" && (
          <div className="profileform-desc-common mb-[1.625rem] pr-[10%] text-[0.813rem] font-normal   leading-tight tracking-wide text-grey-550 sm:mb-8 sm:text-sm min-[1024px]:pr-36">
            {addProfileDetailsSectionData.desc}
          </div>
        )}

        <Suspense fallback={<></>}>{renderFormContent()}</Suspense>
        <div className="profileform-btns-common fixed bottom-0 left-0 z-50 flex w-full items-center justify-center gap-2 bg-white pb-[1.625rem] pt-4 min-[1024px]:static min-[1024px]:p-0">
          <button
            className=" rounded-[0.188rem] px-6 py-[0.438rem] text-sm font-medium leading-tight tracking-wide text-grey-700 hover:bg-grey-150/60  sm:text-base"
            // temp
            onClick={() => {
              dispatch(handleAddProfileDetailsClick({ isOpen: false }));
            }}
          >
            Cancel
          </button>
          <button
            className={`${layout.button} rounded-[0.188rem] px-10 py-[0.438rem] text-sm leading-tight sm:text-base `}
            // temp
            onClick={() => {
              dispatch(
                handleProfileDetailsFormSave({
                  title: addProfileDetailsSectionData.title,
                  percentage: addProfileDetailsSectionData.percentageBadgeInput,
                }),
              );
              dispatch(handleAddProfileDetailsClick({ isOpen: false }));
            }}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddProfileDetailsWrapper;
