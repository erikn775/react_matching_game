import React from 'react';
import Card from './Card.jsx'
import { faceArray } from '../data.js';
import { Grid, Row, Col } from './styledGrid.jsx'
import '../stylesheets/card.css'

export default function CardArea(){
    return(
        <div className="grid">
            {faceArray.map((face, index) => <Card image={face} class={"card-" + index}/>)}
        </div>
    )
}