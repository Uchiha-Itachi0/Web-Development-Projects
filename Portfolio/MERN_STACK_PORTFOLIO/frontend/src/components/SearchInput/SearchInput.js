import React from 'react';
import SearchInputCotainer from "./SearchInputStyle";

const finalData = [];

const SearchInput = (props) => {


    return (
        <SearchInputCotainer
            className={props.className}>
            <input type="search" placeholder="Search" className="search_input" value={props.value}
                onChange={(e) => props.inputchange(e.target.value)}
            />
        </SearchInputCotainer>
    )
}

export { finalData };
export default SearchInput