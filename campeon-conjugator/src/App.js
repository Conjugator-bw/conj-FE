import React, { Component } from 'react';

class App extends Component {
    state = {
        something: "something clever here. Hello World!"
    }


    render() {
        return (
            <div>
               <p>{this.state.something}</p> 
            </div>
        )
    }


}

export default App;