import React, { useEffect, useState } from 'react';
import {Form, Button} from 'react-bootstrap';


export default function StartingForm() {
    const [state, setState] = useState({})

    function formSubmit() {
        useEffect(() => {
            fetch()
            .then(response => response.json())
            .then(
                responseData => setState(responseData)
            )
        })
    }


    return(
        <div className="start-form">
            <h3>Matching Game</h3>
            <Form onSubmit={formSubmit}>
                <Form.Group controlId="start-name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control onChange={this.onFormChange} name="name" type="text" />
                </Form.Group>
                <Form.Group controlId="start-card-select">
                    <Form.Label>Card Deck</Form.Label>
                    <Form.Control as="select" onChange={this.onFormChange} name="card">
                        <option value="">Please Select...</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </Form.Control>
                </Form.Group>
            </Form>
        </div>
        
    )
}
