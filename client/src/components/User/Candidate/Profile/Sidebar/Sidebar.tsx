import { Link, useLocation } from "react-router-dom";
import { candidateProfileSidebarLinks } from "../../../../../constants/user";
import PercentageBadge from "../PercentageBadge";
import { BsSend } from "react-icons/bs";
import { BsSendFill } from "react-icons/bs";
import { useEffect } from "react";
import { useAppDispatch } from "../../../../../redux/store";
import { handleSendInvitationClick } from "../../../../../redux/slices/userSlice";

const Sidebar = () => {
  const { hash, pathname } = useLocation();
  const dispatch = useAppDispatch();

  useEffect(() => {
    // Removing hash when the page is refreshed
    if (hash) {
      window.history.replaceState({}, document.title, pathname);
    }
  }, [hash, pathname]);

  return (
    <aside className="  h-fit w-72 rounded-2xl border  border-grey-100  bg-white px-[2.12rem] py-[2.06rem]">
      <ul className="mb-[1.75rem] flex flex-col gap-8 ">
        {candidateProfileSidebarLinks?.map(
          ({ linkName, percentageBadgeInput, url }, i) => {
            return (
              <li key={i}>
                <Link
                  to={url}
                  className="group flex w-fit items-center justify-start gap-2 text-lg font-medium tracking-wider text-grey-700"
                  onClick={(e) => {
                    // Checking if the link being clicked is already active
                    if (hash === url) {
                      e.preventDefault(); // Preventing default behavior to hide hash
                    }
                  }}
                >
                  <span className="border-b-2 border-transparent transition-all duration-150 ease-linear group-hover:border-primary-500  ">
                    {linkName}
                  </span>
                  <span className="flex items-center justify-center">
                    {percentageBadgeInput && (
                      <PercentageBadge
                        percentage={percentageBadgeInput}
                        height={"h-[1.335rem]"}
                        width={" w-[3.125rem]"}
                      />
                    )}
                  </span>
                </Link>
              </li>
            );
          },
        )}
      </ul>
      <hr className="mb-[1.75rem] w-[10.625rem] text-grey-75" />
      <div
        className=" group mb-16
    flex  w-fit cursor-pointer items-center justify-start gap-2 text-lg font-medium tracking-wider text-grey-700 transition-all duration-150 ease-linear"
        onClick={() => dispatch(handleSendInvitationClick(true))}
      >
        <span>Send Invite</span>
        <span className="transition-colors duration-200 ease-linear group-hover:text-primary-300 ">
          <BsSend className="block group-hover:hidden" />
          <BsSendFill className="hidden group-hover:block" />
        </span>
      </div>
    </aside>
  );
};

export default Sidebar;
