import React, { Component } from "react";
import { Col, Alert } from 'reactstrap';

class AlertMessage extends Component {

    render() {
        const { messageText, messageType } = this.props;
        let color = "";
        if (messageType === "ERR")
            color = "danger"
        else if (messageType === "INF")
            color = "success"
        else
            color = "secondary"
        return (
            <Col sm="12" md="12">
                <Alert color={color}>
                    {messageText}
                </Alert>
            </Col>
        )
    }
}

export default AlertMessage;