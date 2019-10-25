import React from 'react';
import {AccentStyling} from './accentStyling'


const Accent = props => {
   return (
       <AccentStyling>
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
       </AccentStyling>
   )
}
export default Accent;