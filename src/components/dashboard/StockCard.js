import React from "react";
import { Link } from "react-router-dom";

const StockCard = props => {
    return (
        <>
        <h2>Card</h2>
        <div>
            <h3>{props.stock.symbol}</h3>
            <p>{props.stock.price}</p>
        </div>
        </>

    );
}

export default StockCard;