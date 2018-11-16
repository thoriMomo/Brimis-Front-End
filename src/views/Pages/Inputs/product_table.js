import React, { Component } from 'react';
import {
    Badge, Col, Row, Table,
    Dropdown, DropdownItem, DropdownMenu, DropdownToggle, } from 'reactstrap';

class ProductTables extends Component {

    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            activeTab: '1',
            dropdownOpen: new Array(6).fill(false),
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

    render() {
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
                                                <Dropdown isOpen={this.state.dropdownOpen[0]} toggle={() => {
                                                    this.toggleDrop(0);
                                                }}>
                                                    <DropdownToggle caret>
                                                        --Select--
                                                    </DropdownToggle>
                                                    <DropdownMenu>
                                                        <DropdownItem>Company One</DropdownItem>
                                                        <DropdownItem>Company Two</DropdownItem>
                                                        <DropdownItem>Company Three</DropdownItem>
                                                        <DropdownItem>Company Four</DropdownItem>
                                                        <DropdownItem>Company Five</DropdownItem>
                                                        <DropdownItem>Company Six</DropdownItem>
                                                    </DropdownMenu>
                                                </Dropdown>
                                            </td>
                                            <td>0</td>
                                            <td>R0.00</td>
                                        </tr>
                                        <tr>
                            <td><Dropdown isOpen={this.state.dropdownOpen[0]} toggle={() => {
                                this.toggleDrop(0);
                            }}>
                                <DropdownToggle caret>
                                    --Select--
                                                    </DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem>Company One</DropdownItem>
                                    <DropdownItem>Company Two</DropdownItem>
                                    <DropdownItem>Company Three</DropdownItem>
                                    <DropdownItem>Company Four</DropdownItem>
                                    <DropdownItem>Company Five</DropdownItem>
                                    <DropdownItem>Company Six</DropdownItem>
                                </DropdownMenu>
                            </Dropdown></td>
                                            <td>0</td>
                                            <td>R0.00</td>
                                        </tr>
                                        <tr>
                            <td><Dropdown isOpen={this.state.dropdownOpen[0]} toggle={() => {
                                this.toggleDrop(0);
                            }}>
                                <DropdownToggle caret>
                                    --Select--
                                                    </DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem>Company One</DropdownItem>
                                    <DropdownItem>Company Two</DropdownItem>
                                    <DropdownItem>Company Three</DropdownItem>
                                    <DropdownItem>Company Four</DropdownItem>
                                    <DropdownItem>Company Five</DropdownItem>
                                    <DropdownItem>Company Six</DropdownItem>
                                </DropdownMenu>
                            </Dropdown></td>
                                            <td>0</td>
                                            <td>R0.00</td>
                                        </tr>
                                        <tr>
                            <td><Dropdown isOpen={this.state.dropdownOpen[0]} toggle={() => {
                                this.toggleDrop(0);
                            }}>
                                <DropdownToggle caret>
                                    --Select--
                                                    </DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem>Company One</DropdownItem>
                                    <DropdownItem>Company Two</DropdownItem>
                                    <DropdownItem>Company Three</DropdownItem>
                                    <DropdownItem>Company Four</DropdownItem>
                                    <DropdownItem>Company Five</DropdownItem>
                                    <DropdownItem>Company Six</DropdownItem>
                                </DropdownMenu>
                            </Dropdown></td>
                                            <td>0</td>
                                            <td>R0.00</td>
                                    </tr>
                                <tr>
                            <td><Dropdown isOpen={this.state.dropdownOpen[0]} toggle={() => {
                                this.toggleDrop(0);
                            }}>
                                <DropdownToggle caret>
                                    --Select--
                                                    </DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem>Company One</DropdownItem>
                                    <DropdownItem>Company Two</DropdownItem>
                                    <DropdownItem>Company Three</DropdownItem>
                                    <DropdownItem>Company Four</DropdownItem>
                                    <DropdownItem>Company Five</DropdownItem>
                                    <DropdownItem>Company Six</DropdownItem>
                                </DropdownMenu>
                            </Dropdown></td>
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
