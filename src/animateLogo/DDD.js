import React from "react";
const ids = ["run2", "left3", "right"];
const RunDev = ({ animate }) => {
  const path1 = `M495.799,46.929v58.488v300.236v58.489h-58.485H287.192v-58.489h150.121V209.52l-62.876,22.754l-85.95-31.08
  l148.826-53.839v-41.937H287.192V46.929h150.121H495.799z`;
  const path2 = `M170.049,244.026L256,275.107l85.953-31.081L256,212.945L74.688,147.357v-41.94h150.118V46.929H74.688H16.2
  v58.488v300.236v58.489h58.488h150.118v-58.489H74.688V209.531L170.049,244.026z`;
  const commonProps = {
    fillRule: "evenodd",
    clipRule: "evenodd",
    fill: "none",
    //   fill:"#17214B"
    stroke: "#17214B",
    strokeWidth: "6px",
    strokeDasharray: "0 999 1",
    strokeDashoffset: "1",
  };
  const per = {
    fill: "none",
    stroke: "grey",
    strokeWidth: "15px",
  };
  const path1Props = {
    d: path1,
  };
  const path2Props = {
    d: path2,
  };
  return (
    <>
      <svg
        version="1.1"
        id="L6"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 100 100"
        enableBackground="new 0 0 100 100"
        xmlSpace="preserve"
      >
        <rect
          fill="none"
          stroke="#fff"
          stroke-width="4"
          x="25"
          y="25"
          width="50"
          height="50"
        >
          <animateTransform
            attributeName="transform"
            dur="0.5s"
            from="0 50 50"
            to="180 50 50"
            type="rotate"
            id="strokeBox"
            attributeType="XML"
            begin="rectBox.end"
          ></animateTransform>
        </rect>
        <rect x="27" y="27" fill="blue" width="100%" height="100%">
          <animate
            attributeName="height"
            dur="1.3s"
            attributeType="XML"
            from="100%"
            to="0"
            id="rectBox"
            fill="freeze"
            begin="0s;strokeBox.end"
          ></animate>
        </rect>
      </svg>
      <svg
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="100%"
        height="100%"
        viewBox="0 0 512 512"
        enableBackground="new 0 0 512 512"
      >
        {/* {animate && (
        <>
          {ids.map((id) => {
            return (
              <animate
                xlinkHref={`#${id}`}
                attributeName="stroke-dashoffset"
                from="-650"
                to="122"
                dur="9s"
                repeatCount="indefinite"
              />
            );
          })}{" "}
        </>
      )} */}
        <path {...path1Props} {...per} />
        <path {...path2Props} {...per} />
        <path {...path1Props} {...commonProps}>
          <animate
            attributeName="stroke-dashoffset"
            from="-650"
            to="900"
            dur="6s"
            repeatCount="indefinite"
          />
        </path>{" "}
        <path {...path1Props} {...commonProps} stroke="lightgrey">
          <animate
            attributeName="stroke-dashoffset"
            from="-650"
            to="1000"
            dur="1s"
            repeatCount="indefinite"
          />
        </path>
        <path {...path1Props} {...commonProps} stroke="grey">
          <animate
            attributeName="stroke-dashoffset"
            from="-650"
            to="900"
            dur="4s"
            repeatCount="indefinite"
          />
        </path>
        {/* <path
        id="left3"
        fillRule="evenodd"
        clipRule="evenodd"
        fill="none"
        strokeWidth="6px"
        stroke="#17214B"
        strokeDasharray="0 999 1"
        strokeDashoffset="1"
        d={path2}
      >
        <animate
          attributeName="opacity"
          from="1"
          to="0.3"
          dur="6s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="stroke-dashoffset"
          from="-650"
          to="7777"
          dur="6s"
          repeatCount="indefinite"
        />
      </path> */}
        <path {...path2Props} {...commonProps}>
          {" "}
          <animate
            attributeName="stroke-dashoffset"
            from="-650"
            to="900"
            dur="6s"
            repeatCount="indefinite"
          />
        </path>{" "}
        <path {...path2Props} {...commonProps}>
          <animate
            attributeName="stroke-dashoffset"
            from="-650"
            to="900"
            dur="6s"
            repeatCount="indefinite"
          />
        </path>{" "}
        <path {...path2Props} {...commonProps} stroke="lightgrey">
          <animate
            attributeName="stroke-dashoffset"
            from="-650"
            to="1000"
            dur="1s"
            repeatCount="indefinite"
          />
        </path>
        <path {...path2Props} {...commonProps} stroke="grey">
          <animate
            attributeName="stroke-dashoffset"
            from="-650"
            to="900"
            dur="4s"
            repeatCount="indefinite"
          />
        </path>
        {/* <path
        id="left3"
        fillRule="evenodd"
        clipRule="evenodd"
        fill="none"
        strokeWidth="6px"
        stroke="#17214B"
        strokeDasharray="0 999 1"
        strokeDashoffset="1"
        d={path2}
      >
        <animate
          attributeName="opacity"
          from="1"
          to="0.3"
          dur="6s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="stroke-dashoffset"
          from="-650"
          to="7777"
          dur="6s"
          repeatCount="indefinite"
        />
      </path> */}
        <path {...path2Props} {...commonProps}>
          {" "}
          <animate
            attributeName="stroke-dashoffset"
            from="-650"
            to="900"
            dur="6s"
            repeatCount="indefinite"
          />
        </path>
        {/* <path
        id="left53"
        fillRule="evenodd"
        clipRule="evenodd"
        fill="none"
        strokeWidth="2px"
        stroke="#17214B"
        strokeDasharray="0 999 1"
        strokeDashoffset="1"
        d="M170.049,244.026L256,275.107l85.953-31.081L256,212.945L74.688,147.357v-41.94h150.118V46.929H74.688H16.2
        v58.488v300.236v58.489h58.488h150.118v-58.489H74.688V209.531L170.049,244.026z"
      >
        {" "}
        <animate
          attributeName="stroke-dashoffset"
          from="-650"
          to="773"
          dur="6s"
          repeatCount="indefinite"
        />{" "}
        <animate
          attributeName="opacity"
          from="1"
          to="0.3"
          dur="6s"
          repeatCount="indefinite"
        />
      </path>
      <path
        id="left533"
        fillRule="evenodd"
        clipRule="evenodd"
        fill="none"
        strokeWidth="10px"
        opacity="0.4"
        stroke="#17214B"
        strokeDasharray="0 999 1"
        strokeDashoffset="1"
        d="M170.049,244.026L256,275.107l85.953-31.081L256,212.945L74.688,147.357v-41.94h150.118V46.929H74.688H16.2
        v58.488v300.236v58.489h58.488h150.118v-58.489H74.688V209.531L170.049,244.026z"
      >
        {" "}
        <animate
          attributeName="stroke-dashoffset"
          from="-650"
          to="993"
          dur="2s"
          repeatCount="indefinite"
        />
      </path> */}
      </svg>
    </>
  );
};

export default RunDev;
