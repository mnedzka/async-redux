import React, { Component } from 'react';
import CreatePost from './containers/CreatePost';
import PostList from './containers/PostList';
import '../node_modules/bulma/css/bulma.min.css';
import './styles.css';

class App extends Component {
  render() {
    return (
      <div className='container columns  is-centered'>
        <div className='is-half'>
          <CreatePost />
        </div>
        <div className='is-half'>
          <PostList />
        </div>
      </div>
    );
  }
}

export default App;
