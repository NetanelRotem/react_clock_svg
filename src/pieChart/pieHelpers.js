import React from "react";
import { makeFitColor } from "../colors";

// props, so we will not reapt ourselfs
export const circleProps = {
  strokeWidth: 3,
  cx: 21,
  cy: 21,
  r: 15.91549430918954,
  fill: "transparent",
};

// make the circles
export const makeCircles = (data) => {
  const circels = [];
  // sum the data to know the %
  const sum = data.reduce((a, b) => a + b);

  console.log(
    "must be 1",
    data.map((p) => (p / sum) * 100).reduce((acc, current) => acc + current, 0)
  );

  data.reduce((offSet, current) => {
    current = (current / sum) * 100; // make to %
    console.log(`${current}%`);
    const _color = makeFitColor();
    const circle = (
      <circle
        key={_color}
        stroke={_color}
        {...circleProps}
        strokeDasharray={`${current} ${100 - current}`}
        strokeDashoffset={offSet + current}
      >
        <title>{`${current}%`}</title>
        <animate
          attributeName="stroke-dasharray"
          from="0 100"
          to={`${current} ${100 - current}`}
          dur="1.4s"
        />
        <animate
          attributeName="stroke"
          from="transparent"
          to={_color}
          dur="1.0s"
        />
      </circle>
    );
    circels.push(circle);
    return offSet + current;
  }, 0);

  return circels;
};

const getCoordinatesForPercent = (percent) => {
  const x = Math.cos(2 * Math.PI * percent);
  const y = Math.sin(2 * Math.PI * percent);
  return [x, y];
};
//make slices
export const makeSlices = (data) => {
  const arr = [];
  // sum the data to know the %
  const sum = data.reduce((a, b) => a + b);
  console.log(
    "must be 1 pie",
    data.map((p) => p / sum).reduce((acc, current) => acc + current, 0)
  );
  data.reduce((cumulativePercent, slice) => {
    slice = slice / sum; // make to %
    console.log(slice);
    // destructuring assignment sets the two variables at once
    const [startX, startY] = getCoordinatesForPercent(cumulativePercent);

    // each slice starts where the last slice ended, so keep a cumulative percent
    cumulativePercent += slice;

    const [endX, endY] = getCoordinatesForPercent(cumulativePercent);

    // if the slice is more than 50%, take the large arc (the long way around)
    const largeArcFlag = slice > 0.5 ? 1 : 0;

    // create an array and join it just for code readability
    const pathData = [
      `M ${startX} ${startY}`, // Move
      `A 1 1 0 ${largeArcFlag} 1 ${endX} ${endY}`, // Arc
      `L 0 0`, // Line
    ].join(" ");
    const color = makeFitColor();
    arr.push(
      <path d={pathData} fill={color} key={color}>
        <animate
          attributeName="fill"
          from="transparent"
          to={color}
          dur="1.0s"
        />{" "}
        <animate
          attributeName="d"
          from={`M ${endX} ${endX + endY} A 1 1 0 ${largeArcFlag} 1  ${
            startX + startY
          } ${startX} L 0 0`}
          to={pathData}
          dur="1.0s"
        />
      </path>
    );
    return cumulativePercent;
  }, 0);
  return arr;
};
