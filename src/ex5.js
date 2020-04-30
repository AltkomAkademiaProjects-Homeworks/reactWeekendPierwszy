import React from 'react';
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import Data from './ex1';
import Parent from './ex2'
import ParentEx3 from './ex3';
import LifecycleTest from './ex4';

function Rout() {
    return (
        <Router>
            <div>
                <Link to={"/ex1"} className="nav-link">
                    Ćwiczenie 1
                </Link><br/>

                <Link to={"/ex2"} className="nav-link">
                    Ćwiczenie 2
                </Link><br/>

                <Link to={"/ex3"} className="nav-link">
                    Ćwiczenie 3
                </Link><br/>

                <Link to={"/ex4"} className="nav-link">
                    Ćwiczenie 4
                </Link>
            </div>
            <div className="wrapper">
                <Switch>
                    <Route exact path='/' component={Data}/>
                    <Route path="/ex1" component={Data}/>
                    <Route path="/ex2" component={Parent}/>
                    <Route path="/ex3" component={ParentEx3}/>
                    <Route exact path="/ex4" component={LifecycleTest}/>
                </Switch>
            </div>
        </Router>
    );
}

export default Rout;