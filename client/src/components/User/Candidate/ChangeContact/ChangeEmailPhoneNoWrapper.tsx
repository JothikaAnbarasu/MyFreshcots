import { IoArrowBack } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

interface IChangeEmailPhoneNoWrapperProps {
  component: React.ComponentType;
}
const ChangeEmailPhoneNoWrapper = ({
  component: Component,
}: IChangeEmailPhoneNoWrapperProps) => {
  const navigate = useNavigate();

  return (
    <div className=" flex h-[80vh] min-h-[40rem] w-full flex-col  bg-white pt-4 min-[1024px]:bg-pageBg">
      <div className=" flex h-12 w-full items-center  justify-start pl-2 min-[320px]:pl-4 xs:pl-8 min-[1100px]:pl-16 lg:pl-[4rem] ">
        <IoArrowBack
          className="cursor-pointer text-base sm:text-2xl"
          onClick={() => navigate(-1)}
        />
      </div>
      <div className=" h-full w-full flex-grow  ss:px-[5%] sm:px-[10%] min-[1024px]:flex min-[1024px]:items-center min-[1024px]:justify-center min-[1024px]:bg-pageBg">
        <Component />
      </div>
    </div>
  );
};

export default ChangeEmailPhoneNoWrapper;
