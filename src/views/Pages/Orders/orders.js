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
                                    Products
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
                                    Services
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
                                <ProductList />
                            </TabPane>
                            <TabPane tabId="2" >
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