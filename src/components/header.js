import React from "react";
import { DEFAULT_THEME } from "../themes";
import LOGO from "../assets/logo_filled.png";

const Header = () => {
  return (
    <div
      style={{
        //width: "100%",
        height: 120,
        backgroundColor: DEFAULT_THEME.PRIMARY,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingRight: "8%",
        paddingLeft: "8%",
      }}
    >
      <img
        src={LOGO}
        alt="typtop"
        style={{ borderRadius: 12, width: 220, height: 70 }}
      />
    </div>
  );
};

export default Header;
