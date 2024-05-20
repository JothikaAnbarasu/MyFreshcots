import UserTabs from "../../../util/userUtils/UserTabs";
import { candidateUserTabsData } from "../../../constants/user";

interface ICandidateWrapperProps {
  component: React.ComponentType;
}

const CandidateWrapper = ({ component: Component }: ICandidateWrapperProps) => {
  return (
    <div className="h-full w-full bg-pageBg ">
      <UserTabs userTabsData={candidateUserTabsData} />
      <Component />
    </div>
  );
};

export default CandidateWrapper;
