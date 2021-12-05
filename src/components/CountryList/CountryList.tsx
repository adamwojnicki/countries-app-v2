import React, { Component } from "react";
import axios from "axios";
import { CountryCard } from "../CountryCard";
import styles from "./CountryList.module.css";

interface Country {
  cca3: KeyType;
  name: {
    common: String;
  };
  flags: { svg: string };
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
    console.log(this.state);
    return (
      <div className={styles.grid}>
        {this.state.countries.map((country: Country) => (
          <CountryCard key={country.cca3} country={country} />
        ))}
      </div>
    );
  }
}
