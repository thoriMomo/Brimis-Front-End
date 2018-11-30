import React, {
    Component
} from 'react';
import {
    Col,
    Row,
    FormGroup,
    Button,
    Input,
    Label,
    Dropdown, DropdownItem, DropdownMenu, DropdownToggle,
}
    from 'reactstrap';
import axios from 'axios';
import Select from 'react-select';

class CreateLead extends Component {

    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleInputs = this.handleInputs.bind(this);
        this.state = {
            activeTab: '1',
            dropdownOpen: new Array(6).fill(false),
            clientList: [{
                value: "",
                label: "",
            }],
            contactList: [{
                value: "",
                label: "",
            }],
            selectedContact: "",
            selectedClient: "",
            // clientsArr: [],
            // contactsArr: [],
        };
    }

    componentDidMount() {
        this.fetchPost();
    }

    fetchPost() {
        let fetchList = [];
        fetch('https://brimis-crm-backend.herokuapp.com/crm/clientcontacts/')
            .then(res => {
                console.log("fetched create lead clients");
                return res.json();
            })
            .then(data => {
                // let fList = data.map((theList) => {return theList})
                fetchList = data.map((listItem) => {
                    return listItem
                })
            })
            .catch(err => {
                console.log(err);
            })
            .then(() => {
                let listArr = [{ value: "", label: "" },];
                let listCon = [{ value: "", label: ""},];

                for (var i = 0; i < fetchList.length; i++) {
                    listArr[i] = { value: fetchList[i].client["id"], label: fetchList[i].client["name"] };
                    listCon[i] = { value: fetchList[i].contact["id"], label: fetchList[i].contact.firstName,}
                    console.log(listArr[i]["value"]);
                }
                this.setState({
                    clientlist: [...listArr],
                    contactList: [...listCon],

                });
            });
    }

    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab,
            });
        }
    }

    toggleDrop(tab) {
        const newArray = this.state.dropdownOpen.map((element, index) => {
            return (index === tab ? !element : false);
        });
        this.setState({
            dropdownOpen: newArray,
        });
    }

    handleContact = (selectedContact) => {
        this.setState({ selectedContact });
        console.log(`Category selected:`, selectedContact["value"]);
    }

    handleClient = (selectedClient) => {
        this.setState({ selectedClient });
        console.log(`Client selected:`, selectedClient["value"]);
    }

    handleInputs(key) {
        return function (e) {
            var state = {};
            state[key] = e.target.value;
            console.log(e.target.value);
            this.setState(state);
        }.bind(this);
    }

    handleClick() {
        let clnt = "";
        axios.post('https://brimis-crm-backend.herokuapp.com/crm/leads/create/', {
            client: this.state.selectedClient["value"],//this.state.selectedClient['value'],
            createdBy: 1,
            clientContact: this.state.selectedContact["value"]
            // feedback: ""
        })
        .then (function (){
            clnt = this.state.selectedClient
            console.log(clnt);
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (err) {
            console.log(err.response);
        });
    }

    render() {
        const { selectedContact, selectedClient } = this.state;

        return (
            <Row>
                <Col>
                    <Row>
                        <Col sm="4">
                            <Label htmlFor="clients" > Client </Label>                                    
                            <Select
                                value={selectedClient}
                                onChange={this.handleClient}
                                options={this.state.clientlist}>
                            </Select>
                        </Col>
                        <Col sm="4">
                            <Label htmlFor="contact" > Contact Person </Label>
                            <Select
                                value={selectedContact}
                                onChange={this.handleContact}
                                options={this.state.contactList}
                            />
                        </Col>
                    </Row>
                <FormGroup >
                    <Label htmlFor="country" > Lead Notes </Label>
                    <Input type="text" id="country" placeholder="Enter A Note" onChange={this.handleInputs("feedback")}/>
                </FormGroup>
                    <Button type="submit" size="sm" color="primary" onClick={this.handleClick} > < i className="fa fa-user" > </i>Submit</Button >
                    <Button type="reset" size="sm" color="danger"><i className="fa fa-ban"></i> Reset</Button>
            </Col>
        </Row>
        );
    }
}

export default CreateLead;