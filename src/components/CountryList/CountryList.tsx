import React, { Component } from "react";
import axios from "axios";

interface Country {
  cca3: String;
}

export default class CountryList extends Component {
  state = {
    countries: [],
  };
  componentDidMount() {
    axios
      .get<Country[]>("https://restcountries.com/v3.1/all")
      .then((res) => this.setState({ countries: res.data }));
  }
  render() {
    return (
      <div>
        {this.state.countries.map((country: Country) => (
          <p>{country.cca3}</p>
        ))}
      </div>
    );
  }
}
