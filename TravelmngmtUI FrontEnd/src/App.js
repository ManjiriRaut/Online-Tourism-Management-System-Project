import React from 'react';
import LoginPage from  './components/LoginPage'
import { Dashboard } from './components/Dashboard';
import { PackageView } from './components/PackageView';
import './components/GlobalVariables'
import './App.css';
import Header from "./components/Layouts/Header";
import Footer from './components/Layouts/Footer';

import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import UserRegistration from './components/UserRegistration';
import PackageRegistration from './components/PackageRegistration';

function App() {
  const [but,setBut]=React.useState(0);
  return (
    
    <div className="App">
    <Router>
      <Switch>
        <Route exact path="/" component={LoginPage}/>
        <Route exact path="/dashboard" component={Dashboard}/>
        <Route exact path="/packageview" component={PackageView} />
        <Route exact path="/userregistration" component={UserRegistration} />
        <Route exact path="/packageregistration" component={PackageRegistration} />
      </Switch>
    </Router>
    

    </div>
  );
}

export default App;
