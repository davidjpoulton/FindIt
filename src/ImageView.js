import React from "react";
import {Link} from "react-router-dom"



const ImageView = (props) => {

    const { largeImageURL: image, tags, user: owner, pageURL} = props.location.state.image

    return (
        <div className="image-view">
            <img src={image} alt={tags}/>
            <p>&copy;Pixelbay</p>
            <h4>Credit: <span>{owner}</span></h4>
            <h3>Download: <span><a href={pageURL}>Go To Download</a></span></h3>
            <button><Link to="/">GO BACK</Link></button>
        </div>
    )
}

export default ImageView;