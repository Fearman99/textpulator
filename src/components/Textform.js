import React, { useState } from "react";

function Textform(props) {
  const handelUPcase = () => {
    let newtext = text.toUpperCase();
    setText(newtext);
    props.showAlert("Converted to upper case", "success : ");
  };
  const handelLCcase = () => {
    let newtext = text.toLowerCase();
    setText(newtext);
    props.showAlert("Converted to lower case", "success : ");
  };
  const handelClear = () => {
    let newtext = "";
    setText(newtext);
    props.showAlert("Text Cleared!!", "success : ");
  };
  const handelCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Text copied to clipboard", "success : ");
  };
  const handelOnChange = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState("");

  return (
    <div
      className="container" tit={document.title = "Textpulator - Convert Text to Upper and Lower Case and Count Words and Characters"}
      style={{ color: props.modes === "dark" ? "white" : "black" }}
    >
      <h2>{props.heading}</h2>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="8"
          value={text}
          onChange={handelOnChange}
          style={{
            backgroundColor: props.modes === "dark" ? "#343434c7" : "white",
            color: props.modes === "dark" ? "white" : "black",
          }}
        ></textarea>
      </div>
      <button className="btn btn-primary mx-2 my-2" onClick={handelUPcase}>
        To Upper Case
      </button>
      <button className="btn btn-primary mx-2 my-2" onClick={handelLCcase}>
        To Lower Case
      </button>
      <button className="btn btn-primary mx-2 my-2" onClick={handelClear}>
        Clear All
      </button>
      <button
        type="button"
        className="btn btn-primary mx-2"
        aria-label="Copy to clipboard"
        data-bs-original-title="Copy to clipboard"
        onClick={handelCopy}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-clipboard"
          viewBox="0 0 16 16"
        >
          <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1z" />
          <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0z" />
        </svg>
      </button>
      <div className="container my-3">
        <h4>Text Summary</h4>
        <p>{text.length } Characters</p>
        <p>
          {
            text.split(/\s+/).filter((ele) => {
              return ele.length !== 0;
            }).length
          }{" "}
          Words
        </p>
        <h5>Preview</h5>
        <p>{text}</p>
      </div>
    </div>
  );
}

//Textform.propTypes = {heading : String};

export default Textform;
