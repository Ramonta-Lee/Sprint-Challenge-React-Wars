import React, { useState, useEffect } from "react";

import "./App.css";
import axios from "axios";
import PeopleCard from "./components/PeopleCard";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  const [people, setPeople] = useState([]);

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(() => {
    axios
      .get("https://swapi.co/api/people/")
      .then(response => {
        // console.log(response.data.results);
        setPeople(response.data.results)
      })
      .catch(error => console.log("Sorry no people", error));
  }, []);

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <PeopleCard people={people} />
    </div>
  );
};

export default App;
