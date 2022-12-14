import logo from './logo.svg';
import './App.css';
import Hsi from './Hsi.js';
import { Web3ReactProvider } from '@web3-react/core';
import Web3 from 'web3';


function getLibrary(provider, connector) {
  return new Web3(provider);
}

function App() {
  return (
  	<Web3ReactProvider getLibrary={getLibrary}>
    	<div className="App">
      		<Hsi/>
    	</div>
   	</Web3ReactProvider>
  );
}

export default App;
