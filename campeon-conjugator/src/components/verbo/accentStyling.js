import styled from 'styled-components';

export const AccentStyling = styled.div`
    display: flex;
   
    .accent-button {
        font-size: 16px;
        padding: 5px;
        background-color: #8077ff;
        padding 10px;
        border: 0.5px solid #fff;
        border-top: none;
        border-bottom: none;
    }
    .accent-button:nth-child(1) {
        border-left: none;
    }
    .accent-button:nth-child(7) {
        border-right: none;
    }
`