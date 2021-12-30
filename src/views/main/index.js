import React, { useState, useEffect, useRef } from "react";
import { DEFAULT_THEME } from "../../themes";
import Button from "@mui/material/Button";
import Banner from "../../components/banner";
import TextGenerator from "../../components/TextGenerator";
import DurationSelector from "../../components/DurationSelector";
import Starting from "../../components/Starting";
import Testing from "../../components/Test";
import Results from "../../components/Results";
const MainView = () => {
  const startingDivRef = useRef(null);
  const testingDivRef = useRef(null);
  const resultsDivRef = useRef(null);

  const [text, setText] = useState("");
  const [typedText, setTypedText] = useState("");
  const [duration, setDuration] = useState(1);
  const [usedDuration, setUsedDuration] = useState(1);
  const [starting, setStarting] = useState(false);
  const [testing, setTesting] = useState(false);
  const [testDone, setTestDone] = useState(false);
  return (
    <div
      style={{
        backgroundColor: "white",
        paddingRight: "10%",
        paddingLeft: "10%",
      }}
    >
      {!(starting || testing || testDone) && (
        <div>
          <Banner />
          <TextGenerator
            enabled={!starting && !testing && !testDone}
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
              onClick={() => {
                setStarting(true);
                startingDivRef.current.scrollIntoView();
              }}
            >
              {"START"}
            </Button>
          </div>
        </div>
      )}
      {starting && (
        <Starting
          ref={startingDivRef}
          text={text}
          duration={duration}
          countDone={() => {
            setTesting(true);
            setStarting(false);
            testingDivRef.current.scrollIntoView();
          }}
          cancel={() => {
            setStarting(false);
          }}
        />
      )}
      {testing && (
        <Testing
          ref={testingDivRef}
          text={text}
          duration={duration}
          countDone={(txt, dur) => {
            setTestDone(true);
            setTesting(false);
            setTypedText(txt);
            setUsedDuration(dur);
            resultsDivRef.current.scrollIntoView();
          }}
          cancel={() => {
            setTesting(false);
          }}
        />
      )}
      {testDone && (
        <Results
          ref={resultsDivRef}
          text={text}
          typedText={typedText}
          duration={duration}
          usedDuration={usedDuration}
          startNew={() => {
            setTestDone(false);
            setDuration(1);
          }}
          repeat={() => {
            setStarting(true);
            setTestDone(false);
            startingDivRef.current.scrollIntoView();
          }}
        />
      )}
    </div>
  );
};

export default MainView;
