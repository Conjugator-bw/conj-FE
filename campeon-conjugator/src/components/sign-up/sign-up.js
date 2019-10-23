import React from 'react';

import { axiosWithAuth } from '../authentication/axiosWithAuth.js'

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
            .post('/api/auth/register')
            .then(res => {
                localStorage.setItem('token', res.data.payload);
                this.props.history.push('./login');
                console.log("did it work?")
            
            })

            .catch(err => console.log(err));
    }

    render() {
        return (
            <div>
                <form onSubmit={this.signUp}> 
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
                
                    <button>Sign Up</button>
                </form>   

            </div>

        )
    }
}

export default SignUp;