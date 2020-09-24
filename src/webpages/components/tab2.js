import React from 'react';
import { Form } from 'react-bootstrap'
import exchangeIcon from '../../assets/exchange-icon.png'
import {connect} from 'react-redux';
import language from '../translationlang';

class SecondTab extends React.Component {

    render() {
        const { lang } = this.props;
        return (
            <div className="exchange-container">
                <Form>
                    <div className="paying-section">
                        <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Label>You Pay</Form.Label>
                            <Form.Control as="Select">
                            <option>{language[lang].deeds}</option>
                        <option>{language[lang].invoices}</option>
                        <option>{language[lang].obl}</option>

                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>{language[lang].name}</Form.Label>
                            <Form.Control type="name" placeholder="0" />
                        </Form.Group>


                    </div>
                    <div className="icon"><img src={exchangeIcon} alt="echange-icon" /></div>
                    <div className="receive-section">
                        <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Label>You Recive</Form.Label>
                            <Form.Control as="Select">
                                <option>USDC</option>
                                <option>USDT</option>
                                <option>DAI</option>

                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>{language[lang].name}</Form.Label>
                            <Form.Control type="name" placeholder="0" />
                        </Form.Group>


                    </div>
                    <button type="submit" class="btn">Make Swap</button>
                </Form>
            </div>
        )
    };
}

const mapStateToProps = state => {
    return {
        lang: state.language.language,
    }
};

export default connect(mapStateToProps)(SecondTab);