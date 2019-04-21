import React from 'react';
import CreatePost from './containers/CreatePost';

class NewPost extends React.Component {
  state = {
    title: '',
    body: '',
  };

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.title.trim() && this.state.body.trim()) {
      console.log(this.state);
      this.handleReset();
    }
  };

  handleReset = () => {
    this.setState({
      title: '',
      body: '',
    });
  };

  render() {
    return (
      <div className='field'>
        <form onSubmit={this.handleSubmit} className='field'>
          <div className='field'>
            <input
              type='text'
              placeholder='Title'
              className='input'
              name='title'
              onChange={this.handleInputChange}
              value={this.state.title}
            />
          </div>
          <div className='field'>
            <textarea
              cols='19'
              rows='8'
              placeholder='Body'
              className='textarea'
              name='body'
              onChange={this.handleInputChange}
              value={this.state.body}
            />
          </div>
          <div className='control'>
            <button type='submit' className='button is-link'>
              Add Post
            </button>
            <button type='button' className='button is-text' onClick={this.handleReset}>
              Reset
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default NewPost;
