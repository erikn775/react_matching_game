import React, { useEffect, useState } from 'react';
import {Form, Button, Modal} from 'react-bootstrap';


export default function StartingForm() {
    const [name, setName] = useState('Player 1')

    return(
        <div className="start-form">
            <h3>Matching Game</h3>
                <Form >
                    <Form.Group controlId="start-name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control onChange={(event) => setName(event.target.value)} name="name" type="text" />
                    </Form.Group>
                    <Button variant="outline-primary">Submit</Button>
                </Form>
        </div>
        
    )
}
