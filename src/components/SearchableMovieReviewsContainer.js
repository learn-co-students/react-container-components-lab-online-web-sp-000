import React, { Component } from 'react';
import 'isomorphic-fetch';

import MovieReviews from './MovieReviews';

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const BASE_URL =
    'https://api.nytimes.com/svc/movies/v2/reviews/search.json?' +
    `api-key=${NYT_API_KEY}&query=`;

class SearchableMovieReviewsContainer extends Component {
    state = {
        searchTerm: '',
        reviews: []
    };

    handleSearchInputChange = event =>
        this.setState({ searchTerm: event.target.value });

    handleSubmit = event => {
        event.preventDefault();

        fetch(BASE_URL.concat(this.state.searchTerm))
            .then(res => res.json())
            .then(res => this.setState({ reviews: res.results }));
    };

    render() {
        return (
            <div className="searchable-movie-reviews">
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="search-input">Search Movie Reviews</label>
                    <input
                        id="search-input"
                        type="text"
                        style={{ width: 300 }}
                        onChange={this.handleSearchInputChange}
                    />
                    <button type="submit">Submit</button>
                </form>
                {typeof this.state.reviews === 'object' &&
                    this.state.reviews.length > 0 && <h2>Movie Review By Search:</h2>}
                <MovieReviews reviews={this.state.reviews} />
            </div>
        );
    }
}

export default SearchableMovieReviewsContainer;

// import React, { Component } from 'react';
// import 'isomorphic-fetch';
// import MovieReviews from './MovieReviews'
// import SearchForm from './SearchForm'

// const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
// const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
//             + `api-key=${NYT_API_KEY}`;

// // Code SearchableMovieReviewsContainer Here
// class SearchableMovieReviewsContainer extends Component {
//     state = {
//         reviews: [],
//         searchTerm: ""
//     }

//     // componentDidMount () {
//     //     fetch(URL)
//     //     .then(resp => resp.json())
//     //     .then(data => this.setState({
//     //         reviews: data.results
//     //     }))
//     // }

//     changeHandler = (event) => {
//         this.setState({
//             searchTerm: event.target.value
//         })
//         fetch(URL.concat(this.state.searchTerm))
//             .then(res => res.json())
//             .then(res => this.setState({ reviews: res.results }));
//     }

//     render () {
//         // console.log("searchTerm", this.state.searchTerm)
//         return (
//             <div className="searchable-movie-reviews">
//                 <SearchForm searchTerm={this.state.searchTerm} changeHandler={this.changeHandler} />
//                 <MovieReviews reviews={this.state.reviews} />
//             </div>
//         )
//     }
// }

// export default SearchableMovieReviewsContainer

