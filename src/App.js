import React, { useState } from "react";
import "./App.css";
import RunDev from "./RunDev";
function App() {
  const [animate, setAnimate] = useState(false);
  return (
    <div className="App">
      <h2>svg animation</h2>
      <button onClick={() => setAnimate(!animate)}>Animate</button>
      <RunDev animate={animate} />
    </div>
  );
}

export default App;
