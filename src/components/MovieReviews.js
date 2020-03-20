// Code MovieReviews Here
import React from 'react';

export default function MovieReviews(props){

    let lis = () => {
        if(props.reviews !== undefined){
        return (
                <ul className="review-list">
                <li className="review">{props.reviews[0].display_title}: {props.reviews[0].summary_short} </li>
                <li className="review">{props.reviews[1].display_title}: {props.reviews[1].summary_short} </li>
                <li className="review">{props.reviews[2].display_title}: {props.reviews[2].summary_short} </li>
                </ul>
            )
        }
    }
    return (
        <div>
            {console.log("props:", props.reviews[0])}
            {lis()}
        </div>
    )
}