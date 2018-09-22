import React, { Component } from 'react';

import firebase, { auth, provider } from './firebase.js';
import '../App.css';

class App extends Component {
  state = {
    currentItem: '',
    username: '',
    items: [],
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value.toUpperCase(),
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const itemsRef = firebase.database().ref('items');
    const item = {
      food: this.state.currentItem,
      person: this.state.username,
    };
    itemsRef.push(item);
    this.setState({
      currentItem: '',
      username: '',
    });
  };
  removeItem = itemId => {
    const itemRef = firebase.database().ref(`/items/${itemId}`);
    itemRef.remove();
  };

  componentDidMount() {
    const itemsRef = firebase.database().ref('items');
    itemsRef.on('value', snapshot => {
      let items = snapshot.val();
      let newState = [];
      for (let item in items) {
        newState.push({
          id: item,
          food: items[item].food,
          person: items[item].person,
        });
      }
      this.setState({
        items: newState,
      });
    });
  }
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
                required
                name="username"
                placeholder="What's your name?"
                value={this.state.username}
                onChange={this.handleChange}
              />
              <input
                type="text"
                required
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
              <ul>
                {this.state.items.map(item => {
                  return (
                    <li key={item.id}>
                      <h3 className="item-head">
                        {item.food}{' '}
                        <i
                          onClick={() => this.removeItem(item.id)}
                          className="fa fa-times-circle-o close"
                          aria-hidden="true"
                        />
                      </h3>
                      <p>brought by: {item.person}</p>
                    </li>
                  );
                })}
              </ul>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default App;
