import { layout } from "../../../../../constants/styles";

const InvitedEmailBox = ({ mailId }: { mailId: string }) => {
  return (
    <div className="border-grey-85 flex h-fit  min-h-[3.45rem] w-full border sm:w-[27.25rem] min-[1024px]:min-h-fit">
      <div className="flex  flex-grow items-center justify-center bg-softCyan-250 px-4 py-2 text-[0.813rem] font-normal sm:px-10 ">
        <span
          className="break-all min-[1024px]:w-[20.75rem] min-[1024px]:truncate "
          title={mailId}
        >
          ( {mailId} )
        </span>
      </div>
      <button
        className={`${layout.button} w-fit justify-self-end  px-5 text-[0.813rem] font-normal min-[320px]:px-[1.75rem] min-[1024px]:w-[6.5rem]`}
        disabled
      >
        Invited
      </button>
    </div>
  );
};

export default InvitedEmailBox;

