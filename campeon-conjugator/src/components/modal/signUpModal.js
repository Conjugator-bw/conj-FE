import React from 'react';
import ReactDom from 'react-dom';
import SignUp from '../sign-up/sign-up.js';
// import UseModal from '../modal/useModal.js';


const SignUpModal = ({ isShowing, hide }) => isShowing ? ReactDom.createPortal(
    <>
        <div>
            <button type="button" data-dismiss="modal" aria-label="Close" onClick={hide}>Login</button>
            <div>
                <SignUp />
           </div>
        </div>
    </>, document.body
) : null;

export default SignUpModal;