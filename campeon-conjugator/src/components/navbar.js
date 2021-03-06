import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
// import LoginModal from "./modal/loginmodal.js";
// import useModal from "./modal/useModal";
// import useModalSignUp from "./modal/useModalSignUp.js";
// import SignUpModal from "./modal/signUpModal";



const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 6.25rem;
  justify-content: space-evenly;
  flex-direction: flex-wrap;
  background-color: #e5e3ff;
  font-family: 'SegoeUIEmoji', sans-serif;
  align-items: center;
  color: #6459ff;
  box-shadow: 4px 4px 4px #999;
  
  h1 {
    font-size: 53px;
    text-align: center;
  }

  a {
    font-size: 43px;
    text-decoration: none;
    color: #6459ff;

  }
  @media (max-width: 765px) {
    h1 {
      font-size: 1.4rem;
    }
    a {
      font-size: 1rem;
    }
  }
`

const Navbar = () => {

    // const {isShowing, toggle} = useModal()
    // const {isShowingSignUp, toggleSignUp} = useModalSignUp()

  return (
    <Wrapper>
        <div>
            <Link  to='/login'>Login</Link>
        </div>
        <Link to="/">
          <h1>Conjugator</h1>
        </Link>
        <div>
            <Link  to='/sign-up'>Sign Up</Link>
        </div>
      
       {/* <Link class='link' to='/login'>Login</Link> */}
    </Wrapper>
  )
}

export default Navbar;
