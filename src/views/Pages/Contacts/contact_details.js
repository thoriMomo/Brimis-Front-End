import React, {
    Component
} from 'react';
import {
    Col, Row, Card, CardBody, CardHeader, Badge, Button, Collapse,
    Form,
    FormGroup,
    Input,
    Label, ListGroup, ListGroupItem,
} from 'reactstrap';
import Details from "./contact_dets_exclusive";

class ContactDetails extends Component {

    constructor(props) {
        super(props);
        this.toggleCustom = this.toggleCustom.bind(this);

        this.state = {
            custom: [false, false],
            list: [],
        };
    }

    toggleCustom(tab) {

        const prevState = this.state.custom;
        const state = prevState.map((x, index) => tab === index ? !x : false);

        this.setState({
            custom: state,
        });
    }

    render() {
        return (
            <Row>
                <Col sm="8">
                    <Details />
                </Col>
                <Col sm="4">
                    <Card>
                        <CardHeader>
                            <strong>Client Links</strong>
                        </CardHeader>
                        <CardBody>
                            <ListGroup>
                                <ListGroupItem className="justify-content-between">Current Accounts<Badge className="float-right" pill color="warning">1</Badge></ListGroupItem>
                                <ListGroupItem className="justify-content-between">Products/Services Bought <Badge className="float-right" pill color="warning">0</Badge></ListGroupItem>
                                <ListGroupItem className="justify-content-between">Total Links <Badge className="float-right" pill >1</Badge></ListGroupItem>
                            </ListGroup>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        );
    }
}

export default ContactDetails;