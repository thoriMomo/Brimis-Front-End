import React, {
    Component
} from 'react';
import { Col, ListGroup, ListGroupItem, Row, } from 'reactstrap';


class AccountList extends Component {

    constructor() {
        super();
        this.state = {
            list: [
                { id: 1, acc: "Eskom-Medupi Account" },
                { id: 2, acc: "Eskom-Tutuka Account" }
            ],
        }
    }

    render() {
        const view = this.state.list.map((item, index) =>
            <ListGroupItem key={index} tag="a" href="#/accounts/details">{item.acc}
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

export default AccountList;