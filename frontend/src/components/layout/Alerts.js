import React from 'react';
import {withAlert} from "react-alert";
import {connect} from "react-redux";
import PropTypes from "prop-types";

class Alerts extends React.Component {
    static propTypes = {
        error: PropTypes.object.isRequired,

    }

    componentDidUpdate(prepProps) {
        const {error, alert} = this.props
        if (error !== prepProps.error) {
            if (error.msg.name) {
                alert.error("Name is required");
            }
            if (error.msg.email) {
                alert.error("Email is required");
            }
            if (error.msg.message) {
                alert.error("Mensaje is required");
            }
        }
    }

    render() {
        return (
            <React.Fragment>
                <br/>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => ({
    error: state.errors
});

export default connect(mapStateToProps)(withAlert()(Alerts));