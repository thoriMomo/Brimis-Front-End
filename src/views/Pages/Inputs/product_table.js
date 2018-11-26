import React, { Component } from 'react';
import {
    Badge, Col, Row, Table,
    Dropdown, DropdownItem, DropdownMenu, DropdownToggle, }
    from 'reactstrap';
import Select from 'react-select';

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
];

class ProductTables extends Component {

    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            activeTab: '1',
            dropdownOpen: new Array(6).fill(false),
            selectedOption: null,
        };
    }

    handleChange = (selectedOption) => {
        this.setState({ selectedOption });
        console.log(`Option selected:`, selectedOption);
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
        const { selectedOption } = this.state;
        return (
            <div className="animated fadeIn">
               
                       
                                <Table hover bordered striped responsive size="sm">
                                    <thead>
                                        <tr>
                                            <th>Product</th>
                                            <th>Quantity</th>
                                            <th>Price</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                <Select
                                    value={selectedOption}
                                    onChange={this.handleChange}
                                    options={options}
                                />
                                            </td>
                                            <td>0</td>
                                            <td>R0.00</td>
                                        </tr>
                                        <tr>
                            <td><Select
                                value={selectedOption}
                                onChange={this.handleChange}
                                options={options}
                            /></td>
                                            <td>0</td>
                                            <td>R0.00</td>
                                        </tr>
                                        <tr>
                            <td><Select
                                value={selectedOption}
                                onChange={this.handleChange}
                                options={options}
                            /></td>
                                            <td>0</td>
                                            <td>R0.00</td>
                                        </tr>
                                        <tr>
                            <td><Select
                                value={selectedOption}
                                onChange={this.handleChange}
                                options={options}
                            /></td>
                                            <td>0</td>
                                            <td>R0.00</td>
                                    </tr>
                                <tr>
                            <td><Select
                                value={selectedOption}
                                onChange={this.handleChange}
                                options={options}
                            /></td>
                                    <td>0</td>
                                    <td>R0.00</td>
                                </tr>
                            </tbody>
                            <thead>
                                <tr>
                                    <th>Total</th>
                                    <th>0</th>
                                    <th>R0.00</th>
                                </tr>
                            </thead>
                        </Table>
            </div>

        );
    }
}

export default ProductTables;
