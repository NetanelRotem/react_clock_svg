import React from "react";
// the data
const data = [201, 208, 155, 201, 208, 155];
// sum the data to know the %
const sum = data.reduce((a, b) => a + b);
// make to %
const dataAsPercents = data.map((p) => (p / sum) * 100);
//func to make random color
const makeColor = () =>
  "#" + (Math.random().toString(16) + "000000").substring(2, 8);
// props, so we will not reapt ourselfs
const circleProps = {
  strokeWidth: 3,
  cx: 21,
  cy: 21,
  r: 15.91549430918954,
  fill: "transparent",
};
function App() {
  return (
    <div className="App">
      <svg
        transform="rotate(-270)"
        width="100%"
        height="100%"
        viewBox="0 0 42 42"
      >
        <circle {...circleProps} />
        <circle {...circleProps} stroke="#d2d3d4" />
        {
          dataAsPercents.reduce(
            (prev, current) => {
              const { offSet, arr } = prev;
              const _color = makeColor();
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
                  />{" "}
                  <animate
                    attributeName="stroke"
                    from="transparent"
                    to={_color}
                    dur="1.0s"
                  />
                </circle>
              );
              return {
                arr: [...arr, circle],
                offSet: offSet + current,
              };
            },
            { arr: [], offSet: 0 }
          ).arr
        }
      </svg>
    </div>
  );
}

export default App;
