import { FC, useContext } from "react";
import { AppTab, TabContext } from "../../contexts";
import * as cn from "classnames";
interface HeaderTabProps {
  appTab: AppTab;
}

const HeaderTab: FC<HeaderTabProps> = ({ appTab }) => {
  const { selectedTab, setSelectedTab } = useContext(TabContext);
  const handleTabClick = () => {
    setSelectedTab(appTab);
  };
  const tabClasses = cn(
    "bg-white",
    "border-black border-solid border-2 rounded-2xl",
    "text-black",
    "text-center",
    "px-2",
    {
      "text-red-500": selectedTab === appTab,
    }
  );

  return (
    <button className={tabClasses} onMouseDown={handleTabClick}>
      {appTab}
    </button>
  );
};

export default HeaderTab;
