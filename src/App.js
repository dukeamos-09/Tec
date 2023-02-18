import React from "react";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import styled from "styled-components";

const StyledButton = styled.button`
  box-sizing: border-box;

  /* Auto layout */

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px, 24px, 10px, 24px;
  gap: 10px;

  
  width: 380px;
  height: 50px;
  left: 850px;
  top: 24px;

  background: #61dd88;
  border: 1px solid #81dd88;
  border-radius: 5px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;

  color: #ffffff;
`;

const StyledButton2 = styled.button`
  box-sizing: border-box;

  /* Auto layout */

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px, 24px, 10px, 24px;
  gap: 10px;

  
  width: 380px;
  height: 50px;
  left: 450px;
  top: 24px;

  background: #110eaf;
  border: 1px solid #1511d2;
  border-radius: 5px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;

  color: #ffffff;
`;

const StyledButton3 = styled.button`
  box-sizing: border-box;

  /* Auto layout */

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px, 24px, 10px, 24px;
  gap: 10px;

 
  width: 380px;
  height: 50px;
  left: 50px;
  top: 24px;

  background: #dd61ba;
  border: 1px solid #dd81ba;
  border-radius: 5px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;

  color: #ffffff;
`;

function App() {
  return (
    <div className="App">
      <ul>
        <li>
          <Link to="/">
            <StyledButton className="Btn" type="button">
              <p className="text-red text-base font-semibold">Home</p>
            </StyledButton>
          </Link>
        </li>
        <li>
          <Link to="/about">
            <StyledButton2 className="Btn" type="button">
              <p className="text-red text-base font-semibold">About</p>
            </StyledButton2>
          </Link>
        </li>
        <li>
          <Link to="/contact">
            <StyledButton3 className="Btn" type="button">
              <p className="text-red text-base font-semibold">Contact</p>
            </StyledButton3>
          </Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
