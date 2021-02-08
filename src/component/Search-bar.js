import React, { useState } from 'react'

const SearchBar = () => {
    const [placeHolder, setPlaceHolder] = useState('tapez votre film .....');
    const [searchText, setSearchText] = useState('');
    return (
        <div className="row">
            <div className="col-md-8">
                <input type='text' className="form-control input-lg" placeHolder={placeHolder}/>
                {/* <p>{searchText}</p> */}
            </div>
        </div>
    )
}
export default SearchBar;