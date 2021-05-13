import React from "react";
import Card from "./Card";
import emojipedia from "./../emojipedia.js";
function pass(x) {
  return <Card name={x.name} emoji={x.emoji} meaning={x.meaning} />;
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{emojipedia.map(pass)}</dl>
    </div>
  );
}

export default App;
