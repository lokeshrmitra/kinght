import React from 'react'

import './Board.css'

import Square from '../Square/Square';

class Board extends React.Component{
    state = {
        knightSquare:{posX: 1, posY: 5},
        availableSquares:[
            {posX:2, posY: 3},
            {posX:3, posY: 4}
        ],
        sizeX:5,
        sizeY:5
    }

    calculateAndReturnAvailablePostions = (kX, kY) => {
        let positions = [];
        if(kX-1 >= 1 && kY-2 >= 1) positions.push({posX:(kX-1), posY:(kY-2)})
        if(kX+1 <= this.state.sizeX && kY-2 >= 1) positions.push({posX:(kX+1), posY:(kY-2)})
        if(kX-2 >= 1 && kY-1 >= 1) positions.push({posX:(kX-2), posY:(kY-1)})
        if(kX+2 <= this.state.sizeX && kY-1 >= 1) positions.push({posX:(kX+2), posY:(kY-1)})
        if(kX-2 >= 1 && kY+1 <= this.state.sizeY) positions.push({posX:(kX-2), posY:(kY+1)})
        if(kX+2 <= this.state.sizeX && kY+1 <= this.state.sizeY) positions.push({posX:(kX+2), posY:(kY+1)})
        if(kX-1 >= 1 && kY+2 <= this.state.sizeY) positions.push({posX:(kX-1), posY:(kY+2)})
        if(kX+1 <= this.state.sizeX && kY+2 <= this.state.sizeY) positions.push({posX:(kX+1), posY:(kY+2)})
        return positions;
    }

    squareClickHandler = (newPosX, newPosY) => {
        if(this.state.availableSquares.length > 0){
            let aSq = this.state.availableSquares.find(sq => sq.posX === newPosX && sq.posY === newPosY)
            if(aSq !== undefined){
                this.setState({
                    availableSquares: this.calculateAndReturnAvailablePostions(newPosX, newPosY),
                    knightSquare: {
                        posX: newPosX,
                        posY: newPosY
                    }
                })
            }
        }else{
            this.setState({
                availableSquares: this.calculateAndReturnAvailablePostions(newPosX, newPosY),
                knightSquare: {
                    posX: newPosX,
                    posY: newPosY
                }
            })
        }
    }

    componentDidMount = () => {
        
    }

    render(){
        let squares = [];
        for(let i = 1; i <= this.state.sizeY; i++){
            for(let j = 1; j <= this.state.sizeX; j++){                
                squares.push(
                    <Square 
                        knightSquare={this.state.knightSquare} 
                        clickHandler = {this.squareClickHandler}
                        availableSquares = {this.state.availableSquares}
                        key={i+''+j} 
                        posY = {i}
                        posX = {j}
                        />
                )                
            }
        }

        return(
            <div className="board">
                {
                    squares
                }
            </div>
        )
    }
}

export default Board;