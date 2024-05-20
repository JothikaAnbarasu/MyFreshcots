import React, { useLayoutEffect, useRef, useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
import { useClickOutside } from "../customHooks";

interface IOption {
  value: string;
  label: string;
}

interface ISelectProps {
  height?: string;
  width?: string;
  dropdownHeight?: string;
  placeholder: string;
  options: IOption[];
  onChange: (value: string) => void;
}

const CustomSelect: React.FC<ISelectProps> = ({
  height,
  width,
  dropdownHeight,
  options,
  onChange,
  placeholder,
}) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownPosition, setDropdownPosition] = useState<"top" | "bottom">(
    "bottom",
  );
  const customSelectRef = useRef<HTMLDivElement | null>(null);

  useClickOutside(customSelectRef, (e: { target: HTMLElement }) => {
    if (!customSelectRef.current?.contains(e.target)) {
      setIsOpen(false);
    }
  });

  useLayoutEffect(() => {
    if (customSelectRef.current) {
      const dropdownHeight =
        customSelectRef.current.querySelector(".select-dropdown")
          ?.clientHeight || 0;

      const spaceBelow =
        window.innerHeight -
        customSelectRef.current.getBoundingClientRect().bottom -
        94;

      if (spaceBelow < dropdownHeight) {
        setDropdownPosition("top");
      } else {
        setDropdownPosition("bottom");
      }
    }
  }, [isOpen]);

  const handleSelect = (value: string, label: string) => {
    setSelectedOption(value);
    onChange(value);
    setIsOpen(false);
    console.log("temporary function", label);
  };

  return (
    <div className="relative" ref={customSelectRef}>
      <div
        className={`custom-select-box flex h-[2.5rem] w-[7.188rem] cursor-pointer items-center  justify-between  rounded border border-grey-100 bg-white px-4 sm:h-12  sm:px-[1.625rem] ${height} ${width}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedOption ? (
          <span className="text-sm font-normal tracking-wide text-grey-700 ">
            {options.find((option) => option.value === selectedOption)?.label}{" "}
          </span>
        ) : (
          <span className=" select-none text-[0.813rem] font-normal tracking-wide text-placeholderText sm:text-sm ">
            {placeholder}
          </span>
        )}

        <FaAngleDown
          className={`transform text-grey-550 ${
            isOpen ? "rotate-180" : "rotate-0"
          } font-bold transition-transform duration-150`}
        />
      </div>
      {isOpen && (
        <div
          className={`absolute h-fit w-full ${
            dropdownPosition === "bottom"
              ? "top-[2.7rem] sm:top-[3rem]"
              : "bottom-[2.7rem]"
          } z-40 rounded-sm border bg-white shadow-sm`}
        >
          <ul
            className={`select-dropdown my-2 h-32 w-[7.188rem] overflow-y-scroll bg-white pr-1 ${width} ${dropdownHeight}`}
          >
            {options.map((option) => (
              <li
                key={option.value}
                className="flex cursor-pointer select-none items-center justify-start px-4 py-2 text-xs text-gray-700 hover:overflow-y-auto hover:bg-grey-160/40 sm:px-[1.425rem] sm:text-sm"
                onClick={() => handleSelect(option.value, option.label)}
              >
                {option.label}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CustomSelect;
