import React, { useState } from "react";

export default function TextForm(props) {
  const up = () => {
    // console.log("Uppercase was clicked " + text);
    let newtext = text.toUpperCase();
    setText(newtext);
    props.showalert("Coverted to Uppercase", "success");
  };
  const lo = () => {
    let newtext = text.toLowerCase();
    setText(newtext);
    props.showalert("Coverted to Lowercase", "success");
  };
  const clear = () => {
    let newtext = "";
    setText(newtext);
    props.showalert("Text Cleared", "success");
  };
  const ivt = () => {
    var newtext = text.split("").reverse().join("");
    setText(newtext);
    props.showalert("Text is Reversed", "success");
  };
  const copy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showalert("Text Copied!", "success");
  };
  const removespace = () => {
    let newtext = text.split(/[ ]+/);
    setText(newtext.join(" "));
    props.showalert("Extra Space removed", "success");
  };
  const on = (event) => {
    // console.log("on change");
    setText(event.target.value);
  };

  const [text, setText] = useState("");
  //text= "New text" worng way to change state
  //setText= ("New text"); worng way to change state

  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === "dark" ? "white" : "#042743",
        }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            onChange={on}
            value={text}
            id="myBox"
            rows="8"
            style={{
              backgroundColor: props.mode === "light" ? "white" : "grey",
              color: props.mode === "dark" ? "white" : "#042743",
            }}
          ></textarea>
        </div>
        <button className={`btn btn-${props.bc} mx-2`} onClick={up}>
          Convert to Uppercase
        </button>
        <button className={`btn btn-${props.bc} mx-2`} onClick={lo}>
          Convert to Lowercase
        </button>
        <button className={`btn btn-${props.bc} mx-2`} onClick={clear}>
          Clear Text
        </button>
        <button className={`btn btn-${props.bc} mx-2`} onClick={ivt}>
          Invert Text
        </button>
        <button className={`btn btn-${props.bc} mx-2`} onClick={copy}>
          Copy Text
        </button>
        <button className={`btn btn-${props.bc} mx-2`} onClick={removespace}>
          Remove extra space
        </button>
      </div>
      <div
        className="container my-3"
        style={{
          color: props.mode === "dark" ? "white" : "#042743",
        }}
      >
        <h2>Your text summery</h2>
        <p>
          {text.split(" ").length - 1} words , {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length}Minutes to read</p>
        {/* <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter to preview it here"}</p> */}
      </div>
    </>
  );
}
