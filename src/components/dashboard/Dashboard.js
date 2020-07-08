import React, { useState, useEffect } from 'react';
import StockManager from "../../modules/StockManager"

const Dashboard = props => {

    const [stock, setStock] = useState({})

    const getStock = () => {
        return StockManager.getStock('AAPL')
            .then(result => {
                setStock(result)
            });
    };

    useEffect(() => {
        getStock();
    }, []);



    return (
        <div>
            Dashboard
        </div>
    )
}

export default Dashboard