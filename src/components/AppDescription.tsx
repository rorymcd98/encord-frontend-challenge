import { FC, ReactNode } from "react";

// Dev note: I was thinking about making this component more reusable, but I don't think this is neccessary

// interface AppDescriptionProps extends HTMLParagraphElement {
//   //Not sure what to do as props
// }
// then we pass ...props to the <p> tag

const AppDescription: FC<{ children: ReactNode }> = ({ children }) => {
  return <p className="italic text-gray-500">{children}</p>;
};

export default AppDescription;
