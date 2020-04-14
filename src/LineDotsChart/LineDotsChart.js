import React from "react";
import { makeFitColor } from "../colors";
// the data
const data = [33, 2, 66, 22, 3, 77, 33, 2, 66, 22, 3, 77];
const makePoint = (data) => {
  const unit = 100 / data.length;
  const path = data.reduce((acc, val, index) => {
    acc += ` ${(index + 1) * unit},${val}`;
    return acc;
  }, "");
  console.log(path);
  return `0,0 ${path} 100,0 `;
};

function App() {
  const path = makePoint(data);
  return (
    <div className="App">
      <div style={{ width: "100%" }}>
        <svg
          viewBox="0 0 100 100"
          transform="rotate(180) scale(-1,1)"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0" stop-color="black" />
              <stop offset="1" stop-color="white" />
            </linearGradient>
            <mask id="fill">
              <polyline points={path} fill="url(#gradient)" />
            </mask>
            <marker
              id="dot"
              viewBox="0 0 10 10"
              refX="5"
              refY="5"
              markerWidth="2"
              markerHeight="2"
            >
                   <circle cx="5" cy="5" r="5" fill={makeFitColor()} />
            </marker>
          </defs>
           
          <polyline
            mask="url(#fill)"
            points={path}
            fill={makeFitColor()}
          />{" "}
          <polyline
            points={path}
            fill="none"
            stroke={makeFitColor()}
            markerStart="url(#dot)"
            markerMid="url(#dot)"
            markerEnd="url(#dot)"
          />
        </svg>
      </div>
    </div>
  );
}

export default App;
