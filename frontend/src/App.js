import React, { Component } from 'react'
import Home from './Pages/Home';
import Course from './Pages/Course';
import Practice from './Pages/Practice';
import SignUp from './Pages/SignUp';
import Navbar from './components/Navbar';
import{BrowserRouter as Router, Routes, Route} from'react-router-dom'

export class App extends Component {
  render(){
    return(
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' exact Component={Home}/>
          <Route path='/course' Component={Course}/>
          <Route path='/practice' Component={Practice} />
          <Route path='/sign-up'Component={SignUp}/>
        </Routes>
      </Router>
    );
  };
  
}

export default App;
