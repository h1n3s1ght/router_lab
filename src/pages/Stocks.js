import React, {useStates, useEffect} from "react";
import {Link} from 'react-router-dom'

const Stocks = (props) => {
    let stockData = props.StockData.map((ele, index) => {
        return (
        <Link key={ele} to={`/dashboard/${ele.symbol}`}>
            <li className="stockName">{ele.name}</li>
        </Link>
    )});
    return (
        <div className="stockPage">
        <ul>{stockData}</ul>
        </div>
    )};

export default Stocks;