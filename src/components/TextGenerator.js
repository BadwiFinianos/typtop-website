import React, { useState, useEffect } from "react";
import { DEFAULT_THEME } from "../themes";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { LoremIpsum } from "lorem-ipsum";

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 7,
    min: 5,
  },
  wordsPerSentence: {
    max: 14,
    min: 8,
  },
});

const TextGenerator = ({ returnText }) => {
  const [text, setText] = useState(
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent aliquet accumsan lorem, non placerat ex consectetur id."
  );
  const [length, setLength] = useState(1);
  const [unit, setUnit] = useState("paragraphes");

  useEffect(() => {
    returnText(text);
  }, [text]);

  const GenerateText = () => {
    if (unit === "paragraphes") {
      setText(lorem.generateParagraphs(length));
    } else if (unit === "sentences") {
      setText(lorem.generateSentences(length));
    } else if (unit === "words") {
      setText(lorem.generateWords(length));
    }
  };
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
        1- Generate or Copy your text:
      </label>
      <TextField
        id="outlined-multiline-static"
        label="Text"
        multiline
        minRows={4}
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
        style={{ width: "100%", minHeight: 100 }}
      />
      <div
        style={{
          justifyContent: "flex-start",
          display: "flex",
          flexDirection: "row",
          width: "100%",
          marginTop: 50,
        }}
      >
        <TextField
          id="outlined-basic"
          label="Length"
          variant="outlined"
          value={length.toString()}
          onChange={(e) => {
            setLength(parseInt(e.target.value));
          }}
        />
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={unit}
          onChange={(e) => {
            setUnit(e.target.value);
          }}
          style={{ marginRight: 20, marginLeft: 20 }}
        >
          <MenuItem value={"paragraphes"}>Paragraphes</MenuItem>
          <MenuItem value={"sentences"}>Sentences</MenuItem>
          <MenuItem value={"words"}>Words</MenuItem>
        </Select>
        <Button
          variant="contained"
          style={{ backgroundColor: DEFAULT_THEME.SECONDARY, minWidth:80 }}
          onClick={() => {
            GenerateText();
          }}
        >
          Generate
        </Button>
      </div>
    </div>
  );
};

export default TextGenerator;
