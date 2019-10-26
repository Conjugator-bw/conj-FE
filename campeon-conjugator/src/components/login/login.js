import React from 'react';
import LoginModal from "../modal/loginmodal.js";
import styled from "styled-components";

import { axiosWithAuth } from '../authentication/axiosWithAuth.js';

const LoginStyles = styled.div`
    
    height: 400px;
    
    display: flex;
    box-sizing: border-box;
    background-color: #e5e3ff;
    flex-direction: column;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #6459ff;
    font-weight: bold;
    font-size: 20px;
    border: 5px solid purple;
    border-radius: 10px;
    box-shadow: 10px 10px 10px #999;
    width: 500px;
    font-family: comic-sans;
    font-weight: bold;
    




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
                <LoginStyles>
                <form onSubmit={this.login}> 
                
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
                    
                </form>   
                </LoginStyles> 
            </div>
            
        )
    }
}

export default Login;