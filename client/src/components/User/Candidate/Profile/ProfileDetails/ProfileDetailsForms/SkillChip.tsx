import { CgClose } from "react-icons/cg";
interface ISkillsChipProps {
  skillName: string;
  rating?: number | null;
  handleRating?: (skill: string, value: number) => void;
  onCancel?: () => void;
  fontSize?: string;
  showRating?: boolean;
}

const SkillChip = ({
  skillName,
  handleRating,
  rating,
  onCancel,
  fontSize,
  showRating,
}: ISkillsChipProps) => {
  const handleRatingInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);

    if (handleRating) {
      handleRating(skillName, value);
    }
  };
  return (
    <div className="flex h-fit w-fit max-w-[25rem] items-center justify-center rounded-full bg-softCyan-250 px-[0.813rem] py-1 font-normal tracking-wide text-primary-475 sm:px-3  sm:py-[0.375rem]">
      <p
        className={`do-text-wrap sm:px-2 ${
          fontSize ? `${fontSize}` : "text-[0.813rem]  sm:text-[1.063rem] "
        } `}
      >
        <span className={`${(handleRating || showRating) && "mr-1"}`}>
          {skillName}
        </span>
        {(handleRating || showRating) && (
          <span className="whitespace-nowrap break-keep  text-sm tracking-widest sm:text-[1.063rem] ">
            <span>(</span>
            <input
              className={`mx-[0.2rem] h-4 w-3 border-b-[.099rem] border-primary-475 bg-inherit text-center outline-none ${
                showRating && "mx-[0.1rem] border-none"
              }`}
              inputMode="numeric"
              min={1}
              max={5}
              maxLength={1}
              value={rating || ""}
              readOnly={showRating}
              onKeyDown={(e) => {
                if (e.key === "Backspace" || e.key === "Delete") {
                  return;
                }

                // Allow only numbers 1-5 and prevent any other keys
                if (!(e.key >= "1" && e.key <= "5")) {
                  e.preventDefault();
                }
              }}
              onChange={handleRatingInputChange}
            />
            <span>/5)</span>
          </span>
        )}
      </p>

      {onCancel && (
        <span
          className=" ml-[0.438rem] grid cursor-pointer place-items-center"
          onClick={onCancel}
        >
          <CgClose className="text-lg " />
        </span>
      )}
    </div>
  );
};

export default SkillChip;
