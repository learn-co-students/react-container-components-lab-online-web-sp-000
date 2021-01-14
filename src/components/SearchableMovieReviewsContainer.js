import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'jxqeUylhAnNwKBb3cLR18GSzMUicIKN0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here

class SearchableMovieReviewsContainer extends Component{
    constructor(){
        super()
        this.state = {
            searchTerm: "",
            reviews: []    
        }
        
    }
    
    submitHandler = (e)=>{
        e.preventDefault()
        fetch(URL+`&query=${this.state.searchTerm}`)
        .then(resp=>resp.json())
        .then(json=>{
            let movieReviews = []
            json.results.map(m => movieReviews.push({display_title: m.display_title, byline: m.byline, summary_short: m.summary_short}))
            this.setState({
                reviews: movieReviews
            })
        })

    }

    changeHandler = (e) =>{
        this.setState(
            {searchTerm: e.target.value }
        )
    }

    render(){
        return(
            <div className = "searchable-movie-reviews">
            <form onSubmit = {this.submitHandler}>
              <p>Search reviews</p>
              <input type = "text" name = "searchTerm" value = {this.state.searchTerm} onChange = {this.changeHandler}></input>
              <button type="submit">Search</button>

            </form>

            <MovieReviews reviews = {this.state.reviews}/>

        </div>
        )
    }

}

export default SearchableMovieReviewsContainer