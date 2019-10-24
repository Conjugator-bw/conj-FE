import React, { Component } from 'react';
import Verbo from './components/Verbo'

class App extends Component {
    state = {
        something: "something clever here. Hello World!"
    }


    render() {
        return (
            <div>
               <Verbo />
            </div>
        )
    }


}

export default App;