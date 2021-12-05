import React from "react";
import styles from "./CountryCard.module.css";

interface Country {
  country: {
    name: {
      common: String;
    };
    flags: {
      svg: string;
    };
  };
}

const CountryCard = (props: Country) => {
  const { country } = props;
  return (
    <div>
      <figure>
        <img className={styles.img} src={country.flags.svg} alt="" />
      </figure>
      <h3>{country.name.common}</h3>
    </div>
  );
};

export default CountryCard;
