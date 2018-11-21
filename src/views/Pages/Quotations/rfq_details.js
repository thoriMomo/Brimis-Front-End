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
                <Col><Card>
                    <CardHeader>
                        RFQ - REF: 00000000 Details
                        </CardHeader>
                    <CardBody>
                    <Row>
                        <Col sm="3">
                            <Label htmlFor="street" > Client </Label>
                        </Col>
                        <Col sm="3">
                            <Label htmlFor="street" > Contact Person </Label>
                        </Col>
                    </Row>
                    <FormGroup >
                        <Label htmlFor="country" > Description </Label>
                    </FormGroup>
                    <Row>
                        <Col sm="3">
                            <Label htmlFor="street" > Quotation Deadline </Label>
                        </Col>
                        <Col sm="3">
                            <FormGroup>
                                <Label htmlFor="time" > Time </Label>
                            </FormGroup>
                        </Col>
                        <Col sm="3">
                            <Label htmlFor="street" > Submitted </Label>
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

export default GeneralQuo;