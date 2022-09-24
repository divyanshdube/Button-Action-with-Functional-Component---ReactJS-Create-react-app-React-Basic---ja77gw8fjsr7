import React, {Component, useState} from "react";
import "./../styles/App.css";

function App() {
  
  const [setShown, isSetShown] = useState(false);

  function onClickHandler() {
    isSetShown(true);
  }
  
  return (
    <div id="main">
      // Do not alter the main div
   <button id="click" onClick={onClickHandler}>
        Click Me!
      </button>
      {setShown && (
        <p id="para">
          Hello, I've learnt to use the full-stack evaluation tool. This makes
          me so happy
        </p>
      )}
    </div>
  );
}


export default App;
