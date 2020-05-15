import React, {useEffect, useState} from 'react';
import axios from "axios";
import { Link } from "@reach/router";

const DisplayPeople = (props) => {
  const [people,setPeople] =useState(null);

  useEffect(() => {
    axios
      .get("https://swapi.dev/api/people/" + props.id + "/")
      .then((res) => {
        setPeople(res.data);
      })
      .catch((err) => {
        console.log("These aren't the droids you're looking for");
          return (
            <img
              height="500"
              src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.onebauer.media%2Fone%2Fmedia%2F5d56%2F3ce3%2F9619%2Ff1ce%2Fda38%2F9670%2Fewan-mcgregor-obi-wan.jpg%3Fquality%3D50%26width%3D1800%26ratio%3D16-9%26resizeStyle%3Daspectfill%26format%3Djpg&imgrefurl=https%3A%2F%2Fwww.empireonline.com%2Fmovies%2Fnews%2Fewan-mcgregor-reportedly-back-as-obi-wan-kenobi-for-disney-star-wars-series%2F&tbnid=en3NgJxkfspUUM&vet=12ahUKEwjBqOvb-bTpAhUDkJ4KHcskCdgQMygEegUIARCiAg..i&docid=USyU0wUmvOp9MM&w=1800&h=1012&q=Obi-Wan%20Kenobi.&ved=2ahUKEwjBqOvb-bTpAhUDkJ4KHcskCdgQMygEegUIARCiAg"
              alt="These aren't the droids you're looking for"
            />
          );
      });
  }, [props.id]);

  if (people == null){
    return "Please wait"
  }

  return (
    <div>
          <div style={{textAlign:"left", margin:25}}>
            <h2>{people.name}</h2>
            <hr/>
            <p><strong>Height:</strong> {people.height}</p>
            <p><strong>Eye Color:</strong> {people.eye_color}</p>
            <p><strong>Skin Color:</strong> {people.skin_color}</p>
          </div>

    </div>
  )
};

export default DisplayPeople;
