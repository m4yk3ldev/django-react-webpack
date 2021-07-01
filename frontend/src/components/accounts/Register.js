import React from 'react';
import {Link, Redirect} from "react-router-dom";
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {register} from "../../actions/auth"
import {createMessage} from "../../actions/messages"


class Register extends React.Component {
    state = {
        username: '',
        email: '',
        password: '',
        password2: '',
    }
    static propTypes = {
        register: PropTypes.func.isRequired,
        createMessage: PropTypes.func.isRequired,
        isAuthenticated: PropTypes.bool,
    }
    onSubmit = (e) => {
        e.preventDefault();
        const {password, password2} = this.state;
        if (password !== password2) {
            this.props.createMessage({passwordNotMatch: "Passwords do not match"});
        } else {
            this.props.register(this.state);
        }
    }
    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

    render() {
        const {username, email, password, password2} = this.state;
        if (this.props.isAuthenticated) {
            return <Redirect to="/"/>
        }
        return (
            <React.Fragment>
                <div className="col-md-6 m-auto">
                    <div className="card card-body mt-5">
                        <h2 className="text-center">Register </h2>
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <label>Username</label>
                                <input type="text" required={true} name="username" className="form-control"
                                       onChange={this.onChange}
                                       value={username}/>
                            </div>
                            <div className="form-group">
                                <label>Email</label>
                                <input type="email" name="email" required={true} className="form-control"
                                       onChange={this.onChange}
                                       value={email}/>
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" required={true} name="password" className="form-control"
                                       onChange={this.onChange}
                                       value={password}/>
                                <br/>
                                <input type="password" required={true} name="password2" className="form-control"
                                       onChange={this.onChange} value={password2}/>
                            </div>
                            <div className="form-group pt-2">
                                <button type="submit" className="btn btn-primary">Register</button>
                            </div>
                            <p>Already have an account? <Link to="/login">Login</Link></p>
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
export default connect(mapStateToProps, {register, createMessage})(Register);