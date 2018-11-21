import React, {
    Component
} from 'react';
import { Col, ListGroup, ListGroupItem, Row, } from 'reactstrap';


class TenderList extends Component {

    constructor() {
        super();
        this.state = {
            list: [
                { id: 1, qft: "Sam", ref_number: "0000001" },
                { id: 2, qft: "Sam", ref_number: "0000002" }
            ],
        }
    }

    render() {
        const view = this.state.list.map((item, index) =>
            <ListGroupItem key={index} tag="a" href="#/quotations/tender_details">QFT {item.qft} - REF: {item.ref_number}
                <div className="card-header-actions">
                    <a href="#" rel="noreferrer noopener" className="card-header-action">
                        <small className="text-muted">delete</small>
                    </a>
                </div>
                <div className="card-header-actions">
                    <a href="#" rel="noreferrer noopener" className="card-header-action">
                        <small className="text-muted">edit</small>
                    </a>
                </div>
            </ListGroupItem>
        )
        return (
            <Row>
                <Col>
                    <ListGroup>
                        {view}
                    </ListGroup>
                </Col>
            </Row>
        );
    }
}

export default TenderList;