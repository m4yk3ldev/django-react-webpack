import React from "react";
import ReactDom from "react-dom";
import "../asserts/scss/style.scss"
import Header from "./layout/Header";
import Dashboard from "./leads/Dashboard";
import Alerts from "./layout/Alerts";
import AlertTemplate from "react-alert-template-basic";
import {transitions, positions, Provider as AlertProvider} from 'react-alert'
import {Provider} from "react-redux";
import store from "../store";

//Alert Options
const alertOptions = {
    position: positions.TOP_CENTER,
    timeout: 3000,
    transition: transitions.FADE
}

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <AlertProvider template={AlertTemplate}{...alertOptions}>
                    <React.Fragment>
                        <Header/>
                        <Alerts/>
                        <div className="container">
                            <Dashboard/>
                        </div>
                    </React.Fragment>
                </AlertProvider>
            </Provider>
        )
    }
}

ReactDom.render(<App/>, document.getElementById("app"));