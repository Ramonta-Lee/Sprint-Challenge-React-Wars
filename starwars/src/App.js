import React, { useState, useEffect, useLayoutEffect } from "react";
import Doggo from "./components/doggo";
import "./App.css";
import axios from "axios";
import PeopleCard from "./components/PeopleCard";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";

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
        setPeople(response.data.results);
      })
      .catch(error => console.log("Sorry no people", error));
  }, []);

  function handleMouseEnter() {
    setMouseOver(true);
  }

  function handleMouseLeave() {
    setMouseOver(false);
  }

  const [mouseOver, setMouseOver] = useState(false);

  return (
    <div className="App">
      <Pagination aria-label="Page navigation example">
        <PaginationItem>
          <PaginationLink first href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink previous href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#home">1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink target="_blank"  href="#">2</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink next href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink last href="#" />
        </PaginationItem>
      </Pagination>
      <h1
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ color: mouseOver ? "red" : "black" }}
        className="Header"
      >
        React Wars
      </h1>
      <PeopleCard people={people} />
    </div>
  );
};

export default App;
