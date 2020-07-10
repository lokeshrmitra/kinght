import React from 'react'

import Knight from '../Knight/Knight'

import './Square.css'

class Square extends React.Component{

    render(){
        let classList = ["square"];        
        if((this.props.posX + this.props.posY) % 2 === 0) {
            classList.push("white")
        } else classList.push("black")

        let available = this.props.availableSquares.find(sq => 
            sq.posX === this.props.posX && sq.posY === this.props.posY
        )
        if(available !== undefined) classList.push("available")

        return(
            <div 
            className={classList.join(' ')}
            onClick={this.props.clickHandler.bind(this, this.props.posX, this.props.posY)}
            >
                {
                    (this.props.knightSquare.posX === this.props.posX
                        && this.props.knightSquare.posY === this.props.posY )? 
                    <Knight />
                    :
                    null
                }
            </div>
        )
    }
}

export default Square;