import React, { useState } from 'react';
import Card from './Card.jsx'
import { faceArray } from '../data.js';
import { Grid, Row, Col } from './styledGrid.jsx'
import '../stylesheets/card.css'
import { useSelector, useDispatch } from 'react-redux';

export default function CardArea(){
    const [flipped, setFlipped] = useState(0)

    const handleClick = () => {
        setFlipped(flipped => flipped + 1)
    }
    

    return(
        <div onClick={handleClick} className="grid">
            {faceArray.map((face, index) => <Card image={face} class={"card-" + index}/>)}
        </div>
    )
}