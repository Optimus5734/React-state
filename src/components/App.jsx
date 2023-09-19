import React, { useState } from "react";

function App() {
  const [bgcolor, setHeading] = useState("white");
  const [heads, setHead] = useState("");
  const [headsans, setHeadans] = useState("");

  function handelClick() {
    setHeading("black");
  }
  function handelClick1() {
    setHeading("white");
  }
  function done(event) {
    setHead(event.target.value);
  }
  function okDone() {
    setHeadans(heads);
  }
  return (
    <div className="container">
      <h1>Hello {headsans}</h1>
      <input onChange={done} type="text" placeholder="What's your name?" />
      <button
        style={{ backgroundColor: bgcolor }}
        onMouseOver={handelClick}
        onMouseOut={handelClick1}
        onClick={okDone}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
