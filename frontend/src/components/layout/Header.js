import React from 'react';
import {Link} from "react-router-dom";
import {connect} from 'react-redux';
import PropTypes from "prop-types";
import {logout} from "../../actions/auth"

class Header extends React.Component {
    static propTypes = {
        auth: PropTypes.object.isRequired,
        logout: PropTypes.func.isRequired,
    }


    render() {
        const {isAuthenticated, user} = this.props.auth;
        console.log(user);
        const authLinks = (
            <ul className="navbar-nav ms-auto mb-2 mb-sm-0">
                <li className="nav-item">
                    <button className="nav-link btn btn-info btn-sm text-dark" onClick={this.props.logout}>Logout
                    </button>
                </li>
            </ul>
        );
        const guestLinks = (
            <ul className="navbar-nav ms-auto mb-2 mb-sm-0">
                <li className="nav-item">
                    <Link to='/register' className="nav-link">Register</Link>
                </li>
                <li className="nav-item">
                    <Link to='/login' className="nav-link">Login</Link>
                </li>
            </ul>
        );
        return (
            <React.Fragment>
                <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                    <div className="container-fluid" role="navigation">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01"
                                aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"/>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                            <a className="navbar-brand" href="#">Lead Manager</a>
                            {isAuthenticated ? authLinks : guestLinks}
                        </div>
                    </div>
                </nav>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, {logout})(Header);