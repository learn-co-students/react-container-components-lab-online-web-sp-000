import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'lxOE0es240t2dmtqle7V0O0aeSbyOJsL';
//'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
export default class SearchableMovieReviewsContainer extends Component{
    state = {
        searchTerm: "",
        reviews: ""
    }

    changeSearchTerm = (e) => {
        console.log("e:", e)
        this.setState({
            searchTerm: e.target.value
        })
    }

    submitSearchTerm = () => {
        fetch(URL + `&query=${this.state.searchTerm}`)
        .then( (response) => { 
            console.log(response.json())
            return response.json();
        })
        .then( (myjson) => {
            console.log(myjson)
            this.setState({
                reviews: myjson.results
            })
        })
    }

    render(){
        return (
            <div>
                <form onSubmit={this.submitWord} >
                    <input type="text" value={this.state.searchTerm} onChange={this.changeWord} />
                </form>
                <MovieReviews reviews={this.state.reviews} />
            </div>
        )
    }
}