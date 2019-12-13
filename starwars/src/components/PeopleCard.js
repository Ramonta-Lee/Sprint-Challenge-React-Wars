import React from "react";
import styled from "styled-components";
import { Button, CardTitle, CardText } from "reactstrap";

const StyledCard = styled.div`
  background-color: rgba(0, 153, 153, 0.2);
  border: 3px solid red;
  margin: 2%;
`;

const NameText = styled.h1`
  color: gold;
`;

const Stats = styled.p`
  font-size: 1.5rem;
  color: blue;
`;

const PeopleCard = props => {
  const { people } = props;

  // if(!props){
  //  return <h3>Loading...</h3>;
  // } else{
  //  return ([props])
  // }

  return (
    <>
      {people.map(props => {
        console.log(props);

        return (
          <div>
            <StyledCard
              body
              inverse
              style={{
                borderColor: "#333"
              }}
            >
              <NameText>Name: {props.name}</NameText>
              <Stats>
                Height: {props.height}
                <br />
                Gender: {props.gender}
              </Stats>
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
