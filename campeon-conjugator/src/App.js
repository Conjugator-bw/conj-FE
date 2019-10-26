import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import Footer from './components/verbo/footer';
import Navbar from './components/navbar.js';
import Verbo from './components/verbo/verbo.js';
import PrivateRoute from './components/private-route/privateRoute.js';
import styled from 'styled-components';
import Login from './components/login/login.js';
import SignUp from './components/sign-up/sign-up.js';


const BodyStyle = styled.div`
    background-color: #e5e3ff;
    min-height: 100vh;    
`



const App = () => {
    
    
    return (
            <BodyStyle>
        <Router>
            <Navbar />


           <Switch>
               <PrivateRoute exact path="/protected" component={Verbo} />
               <Route exact path="/" component={Verbo}/>
               s<Route exact path="/sign-up" component={SignUp} />
               <Route exact path="/login" component={Login} /> */}
               {/* <Route component={Login} /> */}
           </Switch>
           <Footer />
        </Router>
           </BodyStyle>
       )
}
export default App;