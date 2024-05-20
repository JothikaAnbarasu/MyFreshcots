import { FaArrowRight } from "react-icons/fa6";
import { layout } from "../../../../../constants/styles";
import ProfileDetailsHeading from "./ProfileDetailsHeading";
import { ReactNode } from "react";

interface ICompletedProfileDetailsCardProps {
  title: string;
  completedProfileDetailsCardContent?: ReactNode;
  editIcon: boolean | undefined;
  addBtnText: string | undefined;
}

const CompletedProfileDetailsCard = ({
  title,
  completedProfileDetailsCardContent: CompletedProfileDetailsCardContent,
  editIcon,
  addBtnText,
}: ICompletedProfileDetailsCardProps) => {
  return (
    <div
      id={title.toLowerCase().split(" ").join("")}
      className={`${layout.profileDetailsCardWrapper} pr-8 sm:pr-10`}
    >
      <div className="mb-[0.62rem]">
        <ProfileDetailsHeading title={title} editIcon={editIcon} />
      </div>
      <div>{CompletedProfileDetailsCardContent}</div>
      {addBtnText && (
        <button className={`${layout.profileDetailsCardBtn} mt-4 sm:mt-6`}>
          <span>{addBtnText}</span>
          <FaArrowRight className="mt-[0.04rem]" />
        </button>
      )}
    </div>
  );
};

export default CompletedProfileDetailsCard;
