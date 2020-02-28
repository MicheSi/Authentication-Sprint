import React, {useState} from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const Register = props => {
    return (
        <div>
            <Form>
                <FormGroup>
                    <Label for="username">Username</Label>
                    <Input type="text" name="username" id="username" placeholder="Username" />
                </FormGroup>
                <FormGroup>
                    <Label for="password">Password</Label>
                    <Input type="password" name="password" id="password" placeholder="Password" />
                </FormGroup>
                <Button>Register</Button>
            </Form>
        </div>
    )
}

export default Register;