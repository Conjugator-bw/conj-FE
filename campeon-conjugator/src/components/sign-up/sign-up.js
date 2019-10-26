import React from 'react';

import { axiosWithAuth } from '../authentication/axiosWithAuth.js'
import  styled from "styled-components";

const SignUpStyles = styled.div`
    
    height: 80vh;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    background-color: #e5e3ff;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #6459ff;
    font-weight: bold;
    font-size: 20px;
    /* border: 5px solid purple; */
    border-radius: 10px;
    /* box-shadow: 10px 10px 10px #999; */
    /* width: 500px; */
    font-weight: bold;
    




`
const SignUpFormStyles = styled.div`
display: flex;
flex-direction: column;
`

class SignUp extends React.Component {
    state = {
        credentials: {
            name: '',
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

    signUp = e => {
        e.preventDefault()

        axiosWithAuth()
            .post('/api/auth/register', this.state.credentials)
            .then(res => {
                localStorage.setItem('token', res.data.payload);
                // this.props.history.push('./login');
                console.log("did it work?")
            
            })

            .catch(err => console.log(err));
    }

    render() {
        return (
            <div>
                <SignUpStyles>
                <form onSubmit={this.signUp}> 
                <SignUpFormStyles>
                    <div>
                    <input
                        type="text"
                        name="name"
                        value={this.state.credentials.name}
                        onChange={this.handleChange}
                        placeholder="Name"
                    />
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
                    </div>
                </SignUpFormStyles>
                    <button>Sign Up</button>
                    
                </form>   
                </SignUpStyles>
            </div>

        )
    }
}

export default SignUp;