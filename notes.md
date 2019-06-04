 - 2 container components to wrap a single presentation component <MovieReviews>
 - MovieReviews has a list of movie reviews

 1) <LatestMovieReviewsContainer> - fetch a list of most recent reviews and display them.
 2) <SearchableMovieReviewsContainer> - search interface allow user to enter search term and receive a list of reviews that match.

 <MovieReviews> component stateless and functional. Output a top-level element with the class review-list.
    Each review wrapped by an element with class review.

    <LatestMovieReviewsContainer> and 
    <SearchableMovieReviewsContainer>

    Both container components - class componenets that maintain state.

    LatestMovieReviewsContainer - top-level wrapping element with className- latest-movie-reviews.
    SearchableMovieReviewsContainer - top-level wrapping element with className- searchable-movie-reviews.

    -----
    For the latest movie reviews: https://api.nytimes.com/svc/movies/v2/reviews/all.json
   To query the search API: https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=<search-term>
   In addition to making calls to these URLs, you will need to request an API key from here. Once you have the key, you will "sign" your requests by attaching the key to the URL like so:

https://api.nytimes.com/svc/movies/v2/reviews/all.json?api-key=<4MN3O8bvbYLEuqAaN0W1NRAzbF0hJYQ8>