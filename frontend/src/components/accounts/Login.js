import React from 'react';
import {Link, Redirect} from "react-router-dom";
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {login} from "../../actions/auth"


class Login extends React.Component {
    state = {
        username: '',
        password: '',
    }
    static propTypes = {
        isAuthenticated: PropTypes.bool,
        login: PropTypes.func.isRequired,
    }
    onSubmit = (e) => {
        e.preventDefault();
        this.props.login(this.state.username, this.state.password);
    }
    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

    render() {
        if (this.props.isAuthenticated) {
            return <Redirect to="/"/>
        }
        const {username, password} = this.state;
        return (
            <React.Fragment>
                <div className="col-md-6 m-auto">
                    <div className="card card-body mt-5">
                        <h2 className="text-center">Login </h2>
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <label>Username</label>
                                <input type="text" name="username" className="form-control" onChange={this.onChange}
                                       value={username}/>
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" name="password" className="form-control" onChange={this.onChange}
                                       value={password}/>
                            </div>
                            <div className="form-group pt-2">
                                <button type="submit" className="btn btn-primary">Login</button>
                            </div>
                            <p>Dont have an account? <Link to="/register">Register</Link></p>
                        </form>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
})

export default connect(mapStateToProps, {login})(Login);