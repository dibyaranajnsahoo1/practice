import React, { useState } from "react";

export default function Textarea(props) {
  const [text, setText] = useState("");

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleUppercase = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Done Upper Case", "sucsses")
  };

  const handleLowercase = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Done to lower case", "sucsses")
  };

  const handleReverse = () => {
    let newText = text.split("").reverse().join("");
    setText(newText);
    props.showAlert("Done to Reverse", "sucsses")

  };

  const handleClear = () => {
    setText("");
    props.showAlert("All cleared", "sucsses")

  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("TEXT COPY", "sucsses")

  };

  const wordCount = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;

  return (
    <div>
      <h1>{props.head}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="text"
          value={text}
          rows="8"
          onChange={handleOnChange}
          style={{
            backgroundColor: props.mode === "light" ? "#f1f1f1" : "#212529",
            color: props.mode === "light" ? "#000" : "#fff",
          }}
        ></textarea>
      </div>
      <button className="btn btn-primary mx-1" onClick={handleUppercase}>
        To Uppercase
      </button>
      <button className="btn btn-primary mx-1" onClick={handleLowercase}>
        To Lowercase
      </button>
      <button className="btn btn-primary mx-1" onClick={handleReverse}>
        Reverse Text
      </button>
      <button className="btn btn-primary mx-1" onClick={handleClear}>
        Clear Text
      </button>
      <button className="btn btn-primary mx-1" onClick={handleCopy}>
        Copy Text
      </button>

      <div className="mt-3">
        <h2>Text Summary</h2>
        <p>
          {wordCount} word{text.length !== 1 && "s"}, {text.length} character
          {text.length !== 1 && "s"}.
        </p>
      </div>
    </div>
  );
}
