import React from "react";
import { DEFAULT_THEME } from "../../themes";

const Contact = ({ icon, text }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
      }}
    >
      <div style={{ width: 36 }}>{icon}</div>
      <label style={{ fontSize: 12, color: DEFAULT_THEME.WHITE }}>{text}</label>
    </div>
  );
};

export default Contact;
