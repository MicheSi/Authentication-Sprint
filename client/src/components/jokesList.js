import React, {useState, useEffect} from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';
import {Button} from 'reactstrap';
import JokeCard from './jokeCard';

const JokesList = props => {
    const [jokes, setJokes] = useState([]);

    useEffect(() => {
        axiosWithAuth()
        .get('/jokes')
        .then(res => {
            console.log(res.data)
            setJokes(res.data)
        })
        .catch(err => console.log('cannot retrieve jokes', err));
    }, [])

    const logout = e => {
        e.preventDefault()
        localStorage.clear();
        window.location.href='/login'
    }

    return (
        <div className='jokesList'>
            <Button color='danger' className='logoutBtn' onClick={logout}>Sign Out</Button>
            {jokes.map(joke => (
                <JokeCard
                 key={joke.id}
                 id={joke.id}
                 joke={joke.joke}
                />
            ))}
        </div>
    )
}

export default JokesList;