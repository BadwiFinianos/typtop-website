import React, { useState, useEffect } from "react";
import { DEFAULT_THEME } from "../themes";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const durationValues = [
  { value: 1, label: "1 minute" },
  { value: 2, label: "2 minutes" },
  { value: 5, label: "5 minutes" },
];
const DurationSelector = ({ returnDuration }) => {
  const [duration, setDuration] = useState(1);

  useEffect(() => {
    returnDuration(duration);
  }, [duration]);

  return (
    <div
      style={{
        paddingTop: 20,
        paddingBottom: 20,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        width: "100%",
      }}
    >
      <label
        style={{
          fontWeight: "bold",
          fontSize: 32,
          color: DEFAULT_THEME.TEXT,
          textAlign: "start",
          marginBottom: 20,
        }}
      >
        2- Select your expected duration (in minutes):
      </label>

      <div
        style={{
          justifyContent: "flex-start",
          display: "flex",
          flexDirection: "row",
          width: "100%",
          marginTop: 50,
          flexWrap: "wrap",
        }}
      >
        {durationValues.map((dur) => {
          return (
            <Button
              variant="contained"
              style={{
                backgroundColor:
                  duration === dur.value ? DEFAULT_THEME.PRIMARY : "#fff",
                marginRight: 12,
                marginTop: 12,
                height: 60,
                color: "#000",
                textTransform: "none",
              }}
              onClick={() => {
                setDuration(dur.value);
              }}
            >
              {dur.label}
            </Button>
          );
        })}
        <Button
          variant="contained"
          style={{
            backgroundColor: !durationValues.find((x) => x.value === duration)
              ? DEFAULT_THEME.PRIMARY
              : "#fff",
            marginRight: 12,
            marginTop: 12,
            color: "#000",
            textTransform: "none",
          }}
          onClick={() => {
            setDuration(10);
          }}
        >
          {"custom"}
        </Button>
        {!durationValues.find((x) => x.value === duration) && (
          <TextField
            id="outlined-basic"
            label="Duration"
            variant="outlined"
            value={duration.toString()}
            onChange={(e) => {
              setDuration(parseInt(e.target.value));
            }}
            style={{
              marginTop: 12,
            }}
          />
        )}
      </div>
    </div>
  );
};

export default DurationSelector;
