import './App.css';
import React, {Component} from 'react';
import { useState } from 'react';


export default function App() {
  //useStates
  const [name, setName] = useState("");
  const [list, setList] = useState([]);
  const [selectedNames, setSelectedNames] = useState([]);
  const [teams, setTeams] = useState([]);
  const [teamSize, setTeamSize] = useState(2);
  

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
    setSelectedNames([]);
    setTeams([]);
  };
  //handle click function 
  function handleNameClick(name) {
    if(selectedNames.includes(name)) {
      setSelectedNames(selectedNames.filter((selected) => selected !== name));
    } else {
      setSelectedNames([...selectedNames, name]);
    }
  };
  //handle team size change
  function handleTeamSizeChange (e) {
    setTeamSize(Number(e.target.value));
  };

  //radomizing the teams 
  function handleRandomizeTeams() {
    const shuffledNames = [...selectedNames].sort(() => Math.random() - 0.5);
    const newTeams = [];

    if (!Array.isArray(selectedNames)) {
      console.error("selectedNames is not an array:", selectedNames);
      return;
    }
    console.log("Button clicked!"); // Debug log
  // Ensure selectedNames is an array

    while (shuffledNames.length >= 2){
      newTeams.push(shuffledNames.splice(0, teamSize));
    }
    //if odd one out add to last line 
    if(shuffledNames.length === 1){
      newTeams[newTeams.length - 1].push(shuffledNames[0]);
    }

    setTeams(newTeams);
    console.log(selectedNames)
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
            <li 
            key={index}
            onClick={() => handleNameClick(name)}
            style={{
              cursor: 'pointer',
              fontWeight: selectedNames.includes(name) ? 'bold' : 'normal',
              color: selectedNames.includes(name) ? 'blue' : 'black',
            }}
            >
              {name}
            </li>
          ))}
        </ul>
        <div style={{marginTop: '20px' }}>
          <label>
            Team Size: 
            <select 
              value={teamSize}
              onChange={handleTeamSizeChange}
              style={{ marginLeft: "10px"}}
            >
              {[...Array(10)].map((_, i) => (
                <option key={i + 1} value={i + 1}>
                  {i + 1} player{i > 0 && 's'}
                </option>
              ))}
              </select>
          </label>
        </div>
      
        <button 
        onClick={handleRandomizeTeams}
        disabled={selectedNames.length < teamSize || teamSize < 1}
        >
        Generate</button>

        {teams.length > 0 && (
          <div style={{ marginTop: '20px' }}>
            <h3>Teams</h3>
            <ul>
              {teams.map((team, index) => (
                <li key={index}>
                  Team {index + 1}: {team.join(' & ')}
                </li>
              ))}
            </ul>
          </div>
        )}

</div>
    </>
  );
}


