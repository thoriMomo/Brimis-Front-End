import React, {
    Component
} from 'react';
import { Col, ListGroup, ListGroupItem, Row, } from 'reactstrap';
import ContactDetails from './contact_details';


class ContactList extends Component {

    constructor(props) {
        super(props);

        this.passValue = this.passValue.bind(this);
        this.state = {
            list: [],
            id_value: "",
        }
    }

    componentDidMount() {
        this.fetchPost();
    }

    fetchPost() {

        fetch('https://brimis-crm-backend.herokuapp.com/crm/contacts/')
        .then(res => {
            return res.json();
        })
        .then(data => {
            this.setState({
                list: data
            });
        })
        .catch(err => {
            console.log(err);
        });
    }

    passValue(id_val) {
        this.id_value = id_val;
    }

    render() {
        const view = this.state.list.map((item, index_num) => 
            <ListGroupItem key={index_num} tag="a" href="#/contacts/details" onChange={() => this.props.addValue(item.index_num)}> {item.firstName} {item.lastName}
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
          
export default ContactList;