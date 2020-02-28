import React from 'react';
import {
    Card, CardBody,
    CardTitle, CardText
  } from 'reactstrap';

const JokeCard = props => {
    return (
        <div>
            <Card className='joke'>
                <CardBody className='jokeCard'>
                    <CardTitle>Joke ID: {props.id}</CardTitle>
                    <CardText>{props.joke}</CardText>
                </CardBody>
            </Card>
        </div>

    )
}

export default JokeCard;