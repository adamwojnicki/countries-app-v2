import React, { Component } from "react";
import axios from "axios";
import styles from "./CountryList.module.css";

interface Country {
  cca3: String;
  name: {
    common: String;
  };
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
      <div className={styles.grid}>
        {this.state.countries.map((country: Country) => (
          <p>{country.name.common}</p>
        ))}
      </div>
    );
  }
}
