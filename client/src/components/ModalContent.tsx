import { layout } from "../constants/styles";
import { closeModal } from "../redux/slices/appSlice";
import { useAppDispatch } from "../redux/store";

interface IModalContentProps {
  imageURL: string;
  buttonText: string;
  confirmationText: string;
  additionalInfo: string;
}

const ModalContent = ({
  imageURL,
  confirmationText,
  additionalInfo,
  buttonText,
}: IModalContentProps) => {
  const dispatch = useAppDispatch();

  let isSafari = "safari" in window;

  return (
    <div
      data-aos={isSafari ? "zoom-in-up" : "flip-left"}
      data-aos-duration="500"
      className=" modal-container flex h-[19rem]  w-[17rem] flex-col items-center justify-center gap-2  rounded-lg bg-white p-2 min-[360px]:h-[22rem] min-[360px]:w-[20rem] min-[360px]:p-4 sm:h-[28rem] sm:w-[26rem] sm:gap-4 "
      onClick={(event) => event.stopPropagation()}
    >
      <img
        src={imageURL}
        alt="thumbsup"
        className=" h-[7rem] w-[7rem] sm:h-[9rem] sm:w-[9rem]"
      />
      <p className="text-center text-base font-semibold tracking-wide text-grey-700 sm:text-xl">
        {confirmationText}
      </p>
      <p className="text-center text-xs font-medium tracking-wide text-grey-500 sm:text-base">
        {additionalInfo}
      </p>

      <button
        className={`${layout.button} mt-8 justify-self-end rounded-md p-2 text-sm font-extrabold min-[360px]:mt-12 sm:px-4 sm:py-3 sm:text-base `}
        onClick={() => {
          dispatch(closeModal());
        }}
      >
        {buttonText.toUpperCase()}
      </button>
    </div>
  );
};

export default ModalContent;
