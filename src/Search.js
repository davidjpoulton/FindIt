import React from "react";
import "./index.css";
import ImageSearch from "./ImageSearch"
import ImageList from "./ImageList"

const API_KEY = "16590830-36d4f1921dd84661282d8851a";




class Search extends React.Component {

    state = {
        images: [],

        error: null
    }

    handleGetRequest = async (e) => {

        e.preventDefault()
        const searchTerm = e.target.elements.searchValue.value
        const url = `https://pixabay.com/api/?key=16590830-36d4f1921dd84661282d8851a&q=${searchTerm}&image_type=photo`
        const request = await fetch(url)
        const response = await request.json()

        if (!searchTerm) {
            this.setState({error: "Please Enter a search term."})
        } else {
            this.setState({images: response.hits, error: null})
        }        
    }

    render() {
        
        return (
            <div>

                <ImageSearch handleGetRequest={this.handleGetRequest} />

                {
                    this.state.error !== null ?

                    <div className="error">{this.state.error}</div> :

                    <ImageList images={this.state.images} />
                }
                
            </div>
        ) 
    }
}

export default Search;