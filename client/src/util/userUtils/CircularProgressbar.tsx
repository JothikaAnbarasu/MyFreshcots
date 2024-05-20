interface ICircularProgressbarProps {
  percentage: number;
  size: number;
  strokeWidth: number;
  element: JSX.Element;
  gapOffsetInput: number;
  rotateDeg: number;
}

const CircularProgressBar = ({
  percentage,
  size,
  strokeWidth,
  element,
  gapOffsetInput,
  rotateDeg,
}: ICircularProgressbarProps) => {
  const radius = size / 2 - strokeWidth / 2;
  const circumference = 2 * Math.PI * radius;
  const gapOffset = (1 / gapOffsetInput) * circumference;
  const offset =
    gapOffset + (1 - percentage / 100) * (circumference - gapOffset);

  return (
    <div className="relative rounded-full">
      <svg
        className={`circular-progress
         ${rotateDeg === 108 && "rotate-[108deg]"}
         ${rotateDeg === 132 && "rotate-[132deg]"}
         ${rotateDeg === 100 && "rotate-[100deg]"}
          scale-[1.2]`}
        width={size}
        height={size}
      >
        <circle
          className={`background-circle ${
            size < 50 ? "stroke-slate-200" : "bg-none"
          }`}
          r={radius}
          cx={size / 2}
          cy={size / 2}
          fill="none"
          strokeWidth={strokeWidth}
        />
        <circle
          className={`progress-circle  ${
            percentage < 100 ? " stroke-orange" : "stroke-green-600"
          }`}
          r={radius}
          cx={size / 2}
          cy={size / 2}
          fill="none"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
        />
      </svg>
      {element}
    </div>
  );
};

export default CircularProgressBar;
