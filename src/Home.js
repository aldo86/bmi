import React, { Component } from "react";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { bmi: "--.-", weight: "", height: "", classification: "BMI" };

    this.handleChange = this.handleChange.bind(this);
    this.calculateBMI = this.calculateBMI.bind(this);
  }

  calculateBMI() {
    if (this.state.weight > 0 && this.state.weight !== "" && this.state.height > 0 && this.state.height !== "") {
      const bmi = this.state.weight / Math.pow(this.state.height, 2);
      this.setState({ bmi });
      if (bmi < 18.5) {
        this.setState({ classification: "Bajo peso" });
      } else if (bmi > 18.5 && bmi < 25) {
        this.setState({ classification: "Normal" });
      } else if (bmi >= 25 && bmi < 30) {
        this.setState({ classification: "Sobrepeso" });
      } else if (bmi >= 30) {
        this.setState({ classification: "Obesidad" });
      }
    } else {
      this.setState({ bmi: "--.-", classification: "BMI" });
    }
  }

  handleChange (event) {
      this.setState({[event.target.name]: event.target.value}, () => this.calculateBMI());
  }

  render (){
    return (
      <div>
        <h1>Body Mass Index</h1>
          <label>
            Peso
            <input
              name="weight"
              type="text"
              placeholder="Peso (kg)"
              onChange={this.handleChange}
            />
          </label>
          <label>
            Altura
            <input
              name="height"
              type="text"
              placeholder="Altura (m)"
              onChange={this.handleChange}
            />
          </label>
          <span>{this.state.bmi}</span>
          <span>{this.state.classification}</span>
      </div>
    )
  }
}

export default Home;