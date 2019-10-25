import React from 'react';
import LoginModal from "../modal/loginmodal.js";
import styled from "styled-components";

import { axiosWithAuth } from '../authentication/axiosWithAuth.js';

const LoginStyles = styled.div`
    display: flex;
    width: 500px;
    height: 400px;
    background-color: e5e3ff;




`

class Login extends React.Component {
    state = {
        credentials: {
            username: '',
            password: ''
        }
    }

    handleChange = e => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        })
    }

   login = e => {
        e.preventDefault()

        axiosWithAuth()
            .post('/api/auth/login', this.state.credentials)
            .then(res => {
                localStorage.setItem('token', res.data.token);
                console.log(res.data.token)
                this.props.history.push('./protected');
                console.log("did it work?")
            
            })

            .catch(err => console.log(err));
    }

    render() {
        return (
            
            <div>
                
                <form onSubmit={this.login}> 
                <LoginStyles>
                    <input
                        type="text"
                        name="username"
                        value={this.state.credentials.username}
                        onChange={this.handleChange}
                        placeholder="Username"
                    />
                    <input
                        type="password"
                        name="password"
                        value={this.state.credentials.password}
                        onChange={this.handleChange}
                        placeholder="Password"
                    />
                
                    <button>Sign In</button>
                    </LoginStyles>
                </form>   
                
            </div>
            
        )
    }
}

export default Login;