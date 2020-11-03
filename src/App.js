import React from 'react';
import AccountBalance from './components/accountBalance/AccountBalance';
import CoinList from './components/coinList/CoinList';
import ExchangeHeader from './components/exchangeHeader/ExchangeHeader';
import styled from 'styled-components';


const Div = styled.div`
  text-align: center;
  background-color: rgb(20, 56, 97);
  color: #cccccc;
`;


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      balance: 100000,
      coindata: [
        {
          name: 'Bitcoin',
          ticker: 'BTC',
          price: 14000
        },
        {
          name: 'Ethereum',
          ticker: 'ETH',
          price: 400
        },
        {
          name: 'Tether',
          ticker: 'USDT',
          price: 1.0
        },
        {
          name: 'Ripple',
          ticker: 'XRP',
          price: 0.2
        },
        
        /*
        <Coin name = "Bitcoin" ticker = "BTC" price = {14000} />
        <Coin name = "Ethereum" ticker = "ETH" price = {400} />
        <Coin name = "Tether" ticker = "USDT" price = {1} />
        <Coin name = "Ripple" ticker = "XRP" price = {0.2} />
        */
      ]
    }
  }
  render() {
    return (
      <Div className="App">
        <ExchangeHeader/>
        <AccountBalance amount={this.state.balance} />
        <CoinList coindata={this.state.coindata} />
  
      </Div>
    );
  }
  
}

export default App;
