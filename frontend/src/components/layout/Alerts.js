import React from 'react';
import {withAlert} from "react-alert";
import {connect} from "react-redux";
import PropTypes from "prop-types";

class Alerts extends React.Component {
    static propTypes = {
        error: PropTypes.object.isRequired,
        messages: PropTypes.object.isRequired

    }

    componentDidUpdate(prepProps) {
        const {error, alert, messages} = this.props
        if (error !== prepProps.error) {
            if (error.msg.name) {
                alert.error("Name: " + error.msg.name.join());
            }
            if (error.msg.email) {
                alert.error("Email: " + error.msg.email.join());
            }
            if (error.msg.message) {
                alert.error("Mensaje: " + error.msg.message.join());
            }
            if (error.msg.non_field_errors) {
                alert.error(error.msg.non_field_errors.join());
            }
        }

        if (messages !== prepProps.messages) {
            if (messages.deleteLead) {
                alert.success(messages.deleteLead);
            }
            if (messages.addLead) {
                alert.success(messages.addLead);
            }
        }

    }

    render() {
        return <React.Fragment/>;
    }
}

const mapStateToProps = state => ({
    error: state.errors,
    messages: state.messages
});

export default connect(mapStateToProps)(withAlert()(Alerts));