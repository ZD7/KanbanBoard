import { FC } from "react";
import { styled } from "styled-components";
import Backlog from "./backlogGroup"
import Ready from "./otherGroup";
import { TaskStatus } from "../types/types" 


const Tasks: FC = () => {
  return (
    <Container>
      <Backlog/> 
      <Ready nameGroup={TaskStatus.READY}/>  
      <Ready nameGroup={TaskStatus.IN_PROGRESS}/>  
      <Ready nameGroup={TaskStatus.FINISHED}/>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  gap: 24px;
  
  width: 100%;

  @media screen and (max-width: 1230px) {
    flex-direction: column;
    width: 100%;
    min-width: 282px;
    align-items: center;
  }

  @media screen and (min-width: 1230px) {
    justify-content: space-between;
    width: 100%;
    /* flex-grow: 0; */
  }
`

export default Tasks;
