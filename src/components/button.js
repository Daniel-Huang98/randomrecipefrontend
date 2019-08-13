import React from 'react';
import './style/button.css'


class Button extends React.Component{
    render(){
        var onclick = this.props.onclick  
        return(
            <div className="button" onClick={onclick}>
                <p>{this.props.text}</p>
            </div>
        );
        
        
    }
}

export default Button;