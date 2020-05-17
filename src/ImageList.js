import React from 'react';
import { Link } from "react-router-dom";



const ImageList = (props) => {

    return (
        <div className="images-container">
            {props.images.map((image) => {
                return (
                    <div className="images" key={image.id} >
                        <img src={image.largeImageURL} alt={image.tags}/>

                        <Link to={{
                            pathname: `/image/${image.id}`,
                            state: {image}
                        }}>
                            <button className="image-button">View</button>
                        </Link>
                    </div>
                )
            })}
        </div>
    )
}

export default ImageList;