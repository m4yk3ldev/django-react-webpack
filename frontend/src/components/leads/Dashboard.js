import React from 'react';
import Form from "./Form";
import Leads from "./Leads";


class Dashboard extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Form/>
                <Leads/>
            </React.Fragment>
        );
    }
}

export default Dashboard;