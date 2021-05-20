import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'
import LatestMovieReviews from './LatestMovieReviewsContainer';

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
export default class SearchableMovieReviews extends Component{
    constructor(){
        super()
        this.state ={
            filter: "",
            reviews: []
        }
    }

    handleChange = (event) => {
        this.setState({
            filter: event.target.value
        })
    }

    componentDidMount(){
        if (this.state.filter != ""){
            fetch((URL + `&query=${this.state.filter}`))
                .then(resp => resp.json())
                .then(json => json.results)
                .then(data => this.setState({
                    reviews: data,
                }))
        }
        else{
            fetch(URL)
                .then(resp => resp.json())
                .then(json => json.results)
                .then(data => this.setState({
                    reviews: data
                }))
        }
    }

    handleChange = (event) => {
        this.setState({
            filter: event.target.value
        })
    }

    handleSubmit = (event) => {
        this.setState({
            filter: event.target.value
        })
    }


    render(){
        console.log("Before the render:")
        console.log(this.state.reviews)
        return(
            <div className="searchable-movie-reviews">
                <form onSumbit={this.handleSubmit} >
                    <input type="text" name="filterBar" value=""
                     onChange={event => this.handleChange(event)} />
                </form>
                {console.log("At render")}
                {console.log(this.state.reviews)}
                <LatestMovieReviews reviews={this.state.reviews} />
            </div>
        )
    }
}