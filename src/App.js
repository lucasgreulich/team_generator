import './App.css';
import React, {Component} from 'react';
import { useState } from 'react';


export default function App() {
  //useStates
  const [name, setName] = useState("");
  const [list, setList] = useState([]);

  //handling change 
  function handleInputChange(e) {
    setName(e.target.value);
  };
  
  //handling submit
  function handleSubmit(e) {
    e.preventDefault();
    console.log({name});

    if(name.trim() !== '' ){
      setList([...list, name]);
      setName('');
    }
  };

  //handle clearing the list 
  function handleClear() {
    setList([]);
  };

  return (
    <>
      <div className="names_box">
        <form className='form_one' onSubmit={handleSubmit}>
          <h1>Add names</h1> 
          <input 
          type='text' 
          value={name}
          onChange={handleInputChange}
          placeholder='Enter Name'
          />
          <button className="button" type='submit'>Add</button>
          <button className='button' onClick={handleClear}>Clear</button>
        </form>

        <ul className='list'>
          {list.map((name, index) => (
            <li key={index}>{name}</li>
          ))}
        </ul>
      </div>

      <div className="team_generator_container">
        <button className="button">Generate</button>
      </div>
    </>
  );
}


