import React, { useState, useEffect } from 'react';
import StockManager from "../../modules/StockManager"

const Dashboard = props => {

    const [stock, setStock] = useState({ name: "", price: "" })
    const [stockArray, setStockNames] = useState([])

    const getStocks = () => {
        let stocksAndPriceArray = []
        let allStocksArray = []
        StockManager.getAll("stocks")
            .then(result => {
                allStocksArray = result
                allStocksArray.forEach(element => {
                    StockManager.getStock(`${element.symbol}`)
                    .then(result => {
                        console.log(result, 'result')
                        stocksAndPriceArray.push({symbol: result["Global Quote"]["01. symbol"], price: result["Global Quote"]["05. price"]})
                        console.log(stocksAndPriceArray, 'array')
                    })
                })

            }
            )
        // return StockManager.getStock("IBM")
        //     .then(result => {
        //         setStock({
        //             name: result["Global Quote"]["01. symbol"],
        //             price: result["Global Quote"]["05. price"]
        //         })
        //     });
    };

    useEffect(() => {
        getStocks();
    }, []);



    return (
        <div>
            Dashboard
            <h3>{stock.name} {stock.price}</h3>
        </div>
    )
}

export default Dashboard