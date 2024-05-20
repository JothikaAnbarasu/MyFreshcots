export const layout = {
  button: `flex justify-center items-center bg-primary-500 text-white text-base font-medium tracking-wide hover:bg-primary-600 rounded-sm cursor-pointer select-none disabled:cursor-not-allowed   disabled:text-grey-550 disabled:bg-grey-90 `,
  boxShadow: `rounded-lg bg-white shadow-form`,
  arc: `h-1/2 w-32 border-2  border-primary-550 lg:w-44`,
  tab: `flex items-center justify-center px-[1.31rem] py-[0.62rem] font-medium tracking-wide sm:text-base 
  sm:h-[3rem] sm:w-[9.8rem] min-[1024px]:h-[3.5rem]  sm:rounded sm:border sm:border-grey-100 min-[1024px]:w-[12rem] min-[1024px]:text-lg md:w-[13.5rem] lg::w-[14.9rem]`,
  profileDetailsCardWrapper: `w-full flex-col items-center justify-start rounded-lg border  border-grey-100 bg-white px-6 py-4 sm:py-[1.875rem] sm:pl-10 sm:pr-20  min-[1400px]:pr-48`,
  profileDetailsCardBtn: `flex 
  items-center justify-center gap-1 text-xs font-medium text-primary-500 transition-all duration-300 hover:gap-2 sm:text-sm`,
};

export const formStyles = {
  label: `text-base font-medium tracking-wide text-grey-600`,
  input: `mt-[0.87rem] h-11 w-[16.5rem] rounded border px-4 border-grey-100 bg-white text-base font-normal tracking-wide text-grey-600 outline-none focus:border-primary-650 min-[320px]:w-[17.5rem]  ss:w-80 sm:px-8 sm:font-medium lg:h-12 lg:w-[21.75rem]`,
  userLabel: `text-sm font-medium tracking-wide text-grey-550 sm:text-base`,
  userLabelRequired: `text-sm font-medium tracking-wide text-grey-550 after:ml-0.5 after:text-base  after:font-semibold after:text-red-400 after:content-['*'] sm:text-base `,
  userInput: ` sm:mt-4 rounded border px-4 border-grey-100 bg-white w-full h-10 outline-none focus:border-primary-650 text-grey-700 text-sm font-normal tracking-wide placeholder:font-normal placeholder:tracking-wide placeholder:text-[0.813rem] sm:text-[0.9rem] sm:placeholder:text-sm sm:h-12 sm:px-[1.625rem] read-only:bg-grey-95 mt-3`,
  editEmailBoxWrapper: `mt-2 flex h-10 w-full items-center justify-between rounded  border  border-primary-650  bg-softCyan-250 px-3 py-2 text-sm font-medium text-primary-475 xs:h-12 xs:w-96 sm:text-base md:h-12 md:w-[28rem] 
  md:px-8 `,
  changeEmailPhoneNoFormWrapper: `mt-12 flex h-[22.5rem] w-full bg-white min-[1024px]:mt-0 min-[1024px]:h-[21.75rem] min-[1024px]:w-[50.688rem] min-[1024px]:border min-[1024px]:border-grey-100  `,
  changeEmailPhoneNoButton: ` h-10 w-[8.938rem] text-sm sm:font-semibold
  `,
};
