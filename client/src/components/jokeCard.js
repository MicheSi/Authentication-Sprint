import React from 'react';
import {
    Card, CardBody,
    CardTitle, CardText
  } from 'reactstrap';

const JokeCard = props => {
    return (
        <div className='userCard'>
            <Card>
                <CardBody>
                    <CardTitle>Joke ID: {props.id}</CardTitle>
                    <CardText>{props.joke}</CardText>
                </CardBody>
      </Card>

        </div>

    )
}

export default JokeCard;