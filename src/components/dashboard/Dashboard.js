import React, { useState, useEffect } from 'react';
import StockManager from "../../modules/StockManager"
import StockCard from "./StockCard"

const Dashboard = props => {

    const [stockArray, setStockArray] = useState([])

    const getStocks = () => {
        let stocksAndPriceArray = []
        return StockManager.getAll("stocks")
            .then(result => {
                let stockListFromDB = result
                stockListFromDB.forEach(element => {
                    StockManager.getStock(`${element.symbol}`)
                        .then(result => {
                            stocksAndPriceArray.push({ symbol: result["Global Quote"]["01. symbol"], price: result["Global Quote"]["05. price"] })
                        })
                })
                // console.log(stocksAndPriceArray, 'test')
                // setStockNamesAndPrice(stocksAndPriceArray)
                return stocksAndPriceArray
            }
            )
            .then(result => {
                console.log(result, 'result')
                setStockArray(result)
                console.log(stockArray, 'state')
            }
            )
    };

    useEffect(() => {
        getStocks();
    }, []);

    return (
        <>
            <div>
                {stockArray.map(stock =>
                    <StockCard key={stock.id} stock={stock} />)}
            </div>
        </>
    )
}

export default Dashboard