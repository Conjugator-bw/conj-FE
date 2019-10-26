import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';



// function Verbo (props) {
//     const {
//       value,
//       addAccent,
//       setValue,
//     } = props;

const Verbos = styled.div`
    display: flex;
    background-color: #e5e3ff;
    flex-direction: column;
    align-items: center;
    color: #6459ff;
    font-weight: bold;
    font-size: 20px;


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

            const resetInputField = () => {
                setInput("")
            }

        return (
            <Verbos>
               <p>"something here"</p>
               <p>Infinitive: {verbs.infinitive}</p>
               <p>Conjugation: {verbs.conjugate.conj}</p>
               <p>Definition: {verbs.translation}</p>
               <p>Tense: {verbs.tense}</p>
               <p>Performer: {verbs.performer}</p>
               <p>Mood: {verbs.mood}</p> 
                <div className="conjugator-form">
                    <form onSubmit={handleSubmit}>
                        <input
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
                    count: {count}
                    <br />
                    {count > highScore ? setHighScore(count) : null }
                    <p>Your new high score is {highScore}!</p>
                </div>
            </Verbos>
        )
    }



 export default Verbo;