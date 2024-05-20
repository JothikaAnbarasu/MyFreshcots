import { useState } from "react";
import { formStyles } from "../../../../../../constants/styles";

const ProfileSummaryForm = () => {
  const [text, setText] = useState<string>("");
  const maxLength = 1000;

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = event.target;
    if (value.length <= maxLength) {
      setText(value);
    }
  };

  return (
    <form className="profileform sm:mb-[4.5rem] min-[1024px]:pr-10 min-[1400px]:pr-32 ">
      <textarea
        className={`${formStyles.userInput} lite-scrollbar mb-4 mt-0 h-[13.688rem] w-full resize-none rounded-lg px-[1.625rem] py-5 sm:mb-0 sm:h-[12rem] min-[1024px]:h-[9rem] `}
        placeholder="Type here"
        maxLength={maxLength}
        value={text}
        onChange={handleChange}
      ></textarea>
      <span className="flex w-full justify-end text-right  text-xs font-normal leading-none tracking-wide text-grey-700 sm:text-sm">
        {text.length}/{maxLength}
      </span>
    </form>
  );
};

export default ProfileSummaryForm;
