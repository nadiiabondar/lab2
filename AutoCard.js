/*import React from "react";
import {Card, Button } from "react-bootstrap";

const AutoCard= (props) => {
    return(
        <Card>
            <Card.Img variant="top" src="holder.js" alt="no images are available currently"/>
            <Card.Body>
                <Card.Title>{props.card.name}</Card.Title>
                <Card.Text>{props.card.description}</Card.Text>
                <Button variant="outline-secondary">Choose this one</Button>
            </Card.Body>
        </Card>
    )
}

export default AutoCard;*/

import React from 'react';
import { Button, Card } from "react-bootstrap";

const AutoCard = (props) => {

    const chooseItem = () => {
        console.log(`you've choosen: ${props.card}`);

        alert(`Thanks for choosing: ${props.card.name}`);

    }


    return (
        <div className="row">
            <Card>
                <Card.Img variant="top" src={props.card.img} alt="no images are available currently" style={{ height: '200px', width: '100%', objectFit: 'cover' }}/>
                <Card.Body className="d-flex flex-column justify-content-center align-items-center">
                    <Card.Title>{props.card.name}</Card.Title>
                    <Card.Text>{props.card.description}</Card.Text>
                    <Button variant="outline-secondary" onClick={chooseItem}>Choose this one</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default AutoCard;
