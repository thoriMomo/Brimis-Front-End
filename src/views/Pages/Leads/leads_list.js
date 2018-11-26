import React, {
    Component
} from 'react';
import { Col, ListGroup, ListGroupItem, Row, } from 'reactstrap';


class LeadsList extends Component {

    constructor() {
        super();
        this.state = {
            list: [],
        }
    }

    componentDidMount() {
        this.fetchPost();
    }

    fetchPost() {

        let fetchList = [];
        fetch('https://brimis-crm-backend.herokuapp.com/crm/leads/')
            .then(res => {
                return res.json();
            })
            .then(data => {
                fetchList = data.res.map((listItem) => {
                    return listItem
                })
            })
            .catch(err => {
                console.log(err);
            });
            console.log(fetchList);
            this.setState({
                list: fetchList,
            });
    }

    render() {
        const view = this.state.list.map((item, index) =>
            <ListGroupItem key={index} tag="a" href="#/leads/details"> {item.client} - {item.clientContact}
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

export default LeadsList;