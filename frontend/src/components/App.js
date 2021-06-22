import React from "react";
import ReactDom from "react-dom";
import "../asserts/scss/style.scss"
import Header from "./layout/Header";
import Dashboard from "./leads/Dashboard";

class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Header/>
                <div className="container">
                    <Dashboard/>
                </div>
            </React.Fragment>
        )
    }
}

ReactDom.render(<App/>, document.getElementById("app"));