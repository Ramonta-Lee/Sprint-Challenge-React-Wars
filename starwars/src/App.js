import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import PeopleCards from "./components/PeopleCard";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  const [people, setPeople] = useState([]);
  const [page, setPage] = useState(1);
  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(() => {
    axios
      .get("https://swapi.co/api/people?page=" + page)
      .then(response => {
        // console.log(response.data);
        setPeople(response.data.results);
      })
      .catch(error => console.log("Sorry no people", error));
  }, [page]);

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
          <PaginationLink
            onClick={() => {
              setPage(page - 1);
            }}
            previous
            href="#"
          />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#home">1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink onClick={() => setPage(2)} href="#">
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink
            onClick={() => {
              setPage(page + 1);
            }}
            next
            href="#"
          />
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
      <PeopleCards people={people} />
    </div>
  );
};

export default App;
