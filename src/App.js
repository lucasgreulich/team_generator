import './App.css';
import React, {Component} from 'react';
import { useState } from 'react';


export default function App() {
  const [name, setName] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    alert(`The name you entered was: ${name}`)
  };


  return (
    <>
      <div className="names_box">
        <form onSubmit={handleSubmit}>
          <h1>Add names</h1>
          <label htmlFor='title'>Enter Names: 
          <input 
          type='text' 
          value={name}
          onChange={(e) => setName(e.target.value)}
          />
          </label>
          
          <button className="button" type='submit'>Add</button>
        </form>
      </div>

      <div className="team_generator_container">
        <button className="button">Generate</button>
      </div>
    </>
  );
}


