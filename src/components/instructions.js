import React from 'react';
import './style/instructions.css'


class Instructions extends React.Component{
    render(){
        var instructionsList = [];
        var instructions = this.props.instructions;
        if(instructions !== undefined){
            for(var itr=0; itr<instructions.length; itr++){
                if(instructions[itr] !== ""){
                    instructionsList.push(<li>{instructions[itr]}</li>)
                }
            }
        }
        return(
            <div className="instructions" onClick={onclick}>
                <h3>Instructions</h3>
                <ol>{instructionsList}</ol>
            </div>
        );
        
        
    }
}

export default Instructions;