import FormFooter from "../../../util/homeUtils/FormFooter";
import { formStyles, layout } from "../../../constants/styles";
import {
  openFormRegister,
  handleOrganizationDomainChange,
  verifyOrganizationDomain,
} from "../../../redux/slices/formSlice";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { useAppDispatch, useAppSelector } from "../../../redux/store";

const FormStart = () => {
  const { organizationDomain } = useAppSelector((state) => state.form);
  const dispatch = useAppDispatch();

  return (
    <form
      name="form-start"
      className=" "
      onSubmit={(e) => {
        e.preventDefault();
        dispatch(openFormRegister());
      }}
    >
      <div className="mt-36 flex  w-full  flex-col items-center justify-center gap-8 sm:mt-32 sm:gap-y-12 ">
        <div>
          <label className={`${formStyles.label}`}>
            Name of the Organization
            <br />
            <input
              type="text"
              placeholder="ABC Info Lmtd."
              className={`${formStyles.input} lg:w-[25.5625rem]`}
            />
          </label>
        </div>

        <div>
          <label className={`${formStyles.label}`}>
            Domain of the Organization
            <br />
            <div className="mt-[0.87rem] flex h-11 w-[16.5rem] rounded border bg-white transition-all duration-200 ease-linear focus-within:border-primary-650 min-[320px]:w-[17.5rem] ss:w-80 lg:h-12 lg:w-[25.5625rem]">
              <input
                type="text"
                value={organizationDomain}
                onChange={(e) => {
                  dispatch(handleOrganizationDomainChange(e.target.value));
                }}
                placeholder="www.xyz.com"
                className="h-full w-full rounded px-4 text-base font-normal tracking-wide outline-none  sm:px-8 sm:font-medium"
              />
              <IoIosCheckmarkCircle className="mr-2 h-6 w-6 self-center text-primary-500 sm:mr-4" />
            </div>
          </label>
        </div>

        <div className="mt-20 sm:mt-14 ">
          <button
            type="submit"
            className={`${layout.button} h-12 w-44 p-2.5   sm:w-[12rem] `}
            disabled={false}
            onClick={() => {
              dispatch(verifyOrganizationDomain());
            }}
          >
            Next
          </button>
        </div>
      </div>

      <div className="mt-4 hidden w-full min-[1020px]:block">
        <FormFooter />
      </div>
    </form>
  );
};

export default FormStart;
