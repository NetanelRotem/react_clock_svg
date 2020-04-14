import React from "react";
import { makeSlices } from "./pieHelpers";
// the data
const data = [33, 888, 155, 201, 208, 155];

function App() {
  return (
    <div>
      <svg className="w100" viewBox="-1 -1 2 2" transform="rotate(-90)">
        {makeSlices(data)}
      </svg>
    </div>
  );
}

export default App;
