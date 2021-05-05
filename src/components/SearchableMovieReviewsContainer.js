import React, { PureComponent } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

//const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const NYT_API_KEY = 'ze09mxkAV5Q6aW5bEWAWEzfHJmtqiS7S';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
+  `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here

export default class SearchableMovieReviewsContainer extends PureComponent {

    constructor(){
        super()
        this.state = {
            reviews: [],
            searchTerm: "",
        }
    }

 


    setsearchTerm = (e) => {
        e.preventDefault();
        let newsearchTerm = e.target.querySelector('input').value;
        this.setState({
            searchTerm: newsearchTerm,
        })

        this.renderReviews(newsearchTerm)


    }

    renderReviews = (searchTerm) =>{
        fetch(URL + `&query=${searchTerm}`)
        .then(resp => resp.json())
        .then(obj => {  
            console.log(obj) 
            this.setState({
                reviews: obj.results,
            })
         
        })
            
        
    }



    render(){
        return(
            <div>
            <form onSubmit={e => this.setsearchTerm(e)}>
                <input type="text" ></input>
                <button type = "submit">Search</button>
            </form>
             
             <MovieReviews reviews={this.state.reviews}/>
            
            </div>
        )
            
        
    }
}
