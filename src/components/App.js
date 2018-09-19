import React, { Component } from 'react';

import firebase from './firebase.js';
import '../App.css';

class App extends Component {
  state = {
    currentItem: '',
    username: '',
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const itemRef = firebase.database().ref('items');
    const item = {
      title: this.state.currentItem,
      user: this.state.username,
    };
    itemsRef.push(item);
    this.setState({
      currentItem: '',
      username: '',
    });
  };
  render() {
    return (
      <div className="app">
        <header>
          <div className="wrapper">
            <h1>Fun Food Friends</h1>
            <i className="fa fa-shopping-basket" aria-hidden="true" />
          </div>
        </header>
        <div className="container">
          <section className="add-item">
            <form onSubmit={this.handleSubmit}>
              <input
                type="text"
                name="username"
                placeholder="What's your name?"
                value={this.state.username}
                onChange={this.handleChange}
              />
              <input
                type="text"
                name="currentItem"
                placeholder="What are you bringing?"
                value={this.state.currentItem}
                onChange={this.handleChange}
              />
              <button>Add Item</button>
            </form>
          </section>
          <section className="display-item">
            <div className="wrapper">
              <ul />
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default App;
