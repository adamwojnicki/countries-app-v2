import React from "react";
import { Routes, Route } from "react-router";
import { Home } from "../../views/Home";
import { Countries } from "../../views/Countries";

const Main = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/countries" element={<Countries />} />
      </Routes>
    </main>
  );
};

export default Main;
