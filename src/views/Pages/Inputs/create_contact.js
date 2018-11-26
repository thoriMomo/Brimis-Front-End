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
        this.handleInputs = this.handleInputs.bind(this);

        this.state = {
            id_value: "",
            firstName: '',
            lastName: '',
            mobileContact: '',
            email: '',
            client: '',
            contact: '',
            workContact: '',
            designation: ''
        }
    }

    handleInputs(key) {
        return function (e) {
            var state = {};
            state[key] = e.target.value;
            this.setState(state);
        }.bind(this);
    }

    postInfo() {
        axios.post('https://brimis-crm-backend.herokuapp.com/crm/contacts/create/', {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            mobileContact: this.state.mobileContact,
            email: this.state.email,
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
        axios.post('https://brimis-crm-backend.herokuapp.com/crm/clientcontacts/create/', {
            client: this.state.client,
            contact: this.state.contact,
            workContact: this.state.workContact,
            designation: this.state.designation
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
                                <Label htmlFor="firstName" > Name </Label>
                                <Input type="text" name="firstName" placeholder="Enter name" onChange={this.handleInputs("firstName")}/>
                            </FormGroup>
                        </Col>
                        <Col xs="6">
                            <FormGroup >
                                <Label htmlFor="lastName" > Surname </Label>
                                <Input type="text" name="lastName" placeholder="Enter surname" onChange={this.handleInputs("lastName")}/>
                            </FormGroup>
                        </Col>
                    </FormGroup>
                    <FormGroup row className="my-0" >
                        <Col xs="6" >
                            <FormGroup >
                                <Label htmlFor="email" > Email Address </Label>
                                <Input type="text" name="email" placeholder="Enter email address" onChange={this.handleInputs("email")}/>
                            </FormGroup>
                        </Col>
                        <Col xs="6" >
                            <FormGroup >
                                <Label htmlFor="mobileContact" > Phone Number </Label>
                                <Input type="text" name="mobileContact" placeholder="Enter phone number" onChange={this.handleInputs("mobileContact")}/>
                            </FormGroup>
                        </Col>
                    </FormGroup>
                    <FormGroup row className="my-0" >
                        <Col xs="6" >
                            <FormGroup>
                                <Label htmlFor="client" > Company </Label>
                                <Input type="text" name="client" placeholder="Enter company" onChange={this.handleInputs("client")}/>
                            </FormGroup>
                        </Col>
                        <Col xs="6" >
                            <FormGroup>
                                <Label htmlFor="workContact" > Work Number </Label>
                                <Input type="text" name="workContact" placeholder="Enter Work Number" onChange={this.handleInputs("workContact")}/>
                            </FormGroup>
                        </Col>
                    </FormGroup>
                    <FormGroup >
                        <Label htmlFor="designation" > Work Position </Label>
                        <Input type="text" name="designation" placeholder="Enter work position" onChange={this.handleInputs("designation")}/>
                    </FormGroup>
                    <Button type="submit" size="sm" color="primary" onClick={() => this.postInfo()}> < i className="fa fa-user" > </i>Submit</Button >
                    <Button type="reset" size="sm" color="danger"><i className="fa fa-ban"></i> Reset</Button>
                </Col>
            </Row>
        );
    }
}

export default CreateCon;