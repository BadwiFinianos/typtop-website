import React, { useState, useEffect } from "react";
import { DEFAULT_THEME } from "../themes";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import LinearProgress from "@mui/material/LinearProgress";

const Test = ({ text, duration, countDone, cancel }) => {
  const [count, setCount] = useState(duration * 60);
  const [typedText, setTypedText] = useState("");
  const [textWords, setTextWords] = useState([]);
  const [typedTextWords, setTypedTextWords] = useState([]);

  useEffect(() => {
    if (count > 0) {
      const interval = setInterval(function () {
        setCount(count - 1);
        if (count === 1) {
          clearInterval();
          countDone(typedText, duration * 60);
        }
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [count]);

  useEffect(() => {
    let txtWords = text.split(" ");
    setTextWords(txtWords);
  }, [text]);

  useEffect(() => {
    let txtWords = typedText.split(" ");
    setTypedTextWords(txtWords);
  }, [typedText]);

  return (
    <div
      style={{
        marginTop: 40,
        marginBottom: 40,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <label
        style={{
          fontWeight: "bold",
          fontSize: 32,
          color: DEFAULT_THEME.TEXT,
          textAlign: "center",
          marginBottom: 20,
        }}
      >
        Remaining time:
      </label>
      <label
        style={{
          fontWeight: "bold",
          fontSize: 64,
          color: DEFAULT_THEME.TEXT,
          textAlign: "center",
          marginBottom: 40,
        }}
      >
        {count}
      </label>
      <LinearProgress
        variant="determinate"
        value={((duration * 60 - count) * 100) / (duration * 60)}
        style={{ height: 30, borderRadius: 12 }}
      />
      <label
        style={{
          fontWeight: "700",
          fontSize: 20,
          color: DEFAULT_THEME.TEXT,
          textAlign: "start",
          marginBottom: 8,
          marginTop: 20,
        }}
      >
        Text:
      </label>
      <label
        onselectstart="return false"
        oncut="return false"
        oncopy="return false"
        onpaste="return false"
        ondrag="return false"
        ondrop="return false"
        style={{
          fontSize: 16,
          color: DEFAULT_THEME.TEXT,
          textAlign: "start",
          marginBottom: 8,
          border: "solid 1px " + DEFAULT_THEME.GREY,
          borderRadius: 12,
          padding: 12,
        }}
      >
        {textWords.map((wrd, idx) => {
          if (typedTextWords.length - 1 == idx) {
            return (
              <label
                onselectstart="return false"
                oncut="return false"
                oncopy="return false"
                onpaste="return false"
                ondrag="return false"
                ondrop="return false"
                style={{
                  color: "blue",
                }}
              >
                {wrd + " "}
              </label>
            );
          } else {
            return wrd + " ";
          }
        })}
      </label>
      <TextField
        onPaste={(e) => {
          e.preventDefault();
          return false;
        }}
        onCopy={(e) => {
          e.preventDefault();
          return false;
        }}
        id="outlined-multiline-static"
        label="Type here"
        multiline
        minRows={4}
        value={typedText}
        onChange={(e) => {
          setTypedText(e.target.value);
        }}
        style={{ width: "100%", minHeight: 100, marginTop: 40 }}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Button
          variant="contained"
          style={{
            backgroundColor: DEFAULT_THEME.SECONDARY,
            marginTop: 40,
            marginBottom: 40,
            height: 60,
            width: 80,
            color: "#fff",
            textTransform: "none",
          }}
          onClick={() => {
            countDone(typedText, duration * 60 - count);
          }}
        >
          {"Done"}
        </Button>
        <Button
          variant="contained"
          style={{
            backgroundColor: "red",
            marginTop: 40,
            marginBottom: 40,
            height: 60,
            color: "#fff",
            textTransform: "none",
            alignSelf: "flex-end",
          }}
          onClick={() => {
            cancel();
          }}
        >
          {"Cancel"}
        </Button>
      </div>
    </div>
  );
};

export default Test;
