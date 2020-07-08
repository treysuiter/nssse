import React from "react";
import { Link } from "react-router-dom";

const StockCard = props => {
    return (
        <div>
            <h3>Name: {props.stock.symbol}</h3>
            <p>Breed: {props.stock.price}</p>
        </div>

    );
}

export default StockCard;