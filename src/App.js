import React, { Component } from 'react'

// import logo from './logo.svg';
import './App.css';

import RemoteConsumer from './components/RemoteConsumer';

function App () {
  
  return(
  <RemoteConsumer url="https://reqres.in/api/users" />
  );
}

export default App;
