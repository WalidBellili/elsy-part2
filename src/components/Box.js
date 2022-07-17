import React from "react";

class Box extends React.Component {
  render() {
    // if (this.props.icon === "local_drink") {

    // }
    const isWater = this.props.icon === "local_drink";
    return (
      <div className="box col-sm-3 col-6">
        <span
          className="material-icons"
          style={{
            fontSize: 100,
            color: this.props.color,
          }}
        >
          {this.props.icon}
        </span>
        <p>
          {this.props.value}
          {this.props.unit}
        </p>

        {isWater ? (
          "local_drink"
        ) : (
          <input
            type="range"
            onChange={this.props.onChange}
            min={this.props.min}
            max={this.props.max}
            value={this.props.value}
            name={this.props.icon}
          />
        )}
      </div>
    );
  }
}

export default Box;
