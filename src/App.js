import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import Profile from './profile.js';

function App(){
    return(
      <BrowserRouter>
      
        <Route exact path= "/" component={Profile} />
      
      </BrowserRouter>
    )
  
}

export default App
