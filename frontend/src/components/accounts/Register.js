import React from 'react';
import {Link} from "react-router-dom";

class Register extends React.Component {
    state = {
        username: '',
        email: '',
        password: '',
        password2: '',
    }
    onSubmit = (e) => {
        e.preventDefault();
        console.log("Submit")
    }
    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

    render() {
        const {username, email, password, password2} = this.state;
        return (
            <React.Fragment>
                <div className="col-md-6 m-auto">
                    <div className="card card-body mt-5">
                        <h2 className="text-center">Register </h2>
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <label>Username</label>
                                <input type="text" name="username" className="form-control" onChange={this.onChange}
                                       value={username}/>
                            </div>
                            <div className="form-group">
                                <label>Email</label>
                                <input type="text" name="email" className="form-control" onChange={this.onChange}
                                       value={email}/>
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" name="password" className="form-control" onChange={this.onChange}
                                       value={password}/>
                                <br/>
                                <input type="password2" name="password2" className="form-control"
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

export default Register;