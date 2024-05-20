import PercentageBadge from "../PercentageBadge";
import desktopEditIconSvg from "../../../../../assets/images/desktopEditIcon.svg";
import mobileEditIconSvg from "../../../../../assets/images/mobileEditIcon.svg";

interface IProfileDetailsHeadingProps {
  title: string;
  percentageBadgeInput?: number | null;
  fontSize?: string;
  editIcon?: boolean;
}

const ProfileDetailsHeading = ({
  title,
  percentageBadgeInput,
  fontSize,
  editIcon,
}: IProfileDetailsHeadingProps) => {
  return (
    <div
      className={`mb-[0.67rem] flex items-center ss:mb-[0.875rem] ${
        editIcon ? "justify-start" : "justify-between"
      } text-sm font-medium tracking-wider text-grey-700 sm:justify-start sm:gap-2 sm:text-lg`}
    >
      <span className={`${fontSize}`}>{title}</span>
      {percentageBadgeInput && (
        <PercentageBadge
          percentage={percentageBadgeInput}
          height={"h-[1.24763rem]"}
          width={"w-[2.9375rem]"}
        />
      )}

      {editIcon && (
        <>
          <img
            src={mobileEditIconSvg}
            alt="edit"
            className="ml-1.5 block h-fit w-fit cursor-pointer sm:hidden"
          />
          <img
            src={desktopEditIconSvg}
            alt="edit"
            className="ml-1.5 hidden h-fit w-fit cursor-pointer sm:block"
          />
        </>
      )}
    </div>
  );
};

export default ProfileDetailsHeading;
