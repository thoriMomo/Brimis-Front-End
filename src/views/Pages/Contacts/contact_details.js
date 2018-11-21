import React, {
    Component
} from 'react';
import {
    Col, Row, Card, CardBody, CardHeader, Badge, Button, Collapse,
    Form,
    FormGroup,
    Input,
    Label, ListGroup, ListGroupItem, } from 'reactstrap';

class ContactDetails extends Component {

    constructor(props) {
        super(props);
        this.toggleCustom = this.toggleCustom.bind(this);
        this.addValue = this.addValue.bind(this);
        this.state = {
            custom: [false, false],
            id_text: "",
        };
    }

    toggleCustom(tab) {

        const prevState = this.state.custom;
        const state = prevState.map((x, index) => tab === index ? !x : false);

        this.setState({
            custom: state,
        });
    }

    addValue(add_id_value) {
        this.setState({
            id_text: add_id_value,
        })
    }

    render() {
        return (
            <Row>
                <Label htmlFor="company" > {this.state.id_text} </Label>
                <Col sm="8">
                    <Card>
                        <CardBody>
                            <FormGroup row className="my-0" >
                                <Col xs="6">
                                    < FormGroup >
                                        
                                        <Label htmlFor="company" > Name </Label>
                                    </FormGroup>
                                </Col>
                                <Col xs="6">
                                    <FormGroup >
                                        <Label htmlFor="vat" > Surname </Label>
                                    </FormGroup>
                                </Col>
                            </FormGroup>
                            <FormGroup row className="my-0" >
                                <Col xs="6" >
                                    <FormGroup >
                                        <Label htmlFor="city" > Email Address </Label>
                                    </FormGroup>
                                </Col>
                                <Col xs="6" >
                                    <FormGroup >
                                        <Label htmlFor="postal-code" > Phone Number </Label>
                                    </FormGroup>
                                </Col>
                            </FormGroup>
                            <FormGroup >
                                <Label htmlFor="street" > Company </Label>
                            </FormGroup>
                            <FormGroup >
                                <Label htmlFor="country" > Work Position </Label>
                            </FormGroup>
                            <FormGroup >
                                <Label htmlFor="country" > Comments </Label>
                            </FormGroup>
                        </CardBody>
                    </Card>
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