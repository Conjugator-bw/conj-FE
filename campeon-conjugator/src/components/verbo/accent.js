import React from 'react';
import styled from 'styled-components';
const AccentWrapper = styled.div`
   display: flex;
   .accent-button {
       font-size: 20px;
       padding: 10px;
   }
`
const Accent = props => {
   return (
       <AccentWrapper>
           <button class="accent-button" onClick={props.addAccentLetter} value="á">
               á
           </button>
           <button class="accent-button" onClick={props.addAccentLetter} value="é">
               é
           </button>
           <button class="accent-button" onClick={props.addAccentLetter} value="í">
               í
           </button>
           <button class="accent-button" onClick={props.addAccentLetter} value="ó">
               ó
           </button>
           <button class="accent-button" onClick={props.addAccentLetter} value="ú">
               ú
           </button>
           <button class="accent-button" onClick={props.addAccentLetter} value="ñ">
               ñ
           </button>
           <button class="accent-button" onClick={props.addAccentLetter} value="ü">
               ü
           </button>
       </AccentWrapper>
   )
}
export default Accent;