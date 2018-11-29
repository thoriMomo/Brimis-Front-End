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
import AccountList from './account_list'
import Select from 'react-select';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
];

class Accounts extends Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1',
      dropdownOpen: new Array(6).fill(false),
      selectedOption: null,
    };
  }

  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
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
    const { selectedOption } = this.state;
    return (
      <div>
        <Row>
          <Col sm = "9">
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
                  Active Accounts
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
                  Completed Accounts
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
                  Create Account
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
                      <Input type="search" name="search" id="taskSearch" placeholder="Search active accounts" />
                      {/* <Input type="text" placeholder="Search" /> */}
                    </Col>
                    {/* <Button type="submit" size="sm" color="primary" > < i className="fa fa-user" > </i>Search</Button> */}
                  </FormGroup>
                </Form>
                <AccountList />
              </TabPane>
              <TabPane tabId="2" >
                <Form action="" method="post" className="form-horizontal">
                  <FormGroup row>
                    <Col sm="12">
                      <Input type="search" name="search" id="taskSearch" placeholder="Search completed accounts" />
                      {/* <Input type="text" placeholder="Search" /> */}
                    </Col>
                    {/* <Button type="submit" size="sm" color="primary" > < i className="fa fa-user" > </i>Search</Button> */}
                  </FormGroup>
                </Form>
                <AccountList />
              </TabPane>
              <TabPane tabId="3" >
                <Row>
                  <Col sm="12">
                    <FormGroup >
                      <Label htmlFor="street" > New Account </Label>
                      <Input type="text" id="street" placeholder="Enter account details" />
                    </FormGroup>
                    <Row>
                      <Col sm="4">
                        <Label htmlFor="street" > Company </Label>
                        <Select
                          value={selectedOption}
                          onChange={this.handleChange}
                          options={options}
                        />
                      </Col>
                      <Col sm="4">
                        <Label htmlFor="street" > Contact Person </Label>
                        <Select
                          value={selectedOption}
                          onChange={this.handleChange}
                          options={options}
                        />
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
              </TabPane>
            </TabContent>
          </Col>
          <Col sm="3" xl="3">
            <Card>
              <CardHeader>
                <strong>Account Categories</strong>
              </CardHeader>
              <CardBody>
                <ListGroup>
                  <ListGroupItem className="justify-content-between">New Product<Badge className="float-right" pill color="warning">1</Badge></ListGroupItem>
                  <ListGroupItem className="justify-content-between">Refurbishments <Badge className="float-right" pill color="warning">0</Badge></ListGroupItem>
                  <ListGroupItem className="justify-content-between">Total Accounts <Badge className="float-right" pill >1</Badge></ListGroupItem>
                </ListGroup>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Accounts;