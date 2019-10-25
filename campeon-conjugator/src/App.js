import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';


import Verbo from './components/verbo/verbo.js'
import SignUp from './components/sign-up/sign-up.js'
import Login from './components/login/login.js'
import PrivateRoute from './components/private-route/privateRoute.js'

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