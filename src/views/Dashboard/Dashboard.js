import React, { Component } from 'react';
import { Bar, Line } from 'react-chartjs-2';
import {
  Badge,
  Button,
  ButtonDropdown,
  ButtonGroup,
  ButtonToolbar,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardTitle,
  Col,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Progress,
  Row,
  Table,
  Alert, Container, Jumbotron,
} from 'reactstrap';
import Widget04 from '../Widgets/Widget04';

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.onRadioBtnClick = this.onRadioBtnClick.bind(this);
    this.onDismiss = this.onDismiss.bind(this);

    this.state = {
      dropdownOpen: false,
      radioSelected: 2,
      visible: true,
    };
  }

  onDismiss() {
    this.setState({ visible: false });
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });
  }

  onRadioBtnClick(radioSelected) {
    this.setState({
      radioSelected: radioSelected,
    });
  }

  render() {

    return (
      <div className="animated fadeIn">
        <Row>
            <Col sm="6">
            <Card>
              <CardHeader>
                Monthly Progress Quick View 
              </CardHeader>
              <CardBody>
                <Row>
                  <Col sm="6">
                    <Widget04 icon="icon-people" color="info" header="9" value="0" invert>Processed Quotes</Widget04>
                  </Col>
                  <Col sm="6">
                    <Widget04 icon="icon-user-follow" color="success" header="3" value="0" invert>New Client Contacts</Widget04>
                  </Col>
                </Row>
                <Row>
                  <Col sm="6">
                    <Widget04 icon="icon-basket-loaded" color="warning" header="5" value="0" invert>Products sold</Widget04>
                  </Col>
                  <Col sm="6">
                    <Widget04 icon="icon-pie-chart" color="primary" header="2" value="0" invert>Services Sold</Widget04>
                  </Col>
                </Row>
                <Row>
                  <Col sm="6">
                    <Widget04 icon="icon-speedometer" color="danger" header="0" value="0" invert>Tasks Overdue</Widget04>
                  </Col>
                  <Col sm="6">
                    <Widget04 icon="icon-speech" color="info" header="972" value="0" invert>Comments</Widget04>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
          <Col sm="6">
            <Card>
              <CardHeader>
                Notifications Board
              </CardHeader>
              <CardBody>
                <Alert color="success" isOpen={this.state.visible} toggle={this.onDismiss}>
                  You have zero (0) overdue tasks. Keep up the good work!
                </Alert>
                <Alert color="success" isOpen={this.state.visible} toggle={this.onDismiss}>
                  You have zero (0) pending accounts. Let's get some more accounts!
                </Alert>
                <Alert color="info" isOpen={this.state.visible} toggle={this.onDismiss}>
                  You have been assigned a new contact. <a href="#/contacts/details" className="alert-link">Click</a> to view the contact.
                </Alert>
                <Alert color="warning" isOpen={this.state.visible} toggle={this.onDismiss}>
                  You have five (5) leads to do a follow-up on. Let's get it done!
                </Alert>
              </CardBody>
            </Card>
            <Card>
              <CardHeader>
                Some Food For Thought
              </CardHeader>
              <CardBody>
                <Jumbotron>
                  <Container>
                    <p className="lead">Four words, is plenty... (Ember Spirit)</p>
                  </Container>
                </Jumbotron>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Dashboard;
