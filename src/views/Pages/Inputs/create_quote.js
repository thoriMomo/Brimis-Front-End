import React, {
    Component
} from 'react';
import {
    Col,
    Nav,
    NavItem,
    NavLink,
    Row,
    TabContent,
    TabPane,
    Form,
    FormGroup,
    Button,
    Card, CardBody, CardHeader, Collapse,
}
    from 'reactstrap';
import GeneralQuo from './general-quo';
import TenderQuo from './tender_quo';

class CreateQuo extends Component {

    constructor(props) {
        super(props);
        this.onEntering = this.onEntering.bind(this);
        this.onEntered = this.onEntered.bind(this);
        this.onExiting = this.onExiting.bind(this);
        this.onExited = this.onExited.bind(this);
        this.toggle = this.toggle.bind(this);
        this.toggleAccordion = this.toggleAccordion.bind(this);
        this.toggleCustom = this.toggleCustom.bind(this);
        this.toggleFade = this.toggleFade.bind(this);
        this.state = {
            collapse: false,
            accordion: [false, false],
            custom: [true, false],
            status: 'Closed',
            fadeIn: true,
            timeout: 300,
        };
    }

    onEntering() {
        this.setState({ status: 'Opening...' });
    }

    onEntered() {
        this.setState({ status: 'Opened' });
    }

    onExiting() {
        this.setState({ status: 'Closing...' });
    }

    onExited() {
        this.setState({ status: 'Closed' });
    }

    toggle() {
        this.setState({ collapse: !this.state.collapse });
    }

    toggleAccordion(tab) {

        const prevState = this.state.accordion;
        const state = prevState.map((x, index) => tab === index ? !x : false);

        this.setState({
            accordion: state,
        });
    }

    toggleCustom(tab) {

        const prevState = this.state.custom;
        const state = prevState.map((x, index) => tab === index ? !x : false);

        this.setState({
            custom: state,
        });
    }

    toggleFade() {
        this.setState({ fadeIn: !this.state.fadeIn });
    }

    render() {

        return (
            <Row>
                <Col>
                    <div id="accordion">
                        <Card>
                            <CardHeader id="headingOne">
                                <Button block color="link" className="text-left m-0 p-0" onClick={() => this.toggleAccordion(0)} aria-expanded={this.state.accordion[0]} aria-controls="collapseOne">
                                    <h5 className="m-0 p-0">Create General Quotation</h5>
                                </Button>
                            </CardHeader>
                            <Collapse isOpen={this.state.accordion[0]} data-parent="#accordion" id="collapseOne" aria-labelledby="headingOne">
                                <CardBody>
                                    <GeneralQuo />
                                </CardBody>
                            </Collapse>
                        </Card>
                        <Card>
                            <CardHeader id="headingTwo">
                                <Button block color="link" className="text-left m-0 p-0" onClick={() => this.toggleAccordion(1)} aria-expanded={this.state.accordion[1]} aria-controls="collapseTwo">
                                    <h5 className="m-0 p-0">Create Tender Quotation</h5>
                                </Button>
                            </CardHeader>
                            <Collapse isOpen={this.state.accordion[1]} data-parent="#accordion" id="collapseTwo">
                                <CardBody>
                                    <TenderQuo />
                                </CardBody>
                            </Collapse>
                        </Card>
                    </div>
                </Col>
            </Row>
        );
    }
}

export default CreateQuo;