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
}
from 'reactstrap';
import classnames from 'classnames';
import ContactList from './contact_list'
import CreateCon from '../Inputs/create_contact'

class Contacts extends Component {

    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            activeTab: '1',
        };
    }

    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab,
            });
        }
    }

  render() {

    return ( 
        <div>
            <Row>
                <Col>
                    <Nav tabs>
                        <NavItem>
                            <NavLink className = {
                                classnames({
                                    active: this.state.activeTab === '1'
                                })
                            }
                            onClick = {
                                () => {
                                    this.toggle('1');
                                }
                            } >
                                Search 
                            </NavLink> 
                        </NavItem>
                        <NavItem>
                            <NavLink className = {
                                classnames({
                                    active: this.state.activeTab === '2'
                                })
                            }
                            onClick = {
                                () => {
                                    this.toggle('2');
                                }
                            } >
                                Create Contact
                            </NavLink>
                        </NavItem> 
                    </Nav>
                    <TabContent activeTab = {
                        this.state.activeTab
                    } >
                        <TabPane tabId = "1" >
                            <Form action = "" method = "post" className = "form-horizontal">
                                <FormGroup row>
                                    <Col sm = "5">
                                        <Input type = "text" placeholder = "Search" />
                                    </Col>
                                    <Button type = "submit" size = "sm" color = "primary" > < i className = "fa fa-user" > </i>Search</Button>
                                </FormGroup>
                            </Form>
                            <ContactList />
                        </TabPane>
                        <TabPane tabId="2" >
                            <Col sm = "12">
                                <CreateCon />
                            </Col>
                        </TabPane>
                    </TabContent>
                </Col>
            </Row>
        </div>
    );
  }
}

export default Contacts;