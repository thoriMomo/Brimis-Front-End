import React, {
    Component
} from 'react';
import { Col, ListGroup, ListGroupItem, Row, } from 'reactstrap';


class ProductList extends Component {

    render() {
        return (
            <Row>
                <Col>
                    <ListGroup>
                        <ListGroupItem tag="a" href="#/orders/prod_details">Product One</ListGroupItem>
                        <ListGroupItem tag="a" href="#/orders/prod_details">Product Two</ListGroupItem>
                        <ListGroupItem tag="a" href="#/orders/prod_details">Product Three</ListGroupItem>
                        <ListGroupItem tag="a" href="#/orders/prod_details">Product Four</ListGroupItem>
                        <ListGroupItem tag="a" href="#/orders/prod_details">Product Five</ListGroupItem>
                    </ListGroup>
                </Col>
            </Row>
        );
    }
}

export default ProductList;