import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Link, navigate} from "@reach/router";


const Homepage = (props) => {
  const [category, setCategory] = useState("people");
  const [idForCategory, setIdForCategory] = useState("");

  const Search = () => {
    navigate('/' + category + "/" + idForCategory)
    // fetch("https://swapi.dev/")
    //   .then(response => response.json())
    //   .then(response => setPeople(response.results))


  };



  return (
    <div style={{padding:25}}>
      <label htmlFor="search">Search for:</label>
        <select onChange={(event)=> {setCategory(event.target.value)}} name="star_wars_api">
          <option value="people">People</option>
          <option value="planets">Planet</option>
        </select>
      <label htmlFor="id">ID: </label>
      <input onChange={(event) => { setIdForCategory(event.target.value)}} type="number"/>
      <button onClick={Search}>Search</button>
      {/* {people.map((people, index) => {
        return (
          <div key={index}>{people.name}</div>);
        })} */}
    </div>
  );
};

export default Homepage;
