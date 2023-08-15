import { FC, ReactNode } from "react";

const AppContainer: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="m-2 p-2 rounded-l bg-slate-700 space-y-2 > * flex-col">
      {children}
    </div>
  );
};

export default AppContainer;
