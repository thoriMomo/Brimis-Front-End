import React, {
  Component
}
  from 'react';
import {
  Col,
  Row, Card, CardBody, CardHeader, ListGroup, ListGroupItem, Badge,
  Form,
  FormGroup,
  Button,
  Input, Collapse,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
}
  from 'reactstrap';
import classnames from 'classnames';

import CreateLead from '../Inputs/create_lead'
import LeadsList from './leads_list';

class Leads extends Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.toggleModals = this.toggleModals.bind(this);
    this.toggleCustom = this.toggleCustom.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.submitHandler = this.submitHandler.bind(this);

    this.state = {
      activeTab: '1',
      dropdownOpen: new Array(6).fill(false),
      modal: false,
      custom: [false, false],
      name_got: "",
    };
  }

  submitHandler(evt){
    evt.preventDefault();

    this.props.handlerFromParent(this.state.name_got);

    this.setState({
        name_got: ''
    });
}

  handleChange() {
    this.setState({
        name_got: "Eureka!"
    })
}

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab,
      });
    }
  }

  onUpdate = (name) => {
    //this.name_got= name,
    console.log("lead: " + this.name_got);
}

  toggleDrop(tab) {
    const newArray = this.state.dropdownOpen.map((element, index) => {
      return (index === tab ? !element : false);
    });
    this.setState({
      dropdownOpen: newArray,
    });
  }

  toggleCustom(tab) {

    const prevState = this.state.custom;
    const state = prevState.map((x, index) => tab === index ? !x : false);

    this.setState({
      custom: state,
    });
  }

  toggleModals() {
    this.setState({
        modal: !this.state.modal,
      });
  }

  render() {

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
                  Current Leads
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
                  Create Lead
                            </NavLink>
              </NavItem>
            </Nav>
            <TabContent activeTab={
              this.state.activeTab
            } >
              <TabPane tabId="1" >
                <Form action="" method="post" className="form-horizontal">
                  <FormGroup row>
                    <Col sm="7">
                      <Input type="text" placeholder="Search" />
                    </Col>
                    <Button type="submit" size="sm" color="primary" > < i className="fa fa-user" > </i>Search</Button>
                  </FormGroup>
                </Form>
                <LeadsList onUpdate={this.onUpdate}/>
              </TabPane>
              <TabPane tabId="2" >
                <CreateLead />
              </TabPane>
            </TabContent>
          </Col>
          <Col sm="3" xl="3">
            <Card>
              <CardHeader>
                <strong>Lead Statuses</strong>
              </CardHeader>
              <CardBody>
                <ListGroup>
                  <ListGroupItem className="justify-content-between">New <Badge className="float-right" pill color="warning">1</Badge></ListGroupItem>
                  <ListGroupItem className="justify-content-between">Contacted <Badge className="float-right" pill color="warning">0</Badge></ListGroupItem>
                  <ListGroupItem className="justify-content-between">Converted <Badge className="float-right" pill color="warning">0</Badge></ListGroupItem>
                  <ListGroupItem className="justify-content-between">Rejected <Badge className="float-right" pill color="warning">0</Badge></ListGroupItem>
                  <ListGroupItem className="justify-content-between">Other <Badge className="float-right" pill color="warning">0</Badge></ListGroupItem>
                  <ListGroupItem className="justify-content-between">Total Leads <Badge className="float-right" pill >1</Badge></ListGroupItem>
                </ListGroup>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Leads;