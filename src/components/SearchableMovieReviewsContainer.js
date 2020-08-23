import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

export default class SearchableMovieReviewsContainer extends Component {
    state = {
        reviews: [],
        searchTerm: ''
    }
    fetchSearchedReviews() {
        fetch(URL + `&query=${this.state.searchTerm}`)
        .then(response => response.json())
        .then(data => {
            this.setState({reviews: data.results.map(result =>  result.link.url)})
        })
    }
    render() {
        return (
            <div className='searchable-movie-reviews'>
                <form>
                    <input type='text' onChange={event => this.setState({searchTerm: event.target.value})}/>
                    <input type='submit'/>
                </form>
                <MovieReviews reviews={this.state.reviews}/>

            </div>
        )
    }
    componentDidMount() {
        this.fetchSearchedReviews()
    }
}
