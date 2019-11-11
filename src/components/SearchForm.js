import React from 'react'

const SearchForm = (props) => {
    return (
        <form>
            <input onChange={props.changeHandler} type="text" value={props.searchTerm} placeholder="Search for a movie"/>
        </form>
    )
}

export default SearchForm