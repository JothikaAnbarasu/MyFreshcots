import { FaArrowRight } from "react-icons/fa6";
import { ICandidateProfileDetailsCardData } from "../../../../../constants/interfaces/user";
import { useAppDispatch } from "../../../../../redux/store";
import {
  handleAddProfileDetailsClick,
  updateProfileDetailsFormData,
} from "../../../../../redux/slices/userSlice";
import ProfileDetailsHeading from "./ProfileDetailsHeading";

import { layout } from "../../../../../constants/styles";
import SelectAreaOfInterestContent from "./SelectAreaOfInterestContent";

const ProfileDetailsCard = ({
  title,
  percentageBadgeInput,
  addProfileDetailsDesc,
  mobileDescription,
  description,
  addBtnText,
}: ICandidateProfileDetailsCardData) => {
  const dispatch = useAppDispatch();

  return (
    <>
      <div
        id={title.toLowerCase().split(" ").join("")}
        className={`${layout.profileDetailsCardWrapper}`}
      >
        <div className="mb-[0.62rem]">
          <ProfileDetailsHeading
            title={title}
            percentageBadgeInput={percentageBadgeInput}
          />
        </div>

        <div className="text-sm font-normal leading-tight tracking-wide text-grey-700  sm:text-base ">
          <span className="block sm:hidden ">{mobileDescription}</span>
          <span className="hidden sm:block">{description}</span>
        </div>

        {addBtnText && (
          <button
            className={`${layout.profileDetailsCardBtn} mt-4 sm:mt-8`}
            onClick={() => {
              dispatch(
                updateProfileDetailsFormData({
                  title: title,
                  desc: addProfileDetailsDesc,
                  percentageBadgeInput: percentageBadgeInput,
                }),
              );
              dispatch(
                handleAddProfileDetailsClick({
                  isOpen: true,
                }),
              );
            }}
          >
            <span>{addBtnText}</span>
            <FaArrowRight className="mt-[0.04rem]" />
          </button>
        )}

        {/* Every card has addBtnText except selectAreasofInterest card */}
        {!addBtnText && <SelectAreaOfInterestContent />}
      </div>
    </>
  );
};

export default ProfileDetailsCard;
