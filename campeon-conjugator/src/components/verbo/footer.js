import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin-top: 50px;

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
            <div>
                <Link className='footer-link' to="/">Home</Link>
            </div>
        </Wrapper>    
    )
}

export default Footer;
