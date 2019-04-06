import React, { Component } from 'react';
import NewPost from './NewPost';
import './styles.css';

class App extends Component {
  render() {
    return (
      <div className='container columns is-narrow is-centered'>
        <NewPost />
      </div>
    );
  }
}

export default App;
