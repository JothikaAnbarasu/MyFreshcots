import { Link, useLocation } from "react-router-dom";
import { IUserTabsData } from "../../constants/interfaces/user";
import { layout } from "../../constants/styles";

interface IUserTabsProps {
  userTabsData: IUserTabsData[];
}
const UserTabs = ({ userTabsData }: IUserTabsProps) => {
  const location = useLocation();
  return (
    <div className="hidden items-center justify-center pt-12 sm:flex">
      {userTabsData &&
        userTabsData.map(({ title, url }, index) => {
          return (
            <Link key={index} to={`/${url}`}>
              <button
                className={`${
                  layout.tab
                }  flex bg-primary-350 text-grey-800 sm:p-0 sm:text-sm 
              ${
                url.split("/").join("") ===
                location.pathname.split("/").join("")
                  ? "bg-primary-500 text-white"
                  : "bg-primary-350 text-primary-475"
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


export default UserTabs;
