import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "@reach/router";


const DisplayPlanet = (props) => {
  const [planet, setPlanet] = useState(null);
  // const [error, setIsError] = useState("");

  useEffect(() => {
    axios
      .get("https://swapi.dev/api/planets/" + props.id + "/")
      .then((res) => {
        setPlanet(res.data);
      })
      .catch((err) => {
        console.log(err.response);
        // setError(err.response);
      });
  }, [props.id]);

  if (planet == null) {
    return (
      "Loading..."
    )


  }
  return (
    <div style={{ textAlign: "left", margin: 25 }}>
      <h2>{planet.name}</h2>
      <hr />
      <p><strong>Climate:</strong> {planet.climate}</p>
      <p><strong>Terrain:</strong> {planet.terrain}</p>
      <p><strong>Surface Water:</strong> {planet.surface_water}</p>
      <p><strong>Population:</strong> {planet.population}</p>
    </div>
  )

}
export default DisplayPlanet;
