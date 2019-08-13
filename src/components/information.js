import React from 'react';
import './style/information.css'


class Information extends React.Component{
    render(){
        var name = this.props.name
        var category = this.props.category
        var region = this.props.region
        return(
            <div className="information" >
                <h2>Recipe: </h2>
                <p id="recipename">{name}</p>
                <h2>Category: </h2>
                <p>{category}</p>
                <h2>Region: </h2>
                <p>{region}</p>
            </div>
        );
        
        
    }
}

export default Information;