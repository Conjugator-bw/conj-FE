import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import LoginModal from "./modal/loginmodal.js";
import useModal from "./modal/useModal";
import useModalSignUp from "./modal/useModalSignUp.js";
import SignUpModal from "./modal/signUpModal";



const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-direction: flex-wrap;
  // background-color: #e5e3ff;
  font-family: 'SegoeUIEmoji', sans-serif;
  align-items: center;
  color: #6459ff;
  
  
  h1 {
    font-size: 53px;
    text-align: center;
  }

  .link {
    font-size: 43px;
    text-decoration: none;
    color: #6459ff;
  }
`
//#e5e3ff background color here
const Navbar = () => {

    const {isShowing, toggle} = useModal()
    const {isShowingSignUp, toggleSignUp} = useModalSignUp()

  return (
    <Wrapper>
        <div>
            <Link onClick={toggle} class='link' to='/login'>Login</Link>
            <LoginModal
                isShowing={isShowing}
                hide={toggle}
            />
        </div>
        <h1>Conjugator</h1>
        <div>
            <Link onClick={toggleSignUp} class='link' to='/sign-up'>Sign Up</Link>
            <SignUpModal
                isShowing={isShowingSignUp}
                hide={toggleSignUp}
            />
        </div>
      
       {/* <Link class='link' to='/login'>Login</Link> */}
    </Wrapper>
  )
}

export default Navbar;
