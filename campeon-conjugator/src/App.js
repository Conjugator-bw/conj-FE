<<<<<<< HEAD
import React, { Component } from 'react';
import Verbo from './components/Verbo'
=======
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
>>>>>>> 59c8a9281aa334279380f9cc0725be1c18f7d2ce


import Verbo from './components/verbo/verbo.js'
import SignUp from './components/sign-up/sign-up.js'
import Login from './components/login/login.js'
import PrivateRoute from './components/private-route/privateRoute.js'

<<<<<<< HEAD
    render() {
        return (
            <div>
               <Verbo />
            </div>
        )
    }
=======
const App = () => {
    
    
    
    
    
    
    
    return (
        <Router>
           <div>
               <p>something goes here</p>
                <ul>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                    <li>
                        <Link to="/sign-up">Sign Up</Link>
                    </li>
>>>>>>> 59c8a9281aa334279380f9cc0725be1c18f7d2ce


                </ul>

              <Verbo />

           </div>

           <Switch>
               <PrivateRoute exact path="/protected" component={Verbo} />
               <Route path="/sign-up" component={SignUp} />
               <Route path="/login" component={Login} />
               <Route component={Login} />
           </Switch>
        </Router>
       )
}
export default App;