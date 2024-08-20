import React from "react";

const Header = ({ children }: any) => {
  return (
    <div style={{ height: "30px", width: "100%", background: "blue" }}>
      {children}
    </div>
  );
};

export default Header;
