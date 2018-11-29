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
    Form,
    FormGroup,
    Button,
    Input,
    Label,
    Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Card, CardBody, CardHeader, ListGroup, ListGroupItem, Badge,
}
    from 'reactstrap';
import classnames from 'classnames';
import ProductList from './products_list';
import ServiceList from './services_list';
import CreateOrder from '../Inputs/create_order';

class Orders extends Component {

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
                                    Products Ordered
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
                                    Services Rendered
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className={
                                    classnames({
                                        active: this.state.activeTab === '3'
                                    })
                                }
                                    onClick={
                                        () => {
                                            this.toggle('3');
                                        }
                                    } >
                                    Create Order
                                </NavLink>
                            </NavItem>
                        </Nav>
                        <TabContent activeTab={
                            this.state.activeTab
                        } >
                            <TabPane tabId="1" >
                                <Form action="" method="post" className="form-horizontal">
                                    <FormGroup row>
                                        <Col sm="12">
                                            <Input type="search" name="search" id="taskSearch" placeholder="Search products ordered" />
                                            {/* <Input type="text" placeholder="Search" /> */}
                                        </Col>
                                        {/* <Button type="submit" size="sm" color="primary" > < i className="fa fa-user" > </i>Search</Button> */}
                                    </FormGroup>
                                </Form>
                                <ProductList />
                            </TabPane>
                            <TabPane tabId="2" >
                                <Form action="" method="post" className="form-horizontal">
                                    <FormGroup row>
                                        <Col sm="12">
                                            <Input type="search" name="search" id="taskSearch" placeholder="Search services rendered" />
                                            {/* <Input type="text" placeholder="Search" /> */}
                                        </Col>
                                        {/* <Button type="submit" size="sm" color="primary" > < i className="fa fa-user" > </i>Search</Button> */}
                                    </FormGroup>
                                </Form>
                                <ServiceList />
                            </TabPane>
                            <TabPane tabId="3" >
                                <CreateOrder />
                            </TabPane>
                        </TabContent>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Orders;