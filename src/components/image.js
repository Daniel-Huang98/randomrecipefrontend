import React from 'react';
import './style/image.css'


class Image extends React.Component{
    render(){
        var imageURL = this.props.imageURL
        var serverURL = "https://recipeimages.herokuapp.com/"
        imageURL = serverURL.concat(imageURL)   
        console.log(imageURL)
        if(this.props.imageURL !== ""){
            return(
                <div className="image">
                    <img src={imageURL} alt={this.props.name}/>
                </div>
            );
        } else {
            return(<div className="image"></div>)
        }
        
    }
}

export default Image;