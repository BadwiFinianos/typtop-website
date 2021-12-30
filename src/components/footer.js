import React, { useState, useEffect } from "react";
import { DEFAULT_THEME } from "../themes";
import Contact from "./sub-components/Contact";
import { FaBeer } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { RiFacebookCircleLine, RiInstagramLine } from "react-icons/ri";
const Footer = () => {
  return (
    <div
      style={{
        //width: "100%",
        height: 60,
        backgroundColor: DEFAULT_THEME.PRIMARY,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingRight: "8%",
        paddingLeft: "8%",
      }}
    >
    <Contact
      text={"typtop"}
      icon={
        <RiFacebookCircleLine
          style={{ color: "#fff", width: 20, height: 20 }}
        />
      }
    />
      <Contact
        text={"example@typtop.com"}
        icon={
          <HiOutlineMail style={{ color: "#fff", width: 20, height: 20 }} />
        }
      />
      <Contact
        text={"typtop"}
        icon={
          <RiInstagramLine style={{ color: "#fff", width: 20, height: 20 }} />
        }
    />
    </div>
  );
};

export default Footer;
