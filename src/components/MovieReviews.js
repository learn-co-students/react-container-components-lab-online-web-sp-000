import React from 'react'
import Card from './Card'
const MovieReview = (props) => {
    return (
        <div className={"review"}>
            <Card>
                <img src={props.multimedia ? props.multimedia.src : ""} alt=""/>
                <h4>{props.displayTitle}</h4>
                <h6>{props.author}  {props.publicationDate}</h6>
                <p><strong>{props.isCriticsPick ? "CRITICS' PICK" : ""}</strong></p>
                <p><strong>{props.headline}</strong></p>
                <p>{props.shortSummary}</p>
                <a href={props.link.url} target="_">{props.link.suggested_link_text}</a>
            </Card>
        </div>
    )
}

export default MovieReview
