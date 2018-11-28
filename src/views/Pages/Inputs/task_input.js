import React, {
    Component
}
    from 'react';
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

// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';
import Select from 'react-select';

const options = [
    { value: 'call', label: 'Call' },
    { value: 'email', label: 'Email' },
    { value: 'follow-up', label: 'Follow Up' }
];

class TaskInput extends Component {

    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleInputs = this.handleInputs.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            activeTab: '1',
            dropdownOpen: new Array(6).fill(false),
            list: [{
                value: "",
                label: "",
            }],
            task: '',
            client: '',
            dateDue: '',
            time: '',
            isCompleted: '',
            selectedCategory: null,
            selectedClient: null,
            startDate: new Date(),
        };
    }

    handleChange(date) {
        this.setState({
          startDate: date
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

    handleCategory = (selectedCategory) => {
        this.setState({ selectedCategory });
        console.log(`Category selected:`, selectedCategory);
    }

    handleClient = (selectedClient) => {
        this.setState({ selectedClient });
        console.log(`Client selected:`, selectedClient);
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
                let listArr = [{value: "", label: ""},];
                
                for (var i = 0; i < fetchList.length; i++)
                {
                    listArr[i] = { value: fetchList[i].id, label: fetchList[i].name };
                    console.log(listArr[i].value, listArr[i].label)
                }
                this.setState({
                    list: [...listArr]
                });
                
            });
            
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
        
        axios.post('https://brimis-crm-backend.herokuapp.com/crm/usertasks/create/', {
            assignedTo: "1",
            task: this.state.task,
            client: this.state.client,
            dateDue: this.state.dateDue,
            time: this.state.time,
            isCompleted: 'False'
        })
            .then(function (response) {
                console.log(response);
                console.log("Pushed new task");
            })
            .catch(function (error) {
                console.log(error);
        });
    }

    render() {
        const { selectedCategory, selectedClient } = this.state;
        return (
            <div>
                <Row>
                    <Col>
                        <Row>
                            <Col sm="8">
                                <FormGroup >
                                    <Label htmlFor="task" > New Task </Label>
                                    <Input type="text" id="task" placeholder="Enter task details" onChange={this.handleInputs("task")} />
                                </FormGroup>
                            </Col>
                            <Col sm="4">
                                <Label htmlFor="due" > Client </Label>
                                <Select
                                    value={selectedClient}
                                    onChange={this.handleClient}
                                    options={this.state.list}
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col sm="4">
                                <Label htmlFor="due" > Due: </Label>
                                {/* <DatePicker selected={this.state.startDate} onChange={this.handleChange}/> */}
                            </Col>
                            <Col sm="4">
                                <Label htmlFor="time" > Time: </Label>
                                <Input type="text" id="time" placeholder="00h00" onChange={this.handleInputs("time")} />
                            </Col>
                            <Col sm="4">
                                <Label htmlFor="category" > Category: </Label>
                                <Select
                                    value={selectedCategory}
                                    onChange={this.handleCategory}
                                    options={options}
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Button type="submit" size="sm" color="primary" onClick={this.handleClick}> < i className="fa fa-user" > </i>Create</Button >
                                <Button type="reset" size="sm" color="danger"><i className="fa fa-ban"></i> Reset</Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default TaskInput;