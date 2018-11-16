import React, {
    Component
} from 'react';
import { Col, ListGroup, ListGroupItem, Row, } from 'reactstrap';


class TaskList extends Component {

    render() {
        return (
            <Row>
                <Col>
                    <ListGroup>
                        <ListGroupItem tag="a" href="#">Task One</ListGroupItem>
                        <ListGroupItem tag="a" href="#">Task Two</ListGroupItem>
                        <ListGroupItem tag="a" href="#">Task Three</ListGroupItem>
                        <ListGroupItem tag="a" href="#">Task Four</ListGroupItem>
                        <ListGroupItem tag="a" href="#">Task Five</ListGroupItem>
                    </ListGroup>
                </Col>
            </Row>
        );
    }
}

export default TaskList;