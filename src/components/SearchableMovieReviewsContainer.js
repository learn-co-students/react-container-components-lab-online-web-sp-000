import 'isomorphic-fetch'
import { Component, default as React } from 'react'
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'HLmHtbAjosLjDPXqFMsCSSwRtArAZUZ0'
const URL =
  'https://api.nytimes.com/svc/movies/v2/reviews/search.json?' +
  `api-key=${NYT_API_KEY}`

export class SearchableMovieReviewsContainer extends Component {
  state = { reviews: [], searchTerm: '' }

  fetchReviews = () => {
    fetch(URL + `&query=${this.state.searchTerm}`)
      .then(res => res.json)
      .then(json => this.setState({ reviews: json }))
  }
  render () {
    return (
      <div className='searchable-movie-reviews'>
        <MovieReviews reviews={this.state.reviews} />
        <form onSubmit={this.fetchReviews}></form>
      </div>
    )
  }
}

export default SearchableMovieReviewsContainer
