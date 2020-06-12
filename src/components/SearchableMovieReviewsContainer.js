import React from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'


const NYT_API_KEY = '6wMSkszq51APi4GKrbKEWUKS7M6IZ04o';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`


// Code SearchableMovieReviewsContainer Here

class SearchableMovieReviewsContainer extends React.Component {
    constructor() {
      super()
   
      this.state = {
        reviews: [],
        searchTerm: ""
      };
    }

    handleSubmit= event => { 
        event.preventDefault()
        return this.fetchMovies(this.state.searchTerm)  
    }

    queryChange= event => {
        this.setState({
            searchTerm: event.target.value
        })
    }

    fetchMovies = (search) => 
    {
        const query = `&query=${search}`
        fetch(URL + query)
          .then(response => response.json())
          .then(data => this.setState({ reviews: data.results }))  
    }
   
    componentDidMount() {
      this.fetchMovies()
    }
   
    render() {
      return(
      <div>
      <h4>Search for more movie reviews here</h4>  
      <form onSubmit= {this.handleSubmit}>

      <input
        type="text"
        name="searchTerm"
        onChange={this.queryChange}
        value={this.state.searchTerm}
      />
      <input type = "submit"/>
    </form><br/><br/>
    
    <MovieReviews reviews={this.state.reviews}/>
    </div>
    )}
  }
   
  export default SearchableMovieReviewsContainer;