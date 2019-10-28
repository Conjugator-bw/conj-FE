import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Accent from "./accent";
import Graph from "./graph";
import {Wrapper, Container} from './verboStyling';

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

    const [beginner, setBeginner] = useState(false);


    useEffect( () => {
        const fetchVerbs = async () => {
             await axios
                .get('https://raw.githubusercontent.com/ghidinelli/fred-jehle-spanish-verbs/master/jehle_verb_lookup.json')
                .then(res => {
                    // console.log(response)
                    const vari = Object.entries(res.data);
                    // console.log(res.data)
                    const obj = vari[getRandom(1000)];
                    // setConj(obj[0]);
                    const beginnerVari = vari.filter(item => item[1][0].mood === "Indicative")
                    const beginnerObj = beginnerVari[getRandom(1000)];


                    const beginnerArr = beginnerObj[1]
                    const beginnerNewArr = beginnerArr[0]
                    
                    const arr = obj[1];
                    const newArr = arr[0];


                    if (beginner == true) {
                        setVerbs({
                            conjugate: {conj: beginnerObj[0]},
                            infinitive: beginnerNewArr.infinitive,
                            tense: beginnerNewArr.tense,
                            translation: beginnerNewArr.translation,
                            performer: beginnerNewArr.performer,
                            mood: beginnerNewArr.mood
                        })
                    } else {
                        setVerbs({
                            conjugate: {conj: obj[0]},
                            infinitive: newArr.infinitive,
                            tense: newArr.tense,
                            translation: newArr.translation,
                            performer: newArr.performer,
                            mood: newArr.mood
                        })
                    }
                    
                    

                    setCorrectAnswer(false);
                    
                })
                .catch(error => {
                    console.log('error')
                })
            }
            fetchVerbs()
        }, [correctAnswer, beginner])

            console.log(verbs)

            const checkChangeHandler = evt => {
                let checked = evt.target.checked;
                setBeginner(checked)
            }
           

            const changeHandler = evt => {
                setInput(evt.target.value)
            }

            const handleSubmit = evt => {
                evt.preventDefault();
                if (verbs.conjugate.conj === input) {
                    alert("Felicidades, cierto")
                    resetInputField();
                    setCount(count + 1)
                    setCorrectAnswer(true)
                    
                } else {
                    alert("Please try again")
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
        
        
            <Wrapper>
                <Container>
                    <p>Infinitive: {verbs.infinitive}</p>
                    <p>Definition: {verbs.translation}</p>
                    <p>Tense: {verbs.tense}</p>
                    <p>Performer: {verbs.performer}</p>
                    <p>Mood: {verbs.mood}</p> 
                        <div>
                            <Accent addAccentLetter={addAccentLetter} />
                        </div>
                        <div>
                            <form className="conjugator-form" onSubmit={handleSubmit}>
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
                        <br />
                        <form>
                            <label>
                                Beginner:
                                <input
                                    name="easyLevel"
                                    type="checkbox"
                                    checked={beginner}
                                    onChange={checkChangeHandler}
                                >
                                </input>
                            </label>
                        </form>

                        
                        <div className="count-styling">
                            Current Score: {count}
                            <br />
                            {count > highScore ? setHighScore(count) : null }
                            <p>Your new high score is {highScore}!</p>
                        </div>
                
                
                
                </Container>
                <Container>
                    <div>
                        <p>Think you're</p>
                       <p> a Spanish expert?</p>
                        <p>Try Conjugator
                        and find out!</p>
                    </div>
                    <div>
                        <Graph count={count} highScore={highScore}/>
                    </div>

                </Container>
            </Wrapper> 
        )
    }



 export default Verbo;