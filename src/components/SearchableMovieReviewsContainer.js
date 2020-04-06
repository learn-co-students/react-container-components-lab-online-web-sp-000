import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const BASE_URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

class SearchableMovieReviewsContainer extends Component {

    state = {
        reviews: [],
        searchTerm: 'dog'
    }

    fetchURL = () => {
        fetch(BASE_URL.concat(this.state.searchTerm))
        .then(response => response.json())
        .then(json => {
            this.setState({
                reviews: json.results
            })
        })
        .catch(console.log("null"))
    }

    handleChange = (e) => {
        e.preventDefault()
        this.setState({
            searchTerm: e.target.value
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
