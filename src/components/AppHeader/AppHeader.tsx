import { FC } from "react";
import HeaderTab from "./HeaderTab";
import { appTabs } from "../../contexts";

const AppHeader: FC = () => {
  const headerTabs = appTabs.map((appTab) => (
    <HeaderTab key={appTab} appTab={appTab} />
  ));
  return (
    <div className="bg-red-100 flex space-x-2 > * px-1 py-1">{headerTabs}</div>
  );
};

export default AppHeader;
