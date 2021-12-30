import React, { useState, useEffect } from "react";
import { DEFAULT_THEME } from "../themes";
import ManTyping from "../assets/man-typing.png";
const Banner = () => {
  return (
    <div
      style={{
        //width: "100%",
        paddingTop: 20,
        paddingBottom: 20,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingRight: "8%",
        paddingLeft: "8%",
      }}
    >
      <label
        style={{
          fontWeight: "bold",
          fontSize: 64,
          width: "46%",
          color: DEFAULT_THEME.TEXT,
        }}
      >
        Test your typing skills!
      </label>
      <img
        src={ManTyping}
        alt="typtop"
        style={{ width: "40%", aspectRatio: 2 }}
      />
    </div>
  );
};

export default Banner;
