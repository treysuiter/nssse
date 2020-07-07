import { Route, Redirect } from "react-router-dom";
import React from "react";
import Login from "./auth/Login"
import Registration from "./auth/Registration"
import Home from "./home/Home"
import Dashboard from "./dashboard/Dashboard"
import BuyForm from "./buy/BuyForm"
import SellForm from "./sell/SellForm"


const ApplicationViews = () => {
    return (
        <React.Fragment>

            <Route exact path='/' render={props => {
                return <Home />
            }} />

            <Route path="/login" component={Login} />

            <Route path="/registration" component={Registration} />

            <Route exact path="/dashboard" render={props => {
                return <Dashboard />
            }}
            />

            <Route exact path="/buy" render={props => {
                return <BuyForm />
            }}
            />

            <Route exact path="/sell" render={props => {
                return <SellForm />
            }}
            />

        </React.Fragment>
    )
}

export default ApplicationViews