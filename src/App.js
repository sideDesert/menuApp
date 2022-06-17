import "./App.scss";
import React from "react";
import Menu from "./components/Menu";
import { Routes, Route } from "react-router-dom";
import { findRenderedComponentWithType } from "react-dom/test-utils";

function App() {
  return (
    <div className="App">
      <Menu />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/oppurtunities" element={<Oppurtunities />} />
      </Routes>
    </div>
  );
}

function Home() {
  return (
    <div>
      <div className="container">
        <div className="wrapper">
          <div className="home">
            <h5>
              The<span style={{ fontWeight: 700 }}> मेन्यू </span> group does
              not exist. But that don't mean this website does not either. Hi,
              you need a menu? We got one right here.
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
}

function Oppurtunities() {
  return <div>Oppurtunities page</div>;
}
function Solutions() {
  return <div>Solutions page</div>;
}
function ContactUs() {
  return <div>Contact Us page</div>;
}

export default App;
