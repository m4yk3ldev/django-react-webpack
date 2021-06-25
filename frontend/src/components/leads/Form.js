import React from 'react';
import {connect} from 'react-redux';
import PropTypes from "prop-types";
import {addLead} from "../../actions/leads";

class Form extends React.Component {
    state = {
        name: '',
        email: '',
        message: '',
    }
    static propTypes = {
        addLead: PropTypes.func.isRequired
    };
    onChange = (e) => this.setState({[e.target.name]: e.target.value});

    onSubmit = (e) => {
        e.preventDefault();
        const {name, email, message} = this.state;
        const lead = {name, email, message};
        this.props.addLead(lead);
    }

    render() {
        const {email, name, message} = this.state;
        return (
            <React.Fragment>
                <div className="card card-body mt-4 mb-4">
                    <h1>Add Lead Form</h1>
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label>Name</label>
                            <input type="text" className="form-control" name="name" onChange={this.onChange}
                                   value={name}/>
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" className="form-control" name="email" onChange={this.onChange}
                                   value={email}/>
                        </div>
                        <div className="form-group">
                            <label>Message</label>
                            <input type="text" className="form-control" name="message" onChange={this.onChange}
                                   value={message}/>
                        </div>
                        <div className="form-group pt-2">
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                </div>
            </React.Fragment>
        );
    }
}

export default connect(null, {addLead})(Form);