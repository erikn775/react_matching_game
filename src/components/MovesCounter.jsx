import React, {useState} from 'react';

export default function MovesCounter(){
    const [moves, setMoves] = useState(0);

    return(
        <div>
            <h3>Moves: {moves}</h3>
        </div>
    )
}