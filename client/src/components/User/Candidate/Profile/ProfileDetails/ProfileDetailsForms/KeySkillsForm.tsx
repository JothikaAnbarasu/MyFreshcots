import { formStyles } from "../../../../../../constants/styles";
import SkillChip from "./SkillChip";
import { useAppDispatch, useAppSelector } from "../../../../../../redux/store";
import {
  deletPrimarySkill,
  deleteSecondarySkill,
  updatePrimarySkill,
  updateSecondarySkill,
  addOtherSkill,
  deleteOtherSkill,
  updateDefaultSkillsRating,
} from "../../../../../../redux/slices/userSlice";
import { preventInputSpace } from "../../../../../../util/helpers";
import { useEffect, useRef, useState } from "react";
import inputAddBtn from "../../../../../../assets/images/inputAddBtn.svg";

const KeySkillsForm = () => {
  const { primarySkill, secondarySkill, otherSkills, defaultSkills } =
    useAppSelector((state) => state.user);

  const dispatch = useAppDispatch();

  useEffect(() => {
    checkIfSkillAlreadyPresent();
  }, [otherSkills]);

  const otherSkillsInputRef = useRef<HTMLInputElement>(null);
  const primarySkillInputRef = useRef<HTMLInputElement>(null);
  const secondarySkillInputRef = useRef<HTMLInputElement>(null);

  const [primarySkillErrorMsg, setPrimarySkillErrMsg] = useState<string | null>(
    null,
  );

  const [secondarySkillErrorMsg, setSecondarySkillErrMsg] = useState<
    string | null
  >(null);

  const [otherSkillErrorMsg, setOtherSkillErrorMsg] = useState<string | null>(
    null,
  );

  const onePrimaySkillErr = "only one primary skill can be added";
  const oneSecondarySkillErr = "only one secondary skill can be added";
  const sameSkillErr = "primary and secondary skills can't be the same";

  const [showAddPrimarySkillIcon, setShowAddPrimarySkillIcon] =
    useState<boolean>(false);
  const [showAddSecondarySkillIcon, setShowAddSecondarySkillIcon] =
    useState<boolean>(false);
  const [showAddOtherSkillIcon, setShowAddOtherSkillIcon] =
    useState<boolean>(false);

  const handlePrimarySkillInput = () => {
    const name = primarySkillInputRef.current?.value.trim();

    if (!name || !primarySkillInputRef.current) {
      return; // If name is falsy or ref is not available, exit
    }

    if (primarySkill !== null) {
      setPrimarySkillErrMsg(onePrimaySkillErr);
      return;
    }

    if (name.toLowerCase() === secondarySkill?.skillName.toLowerCase()) {
      setPrimarySkillErrMsg(sameSkillErr);
      return;
    }

    // Update primary skill
    dispatch(
      updatePrimarySkill({
        skillName: name,
        rating: null,
      }),
    );

    // Clear input value and reset error message
    primarySkillInputRef.current.value = "";
    setPrimarySkillErrMsg(null);
    setShowAddPrimarySkillIcon(false);

    // Check if cursor is at the beginning and input is empty
    if (primarySkillInputRef.current.selectionStart === 0 && name === "") {
      setPrimarySkillErrMsg(null);
    }
  };

  const handleSecondarySkillInput = () => {
    const name = secondarySkillInputRef.current?.value.trim();

    if (!name || !secondarySkillInputRef.current) {
      return; // If name is falsy or ref is not available, exit
    }

    if (secondarySkill !== null) {
      setSecondarySkillErrMsg(oneSecondarySkillErr);
      return;
    }

    if (name.toLowerCase() === primarySkill?.skillName.toLowerCase()) {
      setSecondarySkillErrMsg(sameSkillErr);
      return;
    }

    // Update primary skill
    dispatch(
      updateSecondarySkill({
        skillName: name,
        rating: null,
      }),
    );

    // Clear input value and reset error message
    secondarySkillInputRef.current.value = "";
    setSecondarySkillErrMsg(null);
    setShowAddSecondarySkillIcon(false);

    // Check if cursor is at the beginning and input is empty
    if (secondarySkillInputRef.current.selectionStart === 0 && name === "") {
      setSecondarySkillErrMsg(null);
    }
  };

  const handleOtherSkillsInput = () => {
    const name = otherSkillsInputRef.current?.value.trim();

    const isSkillPresent = checkIfSkillAlreadyPresent();

    if (name && !isSkillPresent && otherSkillsInputRef.current) {
      dispatch(addOtherSkill(name));
      otherSkillsInputRef.current.value = "";
      setShowAddOtherSkillIcon(false);
    }
  };

  const checkIfSkillAlreadyPresent = () => {
    const skillName = otherSkillsInputRef.current?.value.trim().toLowerCase();
    const isSkillPresent = otherSkills.find(
      (skill) => skillName === skill.toLowerCase(),
    );
    if (isSkillPresent) {
      setOtherSkillErrorMsg("skill already added");
      return true;
    } else {
      setOtherSkillErrorMsg(null);
      return false;
    }
  };

  const handlePrimarySkillRating = (name: string, value: number | null) => {
    dispatch(updatePrimarySkill({ skillName: name, rating: value }));
  };

  const handleSecondarySkillRating = (name: string, value: number | null) => {
    dispatch(updateSecondarySkill({ skillName: name, rating: value }));
  };

  const handleDefaultSkillsRating = (name: string, value: number) => {
    dispatch(updateDefaultSkillsRating({ name: name, value: value }));
  };
  const onPrimarySkillCancel = () => {
    if (secondarySkillErrorMsg === sameSkillErr) {
      setSecondarySkillErrMsg(null);
    }
    setPrimarySkillErrMsg(null);
    dispatch(deletPrimarySkill());
  };

  const onSecondarySkillCancel = () => {
    if (primarySkillErrorMsg === sameSkillErr) {
      setPrimarySkillErrMsg(null);
    }
    setSecondarySkillErrMsg(null);
    dispatch(deleteSecondarySkill());
  };

  const checkIfToShowAddOtherSkillIcon = () => {
    if (
      otherSkillsInputRef.current?.selectionStart !== 0 &&
      otherSkillsInputRef.current?.value.trim() !== ""
    ) {
      setShowAddOtherSkillIcon(true);
    } else {
      setShowAddOtherSkillIcon(false);
    }
  };
  const checkIfToShowAddPrimarySkillIcon = () => {
    if (
      primarySkillInputRef.current?.selectionStart !== 0 &&
      primarySkillInputRef.current?.value.trim() !== ""
    ) {
      setShowAddPrimarySkillIcon(true);
    } else {
      setShowAddPrimarySkillIcon(false);
    }
  };
  const checkIfToShowAddSecondarySkillIcon = () => {
    if (
      secondarySkillInputRef.current?.selectionStart !== 0 &&
      secondarySkillInputRef.current?.value.trim() !== ""
    ) {
      setShowAddSecondarySkillIcon(true);
    } else {
      setShowAddSecondarySkillIcon(false);
    }
  };

  return (
    <form className="flex  h-fit w-full flex-col gap-6 sm:mb-[3.5rem] sm:gap-8 min-[1024px]:pr-10 min-[1400px]:pr-32">
      <div>
        <label>
          <span className={`${formStyles.userLabelRequired}`}>Default</span>
        </label>

        <div className="default-skillschips-wrapper mt-3 flex flex-col flex-wrap items-start justify-start gap-2 sm:mt-4 sm:flex-row">
          {defaultSkills.map(({ skillName, rating }, i) => {
            return (
              <SkillChip
                skillName={skillName}
                rating={rating}
                key={i}
                handleRating={handleDefaultSkillsRating}
              />
            );
          })}
        </div>
      </div>

      <div>
        <label>
          <span className={`${formStyles.userLabelRequired}`}>
            Primary Skill
          </span>
          <div className=" relative  h-fit">
            <input
              ref={primarySkillInputRef}
              type="text"
              className={` ${formStyles.userInput}  mb-2 pr-10  sm:mb-4 sm:pr-16`}
              placeholder="Type your one primary skill"
              required
              onKeyDown={(e) => preventInputSpace(e)}
              onKeyUp={(e) => {
                if (e.key === "Enter") {
                  handlePrimarySkillInput();
                }
              }}
              onChange={checkIfToShowAddPrimarySkillIcon}
              enterKeyHint="done"
            />
            {showAddPrimarySkillIcon && (
              <img
                src={inputAddBtn}
                className="absolute right-2 top-[1.3rem] cursor-pointer sm:right-[0.969rem] sm:top-[1.65rem]"
                onClick={handlePrimarySkillInput}
              />
            )}
          </div>
        </label>
        {primarySkillErrorMsg && (
          <div className="-mt-1 mb-3 w-full text-left  text-xs font-normal text-red-100 ">
            {primarySkillErrorMsg}
          </div>
        )}

        {primarySkill && (
          <SkillChip
            skillName={primarySkill.skillName}
            rating={primarySkill.rating}
            handleRating={handlePrimarySkillRating}
            onCancel={onPrimarySkillCancel}
          />
        )}
      </div>

      <div>
        <label>
          <span className={`${formStyles.userLabelRequired}  `}>
            Secondary Skill
          </span>
          <div className=" relative  h-fit">
            <input
              ref={secondarySkillInputRef}
              type="text"
              className={` ${formStyles.userInput} mb-2 pr-10  sm:mb-4 sm:pr-16`}
              placeholder="Type your one secondary skill"
              required
              onKeyDown={(e) => preventInputSpace(e)}
              onKeyUp={(e) => {
                if (e.key === "Enter") {
                  handleSecondarySkillInput();
                }
              }}
              onChange={checkIfToShowAddSecondarySkillIcon}
              enterKeyHint="done"
            />
            {showAddSecondarySkillIcon && (
              <img
                src={inputAddBtn}
                className="absolute right-2 top-[1.3rem] cursor-pointer sm:right-[0.969rem] sm:top-[1.65rem] "
                onClick={handleSecondarySkillInput}
              />
            )}
          </div>
        </label>
        {secondarySkillErrorMsg && (
          <div className="-mt-1 mb-3 w-full pl-1 text-left  text-xs font-normal text-red-100 ">
            {secondarySkillErrorMsg}
          </div>
        )}

        {secondarySkill && (
          <SkillChip
            skillName={secondarySkill.skillName}
            rating={secondarySkill.rating}
            handleRating={handleSecondarySkillRating}
            onCancel={onSecondarySkillCancel}
          />
        )}
      </div>

      <div>
        <label>
          <span className={`${formStyles.userLabel}  `}>Other Skills</span>
          <div className=" relative  h-fit">
            <input
              ref={otherSkillsInputRef}
              type="text"
              className={`${formStyles.userInput} mb-2 pr-10 sm:mb-4 sm:pr-16`}
              placeholder="Type your other skills"
              onKeyDown={(e) => {
                preventInputSpace(e);
              }}
              onKeyUp={(e) => {
                if (e.key === "Enter") {
                  handleOtherSkillsInput();
                }
              }}
              onChange={() => {
                checkIfSkillAlreadyPresent();
                checkIfToShowAddOtherSkillIcon();
              }}
              enterKeyHint="done"
            />
            {showAddOtherSkillIcon && (
              <img
                src={inputAddBtn}
                className="absolute right-2 top-[1.3rem] cursor-pointer sm:right-[0.969rem] sm:top-[1.65rem] "
                onClick={handleOtherSkillsInput}
              />
            )}
          </div>
        </label>

        {otherSkillErrorMsg && (
          <div className="-mt-1 mb-3 w-full text-left  text-xs font-normal text-red-100">
            {otherSkillErrorMsg}
          </div>
        )}

        <div className="mb-4 mt-[0.625rem] flex flex-wrap items-center justify-start gap-x-4 gap-y-2 ">
          {otherSkills.map((skill, i) => {
            return (
              <SkillChip
                skillName={skill}
                key={i}
                onCancel={() => {
                  dispatch(deleteOtherSkill(skill));
                }}
              />
            );
          })}
        </div>
      </div>
    </form>
  );
};

export default KeySkillsForm;
