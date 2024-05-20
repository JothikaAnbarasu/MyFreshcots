import { formStyles } from "../../../../../constants/styles";
import { BsSend } from "react-icons/bs";
import { FaCheck } from "react-icons/fa6";
import InvitedEmailBox from "./InvitedEmailBox";
import { useAppDispatch, useAppSelector } from "../../../../../redux/store";
import { useRef, useState } from "react";
import { updateInvitedEmails } from "../../../../../redux/slices/userSlice";
import { useDisableDocumentScroll } from "../../../../../util/customHooks";

const SendInvite = () => {
  const { invitedEmails, isSendInviteSectionOpen } = useAppSelector(
    (state) => state.user,
  );
  const dispatch = useAppDispatch();
  const inputRef = useRef<HTMLInputElement>(null);

  const [emailErr, setEmailErr] = useState<string | null>(null);
  const [isInvitationSent, setIsInvitationSent] = useState<boolean>(false);

  useDisableDocumentScroll(isSendInviteSectionOpen);

  const handleSendInvitationBtnClick = () => {
    if (inputRef.current) {
      const mailId = inputRef.current.value;
      const invitedAlready = checkIfInvitedAlready(mailId);
      const isValid = validateEmail(mailId);
      if (isValid && !invitedAlready) {
        setEmailErr(null);
        setIsInvitationSent(true);
        setTimeout(() => {
          setIsInvitationSent(false);
          dispatch(updateInvitedEmails(mailId));
          if (inputRef.current) inputRef.current.value = "";
        }, 1500);
      }
    }
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    const isValid = emailRegex.test(email);
    !isValid && setEmailErr("Please enter a valid email address");
    return isValid;
  };

  const checkIfInvitedAlready = (email: string) => {
    const isPresent = invitedEmails.includes(email);
    isPresent && setEmailErr("This email has already been invited");
    return isPresent;
  };

  return (
    <div className="mb-12 h-fit w-full self-start tracking-wide min-[1024px]:w-[36.063rem] min-[1024px]:rounded-sm ">
      <div className="mb-12 sm:mb-11">
        <h4 className="mb-[0.875rem] text-base font-medium text-grey-700 sm:mb-4 sm:text-xl">
          Send Invite
        </h4>
        <p className="mb-[1.125rem] text-[0.813rem] font-normal tracking-wide text-grey-550 sm:mb-[1.75rem] sm:text-sm">
          You can invite people by entering their respective email addresses,
          and the invitation token and link will be sent to their email.
        </p>

        <div className="flex h-fit w-full flex-col rounded transition-all duration-200 ease-linear focus-within:border-primary-500 sm:h-12 sm:flex-row sm:items-center sm:justify-center sm:border sm:border-grey-100">
          <input
            ref={inputRef}
            type="email"
            className={`${formStyles.userInput}  mt-[0px] h-12 read-only:bg-inherit sm:mb-0 sm:mt-[0px] sm:h-fit sm:w-max sm:flex-grow sm:rounded-r-none sm:border-none `}
            placeholder="Type the mail here"
            readOnly={isInvitationSent}
            onChange={(e) => {
              if (e.target.value === "") setEmailErr(null);
            }}
          />
          {emailErr && (
            <p className=" mt-1 block text-xs font-medium text-red-100 sm:hidden ">
              {emailErr}
            </p>
          )}

          <button
            className={`relative mt-8 flex h-12 w-[11.063rem] cursor-pointer select-none items-center justify-center text-base font-medium tracking-wide text-white disabled:cursor-not-allowed disabled:bg-grey-90 disabled:text-grey-550 sm:mt-0 sm:h-full sm:rounded-l-none sm:rounded-r  ${
              !isInvitationSent
                ? "bg-primary-500 hover:bg-primary-600"
                : "pointer-events-none bg-grey-260 delay-200 hover:bg-grey-260"
            }  `}
            onClick={handleSendInvitationBtnClick}
            disabled={invitedEmails.length === 5}
          >
            <span
              className={`flex h-full w-full  items-center justify-center  gap-x-[0.625rem] transition-all  ease-linear   ${
                isInvitationSent
                  ? "translate-x-full  duration-500"
                  : "translate-x-0 duration-100"
              } `}
            >
              <BsSend />
              <>Send invitation</>
            </span>
            <span
              className={` absolute  flex h-full w-full items-center justify-center gap-x-[0.688rem] transition-all  ease-linear  ${
                isInvitationSent
                  ? " z-[50] translate-x-0 duration-500"
                  : "-z-[50] -translate-x-full duration-100"
              }`}
            >
              <>Sent</>
              <FaCheck />
            </span>
          </button>
        </div>
        {emailErr && (
          <p className=" mt-1 hidden text-xs font-medium text-red-100 sm:block ">
            {emailErr}
          </p>
        )}
      </div>
      <div className="tracking-wide">
        <h3 className="mb-4 text-base font-medium text-grey-700 ">
          You can invite upto 5 users
        </h3>
        <div className="flex flex-col gap-y-4 sm:pr-10">
          {invitedEmails.map((mailId, i) => (
            <InvitedEmailBox key={i} mailId={mailId} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SendInvite;
