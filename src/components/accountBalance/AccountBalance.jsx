import React, { Component } from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Section = styled.section`
    margin: 10px auto 10px;
    padding: 10px;
    border: 10px groove grey;
    width: 30%;
    font: sans-serif;
`;
export default class AccountBalance extends Component {
    render() {
        return (
            <Section>
                Balance $ {this.props.amount}
            </Section>
        );
    }
}



AccountBalance.propTypes = {
    amount: PropTypes.number.isRequired, 
    
}