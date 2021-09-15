import React, { useState } from 'react';

import { URL,API_KEY } from './apiKeys';
import './App.css';

import {  Container, FormControl, InputGroup, Navbar } from 'react-bootstrap';
import Display from './Display'
import Button from '@restart/ui/esm/Button';
import Rowbox from './Rowbox';



const App = () => {
    const [input, setInput] = useState('');
    const [weather, setWeather]  = useState(null)


    
const handleChange = () => {
  fetch(`${URL}?q=${input}&units=metric&appid=${API_KEY}`)
  .then((response) => response.json())
  .then((data) => setWeather(data) );
  
 
} ;

    return (
     <div className="hom">
                 <Navbar bg="dark" variant="dark">
            <Container>
            <Navbar.Brand className="homh" href="#home">
            
            <h3>WEATHER APP</h3>
            </Navbar.Brand>
            </Container>
        </Navbar>
        
      <div className="mt-5 main-container">
        <InputGroup className="mb-3 search">
    <FormControl
      placeholder="Search Location..."
      aria-label="Search Location"
      type="text"
      className="search"
      value={input}
      onChange={(e) => setInput(e.target.value)}
    />
    <Button
    className="ml-3 bttn"
    onClick={handleChange}
     
      id="button-addon2">
      Search
    </Button>
  </InputGroup>
<div className="display__box">
      {weather ? <Display  data={weather} />: <h5>no data</h5> }
</div>
<div className="mt-4 row__box">
      {weather ? <Rowbox  data={weather} /> : <h6>n</h6> }
</div>
            
       
              
          
               
        </div>
        
        </div>
    );
}

export default App;