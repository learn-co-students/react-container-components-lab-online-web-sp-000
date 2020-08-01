import 'isomorphic-fetch'
import { Component, default as React } from 'react'
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'HLmHtbAjosLjDPXqFMsCSSwRtArAZUZ0'
const URL =
  'https://api.nytimes.com/svc/movies/v2/reviews/all.json?' +
  `api-key=${NYT_API_KEY}`

export class LatestMovieReviewsContainer extends Component {
  state = { reviews: [] }
  componentDidMount () {
    fetch(URL)
      .then(res => res.json())
      .then(json => this.setState({ reviews: json.results }))
  }
  render () {
    return (
      <div className='latest-movie-reviews'>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}

export default LatestMovieReviewsContainer
