import React from 'react';

const MovieSearch = ({handleSubmit, handleChange}) => {
    return (
        <form onSubmit={handleSubmit}>
            <label>Search:</label>
            <input type="text" onChange={event => handleChange(event)} />
        </form>
    )
}

export default MovieSearch;