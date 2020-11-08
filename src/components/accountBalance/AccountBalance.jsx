import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Section = styled.section`
border: 3px black groove;
width: 30%;
margin: 10px auto;
padding 5px 5px;
`;
 
const Button = styled.button`
border: 1px black solid;
color: green;
background-color: #cccccc
`;
 
export default function AccountBalance (props) {
    const buttonText = props.showBalance ? 'Hide Balance' : 'Show balance';
    let content = null;
    if ( props.showBalance ) {
        content = <>Balance: ${props.amount}</>;
    }

    return (
        <Section>  
            {content}
            <Button onClick={props.handleBalanceVisibilityChange}>{buttonText}</Button>
        </Section>        
    );
}



/*AccountBalance.propTypes = {
    name: PropTypes.number.isRequired,
}
*/