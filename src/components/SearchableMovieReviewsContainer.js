import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = '8U8paO2GihY6Ax3pAPxVMfFlaqGmGcBn';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here


class SearchableMovieReviewsContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            reviews: [],
            searchTerm: ''
          }
    }

    
    handleSubmit = (e) => {
        e.preventDefault();
        fetch(URL.concat(this.state.searchTerm))
            .then(response => response.json())
            .then(data => {
                this.setState({
                reviews: data.results
            })
        })
  }

  handleChange = event => {
    event.persist()
    this.setState({
      searchTerm: event.target.value
    })
  }

    render() {
        return (
            <div className="searchable-movie-reviews">
                <form onSubmit={this.handleSubmit}>
                    <input type="text" onChange={this.handleChange} />
                    <button type="submit">Submit</button>
                 </form>
    
            < MovieReviews reviews={this.state.reviews} />
            </div>
          );
        }


}
 
export default SearchableMovieReviewsContainer;