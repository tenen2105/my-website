import React from "react";
import Navbar from "./components/Navbar";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.css';
import Home from "./components/pages/Home";
import Photo from "./components/pages/Photo";
import About from "./components/pages/About";
import Email from "./components/pages/Email";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";



function App() {
  return (
    <>
      <Router >
        <Navbar />
        <Switch>
          <Route path='/' exact component = {Home} />
          <Route path='/photo' component = {Photo} />
          <Route path='/about' component = {About} />          
          <Route path='/email' component = {Email} />
        </Switch>
        <BackToTop />
        <Footer />
     </Router>
    </>   
  );
}

export default App;
