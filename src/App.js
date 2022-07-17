import React from "react";
import "./styles/global.css";
import Box from "./components/Box";

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
      water: 1.5,
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
  onStepChange = (e) => {
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
    let result = 1.5;

    if (this.state.temperature > 20) {
      result += (this.state.temperature - 20) * 0.02;
      this.setState({
        water: result.toFixed(2),
      });
    }
    if (this.state.heart > 120) {
      result += (this.state.heart - 120) * 0.0008;
      this.setState({
        water: result.toFixed(2),
      });
    }
    if (this.state.steps > 10000) {
      result += (this.state.steps - 10000) * 0.00002;
      this.setState({
        water: result.toFixed(2),
      });
    }
  };

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <Box
            name="water"
            icon="local_drink"
            color="#3A85FF"
            value={this.state.water}
            unit="L"
          />

          <Box
            name="steps"
            icon="directions_walk"
            color="black"
            value={this.state.steps}
            unit="steps"
            minimum={stepsMin}
            maximum={stepsMax}
            change={this.onStepChange}
          />

          <Box
            name="heart"
            icon="favorite"
            color="red"
            value={this.state.heart}
            unit="bpm"
            minimum={heartMin}
            maximum={heartMax}
            change={this.onHeartChange}
          />

          <Box
            name="temperature"
            icon="wb_sunny"
            color="yellow"
            value={this.state.temperature}
            unit="°C"
            minimum={tempMin}
            maximum={tempMax}
            change={this.onTempChange}
          />
        </div>
      </div>
    );
  }
}

export default App;
