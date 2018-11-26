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
import ProductTables from './product_table';
import Select from 'react-select';
import axios from "axios";

class ProductSale extends Component {

    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            activeTab: '1',
            dropdownOpen: new Array(6).fill(false),
            selectedClient: null,
            selectedPerson: null,
            clientList: [{
                value: "",
                label: "",
            }],
            contactList: [{
                value: "",
                label: "",
            }],
        };
    }

    handlePerson = (selectedPerson) => {
        this.setState({ selectedPerson });
        console.log(`Option selected:`, selectedPerson);
    }

    handleClient = (selectedClient) => {
        this.setState({ selectedClient });
        console.log(`Option selected:`, selectedClient);
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
        const { selectedPerson, selectedClient, } = this.state;

        return (
            <Row>
                <Col>
                    <Row>
                        <Col sm="3">
                            <Label htmlFor="street" > Company </Label>
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
                    </Row>
                    <Row>
                        <Col>
                            <ProductTables />
                        </Col>
                    </Row>
                    <Button type="submit" size="sm" color="primary" > < i className="fa fa-user" > </i>Submit</Button >
                    <Button type="reset" size="sm" color="danger"><i className="fa fa-ban"></i> Reset</Button>
                </Col>
            </Row>
        );
    }
}

export default ProductSale;