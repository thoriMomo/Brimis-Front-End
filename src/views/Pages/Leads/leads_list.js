import React, {
    Component
} from 'react';
import { Col, ListGroup, ListGroupItem, Row, } from 'reactstrap';


class LeadsList extends Component {

    render() {
        return (
            <Row>
                <Col>
                    <ListGroup>
                        <ListGroupItem tag="a" href="#/leads/details">Lead One</ListGroupItem>
                        <ListGroupItem tag="a" href="#/leads/details">Lead Two</ListGroupItem>
                        <ListGroupItem tag="a" href="#/leads/details">Lead Three</ListGroupItem>
                        <ListGroupItem tag="a" href="#/leads/details">Lead Four</ListGroupItem>
                        <ListGroupItem tag="a" href="#/leads/details">Lead Five</ListGroupItem>
                    </ListGroup>
                </Col>
            </Row>
        );
    }
}

export default LeadsList;