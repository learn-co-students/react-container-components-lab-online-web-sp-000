import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const BASE_URL =
  'https://api.nytimes.com/svc/movies/v2/reviews/search.json?' +
  `api-key=${NYT_API_KEY}&query=`;



class SearchableMovieReviewsContainer extends React.Component {
  constructor() {
  super()
  this.state = {
    searchTerm: "",
    reviews: [] }
  }

  // componentDidMount(){
  //  this.fetchReviews
  //   }

  fetchReviews = (searchTerm) =>{
    fetch(BASE_URL.concat(this.state.searchTerm))
    .then(resp => resp.json())
    // .then(json => console.log(json.results))
    .then(data => this.setState({ reviews: data.results }))

  }

  handleChange = event => {
      this.setState({
        searchTerm: event.target.value
      })///remember can't access the new state until re-render
    }


componentDidUpdate(){
    console.log(this.state.searchTerm)

}

handleSubmit = (event) =>{
  event.preventDefault();
  this.fetchReviews(this.state.searchTerm)
  console.log(this.state.searchTerm)
}

  render() {
     return(
   <div>
     <h1>Search Reviews</h1>

      <form onSubmit= {event => this.handleSubmit(event)}>
        <input type ="text" name="query" value={this.state.searchTerm} onChange={event => this.handleChange(event)}/>
    </form>

        <MovieReviews reviews={this.state.reviews} />
 </div>
     )
   }

}

export default SearchableMovieReviewsContainer
