import React, {
    Component
} from 'react';
import { Col, Row, Card, CardBody, CardHeader, Badge, Button, Collapse, Label, FormGroup} from 'reactstrap';
import TaskInput from '../Inputs/task_input'

class LeadsDetails extends Component {

    constructor(props) {
        super(props);
        this.toggleCustom = this.toggleCustom.bind(this);
        this.state = {
            custom: [false, false],
        };
    }

    toggleCustom(tab) {

        const prevState = this.state.custom;
        const state = prevState.map((x, index) => tab === index ? !x : false);

        this.setState({
            custom: state,
        });
    }

    render() {
        return (
            <Row>
                <Col>
                    <Card>
                        <CardHeader>
                            Lead Name
                        </CardHeader>
                        <CardBody>
                            <Row>
                                <Col sm="3">
                                    <Label htmlFor="street" > Company </Label>
                                </Col>
                                <Col sm="3">
                                    <Label htmlFor="street" > Contact Person </Label>
                                </Col>
                                <FormGroup >
                                    <Label htmlFor="country" > Lead Description </Label>
                                </FormGroup>
                            </Row>
                            <div id="exampleAccordion" data-children=".item">
                                <div className="item">
                                    <Button className="m-0 p-0" color="link" onClick={() => this.toggleCustom(0)} aria-expanded={this.state.custom[0]} aria-controls="exampleAccordion1">
                                        Create Task
                                    </Button>
                                    <Collapse isOpen={this.state.custom[0]} data-parent="#exampleAccordion" id="exampleAccordion1">
                                        <TaskInput />
                                    </Collapse>
                                    <p className="mb-3">
                                        Task details
                                    </p>
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        );
    }
}

export default LeadsDetails;