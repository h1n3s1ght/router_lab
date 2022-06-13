import About from "./About";
import Home from "./Home"
import Dashboard from "./Dashboard"
import Stocks from "./Stocks"
import StockData from "../components/StockData";
import {Route, Switch} from "react-router-dom";
import React from "react";

const Main = (props) => {
    return (
        <>
        <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About} />
        <Route path="/dashboard/:symbol" render={props =><Dashboard StockData={StockData} {...props} />} />
        <Route path="/stocks"  render={props =><Stocks StockData={StockData} {...props} />} />
        </Switch>
        </>
    );
};

export default Main;