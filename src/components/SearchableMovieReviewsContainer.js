import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component {
    constructor() {
        super();
    
        this.state = {
            searchTerm: "",
            reviews: []
        };
      }
    componentDidMount() {
        this.fetchURLs()
      }
    
      fetchURLs = () => {
        fetch(`https://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key=Vf5Peb4vdEoDQikrNw8QuGKe6O4NaqmD&query=${this.state.searchTerm}`)
        .then(response => response.json())
          .then(reviewData => {
            this.setState({
              reviews: reviewData.results.map(review => review)
            })
          })
      }
   
      handleClick = (event) => {
        event.preventDefault();
        this.fetchURLs(this.state.searchTerm)
        }

        handleChange = (event) => {
            const value = event.target.value;
            this.setState({
                searchTerm: value
            });
        };
        
        render() {
    

            return (
                <div className="latest-movie-reviews">
                <form onSubmit={this.handleClick}>
                    <input value={this.state.searchTerm} onChange={this.handleChange}/>
                    <button>Find Movie</button>

                </form>
                
                    <p> Movies:</p>
                    <MovieReviews reviews={this.state.reviews}/>
                </div>
                
            
            )
        }
    }
  
  export default SearchableMovieReviewsContainer;