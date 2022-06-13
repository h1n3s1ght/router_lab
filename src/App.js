import './App.css';
import React from "react";

import Nav from "./components/Nav";
import Main from "./pages/Main";
import StockData from './components/StockData';

function App(props) {
  return (
    <div className="App">
      <Nav />
      <Main StockData={StockData} />
    </div>
  );
}

export default App;
