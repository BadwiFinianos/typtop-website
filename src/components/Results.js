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
  const [correctWordsCount, setCorrectWordsCount] = useState(0);
  const [typingScore, setTypingScore] = useState(0);
  const [durationScore, setDurationScore] = useState(0);
  const [wordPerMinute, setWordPerMinute] = useState(0);
  const [calculateTypingScore, setCalculateTypingScore] = useState(false);
  const [totalScore, setTotalScore] = useState(0);
  useEffect(() => {
    setDurationScore(((duration * 60 - usedDuration) * 100) / (duration * 60));
  }, [duration, usedDuration]);

  useEffect(() => {
    let txtWords = text.split(" ");
    setTextWords(txtWords);
    setCalculateTypingScore(!calculateTypingScore);
  }, [text]);

  useEffect(() => {
    let txtWords = typedText.split(" ");
    setTypedTextWords(txtWords);
    setCalculateTypingScore(!calculateTypingScore);
  }, [typedText]);

  useEffect(() => {
    var i = 0,
      count = 0;
    for (i = 0; i < typedTextWords.length; i++) {
      if (typedTextWords[i] === textWords[i]) {
        count++;
      }
    }
    setCorrectWordsCount(count);
    setTypingScore((count * 100) / textWords.length);
    setWordPerMinute((typedTextWords.length * 60) / usedDuration);
  }, [calculateTypingScore]);

  useEffect(() => {
    // duration score coefficient 1
    // typing score coefficient 4
    setTotalScore((wordPerMinute * typingScore) / 100);
  }, [wordPerMinute, typingScore]);
  return (
    <div style={{ marginTop: 100, display: "flex", flexDirection: "column" }}>
      <label
        style={{
          fontWeight: "bold",
          fontSize: 20,
          color: DEFAULT_THEME.TEXT,
          textAlign: "center",
          marginBottom: 20,
        }}
      >
        You completed the test in{" "}
        {usedDuration >= 60
          ? Math.floor(usedDuration / 60) + " minutes and "
          : ""}
        {usedDuration % 60} seconds.
      </label>
      <label
        style={{
          fontWeight: "bold",
          fontSize: 28,
          color: DEFAULT_THEME.TEXT,
          textAlign: "center",
          marginBottom: 20,
        }}
      >
        Words Per Minute: {wordPerMinute.toFixed(0)}
      </label>
      <label
        style={{
          fontWeight: "bold",
          fontSize: 20,
          color: DEFAULT_THEME.TEXT,
          textAlign: "center",
          marginBottom: 20,
        }}
      >
        You typed {correctWordsCount} words correctly.
      </label>
      <label
        style={{
          fontWeight: "bold",
          fontSize: 28,
          color: DEFAULT_THEME.TEXT,
          textAlign: "center",
          marginBottom: 20,
        }}
      >
        Typing Accuracy: {typingScore.toFixed(0) + "/100"}
      </label>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <label
          style={{
            fontWeight: "bold",
            fontSize: 32,
            color: DEFAULT_THEME.TEXT,
            textAlign: "center",
            marginBottom: 20,
          }}
        >
          Your Total Score:
        </label>
        <label
          style={{
            alignSelf: "center",
            fontWeight: "bold",
            fontSize: 32,
            color: "#fff",
            textAlign: "center",
            marginBottom: 20,
            padding: 12,
            borderRadius: 12,
            width: 200,
            backgroundColor:
              totalScore < 20 ? "red" : totalScore < 30 ? "yellow" : "green",
          }}
        >
          {totalScore.toFixed(0) + " WPM"}
        </label>
      </div>
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
