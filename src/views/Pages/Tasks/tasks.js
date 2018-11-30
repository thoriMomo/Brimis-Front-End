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
import TaskInput from '../Inputs/task_input'
import TaskList from './task_list';

class Tasks extends Component {

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
              <Col sm="9">
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
                                Current Tasks 
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
                                Overdue Tasks
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
                                Create Task
                            </NavLink>
                        </NavItem> 
                    </Nav>
                    <TabContent activeTab = {
                        this.state.activeTab
                    } >
                        <TabPane tabId="1" >
                            <Form >
                                <FormGroup row>
                                    <Col sm="12">
                                        {/* <Label for="taskSearch">Search</Label> */}
                                        <Input type="search" name="search" id="taskSearch" placeholder="Search current tasks" />
                                    </Col>
                                    {/* <Button type="submit" size="sm" color="primary" > < i className="fa fa-user" > </i>Search</Button> */}
                                </FormGroup>
                            </Form>
                            <TaskList />
                        </TabPane>
                        <TabPane tabId="2" >
                            <Form >
                                <FormGroup row>
                                    <Col sm="12">
                                        <Input type="search" name="search" id="taskSearch" placeholder="Search overdue tasks" />
                                        {/* <Input type="text" placeholder="Search" /> */}
                                    </Col>
                                    {/* <Button type="submit" size="sm" color="primary" > < i className="fa fa-user" > </i>Search</Button> */}
                                </FormGroup>
                            </Form>
                            <TaskList />
                        </TabPane>
                        <TabPane tabId="3" >
                            <TaskInput />
                        </TabPane>
                    </TabContent>
                </Col>
                <Col sm="3" xl="3">
                  <Card>
                    <CardHeader>
                      <strong>Task Statuses</strong>
                    </CardHeader>
                    <CardBody>
                      <ListGroup>
                        <ListGroupItem className="justify-content-between">Overdue<Badge className="float-right" pill color="warning">1</Badge></ListGroupItem>
                        <ListGroupItem className="justify-content-between">As Soon As Possible <Badge className="float-right" pill color="warning">0</Badge></ListGroupItem>
                        <ListGroupItem className="justify-content-between">Today <Badge className="float-right" pill color="warning">0</Badge></ListGroupItem>
                        <ListGroupItem className="justify-content-between">Tomorrow<Badge className="float-right" pill color="warning">0</Badge></ListGroupItem>
                        <ListGroupItem className="justify-content-between">This Week <Badge className="float-right" pill color="warning">0</Badge></ListGroupItem>
                        <ListGroupItem className="justify-content-between">Next Week<Badge className="float-right" pill color="warning">0</Badge></ListGroupItem>
                        <ListGroupItem className="justify-content-between">Sometime Later <Badge className="float-right" pill color="warning">0</Badge></ListGroupItem>
                        <ListGroupItem className="justify-content-between">Total Pending Tasks <Badge className="float-right" pill >1</Badge></ListGroupItem>
                      </ListGroup>
                    </CardBody>
                  </Card>
                </Col>
            </Row>
        </div>
    );
  }
}

export default Tasks;