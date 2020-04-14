import React from "react";

export default (props) => (
  <div style={props.style || null} className={`card ${props.className || ""}`}>
    {props.children}
  </div>
);
