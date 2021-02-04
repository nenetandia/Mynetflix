import React, { useState } from 'react'

const SearchBar = () => {
    const [placeHolder, setPlaceHolder] = useState('tapez votre film .....');
    const [searchText, setSearchText] = useState('');
    return (
        <div>
            <input type='text' placeHolder={placeHolder}/>
            <p>{searchText}</p>
        </div>
    )
}
export default SearchBar;