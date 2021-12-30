import React, { useState, useEffect } from "react";
import { DEFAULT_THEME } from "../themes";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const Test = ({ text, duration, countDone, cancel }) => {
  const [count, setCount] = useState(duration * 60);
  const [typedText, setTypedText] = useState("");
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
      <label
        style={{
          fontWeight: "700",
          fontSize: 20,
          color: DEFAULT_THEME.TEXT,
          textAlign: "start",
          marginBottom: 8,
        }}
      >
        Text:
      </label>
      <label
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
        {text}
      </label>
      <TextField
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
