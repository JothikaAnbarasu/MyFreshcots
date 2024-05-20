import { PiArrowUpBold } from "react-icons/pi";

interface IPercentageBadgeProps {
  percentage: number;
  textColor?: string;
  bgColor?: string;
  fontSize?: string;
  height?: string;
  width?: string;
}

const PercentageBadge = ({
  percentage,
  bgColor,
  textColor,
  fontSize,
  height,
  width,
}: IPercentageBadgeProps) => {
  return (
    <div
      className={`flex items-center justify-center rounded-[1.3125rem] bg-softCyan-100 font-normal tracking-wide text-grey-750  bg-${bgColor} text-${textColor} 
      ${fontSize ? `${fontSize}` : "text-[0.625rem] sm:text-xs"} 
      ${height ? `${height}` : "h-[1rem]"}  ${
        width ? `${width}` : " w-[2.375rem] "
      }
      `}
    >
      {percentage}%<PiArrowUpBold />
    </div>
  );
};

export default PercentageBadge;
