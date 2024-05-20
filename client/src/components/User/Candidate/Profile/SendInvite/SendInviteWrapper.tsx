import { IoArrowBack } from "react-icons/io5";
import { handleSendInvitationClick } from "../../../../../redux/slices/userSlice";
import { useAppDispatch, useAppSelector } from "../../../../../redux/store";
import SendInvite from "./SendInvite";
import { motion, AnimatePresence } from "framer-motion";
import { useIsMobile } from "../../../../../util/customHooks";

const SendInviteWrapper = () => {
  const { isSendInviteSectionOpen } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  const isMobile = useIsMobile();

  return (
    <>
      {isMobile ? (
        <div
          className={` mobile-slider-common fixed inset-0 z-[100] h-full w-[100vw] overflow-clip  bg-white transition-all duration-300
       ease-linear ${
         isSendInviteSectionOpen
           ? "transform-x-0 z-50 "
           : "-z-50 translate-x-full"
       } `}
        >
          <div className="flex h-12 w-full  items-center justify-start bg-white pl-[1.026rem] ss:h-16 ss:pl-12 sm:h-24 sm:pl-[4.375rem]">
            <IoArrowBack
              className="cursor-pointer text-lg sm:text-2xl"
              onClick={() => dispatch(handleSendInvitationClick(false))}
            />
          </div>
          <div className=" no-scrollbar flex h-full w-full overflow-y-auto px-2 py-12  min-[320px]:px-4 ss:px-12 ss:py-16  sm:py-[3.75rem] sm:pl-[4.375rem] sm:pr-[9rem]">
            <SendInvite />
          </div>
        </div>
      ) : (
        <AnimatePresence>
          {isSendInviteSectionOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: "0.3", ease: "linear" }}
              className={`temp-popup-container 
          fixed inset-0 z-[999] flex h-screen w-screen items-center justify-center
        bg-[rgba(0,0,0,0.6)] `}
              onClick={() => {
                dispatch(handleSendInvitationClick(false));
              }}
            >
              <div
                data-aos="flip-down"
                className=" no-scrollbar flex h-[26.25rem] w-[62rem] overflow-y-auto bg-white  px-[5.875rem] pt-[4.875rem] "
                onClick={(e) => {
                  e.stopPropagation();
                }}
              >
                <SendInvite />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </>
  );
};

export default SendInviteWrapper;
