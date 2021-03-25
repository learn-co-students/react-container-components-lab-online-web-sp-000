import React from 'react'
import 'isomorphic-fetch'
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ'
const URL = `https://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key=${NYT_API_KEY}&query=`

class SearchableMovieReviewsContainer extends React.Component {
  constructor() {
    super()
    this.state = { searchTerm: '', reviews: [] }
    this.input = React.createRef()
  }

  render() {
    return (
      <div className='searchable-movie-reviews'><br/>
        <form onSubmit={this.fetchReviews}>
          <input type="text" onChange={this.onChange} value={this.state.searchTerm} ref={this.input}/>
          <input type="submit" value='Search'/>
        </form>
        <MovieReviews
          reviews={this.state.reviews}
          message={<b>Search for movie reviews</b>}
        /><br/>
      </div>
    )
  }

  onChange = (e) => {
    this.setState({ searchTerm: e.target.value })
  }

  fetchReviews = (e) => {
    e.preventDefault()
    fetch(URL + this.state.searchTerm)
      .then(res => res.json())
      .then(data => this.setState({ reviews: data.results }))
    this.setState({ searchTerm: '' })
    this.input.current.focus()
  }

  componentDidMount() {
    this.input.current.focus()
  }
}

export default SearchableMovieReviewsContainer
