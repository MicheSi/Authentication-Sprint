import React, {useState} from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const Register = props => {
    const initialState = {
        username: '',
        password: ''
    }

    const [user, setUser] = useState(initialState);

    const handleChange = e => {
        console.log(e.target.name, e.target.value)
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const register = e => {
        e.preventDefault();
        setUser({...user})
        axiosWithAuth()
            .post('/auth/register', user)
            .then(res => {
                console.log(res)
                setUser(user)
                window.location.href = '/login'
            })
            .catch(err => console.log(err))
    }

    return (
        <div className='register'>
            <h2>Register your Account</h2>
            <Form onSubmit={register}>
                <FormGroup>
                    <Label for="username">Username</Label>
                    <Input
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
                     type="password"
                     name="password"
                     id="password"
                     placeholder="Password"
                     onChange={handleChange}
                     value={user.password}
                     />
                </FormGroup>
                <Button type='submit'>Register</Button>
            </Form>
        </div>
    )
}

export default Register;