import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import Footer from './components/verbo/footer';
import Navbar from './components/navbar.js';
import Verbo from './components/verbo/verbo.js';
import SignUp from './components/sign-up/sign-up.js';
import Login from './components/login/login.js';
import PrivateRoute from './components/private-route/privateRoute.js';
import LoginModal from "./components/modal/loginmodal.js";
import useModal from "./components/modal/useModal.js";
import styled from 'styled-components';

const BodyStyle = styled.div`
    background-color: #e5e3ff;
`



const App = () => {
    
    
    return (
        <Router>
            <BodyStyle>
           <div>
                <Navbar />
                {/* <Verbo /> */}
           </div>

           <Switch>
               <PrivateRoute exact path="/protected" component={Verbo} />
               <Route path="/" component={Verbo}/>
               {/* <Route path="/sign-up" component={SignUp} />
               <Route path="/login" component={Login} /> */}
               {/* <Route component={Login} /> */}
           </Switch>
           <Footer />
           </BodyStyle>
        </Router>
       )
}
export default App;