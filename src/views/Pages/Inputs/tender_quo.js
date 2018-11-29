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
import axios from "axios";
import Select from 'react-select';

const options = [
    { value: 'true', label: 'Yes' },
    { value: 'false', label: 'No' },
];

class TenderQuo extends Component {

    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.postInfo = this.postInfo.bind(this);
        this.handleInputs = this.handleInputs.bind(this);
        
        this.state = {
            activeTab: '1',
            dropdownOpen: new Array(6).fill(false),
            selectedClient: null,
            clientList: [{
                value: "",
                label: "",
            }],
            client: "",
            tenderID: "",
            description: "",
            ResponsiblePerson: "",
            deadline: "",
            time: "",
            enquiryDate: "",
            clarificationDate: "",
            buyerEnduser: "",
            trn: "",
            tenderValue: "",
            status: "",
            isDelivered: "",
            probability: "",
            technicalFunctionality: "",
            expectedOrderPlacement: "",
            comments: "",
        };
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

    componentDidMount() {
        this.fetchPost();
    }

    fetchPost() {
        let fetchList = [];
        fetch('https://brimis-crm-backend.herokuapp.com/crm/clients/')
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

                for (var i = 0; i < fetchList.length; i++) {
                    listArr[i] = { value: fetchList[i].id, label: fetchList[i].name };
                    console.log(listArr[i].value, listArr[i].label)
                }
                this.setState({
                    clientList: [...listArr]
                });

            });

    }

    handleClient = (selectedClient) => {
        this.setState({ selectedClient });
        console.log(`Client selected:`, selectedClient);
    }

    handleChange = (selectedOption) => {
        this.setState({ selectedOption });
        console.log(`Option selected:`, selectedOption);
    }

    handleInputs(key) {
        return function (e) {
            var state = {};
            state[key] = e.target.value;
            this.setState(state);
        }.bind(this);
    }

    postInfo() {
        axios.post('https://brimis-crm-backend.herokuapp.com/crm/tenders/create/', {
            client: "",
            tenderID: "",
            description: "",
            ResponsiblePerson: "",
            deadline: "",
            time: "",
            enquiryDate: "",
            clarificationDate: "",
            buyerEnduser: "",
            trn: "",
            tenderValue: "",
            status: "",
            isDelivered: "",
            probability: "",
            technicalFunctionality: "",
            expectedOrderPlacement: "",
            comments: "",
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {
        const { selectedOption, selectedClient } = this.state;
        return (
            <Row>
                <Col>
                    <Row>
                        <Col sm="3">
                            <Label htmlFor="client" > Client </Label>
                            <Select
                                value={selectedClient}
                                onChange={this.handleClient}
                                options={this.state.clientList}
                            />
                        </Col>
                        <Col sm="9">
                            <Label htmlFor="client_entry" > Enter New Client </Label>
                            <Input type="text" id="client" placeholder="Enter client" onChange={this.handleInputs("client")} />
                        </Col>
                    </Row>
                    <FormGroup >
                        <Label htmlFor="description" > Description </Label>
                        <Input type="text" id="description" placeholder="Enter Description" onChange={this.handleInputs("description")} />
                    </FormGroup>
                    <Row>
                        <Col sm="3">
                            <FormGroup>
                                <Label htmlFor="resp_person" >Responsible Person </Label>
                                <Input type="text" id="resp_person" placeholder="Who is responsible?" onChange={this.handleInputs("ResponsiblePerson")} />
                            </FormGroup>
                        </Col>
                        <Col sm="3">
                            <FormGroup>
                                <Label htmlFor="deadline" > Deadline </Label>
                                <Input type="date" id="deadline" placeholder="DD/MM/YYYY" onChange={this.handleInputs("deadline")} />
                            </FormGroup>
                        </Col>
                        <Col sm="3">
                            <FormGroup>
                                <Label htmlFor="time" > Time </Label>
                                <Input type="time" id="time" placeholder="00h00" onChange={this.handleInputs("time")} />
                            </FormGroup>
                        </Col>
                        <Col sm="3">
                            <FormGroup>
                                <Label htmlFor="enq_date" > Enquiry Date </Label>
                                <Input type="date" id="enq_date" placeholder="DD/MM/YYYY" onChange={this.handleInputs("enquiryDate")} />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm="3">
                            <FormGroup>
                                <Label htmlFor="clarification" >Clarification Date </Label>
                                <Input type="date" id="clarification" placeholder="DD/MM/YYYY" onChange={this.handleInputs("clarificationDate")} />
                            </FormGroup>
                        </Col>
                        <Col sm="3">
                            <FormGroup>
                                <Label htmlFor="trn" > Tender Ref. Number </Label>
                                <Input type="text" id="trn" placeholder="RFQ" onChange={this.handleInputs("trn")} />
                            </FormGroup>
                        </Col>
                        <Col sm="3">
                            <FormGroup>
                                <Label htmlFor="trn_val" > Estimated Tender Value </Label>
                                <Input type="text" id="trn_val" placeholder="R0.00" onChange={this.handleInputs("tenderValue")} />
                            </FormGroup>
                        </Col>
                        <Col sm="3">
                            <FormGroup>
                                <Label htmlFor="status" > Status </Label>
                                <Input type="text" id="status" placeholder="Status" onChange={this.handleInputs("status")} />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm="3">
                            <Label htmlFor="submitted" >Submitted </Label>
                            <Select
                                value={selectedOption}
                                onChange={this.handleChange}
                                options={options}
                            />
                        </Col>
                        <Col sm="3">
                            <FormGroup>
                                <Label htmlFor="prob" > Probability </Label>
                                <Input type="text" id="prob" placeholder="0%" onChange={this.handleInputs("probability")} />
                            </FormGroup>
                        </Col>
                        <Col sm="3">
                            <FormGroup>
                                <Label htmlFor="tech_func" > Technical Functionality </Label>
                                <Input type="text" id="tech_func" placeholder="Functional Description" onChange={this.handleInputs("technicalFunctionality")} />
                            </FormGroup>
                        </Col>
                        <Col sm="3">
                            <FormGroup>
                                <Label htmlFor="ex_or_pl" > Expected Order Placement </Label>
                                <Input type="text" id="ex_or_pl" placeholder="With Whom?" onChange={this.handleInputs("expectedOrderPlacement")} />
                            </FormGroup>
                        </Col>
                    </Row>
                    <FormGroup >
                        <Label htmlFor="comment" > Comments </Label>
                        <Input type="text" id="comment" placeholder="Enter Comment" onChange={this.handleInputs("comments")} />
                    </FormGroup>
                    <Button type="submit" size="sm" color="primary" onClick={() => this.postInfo} > < i className="fa fa-user" > </i>Submit</Button >
                    <Button type="reset" size="sm" color="danger"><i className="fa fa-ban"></i> Reset</Button>
                </Col>
            </Row>
        );
    }
}

export default TenderQuo;