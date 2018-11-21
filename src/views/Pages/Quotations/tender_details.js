import React, {
    Component
} from 'react';
import {
    Col,
    Row,
    FormGroup,
    Label,
    Card, CardBody, CardHeader,
}
    from 'reactstrap';

class TenderQuo extends Component {

    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            activeTab: '1',
            dropdownOpen: new Array(6).fill(false),
        };
    }

    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab,
            });
        }
    }

    toggleDrop(tab) {
        const newArray = this.state.dropdownOpen.map((element, index) => {
            return (index === tab ? !element : false);
        });
        this.setState({
            dropdownOpen: newArray,
        });
    }
    render() {

        return (
            <Row>
                <Col>
                    <Card>
                        <CardHeader>
                            QFT - REF: 00000000 Details
                        </CardHeader>
                        <CardBody>
                    <Row>
                        <Col sm="3">
                            <Label htmlFor="street" > Days To Submission </Label>
                        </Col>
                        <Col sm="3">
                            <Label htmlFor="street" > Client </Label>
                        </Col>
                    </Row>
                    <FormGroup >
                        <Label htmlFor="country" > Description </Label>
                    </FormGroup>
                    <Row>
                        <Col sm="3">
                            <Label htmlFor="street" >Responsible Person </Label>
                        </Col>
                        <Col sm="3">
                            <FormGroup>
                                <Label htmlFor="time" > Closing Date </Label>
                            </FormGroup>
                        </Col>
                        <Col sm="3">
                            <Label htmlFor="street" > Time </Label>
                        </Col>
                        <Col sm="3">
                            <Label htmlFor="street" > Enquiry Date </Label>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm="3">
                            <Label htmlFor="street" >Clarification Date </Label>
                        </Col>
                        <Col sm="3">
                            <FormGroup>
                                <Label htmlFor="time" > Tender Ref. Number </Label>
                            </FormGroup>
                        </Col>
                        <Col sm="3">
                            <Label htmlFor="street" > Estimated Tender Value </Label>
                        </Col>
                        <Col sm="3">
                            <Label htmlFor="street" > Status </Label>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm="3">
                            <Label htmlFor="street" >Submitted </Label>
                        </Col>
                        <Col sm="3">
                            <FormGroup>
                                <Label htmlFor="time" > Probability </Label>
                            </FormGroup>
                        </Col>
                        <Col sm="3">
                            <Label htmlFor="street" > Technical Functionality </Label>
                        </Col>
                        <Col sm="3">
                            <Label htmlFor="street" > Expected Order Placement </Label>
                        </Col>
                    </Row>
                    <FormGroup >
                        <Label htmlFor="country" > Comments </Label>
                    </FormGroup>
                    </CardBody>
                    </Card>
                </Col>
            </Row>
        );
    }
}

export default TenderQuo;