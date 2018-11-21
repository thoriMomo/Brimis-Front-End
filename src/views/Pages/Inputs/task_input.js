import React, {
    Component
}
    from 'react';
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

class TaskInput extends Component {

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

    createSelectedItems() {

    }

    render() {

        return (
            <div>
                <Row>
                    <Col>
                        <FormGroup >
                            <Label htmlFor="task" > New Task </Label>
                            <Input type="text" id="task" placeholder="Enter task details" />
                        </FormGroup>
                        <Row>
                            <Col sm="3">
                                <Label htmlFor="due" > Due: </Label>
                                <Dropdown isOpen={this.state.dropdownOpen[0]} toggle={() => {
                                    this.toggleDrop(0);
                                }}>
                                    <DropdownToggle caret>
                                        --Select--
                                    </DropdownToggle>
                                    <DropdownMenu>
                                        <DropdownItem>As Soon As Possible</DropdownItem>
                                        <DropdownItem>Today</DropdownItem>
                                        <DropdownItem>Tomorrow</DropdownItem>
                                        <DropdownItem>This Week</DropdownItem>
                                        <DropdownItem>Next Week</DropdownItem>
                                        <DropdownItem>Sometime Later</DropdownItem>
                                    </DropdownMenu>
                                </Dropdown>
                            </Col>
                            <Col sm="3">
                                <Label htmlFor="category" > Category: </Label>
                                <Dropdown isOpen={this.state.dropdownOpen[1]} toggle={() => {
                                    this.toggleDrop(1);
                                }}>
                                    <DropdownToggle caret>
                                        --Select--
                                    </DropdownToggle>
                                    <DropdownMenu>
                                        <DropdownItem>Call</DropdownItem>
                                        <DropdownItem>Email</DropdownItem>
                                        <DropdownItem>Follow Up</DropdownItem>
                                    </DropdownMenu>
                                </Dropdown>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Button type="submit" size="sm" color="primary" > < i className="fa fa-user" > </i>Create</Button >
                                <Button type="reset" size="sm" color="danger"><i className="fa fa-ban"></i> Reset</Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default TaskInput;