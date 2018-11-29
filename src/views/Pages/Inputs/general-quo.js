import React, {
    Component
} from 'react';
import {
    Col,
    Row,
    FormGroup,
    Button,
    Input,
    Label, Dropdown, DropdownItem, DropdownMenu, DropdownToggle,
}
    from 'reactstrap';
import axios from "axios";
import Select from 'react-select';

class GeneralQuo extends Component {

    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.postInfo = this.postInfo.bind(this);
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
            selectedClient: null,
            selectedPerson: null,
            selectedType: null,
            selectedChoice: null,
            client: "",
            createdBy: "",
            rfq: "",
            quoteType: "",
            description: "",
            dateReceived: "",
            deadline: "",
            time: "",
            isSubmitted: "",
            comments: "",
        };
    }

    componentDidMount() {
        this.fetchPost();
    }

    fetchPost() {
        let fetchList = [];
        fetch('https://brimis-crm-backend.herokuapp.com/crm/clientcontacts/')
            .then(res => {
                console.log("fetched create task clients");
                return res.json();
            })
            .then(data => {
                fetchList = data.map((listItem) => {
                    return listItem
                })
            })
            .catch(err => {
                console.log(err);
            })
            .then(() => {
                let listArr = [{ value: "", label: "" },];
                let listCon = [{ value: "", label: "" },];

                for (var i = 0; i < fetchList.length; i++) {
                    listArr[i] = { value: fetchList[i].client["name"], label: fetchList[i].client["name"] };
                    listCon[i] = { value: fetchList[i].contact.firstName, label: fetchList[i].contact.firstName, }
                    console.log(listArr[i]["value"]);
                }
                this.setState({
                    clientlist: [...listArr],
                    contactList: [...listCon],

                });
            });
    }

    handlePerson = (selectedPerson) => {
        this.setState({ selectedPerson });
        console.log(`Option selected:`, selectedPerson);
    }

    handleClient = (selectedClient) => {
        this.setState({ selectedClient });
        console.log(`Option selected:`, selectedClient);
    }

    handleType = (selectedType) => {
        this.setState({ selectedType });
        console.log(`Option selected:`, selectedType);
    }

    handleChoice = (selectedChoice) => {
        this.setState({ selectedChoice });
        console.log(`Option selected:`, selectedChoice);
    }

    handleInputs(key) {
        return function (e) {
            var state = {};
            state[key] = e.target.value;
            this.setState(state);
        }.bind(this);
    }
    
    postInfo() {
        axios.post('https://brimis-crm-backend.herokuapp.com/crm/quotes/create/', {
            client: "",
            createdBy: "",
            rfq: "",
            quoteType: "",
            description: "",
            dateReceived: "",
            deadline: "",
            time: "",
            isSubmitted: "",
            comments: "",
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
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
    render() {
        const { selectedPerson, selectedClient, selectedType, selectedChoice } = this.state;
        return (
            <Row>
                <Col>
                    <Row>
                        <Col sm="3">
                            <Label htmlFor="street" > Client </Label>
                            <Select
                                value={selectedClient}
                                onChange={this.handleClient}
                                options={this.state.clientlist}
                            />
                        </Col>
                        <Col sm="3">
                            <Label htmlFor="street" > Contact Person </Label>
                                <Select
                                    value={selectedPerson}
                                    onChange={this.handlePerson}
                                    options={this.state.contactList}
                                />
                            </Col>
                        <Col sm="3">
                            <Label htmlFor="street" > Quote Type </Label>
                            <Select
                                value={selectedType}
                                onChange={this.handleType}
                                options={[
                                    { value: 'product', label: 'Product' },
                                    { value: 'service', label: 'Service' },
                                    { value: 'other', label: 'Other' },
                                ]}
                            />
                        </Col>
                    </Row>
                    <FormGroup >
                        <Label htmlFor="country" > Description </Label>
                        <Input type="text" id="country" placeholder="Enter Description" onChange={this.handleInputs("description")}/>
                    </FormGroup>
                    <Row>
                        <Col sm="3">
                            <FormGroup>
                                <Label for="deadline"> DeadLine </Label>
                                <Input type="date" name="deadline" id="deadLine" placeholder="DD/MM/YY" onChange={this.handleInputs("deadline")}/>
                            </FormGroup>
                        </Col>
                        <Col sm="3">
                            <FormGroup>
                                <Label for="time">Time </Label>
                                <Input type="time" name="time" id="time" placeholder="00h00" onChange={this.handleInputs("time")}/>
                            </FormGroup>
                        </Col>
                        <Col sm="3">
                            <Label htmlFor="street" > Submitted </Label>
                            <Select
                                value={selectedChoice}
                                onChange={this.handleChoice}
                                options={[
                                    { value: 'yes', label: 'Yes' },
                                    { value: 'no', label: 'No' },
                                ]}
                            />
                        </Col>
                    </Row>
                    <FormGroup >
                        <Label htmlFor="country" > Comments </Label>
                        <Input type="text" id="country" placeholder="Enter Comment" onChange={this.handleInputs("comments")}/>
                    </FormGroup>
                    <Button type="submit" size="sm" color="primary" onClick={() => this.postInfo}  > < i className="fa fa-user" > </i>Submit</Button >
                    <Button type="reset" size="sm" color="danger"><i className="fa fa-ban"></i> Reset</Button>
                </Col>
            </Row>
        );
    }
}

export default GeneralQuo;