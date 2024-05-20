import { useAppDispatch } from "../redux/store";
import { closeModal } from "../redux/slices/appSlice";
import { modalData } from "../constants";
import ModalContent from "./ModalContent";

interface IModalProps {
  modalName: string;
}

const Modal = ({ modalName }: IModalProps) => {
  const dispatch = useAppDispatch();

  return (
    <div className="h-full w-full">
      <div
        className="fixed inset-0 z-[999] flex items-center justify-center bg-[rgba(0,0,0,0.7)]"
        onClick={() => {
          dispatch(closeModal());
        }}
      >
        {modalData.map(
          (
            { imageURL, name, confirmationText, additionalInfo, buttonText },
            i,
          ) => {
            if (name === modalName) {
              return (
                <ModalContent
                  key={i}
                  imageURL={imageURL}
                  confirmationText={confirmationText}
                  additionalInfo={additionalInfo}
                  buttonText={buttonText}
                />
              );
            }
          },
        )}
      </div>
    </div>
  );
};

export default Modal;
