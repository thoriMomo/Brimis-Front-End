import React, {
    Component
} from 'react';
import { Col, ListGroup, ListGroupItem, Row, } from 'reactstrap';
import {
  getAccountDetails
} from "../../redux/actions/index"

const mapDispatchToProps = dispatch => {
  return {
    getAccountDetails: accountDetails => dispatch(getAccountDetails(accountDetails))
  };
};


class AccountList extends Component {

    constructor() {
        super();
        this.state = {
            list: [],
            firstName: "",
        }
    }

    update(firstName, lastName, mobileContact, email) {
        console.log(firstName);
        const contactID = 100;
        this.props.getContactDetails({
            contactID,
            firstName,
            lastName,
            mobileContact,
            email
        });
        this.setState({
            firstName: firstName
        });
    }

    componentDidMount() {
        this.fetchPost();
    }

    fetchPost() {
        let fetchList = [];
        fetch('https://brimis-crm-backend.herokuapp.com/crm/clientcontacts/')
            .then(res => {
                return res.json();
            })
            .then(data => {
                fetchList = data.map((listItem) => {
                    return listItem;
                })
            })
            .then(() => {
                this.setState({
                    list: fetchList
                });
            })
            .catch(err => {
                console.log(err);
            });
    }
    
    render() {
        const view = this.state.list.map((item, index) =>
        <ListGroupItem key={index} tag="a" href="#/accounts/details" onClick={() => this.update(item.contact.firstName, item.contact.lastName, item.contact.mobileContact, item.contact.email)}> {item.client.name} | {item.contact.firstName} {item.contact.lastName}
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