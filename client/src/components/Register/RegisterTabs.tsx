import { Link, useParams } from "react-router-dom";
import { IRegister } from "../../constants/interfaces/register";
import { layout } from "../../constants/styles";

interface IRegisterTabs {
  register: IRegister[];
}
const RegisterTabs = ({ register }: IRegisterTabs) => {
  const { category } = useParams();

  return (
    <div className=" flex flex-wrap items-center justify-center gap-2 py-8  min-[360px]:px-12 min-[460px]:px-16 min-[490px]:px-[6rem] min-[550px]:px-0 sm:gap-0 md:py-12">
      {register &&
        register.map(({ title, baseURL }, index) => {
          return (
            <Link key={index} to={`/${baseURL}/${title.toLowerCase()}`}>
              <button
                className={`${
                  layout.tab
                } h-[2.375rem] w-[7.25rem] rounded-[1.82rem] text-xs  
    ${
      title.toLowerCase() === category
        ? "bg-primary-500 text-white"
        : "text-primary-475 bg-primary-350"
    }`}
              >
                {title}
              </button>
            </Link>
          );
        })}
    </div>
  );
};

export default RegisterTabs;
