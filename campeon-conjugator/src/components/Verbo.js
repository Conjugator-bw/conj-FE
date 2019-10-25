import React, { useState, useEffect } from 'react';
import axios from 'axios';



const Verbo = (props) => {
    // console.log(props)

    function getRandom(max) {
        return Math.floor(Math.random()*Math.floor(max));
    }

    const [ verbs, setVerbs ] = useState({
        
    });



    const [inf, setInf] = useState("")
    const [conj, setConj] = useState({conj: ""})
    const [def, setDef] = useState("")
    const [tense, setTense] = useState("")
    const [perf, setPerf] = useState("")
    const [mood, setMood] = useState("")

    const [input, setInput] = useState("")


    useEffect(() => {
        
            axios
                .get('https://raw.githubusercontent.com/ghidinelli/fred-jehle-spanish-verbs/master/jehle_verb_lookup.json')
                .then(res => {
                    // console.log(response)
                    const vari = Object.entries(res.data);
                    // console.log(res.data)
                    const obj = vari[getRandom(1000)];
                    setConj(obj[0]);
                    const newArr = obj[1];
                    const makeArr = newArr[0];
                    setInf(makeArr.infinitive);
                    setTense(makeArr.tense);
                    setDef(makeArr.translation);
                    setPerf(makeArr.performer);
                    setMood(makeArr.mood);
                    
                })
                .catch(error => {
                    console.log('error')
                })
            }, [])

            console.log('conj', conj)
           

            const changeHandler = evt => {
                setInput(evt.target.value)
            }

            const handleSubmit = evt => {
                evt.preventDefault();
                if (conj === input) {
                    alert("Felicidades, correcto")
                    resetInputField();
                    
                } else {
                    alert("please try again")
                    resetInputField();
                }

            }

            const resetInputField = () => {
                setInput("")
            }

      
     
        return (
            <div>
               <p>"something here"</p>
               <p>Infinitive: {inf}</p>
               <p>Conjugation: {conj.conj}</p>
               <p>Definition: {def}</p>
               <p>Tense: {tense}</p>
               <p>Performer: {perf}</p>
               <p>Mood: {mood}</p> 
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
            </div>
        )
    }



 export default Verbo;