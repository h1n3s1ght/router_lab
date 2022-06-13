import React from "react";

const Dashboard = (props) => {
    const stock = props.StockData.filter(ele => ele.symbol === props.match.params.symbol)[0]
    console.log(stock)
    return (
        <div className="dashboardPage">
             <h2>Dashboard of: {stock.name}</h2>
             {/* <Table  /> */}
             <h3>Current price: {stock.lastPrice}</h3>
        </div>
    );
};

export default Dashboard;