import React, { Component } from 'react';
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, Media, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
// import { DefaultFooter } from '../../../containers/DefaultLayout/DefaultFooter';
import { AppFooter } from '@coreui/react';

import { logo } from '../../../assets/img/brand/favicon.png'
import { Dashboard } from '../../Dashboard/Dashboard';

class Login extends Component {
  constructor(props) {
    super(props);

    this.routeChange = this.routeChange.bind(this);
    this.state = {
      signIn: false,
      }
  };

  routeChange(){
    let path = `/dashboard`;
    this.props.history.push(path);
    }

  logIn(){

  }

  render() {
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="8">
              <CardGroup>
                <Card className="p-4">
                  <CardBody>
                    <Form>
                      <h1>Login</h1>
                      <p className="text-muted">Sign In to your account</p>
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-user"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="text" placeholder="Username" autoComplete="username" />
                      </InputGroup>
                      <InputGroup className="mb-4">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-lock"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="password" placeholder="Password" autoComplete="current-password" />
                      </InputGroup>
                      <Row>
                        <Col xs="6">
                          <Button color="danger" onClick={this.routeChange}>Login</Button>
                        </Col>
                        <Col xs="6" className="text-right">
                          <Button color="link" className="px-0">Forgot password?</Button>
                        </Col>
                      </Row>
                    </Form>
                  </CardBody>
                </Card>
                <Card className="text-white bg-red py-5 d-md-down-none" style={{ width: 44 + '%' }}>
                  <CardBody className="text-center">
                    <div>
                      <h2>Sign up</h2>
                      <p>Please contact System Administrator for Registration</p>
                      <Button color="" className="mt-3" active>Register Now!</Button>
                    </div>
                  </CardBody>
                </Card>
              </CardGroup>
            </Col>
          </Row>
        </Container>
        <AppFooter>
        {/* <React.Fragment>
        <span><a href="#">Brimis Engineering CRM</a> &copy; 2018</span>
        <span className="ml-auto">Created by <a href="#">WeThinkCode_ Greater Wolf Pack</a></span>
      </React.Fragment> */}
        </AppFooter>
      </div>
    );
  }
}

export default Login;
