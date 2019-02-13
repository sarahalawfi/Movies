import React, { Component } from 'react';
import Cast from './cast';

class Movie extends Component {

 
  render() {
    const Actors=this.props.movie.cast.map(actor => 
    <Cast name={actor} role={actor}/>);

    return (
      <div>
        <h2>{ this.props.movie.title }</h2>
        <img src={ this.props.movie.poster } alt={this.props.movie.title} />

        <div><strong>Rating: { this.props.movie.rating }</strong></div>
        <p>
        { this.props.movie.description }
        </p>

      <ul>
        
          {Actors}
        
      </ul>


      </div>
    );
  }
 
}

export default Movie;