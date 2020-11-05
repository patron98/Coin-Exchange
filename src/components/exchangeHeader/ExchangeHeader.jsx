import React, { Component } from 'react';
import logo from './logo.svg';
import styled from 'styled-components';

const Img = styled.img`
height: 20vmin;
pointer-events: none;
`;
 
const Header = styled.header`
background-color: #282c34;
min-height: 20vh;
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
color: white;
`;

const H1 = styled.h1`
font-size: 2rem;
`;

export default class ExchangeHeader extends Component {
    render() {
        return (
            <Header>
                <Img src={logo} alt="React logo"/>
                <H1>
                    Coin Exchange
                </H1>
            </Header>
        )
    }
}
