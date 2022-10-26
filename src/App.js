import "./App.css";
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes as Switch,
} from "react-router-dom";
import Header from "./Header/Header";
import styled from "styled-components";
import Home from "./Pages/Home";
import CarDetails from "./Pages/CarDetailes";

function App() {
  return (
    <div>
      <Router>
        <Header />

        <Routes>
          <Switch>
            <Route path="/" element={<Home />} />
            <Route path="/product-detailes/:id" element={<CarDetails />} />
          </Switch>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

const Routes = styled.div`
  background-color: #0000ff24;
  min-height: 90vh;
  @media (max-width: 1517px) {
    min-height: 89vh;
  }

  @media (max-width: 1821px) {
    min-height: 92vh;
  }
  @media (max-width: 1707px) {
    min-height: 91vh;
  }
  padding: 10px 30px;
  margin-top: 60px;
`;
