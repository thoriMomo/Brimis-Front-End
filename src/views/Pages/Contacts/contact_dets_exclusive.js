import React from 'react';
import {
    Col,
    CardBody, 
    FormGroup,
    Label,
} from 'reactstrap';

import { connect } from "react-redux";

const mapStateToProps = state => {
    return { contactDetails: state.contactDetails };
}

const AddValue = ({ contactDetails }) => (
    <CardBody>
            {contactDetails.map(el => (
                <div key={el.contactID}>                
                    <FormGroup row className="my-0" >
                        <Col xs="6">
                            < FormGroup >
                                <Label htmlFor="company" > {el.firstName} </Label>
                            </FormGroup>
                        </Col>
                        <Col xs="6">
                            <FormGroup >
                            <Label htmlFor="vat" > {el.lastName} </Label>
                            </FormGroup>
                        </Col>
                    </FormGroup>
                    <FormGroup row className="my-0" >
                        <Col xs="6" >
                            <FormGroup >
                                <Label htmlFor="city" > {el.mobileContact} </Label>
                            </FormGroup>
                        </Col>
                        <Col xs="6" >
                            <FormGroup >
                            <Label htmlFor="postal-code" > {el.email} </Label>
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
                </div>
            ))}
        </CardBody>
);

const Details = connect(mapStateToProps)(AddValue);

export default Details;