import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Verbo from './components/verbo/verbo.js'
const App = () => {
   const [ verbs, setVerbs ] = useState([]);
   useEffect(() => {
       const getVerbs =() => {
           axios
               .get('https://raw.githubusercontent.com/ghidinelli/fred-jehle-spanish-verbs/master/jehle_verb_lookup.json')
               .then(response => {
                   console.log(response)
               })
               .catch(error => {
                   console.log('error')
               })
       }
       getVerbs();
       }, []);
       return (
           <div>
               <p>something goes here</p>
              <Verbo />
           </div>
       )
}
export default App;