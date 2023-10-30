import { FC, useContext } from "react";
import { styled } from "styled-components";
import { Context } from "../context/context";

const Footer: FC = () => {
  console.log("footer")

  const { taskFromStorage } = useContext(Context)

  const ActiveTasks = taskFromStorage.find((task) => task.title === "backlog")
    .issues.length;

  const FinishedTasks = taskFromStorage.find(
    (task) => task.title === "finished"
  ).issues.length;

  return (
    <Container>
      <BlockTasks>
        <div>Active tasks: {ActiveTasks}</div>
        <div>Finished tasks: {FinishedTasks}</div>
      </BlockTasks>
      <div>Kanban board by frontend, 2023</div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 55px;
  padding-left: 14px;
  padding-right: 16px;
  margin-top: auto;

  background-color: #0067a3;
  color: #ffffff;
  font-size: 18px;
  white-space: nowrap;

  @media screen and (max-width: 640px) {
    display: none;
  }
`;

const BlockTasks = styled.div`
  display: flex;
  gap: 36px;
`;

export default Footer;
