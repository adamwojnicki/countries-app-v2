import React from "react";
import { Routes, Route } from "react-router";
import { Home } from "../../views/Home";
import { Countries } from "../../views/Countries";

const Main = () => {
  return (
    <main data-testid="main">
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/countries" element={<Countries />} />
        </Routes>
      </div>
    </main>
  );
};

export default Main;
