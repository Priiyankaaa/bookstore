import React from 'react';
import './App.css';
const SearchArea = (props) =>{
return(
        <div className="search-area">
            <form onSubmit={props.searchBook}action="">
                <input onChange={props.handleSearch} type="search"  placeholder="type here" />
                <button type="submit" class="search">Search</button>   
            <select defaultValue="Sort" onChange={props.handleSort}>
                <option disabled value="Sort" class="sort">Sort</option>
                <option value="Newest">Newest</option>
                <option value="Oldest">Oldest</option>
            </select>
            </form>
        </div>
    )
}
export default SearchArea;