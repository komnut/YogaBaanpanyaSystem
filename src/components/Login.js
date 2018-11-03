import React, { Component } from "react";
import {
    Container, Row, Col, Button, Form, FormGroup, Label,
    Input, Jumbotron
} from 'reactstrap';
import AlertMessage from "./AlertMessage";

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = { username: "", password: "", messageText: "", messageType: "" }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        if (event.target.id === "txtUsername")
            this.setState({ username: event.target.value });
        if (event.target.id === "txtPassword")
            this.setState({ password: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        const { username, password } = this.state;
        if (username.trim().length === 0 || password.trim().length === 0) {
            this.setState({ password: "", messageText: "กรุณากรอกรหัสผู้ใช้งานหรือรหัสผ่าน", messageType: "ERR" })
        }
        else if (username.trim().toLowerCase() !== "admin" && password.trim().toLowerCase() !== "admin") {
            this.setState({ password: "", messageText: "รหัสผู้ใช้งานหรือรหัสผ่านไม่ถูกต้อง", messageType: "ERR" })
        }
        else {
            this.setState({ messageText: "", messageType: "" })
            this.props.onLoginSuccess();
        }
    }

    render() {
        const showError = this.state.messageText.length;
        let errorTag = "";
        if (showError > 0) errorTag = <AlertMessage messageText={this.state.messageText} messageType={this.state.messageType} />
        return (
            <Container fluid>
                <Row>
                    {errorTag}
                </Row>
                <Row>
                    <Col sm="12" md={{ size: 6, offset: 3 }}>
                        <Jumbotron>
                            <Form onSubmit={this.handleSubmit}>
                                <FormGroup>
                                    <Label for="exampleEmail" className="text-success"><h3>เข้าสู่ระบบ</h3></Label>
                                </FormGroup>
                                <FormGroup >
                                    <Label for="exampleEmail">รหัสผู้ใช้งาน</Label>
                                    <Input type="text" id="txtUsername" value={this.state.username} onChange={this.handleChange} autoComplete="off" />
                                </FormGroup>
                                <FormGroup >
                                    <Label for="examplePassword">รหัสผ่าน</Label>
                                    <Input type="password" id="txtPassword" value={this.state.password} onChange={this.handleChange} />
                                </FormGroup>
                                <FormGroup>
                                    <Button>เข้าสู่ระบบ</Button>
                                </FormGroup>
                            </Form>
                        </Jumbotron>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Login;