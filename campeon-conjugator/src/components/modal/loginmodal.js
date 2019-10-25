import React from 'react';
import ReactDom from 'react-dom';
import Login from '../login/login.js';
import styled from "styled-components";
// import UseModal from '../modal/useModal.js';

// const Btn = styled.button`

//     width: 1em;
//     radius: 2px;

// `


const LoginModal = ({ isShowing, hide }) => isShowing ? ReactDom.createPortal(
    <>
        <div>
            <button type="button" data-dismiss="modal" aria-label="Close" onClick={hide}>Close</button>
            <div>
                <Login />
           </div>
        </div>
    </>, document.body
) : null;

export default LoginModal;
