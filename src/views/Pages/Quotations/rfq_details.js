import React, {
    Component
} from 'react';
import {
    Col,
    Row,
    FormGroup,
    Label,
    Card, CardBody, CardHeader, Input
}
    from 'reactstrap';

class GeneralQuo extends Component {

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
                    <Input type="text" id="country" placeholder="RFQ - REF:" />
                    <Row>
                        <Col sm="4">
                            <Label htmlFor="street" > Client </Label>
                            <Input type="text" id="country" placeholder="Enter Description" />
                        </Col>
                        <Col sm="4">
                            <Label htmlFor="street" > Contact Person </Label>
                            <Input type="text" id="country" placeholder="Enter Description" />
                        </Col>
                        <Col sm="4">
                            <Label htmlFor="street" > Quote Type </Label>
                            <Input type="text" id="country" placeholder="Enter Description" />
                        </Col>
                    </Row>
                    <Row>
                        <Col sm="12">
                            <FormGroup >
                                <Label htmlFor="country" > Description </Label>
                                <Input type="text" id="country" placeholder="Enter Description" />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm="4">
                            <FormGroup>
                                <Label htmlFor="deadline" > Deadline </Label>
                                <Input type="text" id="deadline" placeholder="DD/MM/YYYY" />
                            </FormGroup>
                        </Col>
                        <Col sm="4">
                            <FormGroup>
                                <Label htmlFor="time" > Time </Label>
                                <Input type="text" id="time" placeholder="00h00" />
                            </FormGroup>
                        </Col>
                        <Col sm="4">
                            <Label htmlFor="street" > Submitted </Label>
                            <Input type="text" id="country" placeholder="Enter Description" />
                        </Col>
                    </Row>
                    <FormGroup >
                        <Label htmlFor="country" > Comments </Label>
                        <Input type="text" id="country" placeholder="Enter Comment" />
                    </FormGroup>
                </Col>
            </Row>
        );
    }
}

export default GeneralQuo;