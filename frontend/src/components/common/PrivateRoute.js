import React, {Component} from 'react';
import {Redirect, Route} from 'react-router-dom';
import {connect} from "react-redux";

const PrivateRoute = (component, auth, ...rest) => (

    <Route {...rest} render={props => {

        if (auth.isLoading) {
            return <h2>Loading...</h2>;
        } else if (!localStorage.getItem('token')) {
            return <Redirect to="/login"/>;
        } else {
            return React.createElement(component, props);
        }
    }}
    />
);

const mapStateToProps = state => (
    {
        auth: state.auth
    }
)

export default connect(mapStateToProps)(PrivateRoute);