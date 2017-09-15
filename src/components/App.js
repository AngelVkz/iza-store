import React, { Component } from 'react';
import logo from '../img/logo.svg';
import './App.css';
import Header from './Header'
import Body from './Body'
import {
  ApolloProvider,
  ApolloClient,
  createNetworkInterface
} from 'react-apollo'

const networkInterface = createNetworkInterface({
  uri: "https://api.graph.cool/simple/v1/cj7lbnmr50eo00178vqn3gycs"
})

const client = new ApolloClient({
  networkInterface
})

class App extends Component {
  render() {
    return (
     <ApolloProvider client={client} >
        <div className="App container">
          <Header />
           <Body />
        </div>
     </ApolloProvider>
    );
  }
}

export default App;
