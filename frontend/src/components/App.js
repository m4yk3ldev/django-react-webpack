import React from "react";
import ReactDom from "react-dom";
import "../asserts/scss/style.scss"
import Header from "./layout/Header";

class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Header/>
            </React.Fragment>
        )
    }
}

ReactDom.render(<App/>, document.getElementById("app"));