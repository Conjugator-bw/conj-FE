import React from 'react';

import { axiosWithAuth } from '../authentication/axiosWithAuth.js'
import  styled from "styled-components";


const FormContainer = styled.div`
  /* display: flex;
  flex-direction: column; */
  margin: 0 auto;
  display: grid;
  max-width: 600px;
  height: 80vh;
  grid-template-columns: 1fr;
  text-align: center;
  align-content: center;
`

const FormWrapper = styled.div`  
  margin: 0 auto;
  text-align: center;
  max-width: 1050px;
  padding-bottom: 60px;
  font-size: 1rem;

  h5 {
    font-weight: 150;
    font-size: .9rem;
    letter-spacing: 0.8px;
    /* color: rgb(243, 235, 222); */
  }

  h4 {
    /* color: rgb(243, 235, 222); */
    font-size: 15px;
    font-weight: 200;
    letter-spacing: 1.5px;
  }

  p {
    color: #777;
    font-size: 16px;

    a {
      text-decoration: none;
      color: #777;
      /* color: #fff; */
      &:hover {
        color: rgb(243, 235, 222)
      }
    }
  }
`

const InputStyles = styled.input`
  height: 30px;
  margin: 10px 0;
  border: none;
  border-radius: 3px;
  padding: 10px;
  font-size: 20px;
  line-height: 20px;
`

const Btn = styled.button`
    margin: 50px auto;
    border-radius: 4px;
    /* border: 2px solid #6a6a6a !important; */
    font-weight: 400;
    font-size: 16px;
    line-height: 45px;
    text-transform: uppercase;
    letter-spacing: 4px;
    outline: none;
    width: 210px;
    background: #2d333d;
    color: #6459ff;
    position: relative;
    overflow: hidden;
    transition: all 0.18s ease-in-out;

    &:active {
      background-color: red !important;
      border: 2px solid red !important;
      transition: all 0.00001s ease-out !important;
    }
  
  &:hover {
    cursor: pointer;
    color: #fff;
    background-color: #6459ff;
    letter-spacing: 0.8rem;
    font-weight: 500;
    font-size: 18px;
    padding-left: 25px;
    transition: all 0.25s ease-in-out;
    &:after {

    }
  }
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
            <FormWrapper>
                <FormContainer>
                <form onSubmit={this.signUp}> 

                    <div>
                        <InputStyles
                            type="text"
                            name="name"
                            value={this.state.credentials.name}
                            onChange={this.handleChange}
                            placeholder="Name"
                        />
                    </div>
                    <div>
                        <InputStyles
                            type="text"
                            name="username"
                            value={this.state.credentials.username}
                            onChange={this.handleChange}
                            placeholder="Username"
                        />
                    </div>
                    <div>
                        <InputStyles
                            type="password"
                            name="password"
                            value={this.state.credentials.password}
                            onChange={this.handleChange}
                            placeholder="Password"
                        />
                    </div>


                    <Btn>Sign Up</Btn>
                    
                </form>   
                </FormContainer>
            </FormWrapper>

        )
    }
}

export default SignUp;