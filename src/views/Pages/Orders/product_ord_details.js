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
    Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Table,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
}
    from 'reactstrap';

class ProductSale extends Component {

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
            <Row>
                <Col>
                <Card>
                    <CardHeader>
                        Product Order Details - REF: 00000000
                    </CardHeader>
                    <CardBody>

                            <Row>
                                <Col sm="3">
                                    <Label htmlFor="street" > Company </Label>
                                </Col>
                                <Col sm="3">
                                    <Label htmlFor="street" > Contact Person </Label>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
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
                                                <td>Product One
                                        </td>
                                                <td>0</td>
                                                <td>R0.00</td>
                                            </tr>
                                            <tr>
                                                <td>Product Two</td>
                                                <td>0</td>
                                                <td>R0.00</td>
                                            </tr>
                                            <tr>
                                                <td>Product Three</td>
                                                <td>0</td>
                                                <td>R0.00</td>
                                            </tr>
                                            <tr>
                                                <td>Product Four</td>
                                                <td>0</td>
                                                <td>R0.00</td>
                                            </tr>
                                            <tr>
                                                <td>Product Five</td>
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
                                </Col>
                            </Row>
                    </CardBody>
                </Card>
                </Col>
            </Row>
        );
    }
}

export default ProductSale;