import React from "react";
import data from "./data";
import { makeFitColor } from "../colors";
const SvgLine = ({ value, label, color }) => {
  const dasharray = `${value} ${100 - value}`;
  return (
    <div style={{ height: 100, width: "100%" }}>
      <div style={{ width: 50 }}>{label}</div>
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <line
          x1="0"
          y1="2"
          x2="100"
          strokeWidth="1"
          y2="2"
          stroke={makeFitColor()}
          strokeDasharray={dasharray}
        >
          {" "}
          <animate
            attributeName="stroke-dasharray"
            from="0 100"
            to={dasharray}
            dur="1s"
          />
        </line>
      </svg>
    </div>
  );
};

function App() {
  return (
    <div>
      {data.map((item) => (
        <SvgLine {...item} />
      ))}
    </div>
  );
}

export default App;
