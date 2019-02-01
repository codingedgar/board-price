import React, { Component } from "react";
import "./App.css";

function calculatePrice(width, height, chalkprice) {
  return (width / 100) * (height / 100) * chalkprice;
}
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 100,
      height: 100,
      chalkprice: 50000,
      paintprice: 50000,
      totalinchalk: calculatePrice(100, 100, 50000),
      totalinpaint: calculatePrice(100, 100, 50000)
    };

    this.handleWidthChange = this.handleWidthChange.bind(this);
    this.handleHeightChange = this.handleHeightChange.bind(this);
    this.handleChalkpriceChange = this.handleChalkpriceChange.bind(this);
    this.handlePaintpriceChange = this.handlePaintpriceChange.bind(this);
  }

  handleChalkpriceChange(e) {
    e.persist();
    this.setState(({ width, height }) => ({
      chalkprice: e.target.value,
      totalinchalk: calculatePrice(width, height, e.target.value)
    }));
  }

  handlePaintpriceChange(e) {
    e.persist();
    this.setState(({ width, height }) => ({
      paintprice: e.target.value,
      totalinpaint: calculatePrice(width, height, e.target.value)
    }));
  }

  handleWidthChange(e) {
    e.persist();
    this.setState(({ height, chalkprice, paintprice }) => ({
      width: e.target.value,
      totalinchalk: calculatePrice(e.target.value, height, chalkprice),
      totalinpaint: calculatePrice(e.target.value, height, paintprice)
    }));
  }

  handleHeightChange(e) {
    e.persist();
    this.setState(({ width, chalkprice, paintprice }) => ({
      height: e.target.value,
      totalinchalk: calculatePrice(width, e.target.value, chalkprice),
      totalinpaint: calculatePrice(width, e.target.value, paintprice)
    }));
  }

  render() {
    return (
      <div className="App">
        <p>ECLECTICACL</p>
        <br />
        <label>
          Ancho en cm:
          <input
            type="number"
            value={this.state.width}
            onChange={this.handleWidthChange}
          />
        </label>
        <br />
        <label>
          Alto en cm:
          <input
            type="number"
            value={this.state.height}
            onChange={this.handleHeightChange}
          />
        </label>
        <br />
        <label>
          Precio en tiza:
          <input
            type="number"
            value={this.state.chalkprice}
            onChange={this.handleChalkpriceChange}
          />
        </label>
        <br />
        <label>
          Precio en pintura:
          <input
            type="number"
            value={this.state.paintprice}
            onChange={this.handlePaintpriceChange}
          />
        </label>
        <br />
        <label>
          Total en tiza:{" "}
          {Number.prototype.toLocaleString.call(this.state.totalinchalk)}
        </label>
        <br />
        <label>
          Total en tiza:{" "}
          {Number.prototype.toLocaleString.call(this.state.totalinpaint)}
        </label>
      </div>
    );
  }
}

export default App;
