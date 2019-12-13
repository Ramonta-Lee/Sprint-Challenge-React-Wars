import React from "react";
import styled from "styled-components";
import { Card, Button, CardTitle, CardText } from "reactstrap";

const StyledCard = styled.div`
 width: 50%;
 display: flex;
 flex-direction: column;
 justify-content: center; 

`;

const PeopleCard = props => {
  const { people } = props;

  return (
    <>
      {people.map(props => {
        console.log(props);

        return (
          <div>
            <StyledCard
              body
              inverse
              style={{ backgroundColor: "#333", borderColor: "#333" }}
              width={{width: "30px"}}
            >
              <CardTitle>Name: {props.name}</CardTitle>
              <CardText>
                Height: {props.height}
                Gender: {props.gender}
              </CardText>
              <Button>Button</Button>
            </StyledCard>

            {/* <h1>Name: {props.name} </h1>
            <h2>Height: {props.height}</h2>
            <h3>Gender: {props.gender}</h3> */}
          </div>
        );
      })}
    </>
  );
};

export default PeopleCard;
