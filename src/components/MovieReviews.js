import React from 'react'

let liKey = 0

const MovieReviews = props => {
  return (
    <ul className={'review-list'}>
      {props.reviews.map(({ display_title, byline, link, headline, summary_short }) => {
        liKey +=1
        return (
          <li className='review' key={liKey}>
            <h2><b>{display_title}</b></h2>
            <h4><i>{byline}</i></h4>
            <h3>
              <a href={link.url} target='_blank'>
                {headline}
              </a>
            </h3>
            <p>{summary_short}</p><br/>
          </li>
        )
      })}
    </ul>
  )
}

export default MovieReviews
