import React from "react";
import Box from "./components/Box";
import "./styles/global.css";

const tempMin = -20;
const tempMax = 40;
const heartMin = 80;
const heartMax = 180;
const stepsMin = 0;
const stepsMax = 50000;

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      water: 0,
      heart: 120,
      temperature: -10,
      steps: 3000,
    };
  }
  onHeartChange = (e) => {
    this.setState({
      heart: e.target.value,
    });
    this.calculateWater();
  };
  onStepsChange = (e) => {
    this.setState({
      steps: e.target.value,
    });
    this.calculateWater();
  };
  onTempChange = (e) => {
    this.setState({
      temperature: e.target.value,
    });
    this.calculateWater();
  };

  calculateWater = () => {
    const minWater = 1.5;
    const plusWater = 0.02;
    const bpmPlus = 0.0008;
    const stepsPlus = 0.00002;
    let temPlus;
    let heartPlus;
    let stepPlus;

    if (this.state.temperature > 20) {
      temPlus = (this.state.temperature - 20) * plusWater;
    } else {
      temPlus = 0;
    }
    if (this.state.heart > 120) {
      heartPlus = (this.state.heart - 120) * bpmPlus;
    } else {
      heartPlus = 0;
    }
    if (this.state.steps > 10000) {
      stepPlus = (this.state.steps - 10000) * stepsPlus;
    } else {
      stepPlus = 0;
    }
    this.setState({
      water: minWater + temPlus + heartPlus + stepPlus,
    });
  };
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <Box icon="local_drink" color="#3A85FF" value={1.5} unit="L" />

          <Box
            icon="directions_walk"
            color="black"
            value={this.state.steps}
            unit="steps"
            min={stepsMin}
            max={stepsMax}
            onChange={this.onStepsChange}
          />

          <Box
            icon="favorite"
            color="red"
            value={this.state.heart}
            unit="bpm"
            min={heartMin}
            max={heartMax}
            onChange={this.onHeartChange}
          />

          <Box
            icon="wb_sunny"
            color="yellow"
            value={this.state.temperature}
            unit="°C"
            min={stepsMin}
            max={stepsMax}
            onChange={this.onTempChange}
          />
        </div>
      </div>
    );
  }
}

export default App;
