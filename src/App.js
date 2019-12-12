import React, { Component } from 'react'

// import logo from './logo.svg';
import './App.css';

import RemoteConsumer from './components/RemoteConsumer';

class App extends Component {

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
    return (
      <div className="App">
        <RemoteConsumer users={this.state.users} />
      </div>
    );
  }
}

export default App;
