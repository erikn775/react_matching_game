import React, { useState } from 'react';
import Card from './Card.jsx'
import { faceArray } from '../data.js';
import { Grid, Row, Col } from './styledGrid.jsx'
import '../stylesheets/card.css'
import { useSelector, useDispatch } from 'react-redux';

export default function CardArea(){
    const [click, setClick] = useState({disabled: false})
    
    

    const handleClick = (event) => {
        dispatch({type: "FLIP", payload: event.target.style.backgroundImage})
        
    }
    
    const counter = useSelector(state => {
        console.log(state)
        
    });
    const dispatch = useDispatch();


    return(
        <div onClick={handleClick} className="grid">
            {faceArray.map((face, index) => <Card image={face} class={"card-" + index}/>)}
        </div>
    )
}