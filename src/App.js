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
      steps: e.target.value,
      temperature: e.target.value,
    });
    this.calculateWater();
  };

  calculateWater = () => {
    const minWater = 1.5;
    const plusWater = 0.02;
    const bpmPlus = 0.0008;
    const stepsPlus = 0.00002;
    if (this.state.temperature > 20) {
      this.setState({
        water: this.state.water + (minWater + plusWater),
      });
      if (this.state.heart > 120) {
        this.setState({
          water: this.state.water + (bpmPlus + plusWater),
        });
        if (this.state.steps > 10000) {
          this.setState({
            water: this.state.water + (stepsPlus + plusWater),
          });
        }
      }
    }
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
            onChange={this.onHeartChange}
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
            onChange={this.onHeartChange}
          />
        </div>
      </div>
    );
  }
}

export default App;
