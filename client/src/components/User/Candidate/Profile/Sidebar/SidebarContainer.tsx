import Sidebar from "./Sidebar";

const SidebarContainer = () => {
  return (
    <div
      className="sticky top-[4.5rem] hidden w-fit min-[1024px]:block 
    min-[1024px]:pl-9 md:pl-[3.8rem] lg:pl-[4.5rem] "
    >
      <Sidebar />
    </div>
  );
};

export default SidebarContainer;
