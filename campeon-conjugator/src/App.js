import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import Footer from './components/verbo/footer';
import Navbar from './components/navbar.js';
import Verbo from './components/verbo/verbo.js';
import PrivateRoute from './components/private-route/privateRoute.js';
import styled from 'styled-components';
import Login from './components/login/login.js';
import SignUp from './components/sign-up/sign-up.js';



// import LoginModal from "./components/modal/loginmodal.js";
// import useModal from "./components/modal/useModal.js";

const BodyStyle = styled.div`
    background-color: #e5e3ff;
`



const App = () => {
    
    
    return (
        <Router>
            <BodyStyle>
            <Navbar />


           <Switch>
               <PrivateRoute exact path="/protected" component={Verbo} />
               <Route exact path="/" component={Verbo}/>
               <Route exact path="/sign-up" component={SignUp} />
               <Route exact path="/login" component={Login} /> 
               {/* <Route component={Login} /> */}
           </Switch>
           <Footer />
           </BodyStyle>
        </Router>
       )
}
export default App;