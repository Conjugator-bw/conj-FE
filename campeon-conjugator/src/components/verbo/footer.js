import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
<<<<<<< HEAD
    justify-content: space-evenly;
    align-items: center;
=======
    justify-content: center;
>>>>>>> master
    margin-top: 50px;
    height: 120px;

    .footer-link {
        font-size: 16px;
        text-decoration: none;

    }

    .footer-text {
        font-size: 12px;
    }
    
`

const Footer = () => {
    return (
        <Wrapper>
            <div>
                <p className='footer-text'>Lambda School - Conjugator 2019 Copyright ©</p>
            </div>
        </Wrapper>    
    )
}

export default Footer;
