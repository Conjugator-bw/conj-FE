import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

import Accent from "./accent";




const VerboBox = styled.div`
        display: flex;
        flex-direction: flex-end;
        justify-content: space-evenly;
`

const Verbos = styled.div`
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
    width: 500px;
    font-family: Varela Round;
    font-weight: bold;
    padding:20px;
    margin-top: 20px;

    .conjugator-button {
        background-color: #8077ff;
        border-radius: 10px;
        height: 55px;
        width:100px;
        box-shadow: 7px 10px 10px #999;
       
    }

    .input-style {
        border-radius: 10px;
        height: 50px;
        width:50%;
        margin:10px;
        box-shadow: 7px 10px 10px #999;
        text-align: center;
        font-family: Varela Round;
        
    }

    .count-styling {
        margin-top: 15px;
    }

`




const Verbo = (props) => {
    console.log(props)

    function getRandom(max) {
        return Math.floor(Math.random()*Math.floor(max));
    }

    const [ verbs, setVerbs ] = useState({
        infinitive: '',
        conjugate: { conj: ''},
        translation: '',
        tense: '',
        performer: '',
        mood: ''   
    });

    const [input, setInput] = useState("")

    const [count, setCount] = useState(0)
    const [highScore, setHighScore] = useState(0)
    const [correctAnswer, setCorrectAnswer] = useState(false)


    useEffect(  () => {
        const fetchVerbs = async () => {
            await axios
                .get('https://raw.githubusercontent.com/ghidinelli/fred-jehle-spanish-verbs/master/jehle_verb_lookup.json')
                .then(res => {
                    // console.log(response)
                    const vari = Object.entries(res.data);
                    // console.log(res.data)
                    const obj = vari[getRandom(1000)];
                    // setConj(obj[0]);
                    
                    const arr = obj[1];
                    const newArr = arr[0];
                    
                    setVerbs({
                        conjugate: {conj: obj[0]},
                        infinitive: newArr.infinitive,
                        tense: newArr.tense,
                        translation: newArr.translation,
                        performer: newArr.performer,
                        mood: newArr.mood
                    })

                    setCorrectAnswer(false);
                    
                })
                .catch(error => {
                    console.log('error')
                })
            }
            fetchVerbs()
        }, [correctAnswer])

            console.log(verbs)
           

            const changeHandler = evt => {
                setInput(evt.target.value)
            }

            const handleSubmit = evt => {
                evt.preventDefault();
                if (verbs.conjugate === input) {
                    alert("Felicidades, correcto")
                    resetInputField();
                    setCount(count + 1)
                    setCorrectAnswer(true)
                    
                } else {
                    alert("please try again")
                    resetInputField();
                    setCount(0)
                }
            }

            const addAccentLetter = e => {
                const accentLetter = e.target.value;
                setInput(input + accentLetter);
            }


            const resetInputField = () => {
                setInput("")
            }



      
     
        return (
        
        <div>
            <div>
            <VerboBox>
                <Verbos>
                    {/* <p>"something here"</p> */}
                    <p>Infinitive: {verbs.infinitive}</p>
                    <p>Definition: {verbs.translation}</p>
                    <p>Tense: {verbs.tense}</p>
                    <p>Performer: {verbs.performer}</p>
                    <p>Mood: {verbs.mood}</p> 
                        <div className="conjugator-form">
                            <form onSubmit={handleSubmit}>
                                <input
                                    className="input-style"
                                    id="input"
                                    name="input"
                                    type="text"
                                    value={input}
                                    onChange= {changeHandler}
                                    placeholder="answer here..."
                                />
                                <button className="conjugator-button" type="submit">Submit</button>

                            </form>
                        </div>
                        <div>
                            <Accent addAccentLetter={addAccentLetter} />
                        </div>

                        
                        <div class="count-styling">
                            count: {count}
                            <br />
                            {count > highScore ? setHighScore(count) : null }
                            <p>Your new high score is {highScore}!</p>
                        </div>
                
                
                
                </Verbos>
                    
                    
                    <Verbos>
                        <div>
                            <p>Think you're</p>
                           <p> a Spanish expert?</p>
                            <p>Try Conjugator
                            and find out!</p>
                        </div>
                    </Verbos>
                </VerboBox> 
            </div>  
        </div>
             
        )
    }



 export default Verbo;