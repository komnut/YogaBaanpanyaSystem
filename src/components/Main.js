import React, { Component } from "react";
import { Container, Row, Col, Button } from 'reactstrap';

class Main extends Component {

    // constructor(props) {
    //     super(props);
    // }

    render() {
        return (
            <Container fluid>
                <Row>
                    <Col sm="12" md={{ size: 6, offset: 3 }} className="mb-4">
                        <Button size="lg" outline color="primary" block>
                            เช็คชื่อ
                        </Button>
                    </Col>
                    <Col sm="12" md={{ size: 6, offset: 3 }} className="mb-4">
                        <Button size="lg" outline color="secondary" block>
                            ลงทะเบียน
                        </Button>
                    </Col>
                    <Col sm="12" md={{ size: 6, offset: 3 }} className="mb-4">
                        <Button size="lg" outline color="success" block>
                            ค้นหาผู้เรียน
                        </Button>
                    </Col>
                    <Col sm="12" md={{ size: 6, offset: 3 }} className="mb-4">
                        <Button size="lg" outline color="info" block>
                            ข้อมูล Course
                        </Button>
                    </Col>
                    <Col sm="12" md={{ size: 6, offset: 3 }} className="mb-4">
                        <Button size="lg" outline color="primary" block>
                            แก้ไขการลงทะเบียน
                        </Button>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Main;