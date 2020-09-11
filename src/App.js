import React  from 'react';
import './App.css';
import  Heading  from './components/Heading';
import  Photos from "./components/Photos";
import Image from "./components/Image";
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import {Switch, Route, Redirect} from 'react-router';
import { BrowserRouter } from 'react-router-dom';

// Style


function App() {
  return (
  
      <BrowserRouter>
      <div>
      <Switch>
            <Route path='/photos' component={Photos} />
           
            <Route path='/image' component={Image}  />
            
         
          
            <Redirect to="/photos" />
          
        </Switch>
        

    </div>
    </BrowserRouter>
  );
}

export default App;
