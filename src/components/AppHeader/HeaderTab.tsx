import { FC, useContext } from "react";
import { AppTab, TabContext } from "../../contexts";
interface HeaderTabProps {
  appTab: AppTab;
}

const HeaderTab: FC<HeaderTabProps> = ({ appTab }) => {
  const { selectedTab, setSelectedTab } = useContext(TabContext);
  const handleTabClick = () => {
    setSelectedTab(appTab);
  };

  const textColor = selectedTab === appTab ? "text-red-500" : "text-black";

  return (
    <button
      className={`bg-white border-black border-solid border-2 roudned-2xl px-2 ${textColor}`}
      onMouseDown={handleTabClick}
    >
      {appTab}
    </button>
  );
};

export default HeaderTab;
