import React, {
    Component
} from 'react';
import { Col, ListGroup, ListGroupItem, Row, } from 'reactstrap';


class ContactList extends Component {

    render() {
        return (
            <Row>
                <Col>
                    <ListGroup>
                        <ListGroupItem tag="a" href="#">Contact One</ListGroupItem>
                        <ListGroupItem tag="a" href="#">Contact One</ListGroupItem>
                        <ListGroupItem tag="a" href="#">Contact One</ListGroupItem>
                        <ListGroupItem tag="a" href="#">Contact One</ListGroupItem>
                        <ListGroupItem tag="a" href="#">Contact One</ListGroupItem>
                    </ListGroup>
                </Col>
            </Row>
        );
    }
}
          
export default ContactList;