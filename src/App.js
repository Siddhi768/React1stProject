import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './Components/Greet'
import Greet from './Components/Greet';
import Hello from './Components/Hello'
import Counter from './Components/Counter';

class App extends Component
{
  render()
  {
    return(
      <div className="App">
        <Counter></Counter>
       <Greet name="Bruce"/>
       <Greet name="Diana"/>
       <Greet name="Mark"/>

       
      </div>
    );
  }
}

export default App;
