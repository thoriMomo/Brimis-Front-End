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
    Dropdown, DropdownItem, DropdownMenu, DropdownToggle,
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
                    <Row>
                        <Col sm="3">
                            <Label htmlFor="street" > Client </Label>
                            <Dropdown isOpen={this.state.dropdownOpen[0]} toggle={() => {
                                this.toggleDrop(0);
                            }}>
                                <DropdownToggle caret>
                                    --Select--
                                    </DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem>Company One</DropdownItem>
                                    <DropdownItem>Company Two</DropdownItem>
                                    <DropdownItem>Company Three</DropdownItem>
                                    <DropdownItem>Company Four</DropdownItem>
                                    <DropdownItem>Company Five</DropdownItem>
                                    <DropdownItem>Company Six</DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                        </Col>
                        <Col sm="3">
                            <Label htmlFor="street" > Contact Person </Label>
                            <Dropdown isOpen={this.state.dropdownOpen[1]} toggle={() => {
                                this.toggleDrop(1);
                            }}>
                                <DropdownToggle caret>
                                    --Select--
                                    </DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem>Person One</DropdownItem>
                                    <DropdownItem>Person Two</DropdownItem>
                                    <DropdownItem>Person Three</DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                        </Col>
                    </Row>
                    <FormGroup >
                        <Label htmlFor="country" > Description </Label>
                        <Input type="text" id="country" placeholder="Enter Description" />
                    </FormGroup>
                    <Row>
                        <Col sm="3">
                            <Label htmlFor="street" > Quotation Deadline </Label>
                            <Dropdown isOpen={this.state.dropdownOpen[2]} toggle={() => {
                                this.toggleDrop(2);
                            }}>
                                <DropdownToggle caret>
                                    --Select--
                                </DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem>Person One</DropdownItem>
                                        <DropdownItem>Person Two</DropdownItem>
                                        <DropdownItem>Person Three</DropdownItem>
                                    </DropdownMenu>
                                </Dropdown>
                            </Col>
                            <Col sm="3">
                                <FormGroup>
                                    <Label htmlFor="time" > Time </Label>
                                    <Input type="text" id="time" placeholder="00h00" />
                                </FormGroup>
                            </Col>
                            <Col sm="3">
                                <Label htmlFor="street" > Submitted </Label>
                                <Dropdown isOpen={this.state.dropdownOpen[4]} toggle={() => {
                                    this.toggleDrop(4);
                                }}>
                                    <DropdownToggle caret>
                                        --Select--
                                    </DropdownToggle>
                                    <DropdownMenu>
                                        <DropdownItem>Person One</DropdownItem>
                                        <DropdownItem>Person Two</DropdownItem>
                                        <DropdownItem>Person Three</DropdownItem>
                                    </DropdownMenu>
                                </Dropdown>
                            </Col>
                    </Row>
                    <FormGroup >
                        <Label htmlFor="country" > Comments </Label>
                        <Input type="text" id="country" placeholder="Enter Comment" />
                    </FormGroup>
                    <Button type="submit" size="sm" color="primary" > < i className="fa fa-user" > </i>Submit</Button >
                    <Button type="reset" size="sm" color="danger"><i className="fa fa-ban"></i> Reset</Button>
                </Col>
            </Row>
        );
    }
}

export default GeneralQuo;