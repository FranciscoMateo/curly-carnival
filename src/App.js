import React, { Component } from 'react'

// import logo from './logo.svg';
import './App.css';

import RemoteConsumer from './components/RemoteConsumer';

function App () {
  
  return(
  <RemoteConsumer url="https://reqres.in/api/users" />
  );
/*
  state = {
    users: []
  }

  componentDidMount() {
    fetch('https://reqres.in/api/users')
    .then(res => res.json())
    .then((data) => {
      this.setState({ users: data.data })
    })
    .catch(console.log)
  }

  render (){

    if (this.state.users.length > 0) {
      return (
        <div className="app container">
          <RemoteConsumer users={this.state.users} />
        </div>
      )
    } else {
      return <div className="container loading-panel">Loading...</div>
    }

  }*/
}

export default App;
