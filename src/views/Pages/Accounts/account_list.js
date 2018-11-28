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

        fetch('https://brimis-crm-backend.herokuapp.com/crm/clientcontacts/')
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
        const view = this.state.list.map((item, index) =>
            < ListGroupItem key = {
              index
            }
            tag = "a"
            href = "#/accounts/details"
            onClick = {
              () => this.update(item.firstName, item.lastName, item.mobileContact, item.email)
            } > {
              item.client
            } {
              item.contact
            }
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