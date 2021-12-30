import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import { DEFAULT_THEME } from "../themes";
const Starting = ({ text, duration, countDone, cancel }) => {
  const [count, setCount] = useState(5);

  useEffect(() => {
    if (count > 0) {
      const interval = setInterval(function () {
        setCount(count - 1);
        if (count === 1) {
          clearInterval();
          countDone();
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
        Your test will start in
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
        Your objective is to type the following text in {duration} minutes:
      </label>
      <label
        style={{
          fontSize: 14,
          color: DEFAULT_THEME.TEXT,
          textAlign: "start",
          marginBottom: 8,
        }}
      >
        (PS: punctuation is not required)
      </label>
      <label
        style={{
          fontSize: 16,
          color: DEFAULT_THEME.TEXT,
          textAlign: "start",
          marginBottom: 8,
          padding: 12,
        }}
      >
        {text}
      </label>
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
            countDone();
          }}
        >
          {"Start"}
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

export default Starting;
