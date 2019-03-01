import React, { Component } from 'react';
import './Create.css';

class Create extends Component {
  constructor(props){
    super(props);
    this.state = {
      title: '',
      storyLine: '',
      trailerUrl: '',
      poster: ''
    }

    this.handleChange = props.handleChange.bind(this);

  }

  render() {
    return (
      <div className="Create">
        <h1>Create Movie</h1>
        <form onSubmit={(event) => this.props.handleCreateSubmit(event, this.state)}>
          <label htmlFor="title">Title</label>
          <input type="text" name="title" id="title" value={this.state.title} onChange={this.handleChange} placeholder="Titanic" />
          <label htmlFor="storyLine">Story Line</label>
          <input type="text" name="storyLine" id="storyLine" value={this.state.storyLine} onChange={this.handleChange} placeholder="Text" />
          <label htmlFor="trailerUrl">Trailer Url</label>
          <input type="text" name="trailerUrl" id="trailerUrl" value={this.state.trailerUrl} onChange={this.handleChange} placeholder="https://www.youtube.com/watch?v=DNyKDI9pn0Q" />
          <label htmlFor="poster">Movie Poster</label>
          <input type="text" name="poster" id="poster" value={this.state.poster} onChange={this.handleChange} placeholder="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRzg6o0KjhufKFU1iBNr1zuyi0YDNgCUw4Ky5SNATZDVKaIUkiAA" />
          <input type="submit" value="Create" />
        </form>
      </div>
    );
  }
}

export default Create;
