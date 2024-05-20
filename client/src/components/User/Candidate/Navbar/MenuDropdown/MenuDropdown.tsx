import MenuDropdownLinks from "./MenuDropdownLinks";
import { motion } from "framer-motion";

const MenuDropdown = () => {
  const menuDropdownVariants = {
    hidden: {
      opacity: 0,
      scale: 0.5,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.2,
        // delay: 0.02,
        ease: [0, 0.71, 0.2, 1.01],
        // ease: "linear",
      },
    },
  };
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={menuDropdownVariants}
      className="absolute top-16  z-50 h-fit w-[13.688rem] rounded border-[0.5px] border-grey-100  bg-white py-4 sm:right-[1.2rem] lg:right-[1.7rem]"
    >
      <div className="absolute -top-[2.4rem] right-[2.0484rem]  xl:-top-[2.39rem]">
        <div className="relative h-0 w-0 border-[1.2rem]  border-b-grey-100 border-l-transparent border-r-transparent border-t-transparent bg-transparent xl:top-[0.05rem]">
          <div className=" triangle absolute -left-[1.3rem] -top-[1.202rem] border-[1.3rem]  border-b-white border-l-transparent border-r-transparent border-t-transparent bg-transparent xl:-top-[1.22rem]" />
        </div>
      </div>

      <MenuDropdownLinks />
    </motion.div>
  );
};

export default MenuDropdown;
