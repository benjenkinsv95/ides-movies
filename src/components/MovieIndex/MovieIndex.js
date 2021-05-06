import React, { Component } from 'react'

import { Link } from 'react-router-dom'

class MovieIndex extends Component {
  constructor (props) {
    // this is a best practice
    // this sets `this.props` in the constructor
    super(props)

    // keep track of all the movies we want to show, they will initially be null
    this.state = {
      movies: null
    }
  }

  render () {
    const { movies } = this.state

    // if we haven't loaded any movies
    if (!movies) {
      return 'Loading'
    }

    // turn each movie into a link to that movie
    const moviesJsx = movies.map(movie => (
      <Link to={`/movies/${movie._id}`} key={movie._id}>
        <li>
          {movie.title} by {movie.director}
        </li>
      </Link>
    ))

    return (
      <div className="row">
        <div className="col-sm-10 col-md-8 mx-auto mt-5">
          <h3>Movies</h3>
          <ul>
            {moviesJsx}
          </ul>
        </div>
      </div>
    )
  }
}

export default MovieIndex
