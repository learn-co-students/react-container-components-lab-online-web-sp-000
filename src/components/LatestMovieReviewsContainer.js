import React from 'react'
import 'isomorphic-fetch'
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ'
const URL = `https://api.nytimes.com/svc/movies/v2/reviews/all.json?api-key=${NYT_API_KEY}`

class LatestMovieReviewsContainer extends React.Component {
  state = { reviews: [] }

  render() {
    return (
      <div className='latest-movie-reviews'>
        <h2>Latest Movie Reviews!</h2><br/>
        <MovieReviews reviews={this.state.reviews} message={<i>No reviews available at this time.</i>}/>
      </div>
    )
  }

  componentDidMount() {
    fetch(URL)
      .then(res => res.json())
      // .then(data => this.setState({ reviews: data.results }))
      .then(({ results }) => this.setState({ reviews: results }))
  }
}

export default LatestMovieReviewsContainer
