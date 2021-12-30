import React, { useState, useEffect } from "react";
import { DEFAULT_THEME } from "../../themes";
import Button from "@mui/material/Button";
import Banner from "../../components/banner";
import TextGenerator from "../../components/TextGenerator";
import DurationSelector from "../../components/DurationSelector";
const MainView = () => {
  const [text, setText] = useState("");
  const [duration, setDuration] = useState(1);
  return (
    <div
      style={{
        backgroundColor: "white", //DEFAULT_THEME.PRIMARY,
        paddingRight: "10%",
        paddingLeft: "10%",
      }}
    >
      <Banner />
      <TextGenerator
        returnText={(txt) => {
          setText(txt);
        }}
      />
      <DurationSelector
        returnDuration={(dur) => {
          setDuration(dur);
        }}
      />
      <div style={{ marginTop: 40, marginBottom: 40 }}>
        <Button
          variant="contained"
          style={{
            backgroundColor: DEFAULT_THEME.SECONDARY,
            width: 200,
            height: 200,
            borderRadius: 100,
            border: "solid 10px " + DEFAULT_THEME.GREY,
            color: "#fff",
            fontWeight: "bolder",
            textTransform: "none",
            fontSize: 50,
          }}
          onClick={() => {}}
        >
          {"START"}
        </Button>
      </div>
    </div>
  );
};

export default MainView;
