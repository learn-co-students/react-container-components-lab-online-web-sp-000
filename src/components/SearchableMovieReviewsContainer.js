import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'zNzGssP1OOPtiK1VQG9gCwPcxFWIorRt';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here

class SearchableMovieReviewsContainer extends Component {
    constructor(){
        super()
        this.state = {
            searchTerm: "",
            reviews: [{display_title: ""}]
        }
    }

    fetchData = () => {
        fetch(URL+"&query="+this.state.searchTerm)
        .then(response => response.json())
        .then(
        //   movieData => console.log(movieData.results)    
          movieData => this.setState({ reviews: movieData.results || [{display_title: "No Reviews for that Term"}]})
          )
        .catch(function(error) {
          console.log(error);
        });
    }

    componentDidMount() {
        // this.fetchData()
    }

    componentDidUpdate() {
        // this.fetchData()
    }

    handleSubmit = (event) => {
        event.preventDefault()
        document.getElementById("searchTerm").value = ""
        this.fetchData()
    }

    handleChange = (event) => {
        event.preventDefault()
        this.setState({
            searchTerm: event.target.value
        })
    }

    render(){
        return(
            <div>
                <form onSubmit={ this.handleSubmit }>
                    <input type="text" id="searchTerm" onChange={this.handleChange} value={this.state.searchTerm}></input>
                    <input type="submit"></input>
                </form>
                <div className="searchable-movie-reviews">
                        { <MovieReviews reviews={this.state.reviews}/>}
                        {/* { <MovieReviews display_title={this.state.reviews[0].display_title}/> } */}
                        {/* <div>{this.state.reviews[0].display_title}</div> */}
                </div>
            </div>
        )
    }
}

export default SearchableMovieReviewsContainer