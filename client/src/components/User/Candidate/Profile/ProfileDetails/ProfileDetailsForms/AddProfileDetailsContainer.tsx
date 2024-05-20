import { handleAddProfileDetailsClick } from "../../../../../../redux/slices/userSlice";
import { useAppDispatch, useAppSelector } from "../../../../../../redux/store";
import { useIsMobile } from "../../../../../../util/customHooks";
import AddProfileDetailsWrapper from "./AddProfileDetailsWrapper";
import { motion, AnimatePresence } from "framer-motion";

const AddProfileDetailsContainer = () => {
  const { isAddProfileDetailsSectionOpen } = useAppSelector(
    (state) => state.user,
  );
  const isMobile = useIsMobile();

  const popupVariants = {
    hidden: {
      x: "100vw",
      opacity: 1,
      transition: { ease: "easeOut", duration: 0.4 },
    },
    visible: {
      x: 0,
      opacity: 1,

      transition: {
        ease: "easeOut",
        duration: 0.4,
      },
    },
  };

  const dispatch = useAppDispatch();

  return (
    <>
      {!isMobile ? (
        <AnimatePresence>
          {isAddProfileDetailsSectionOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: "0.3", ease: "linear" }}
              className={`temp-popup-container 
                fixed inset-0 z-[999] flex h-screen w-screen items-center justify-center
              bg-[rgba(0,0,0,0.14)] `}
              onClick={() => {
                dispatch(handleAddProfileDetailsClick({ isOpen: false }));
              }}
            >
              <motion.div
                key="tempmodal"
                className="tempModalContent  flex h-fit w-fit items-center justify-center rounded-2xl "
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={popupVariants}
                onClick={(e) => {
                  e.stopPropagation();
                }}
              >
                <AddProfileDetailsWrapper />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      ) : (
        <div
          className={` mobile-slider-common fixed inset-0 z-[100] h-full w-[100vw] overflow-clip  bg-white px-4 transition-all duration-300
           ease-linear xs:px-8 xs:py-4 ss:px-16  sm:p-0  ${
             isAddProfileDetailsSectionOpen
               ? "transform-y-0 z-50 "
               : "-z-50 translate-y-full"
           } `}
        >
          <AddProfileDetailsWrapper />
        </div>
      )}
    </>
  );
};

export default AddProfileDetailsContainer;
