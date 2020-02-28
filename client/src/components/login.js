import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import axiosWithAuth from '../utils/axiosWithAuth';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const Register = props => {
    const initialState = {
        username: '',
        password: ''
    }

    const [user, setUser] = useState(initialState);
    const history = useHistory();

    const handleChange = e => {
        console.log(e.target.name, e.target.value)
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const login = e => {
        e.preventDefault();
        setUser({...user})
        axiosWithAuth()
            .post('/auth/login', user)
            .then(res => {
                localStorage.setItem('token', res.data.token)
                history.push('/users')
            })
            .catch(err => console.log(err))
    }

    return (
        <div className='register'>
            <h2>Log In</h2>
            <Form onSubmit={login}>
                <FormGroup>
                    <Label for="username">Username</Label>
                    <Input
                     required
                     type="text"
                     name="username"
                     id="username"
                     placeholder="Username"
                     onChange={handleChange}
                     value={user.username}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="password">Password</Label>
                    <Input
                     required
                     type="password"
                     name="password"
                     id="password"
                     placeholder="Password"
                     onChange={handleChange}
                     value={user.password}
                     />
                </FormGroup>
                <Button type='submit' color='info'>Log In</Button>
            </Form>
        </div>
    )
}

export default Register;