import { FC } from "react";

interface DarkLayoutProps {
  children: React.ReactNode;
}

const DarkLayout: FC<DarkLayoutProps> = ({ children }) => {
  return (
    <div
      style={{
        backgroundColor: "#2c2a2a4a",
        borderRadius: "5px",
        padding: "10px",
      }}
    >
      <h3>DarkLayout</h3>
      {children}
    </div>
  );
};

export default DarkLayout;
