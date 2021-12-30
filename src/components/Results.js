import React, { useState, useEffect } from "react";
import { DEFAULT_THEME } from "../themes";
import Button from "@mui/material/Button";

const Results = ({
  text,
  typedText,
  duration,
  usedDuration,
  startNew,
  repeat,
}) => {
  const [textWords, setTextWords] = useState([]);
  const [typedTextWords, setTypedTextWords] = useState([]);
  const [typingScore, setTypingScore] = useState(0);
  const [durationScore, setDurationScore] = useState(0);
  useEffect(() => {
    setDurationScore(((duration * 60 - usedDuration) * 100) / (duration * 60));
  }, [duration, usedDuration]);
  useEffect(() => {
    let txtWords = text.replaceAll(".", "").split(/(?:,| )+./);
    setTextWords(txtWords);
  }, [text]);

  useEffect(() => {
    let txtWords = typedText.replaceAll(".", "").split(/(?:,| )+./);
    setTypedTextWords(txtWords);
  }, [typedText]);

  return (
    <div style={{ marginTop: 100, display: "flex", flexDirection: "column" }}>
      <label
        style={{
          fontWeight: "bold",
          fontSize: 24,
          color: DEFAULT_THEME.TEXT,
          textAlign: "center",
          marginBottom: 20,
        }}
      >
        You completed the test in{" "}
        {usedDuration > 60
          ? Math.floor(usedDuration / 60) + " minutes and "
          : ""}
        {usedDuration % 60} seconds.
      </label>
      <label
        style={{
          fontWeight: "bold",
          fontSize: 32,
          color: DEFAULT_THEME.TEXT,
          textAlign: "center",
          marginBottom: 20,
        }}
      >
        Speed Score: {durationScore.toFixed(0) + "/100"}
      </label>
      <div
        style={{
          marginTop: 40,
          marginBottom: 40,
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <Button
          variant="contained"
          style={{
            backgroundColor: DEFAULT_THEME.SECONDARY,
            margin: 40,
            height: 60,
            width: 120,
            color: "#fff",
            textTransform: "none",
          }}
          onClick={() => {
            repeat();
          }}
        >
          {"Repeat Test"}
        </Button>
        <Button
          variant="contained"
          style={{
            backgroundColor: DEFAULT_THEME.PRIMARY,
            margin: 40,
            height: 60,
            width: 120,
            color: "#fff",
            textTransform: "none",
          }}
          onClick={() => {
            startNew();
          }}
        >
          {"Start New Test"}
        </Button>
      </div>
    </div>
  );
};

export default Results;
