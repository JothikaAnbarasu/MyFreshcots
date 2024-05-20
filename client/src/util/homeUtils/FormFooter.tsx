const FormFooter = () => {
  return (
    <div className=" flex w-full flex-col items-center justify-end  gap-0 ">
      <div className="text-center text-xs font-normal text-grey-400 ">
        Creating an account implies you adhere to Freshcots'
      </div>
      <div className="text-center">
        <span className="text-xs font-semibold text-primary-500 ">
          Privacy policy {""}
        </span>
        <span className="text-xs font-normal text-grey-400 ">and {""}</span>
        <span className="text-xs font-semibold text-primary-500 ">
          Terms of service
        </span>
      </div>
    </div>
  );
};

export default FormFooter;
