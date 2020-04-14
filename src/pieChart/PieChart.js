import React from "react";
import { makeCircles, circleProps } from "./pieHelpers";
// the data
const data = [201, 208, 155, 201, 208, 155];

function App() {
  return (
    <div>
      <svg
        transform="rotate(-270)"
        width="100%"
        height="100%"
        className="w100"
        viewBox="0 0 42 42"
      >
        <circle {...circleProps} />
        <circle {...circleProps} stroke="#d2d3d4" />
        {makeCircles(data)}
      </svg>
    </div>
  );
}

export default App;
