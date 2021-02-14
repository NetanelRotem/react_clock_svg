import React from "react";
import "./App.css";
import PieChart2 from "./pieChart/PieChart2";
import Card from "./Card";
import PieChart from "./pieChart/PieChart";
import LineDotsChart from "./LineDotsChart/LineDotsChart";
import Line from "./lineChart/Line";
import Image from "./SvgImage/SvgImage";
import Clock from "./clock/Clock";
import RunDev from "./animateLogo/RunDev";
import DDD from "./animateLogo/DDD";
import A from "./animateLogo/Amine";
import MousePath from "./mousePath/MousePath";
function App() {
  return (
    <div>
      {/* <MousePath /> */}
      <Card>
        <div style={{ width: 300, height: 300 }}>
          {" "}
          <A />
        </div>{" "}
      </Card>
      <Card>
        <Image />
      </Card>
      <div className="App">
        <Card className="w33">
          <LineDotsChart />
        </Card>
        <Card className="w33">
          <PieChart2 />
        </Card>
        <Card className="w33">
          <PieChart />
        </Card>
      </div>
      <div>
        <Card>
          <Line />
        </Card>
      </div>
      <div className="App">
        <Card className="w33">
          <RunDev />
        </Card>
        <Card className="w33">
          <Clock />
        </Card>
        <Card className="w33">
          <RunDev animate={true} />
        </Card>
      </div>
    </div>
  );
}

export default App;
