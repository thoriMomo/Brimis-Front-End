import React, {
    Component
} from 'react';
import { Col, ListGroup, ListGroupItem, Row, } from 'reactstrap';


class AccountList extends Component {

    render() {
        return (
            <Row>
                <Col>
                    <ListGroup>
                        <ListGroupItem tag="a" href="#/accounts/details">Account One</ListGroupItem>
                        <ListGroupItem tag="a" href="#/accounts/details">Account Two</ListGroupItem>
                        <ListGroupItem tag="a" href="#/accounts/details">Account Three</ListGroupItem>
                        <ListGroupItem tag="a" href="#/accounts/details">Account Four</ListGroupItem>
                        <ListGroupItem tag="a" href="#/accounts/details">Account Five</ListGroupItem>
                    </ListGroup>
                </Col>
            </Row>
        );
    }
}

export default AccountList;