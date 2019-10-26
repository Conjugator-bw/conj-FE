import React from 'react';
import {AccentStyling} from './accentStyling'


const Accent = props => {
   return (
       <AccentStyling>
           <button className="accent-button" onClick={props.addAccentLetter} value="á">
               á
           </button>
           <button className="accent-button" onClick={props.addAccentLetter} value="é">
               é
           </button>
           <button className="accent-button" onClick={props.addAccentLetter} value="í">
               í
           </button>
           <button className="accent-button" onClick={props.addAccentLetter} value="ó">
               ó
           </button>
           <button className="accent-button" onClick={props.addAccentLetter} value="ú">
               ú
           </button>
           <button className="accent-button" onClick={props.addAccentLetter} value="ñ">
               ñ
           </button>
           <button className="accent-button" onClick={props.addAccentLetter} value="ü">
               ü
           </button>
       </AccentStyling>
   )
}
export default Accent;