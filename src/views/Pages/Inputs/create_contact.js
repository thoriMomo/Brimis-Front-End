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
    
class CreateCon extends Component {

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
                    <FormGroup >
                        <Label htmlFor="street" > Company </Label>
                        <Input type="text" id="street" placeholder="Enter company" />
                    </FormGroup>
                    <FormGroup >
                        <Label htmlFor="country" > Work Position </Label>
                        <Input type="text" id="country" placeholder="Enter work position" />
                    </FormGroup>
                    <Button type="submit" size="sm" color="primary" > < i className="fa fa-user" > </i>Submit</Button >
                    <Button type="reset" size="sm" color="danger"><i className="fa fa-ban"></i> Reset</Button>
                </Col>
            </Row>
        );
    }
}

export default CreateCon;