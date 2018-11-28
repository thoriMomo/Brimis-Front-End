import React, {
    Component
} from 'react';
import { Col, ListGroup, ListGroupItem, Row, } from 'reactstrap';
//import { connect } from 'net';
import { connect } from "react-redux";
import { getLeadDetails } from "../../redux/actions/index"

const mapDispatchToProps = dispatch => {
    return {
        getContactDetails: leadDetails => dispatch(getLeadDetails(leadDetails))
    };
};

class LeadsList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            list: [],
            clientContact: "",
        }
    }

update(client, createdBy, clientContact) {
        console.log(clientContact);
        // const contactID = 1;
        // this.props.getLeadDetails({client , createdBy, clientContact});
        getLeadDetails({client , createdBy, clientContact});
        this.setState({clientContact: clientContact});
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
            fetchList = data.map((listItem) => {
                console.log(listItem)
                return listItem;
            })
            console.log(fetchList)
        })
        .then(() => {
            this.setState({
                list: fetchList,
            });
        })
        .catch(err => {
            console.log(err);
        });
    }

    render() {
        const view = this.state.list.map((item, index) =>
            <ListGroupItem key={index} tag="a" href="#/leads/details" onClick={() => this.update(item.client.name, item.createdBy.username, item.clientContact.firstName)}> {item.client.name} | {item.clientContact.firstName} {item.clientContact.lastName}
            {console.log("printing out list in render:" + this.state.list)}
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

const List = connect(null, mapDispatchToProps)(LeadsList)

export default List;