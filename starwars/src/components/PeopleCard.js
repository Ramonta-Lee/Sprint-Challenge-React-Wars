import React from "react";

const PeopleCard = props => {
  const { people } = props;

  return (
    <>
      {people.map(props => {
        console.log(props);

        return (
          <>
            <h1>Name: {props.name} </h1>
            <h2>Height: {props.height}</h2>
            <h3>Gender: {props.gender}</h3>
          </>
        );
      })}
    </>
  );
};

export default PeopleCard;
