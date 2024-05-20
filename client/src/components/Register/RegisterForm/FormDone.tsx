import tick from "../../../assets/videos/tick.mp4";

const FormDone = () => {
  return (
    <div>
      <div className="sm:py-42 -mt-12 flex flex-col items-center  justify-center px-5 py-44 text-center text-sm font-medium tracking-wide text-grey-700 sm:px-36 sm:text-xl md:px-72">
        <video
          className="w-30 h-30 pointer-events-none focus:outline-none"
          muted
          autoPlay
          playsInline
        >
          <source src={tick} type="video/mp4" />
        </video>
        Thanks! Your account has been registered successfully
      </div>
    </div>
  );
};

export default FormDone;
