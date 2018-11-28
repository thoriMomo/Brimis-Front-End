import React, {
    Component
} from 'react';
import { Col, ListGroup, ListGroupItem, Row, } from 'reactstrap';
import { connect } from "react-redux";
import { getContactDetails } from "../../redux/actions/index"

const mapDispatchToProps = dispatch => {
    return {
        getContactDetails: contactDetails => dispatch(getContactDetails(contactDetails))
    };
};

class ContactList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            list: [],
            firstName: "",
        }
    }

    update(firstName, lastName, mobileContact, email) {
        console.log(firstName);
        const contactID = 100;
        this.props.getContactDetails({contactID, firstName, lastName, mobileContact, email});
        this.setState({firstName: firstName});
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

    render() {
        const view = this.state.list.map((item, index_num) => 
            <ListGroupItem key={index_num} tag="a" href="#/contacts/details" onClick={() => this.update(item.firstName, item.lastName, item.mobileContact, item.email)}> {item.firstName} {item.lastName}
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

const List = connect(null, mapDispatchToProps)(ContactList)
          
export default List;