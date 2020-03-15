import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const BASE_URL =
  'https://api.nytimes.com/svc/movies/v2/reviews/search.json?' +
  `api-key=${NYT_API_KEY}&query=`;

// Code SearchableMovieReviewsContainer Here

class SearchableMovieReviewsContainer extends Component {

    state = {
        reviews: [],
        searchTerm: 'dog'
    }

    fetchURL = () => {
        fetch(BASE_URL.concat(this.state.searchTerm))
        .then(res => res.json())
        .then(json => {
            this.setState({
                reviews: json.results
            })
        })
        .catch(console.log("bad"))
    }

    handleChange = (event) => {
        event.preventDefault()
        this.setState({
            searchTerm: event.target.value
        })
    }

    componentDidMount() {
        this.fetchURL()
    }


    render() {
        return (
            <div>
                 <form>
                    <input onChange={this.handleChange}></input>
                </form>
                <button onClick={this.fetchURL}>Search</button>
                {<MovieReviews reviews={this.state.reviews}/>}
            </div>
        )
    }
}

export default SearchableMovieReviewsContainer
