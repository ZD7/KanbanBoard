import { FC } from "react";
import { styled } from "styled-components";
import Backlog from "./backlogGroup"
import Ready from "./otherGroup";


const Tasks: FC = () => {
  return (
    <Container>
      <Backlog/> 
      <Ready nameGroup={"ready"}/>  
      <Ready nameGroup={"inProgress"}/>  
      <Ready nameGroup={"finished"}/>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  gap: 24px;

  @media screen and (max-width: 1230px) {
    flex-direction: column;
    width: 100%;
    min-width: 282px;
    align-items: center;
  }
`

export default Tasks;
