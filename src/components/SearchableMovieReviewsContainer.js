import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'RRTAqevrKuACGa7gYFeCCfmBbYI0vSLj';

  // 1) should have the state properties "reviews" and "searchTerm"
  // 2) should have top-level element with class "searchable-movie-reviews"
  // 3) should fetch data from the New York Times API on form submission
  // 4) should render reviews after reviews state updated

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component {

  constructor(props){
    super(props)
    this.state = {
      reviews: [],
      searchTerm: ''
    }
  }

  handleSearch = (event) => {
    this.setState({
      searchTerm: event.target.value
    })
  }

  fetchReviews = () => {
    fetch(`https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${this.state.searchTerm}` + `api-key=${NYT_API_KEY}`)
      .then( resp => resp.json())
      .then( data => console.log(data))
  }

  render(){
    return(
      <div className="searchable-movie-reviews">
      <form onSubmit={ (event) => this.fetchReviews()}>
        <input type='text' value={this.state.search} onChange={ (event) => this.handleSearch(event) }></input>
        <input type="submit" value="Submit" />
      </form>
      <MovieReviews reviews={this.state.reviews}/>
      </div>
    )
  }

}

export default SearchableMovieReviewsContainer;
