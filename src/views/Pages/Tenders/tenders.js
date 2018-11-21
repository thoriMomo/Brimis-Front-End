import React, {
    Component
}
    from 'react';
import {
    Col,
    Nav,
    NavItem,
    NavLink,
    Row,
    TabContent,
    TabPane,
    FormGroup,
    Button,
    Input,
    Label,
    Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Card, CardBody, CardHeader, ListGroup, ListGroupItem, Badge,
    Form,
}
    from 'reactstrap';
import classnames from 'classnames';

class Tenders extends Component {

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
            <div>
                <Row>
                    <Col>
                        <Nav tabs>
                            <NavItem>
                                <NavLink className={
                                    classnames({
                                        active: this.state.activeTab === '1'
                                    })
                                }
                                    onClick={
                                        () => {
                                            this.toggle('1');
                                        }
                                    } >
                                    Quotes
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className={
                                    classnames({
                                        active: this.state.activeTab === '2'
                                    })
                                }
                                    onClick={
                                        () => {
                                            this.toggle('2');
                                        }
                                    } >
                                    Create Quote
                                </NavLink>
                            </NavItem>
                        </Nav>
                        <TabContent activeTab={
                            this.state.activeTab
                        } >
                            <TabPane tabId="1" >
                                <Form action="" method="post" className="form-horizontal">
                                    <FormGroup row>
                                        <Col sm="5">
                                            <Input type="text" placeholder="Search" />
                                        </Col>
                                        <Button type="submit" size="sm" color="primary" > < i className="fa fa-user" > </i>Search</Button>
                                    </FormGroup>
                                </Form>
                            </TabPane>
                            <TabPane tabId="2" >
                                
                            </TabPane>
                        </TabContent>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Tenders;