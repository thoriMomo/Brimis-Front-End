import React, {
    Component
} from 'react';
import {
    Col,
    Nav,
    NavItem,
    NavLink,
    Row,
    TabContent,
    TabPane,
    Form,
    FormGroup,
    Button,
    Input,
    Label,
}
    from 'reactstrap';
import axios from 'axios';
    
class CreateCon extends Component {

    constructor(props) {
        super(props);

        this.postInfo = this.postInfo.bind(this);
        this.state = {
            id_value: "",
        }
    }

    postInfo() {
        console.log("clicked");
        axios.post('https://brimis-crm-backend.herokuapp.com/crm/contacts/create/', {
            firstName: 'Test',
            lastName: 'Test',
            mobileContact: '1234567890',
            email: 'test@test.com',
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
        axios.post('https://brimis-crm-backend.herokuapp.com/crm/clientcontacts/create/', {
            client: 'Test',
            contact: 'Test',
            workContact: '1234567890',
            designation: 'work position'
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    render() {
        return (
            <Row>
                <Col>
                    <FormGroup row className="my-0" >
                        <Col xs="6">
                            < FormGroup >
                                <Label htmlFor="company" > Name </Label>
                                <Input type="text" id="company" placeholder="Enter name" />
                            </FormGroup>
                        </Col>
                        <Col xs="6">
                            <FormGroup >
                                <Label htmlFor="vat" > Surname </Label>
                                <Input type="text" id="vat" placeholder="Enter surname" />
                            </FormGroup>
                        </Col>
                    </FormGroup>
                    <FormGroup row className="my-0" >
                        <Col xs="6" >
                            <FormGroup >
                                <Label htmlFor="city" > Email Address </Label>
                                <Input type="text" id="city" placeholder="Enter email address" />
                            </FormGroup>
                        </Col>
                        <Col xs="6" >
                            <FormGroup >
                                <Label htmlFor="postal-code" > Phone Number </Label>
                                <Input type="text" id="postal-code" placeholder="Enter phone number" />
                            </FormGroup>
                        </Col>
                    </FormGroup>
                    <FormGroup row className="my-0" >
                        <Col xs="6" >
                            <FormGroup>
                                <Label htmlFor="street" > Company </Label>
                                <Input type="text" id="street" placeholder="Enter company" />
                            </FormGroup>
                        </Col>
                        <Col xs="6" >
                            <FormGroup>
                                <Label htmlFor="street" > Work Number </Label>
                                <Input type="text" id="street" placeholder="Enter Work Number" />
                            </FormGroup>
                        </Col>
                    </FormGroup>
                    <FormGroup >
                        <Label htmlFor="country" > Work Position </Label>
                        <Input type="text" id="country" placeholder="Enter work position" />
                    </FormGroup>
                    <Button type="submit" size="sm" color="primary" onClick={() => this.postInfo()}> < i className="fa fa-user" > </i>Submit</Button >
                    <Button type="reset" size="sm" color="danger"><i className="fa fa-ban"></i> Reset</Button>
                </Col>
            </Row>
        );
    }
}

export default CreateCon;