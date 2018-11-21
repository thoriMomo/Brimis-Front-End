import React, {
    Component
} from 'react';
import {
    Col,
    Row,
    FormGroup,
    Button,
    Input,
    Label,
    Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Table,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
}
    from 'reactstrap';

class ServiceSale extends Component {

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
                            Service Order Details - REF: 00000000
                    </CardHeader>
                        <CardBody>

                            <Row>
                                <Col sm="3">
                                    <Label htmlFor="street" > Company </Label>
                                </Col>
                                <Col sm="3">
                                    <Label htmlFor="street" > Contact Person </Label>
                                </Col>
                            </Row>
                            <FormGroup>
                                <Label htmlFor="country" > Service Description </Label>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="country" > Price: R0.00 </Label>
                            </FormGroup>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        );
    }
}

export default ServiceSale;