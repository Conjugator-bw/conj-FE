import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    width: 100%;
    flex-direction: flex-end;
    justify-content: space-evenly;

    @media (max-width: 1115px) {
        display: flex;
        flex-direction: column-reverse;
        align-items: center;
        text-align: center;

        p {
            font-size: 1.2rem;
        }
    }
`
export const Container = styled.div`
    display: flex;
    box-sizing: border-box;
    background-color: #e5e3ff;
    flex-direction: column;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #6459ff;
    font-weight: bold;
    font-size: 20px;
    border: 5px solid purple;
    border-radius: 10px;
    box-shadow: 10px 10px 10px #999;
    font-family: Varela Round;
    font-weight: bold;
    padding:20px;
    margin-top: 20px;
    width: 35%;

    

    .conjugator-button {
        background-color: #8077ff;
        height: 50px;
        width: 225px;
        border: none;
        font-family: Varela Round;
        text-transform: uppercase;
        cursor: pointer;
    }

    .conjugator-button:hover {
        text-shadow: 0px 0px 6px rgba(255, 255, 255, 1);
        transition: all 0.4s ease 0s;
    }

    .input-style {
        height: 50px;
        width: 225px;
        margin: 10px 0 10px 0;
        text-align: center;
        font-family: Varela Round;
        border: none;
        padding: none;
        
    }

    .count-styling {
        margin-top: 15px;
    }

    .conjugator-form {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    @media (max-width: 1115px) {
        width: 92%;
        padding: 5px;
        overflow-wrap: break-word;
    }
`
