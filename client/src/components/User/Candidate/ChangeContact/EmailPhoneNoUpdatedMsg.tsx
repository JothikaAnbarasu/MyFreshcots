import tick from "../../../../assets/videos/tick.mp4";

const EmailPhoneNoUpdatedMsg = ({ messageText }: { messageText: string }) => {
  return (
    <div className="h-full w-full min-[1024px]:flex min-[1024px]:items-center min-[1024px]:justify-center">
      <div className=" min flex  flex-col  items-center justify-center px-2 text-center text-base font-normal tracking-wide text-grey-600">
        <video
          className="w-30 h-30 pointer-events-none focus:outline-none"
          muted
          autoPlay
          playsInline
        >
          <source src={tick} type="video/mp4" />
        </video>
        <div className="h-fit w-[11.875rem] sm:w-full">
          Your {messageText} has been updated successfully
        </div>
      </div>
    </div>
  );
};

export default EmailPhoneNoUpdatedMsg;
