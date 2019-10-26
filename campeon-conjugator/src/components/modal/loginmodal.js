import React from 'react';
import ReactDom from 'react-dom';
import Login from '../login/login.js';
import styled from "styled-components";
import { Link } from 'react-router-dom'
// import UseModal from '../modal/useModal.js';

const Wrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;

`


const LoginModal = ({ isShowing, hide }) => isShowing ? ReactDom.createPortal(
    <>
        {/* <button type="button" data-dismiss="modal" aria-label="Close" onClick={hide}>Close</button> */}
        <Link to="/" onclick={hide}>Home</Link>
        <div>
            <Login />
        </div>
    </>, document.body
) : null;

export default LoginModal;
