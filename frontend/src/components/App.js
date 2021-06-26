import React from "react";
import ReactDom from "react-dom";
import "../asserts/scss/style.scss"
import Header from "./layout/Header";
import Dashboard from "./leads/Dashboard";
import Alerts from "./layout/Alerts";
import AlertTemplate from "react-alert-template-basic";
import {positions, Provider as AlertProvider, transitions} from 'react-alert'
import {Provider} from "react-redux";
import store from "../store";
import {HashRouter as Router, Route, Switch} from "react-router-dom";
import Register from "./accounts/Register";
import Login from "./accounts/Login";
import PrivateRoute from "./common/PrivateRoute";
import {loadUser} from "../actions/auth";

//Alert Options
const alertOptions = {
    position: positions.TOP_CENTER,
    timeout: 3000,
    transition: transitions.FADE
}

class App extends React.Component {
    componentWillMount() {
        store.dispatch(
            loadUser());
    }

    render() {
        return (
            <Provider store={store}>
                <AlertProvider template={AlertTemplate}{...alertOptions}>
                    <Router>
                        <React.Fragment>
                            <Header/>
                            <Alerts/>
                            <div className="container">
                                <Switch>
                                    <Route exact path='/register' component={Register}/>
                                    <Route exact path='/login' component={Login}/>
                                    <PrivateRoute exact path='/' component={Dashboard}/>
                                </Switch>
                            </div>
                        </React.Fragment>
                    </Router>
                </AlertProvider>
            </Provider>
        )
    }
}

ReactDom.render(<App/>, document.getElementById("app"));