import React from 'react';
import PropTypes from 'prop-types';
import {deleteLead, getLeads} from "../../actions/leads";
import {connect} from "react-redux";

class Leads extends React.Component {
    static propTypes = {
        leads: PropTypes.array.isRequired,
        getLeads: PropTypes.func.isRequired,
        deleteLead: PropTypes.func.isRequired,
    }

    componentDidMount() {
        this.props.getLeads();
    }

    render() {
        return (
            <React.Fragment>
                <h2>Leads</h2>
                <table className="table table-striped">
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Message</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.props.leads.map(lead => (
                        <tr key={lead.id}>
                            <td>{lead.id}</td>
                            <td>{lead.name}</td>
                            <td>{lead.email}</td>
                            <td>{lead.message}</td>
                            <td>
                                <button className="btn btn-danger btn-sm"
                                        onClick={this.props.deleteLead.bind(this, lead.id)}>DELETE
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => (
    {
        leads: state.leads.leads
    }
)

export default connect(mapStateToProps, {getLeads, deleteLead})(Leads);