import React from 'react';


const ImageSearch = ({handleGetRequest}) => {

    return (
        <div className="search">
            <h4>Online Image Search</h4>
            <form onSubmit={handleGetRequest}>
                <input type="text" autoComplete="off" name="searchValue" placeholder="Search The Web..." id=""/>
                <button><img src="imgs/glass.png" alt=""/></button>
            </form>
        </div>
    )
}

export default ImageSearch;