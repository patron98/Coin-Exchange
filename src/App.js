import React from 'react';
import CoinList from './components/CoinList/CoinList';
import AccountBalance from './components/AccountBalance/AccountBalance';
import Exchangeheader from './components/ExchangeHeader/ExchangeHeader';
import styled from 'styled-components';

const Div = styled.div`
  text-align: center;
  background-color: grey;
  color: #cccccc;
  font-size: 20px;
  font: sans-serif;
`;

 
class App extends React.Component {
  state = {
    balance: 10000,
    showBalance: true,
    coinData: [
      {
        name: 'Bitcoin',
        ticker: 'BTC',
        balance: 0.17,
        price: 13999.99
      },
      
      {
        name: 'Ethereum',
        ticker: 'ETH',
        balance: 32.0,
        price: 399.99
      },
      {
        name: 'Tether',
        ticker: 'USDT',
        balance: 0,
        price: 1.0
      },
      {
        name: 'Chainlink',
        ticker: 'LINK',
        balance: 10000,
        price: 10.62
      },
      {
      name: 'Polkadot',
      ticker: 'DOT',
      balance: 7.0,
      price: 4.0
      }
    ]
  }
  handleBalanceVisibilityChange = () => {
    this.setState( function(oldState) {
      return {
        ...oldState,
      showBalance: !oldState.showBalance
      }
    });
  }


  handleRefresh = (valueChangeTicker) => {
    const newCoinData = this.state.coinData.map( function ( values ) {
      let newValues = { ...values };
      if( valueChangeTicker === values.ticker ) {
        const randomPercentage = 0.995 + Math.random() * 0.01;        
      newValues.price *= randomPercentage
      }
    return newValues;
  });

  this.setState({ coinData: newCoinData });
}
  render() {
    return (
      <Div className="App">
        <Exchangeheader />
        <AccountBalance 
        amount={this.state.balance}
        showBalance={this.state.showBalance}
        handleBalanceVisibilityChange={this.handleBalanceVisibilityChange}/>
        <CoinList 
        coinData={this.state.coinData} 
        showBalance={this.state.showBalance}
        handleRefresh={this.handleRefresh} />
      </Div>
    );
  }
}
  
 

export default App;
