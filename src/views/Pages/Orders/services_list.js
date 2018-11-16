import React, {
    Component
} from 'react';
import { Col, ListGroup, ListGroupItem, Row, } from 'reactstrap';


class ServiceList extends Component {

    render() {
        return (
            <Row>
                <Col>
                    <ListGroup>
                        <ListGroupItem tag="a" href="#/orders/serv_details">Service One</ListGroupItem>
                        <ListGroupItem tag="a" href="#/orders/serv_details">Service Two</ListGroupItem>
                        <ListGroupItem tag="a" href="#/orders/serv_details">Service Three</ListGroupItem>
                        <ListGroupItem tag="a" href="#/orders/serv_details">Service Four</ListGroupItem>
                        <ListGroupItem tag="a" href="#/orders/serv_details">Service Five</ListGroupItem>
                    </ListGroup>
                </Col>
            </Row>
        );
    }
}

export default ServiceList;