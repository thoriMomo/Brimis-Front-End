import React, {
    Component
} from 'react';
import {
    Col,
    Row,
    FormGroup,
    Label,
    Card, CardBody, CardHeader, Input,
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
                    <Row>
                        <Col>
                            <Input type="text" id="country" placeholder="QFT - REF:" />
                            <Label htmlFor="street" > Client </Label>
                            <Input type="text" id="description" placeholder="Enter client" />
                        </Col>
                    </Row>
                    <FormGroup >
                        <Label htmlFor="description" > Description </Label>
                        <Input type="text" id="description" placeholder="Enter Description" />
                    </FormGroup>
                    <Row>
                        <Col sm="3">
                            <FormGroup>
                                <Label htmlFor="resp_person" >Responsible Person </Label>
                                <Input type="text" id="resp_person" placeholder="Who is responsible?" />
                            </FormGroup>
                        </Col>
                        <Col sm="3">
                            <FormGroup>
                                <Label htmlFor="deadline" > Deadline </Label>
                                <Input type="text" id="deadline" placeholder="DD/MM/YYYY" />
                            </FormGroup>
                        </Col>
                        <Col sm="3">
                            <FormGroup>
                                <Label htmlFor="time" > Time </Label>
                                <Input type="text" id="time" placeholder="00h00" />
                            </FormGroup>
                        </Col>
                        <Col sm="3">
                            <FormGroup>
                                <Label htmlFor="enq_date" > Enquiry Date </Label>
                                <Input type="text" id="enq_date" placeholder="DD/MM/YYYY" />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm="3">
                            <FormGroup>
                                <Label htmlFor="clarification" >Clarification Date </Label>
                                <Input type="text" id="clarification" placeholder="DD/MM/YYYY" />
                            </FormGroup>
                        </Col>
                        <Col sm="3">
                            <FormGroup>
                                <Label htmlFor="trn" > Tender Ref. Number </Label>
                                <Input type="text" id="trn" placeholder="00h00" />
                            </FormGroup>
                        </Col>
                        <Col sm="3">
                            <FormGroup>
                                <Label htmlFor="trn_val" > Estimated Tender Value </Label>
                                <Input type="text" id="trn_val" placeholder="R0.00" />
                            </FormGroup>
                        </Col>
                        <Col sm="3">
                            <FormGroup>
                                <Label htmlFor="status" > Status </Label>
                                <Input type="text" id="status" placeholder="00h00" />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm="3">
                            <Label htmlFor="submitted" >Submitted </Label>
                            <Input type="text" id="description" placeholder="Enter client" />
                        </Col>
                        <Col sm="3">
                            <FormGroup>
                                <Label htmlFor="prob" > Probability </Label>
                                <Input type="text" id="prob" placeholder="0%" />
                            </FormGroup>
                        </Col>
                        <Col sm="3">
                            <FormGroup>
                                <Label htmlFor="tech_func" > Technical Functionality </Label>
                                <Input type="text" id="tech_func" placeholder="Functional Description" />
                            </FormGroup>
                        </Col>
                        <Col sm="3">
                            <FormGroup>
                                <Label htmlFor="ex_or_pl" > Expected Order Placement </Label>
                                <Input type="text" id="ex_or_pl" placeholder="With Whom?" />
                            </FormGroup>
                        </Col>
                    </Row>
                    <FormGroup >
                        <Label htmlFor="comment" > Comments </Label>
                        <Input type="text" id="comment" placeholder="Enter Comment" />
                    </FormGroup>
                </Col>
            </Row>
        );
    }
}

export default TenderQuo;