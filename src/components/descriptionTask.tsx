import { FC } from "react";
import { styled } from "styled-components";
import closeTask from "../images/close.svg";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { IGroupTasks } from "../types/types";

const DesriptionTask: FC = () => {
  const { taskId } = useParams();
  const navigate = useNavigate();

  const tasksFromStorage: IGroupTasks[] = JSON.parse(
    localStorage.getItem("tasks")
  );

  const currentTask = tasksFromStorage.find((item) =>
    item.issues.find((el) => el.id === Number(taskId))
  ).issues;

  const editTask = currentTask.find((item) => item.id === Number(taskId));
  const description = editTask.description;

  const [editDescript, setEditDescript] = useState(description);
  const [isDisabled, setIsDisabled] = useState(true);

  const descriptionChange = (e) => {
    setEditDescript(e.currentTarget.value);
    if (e.currentTarget.value !== editDescript) setIsDisabled(false);
  };

  const saveChangeDescript = () => {
    const indexGroup = tasksFromStorage.findIndex((item) =>
      item.issues.find((el) => el.id === Number(taskId))
    );

    tasksFromStorage[indexGroup].issues.find(
      (el) => el.id === Number(taskId)
    ).description = editDescript;

    localStorage.setItem("tasks", JSON.stringify(tasksFromStorage));
    setIsDisabled(true);
  };

  return (
    <Container>
      <Block>
        <Header>
          <Title>{editTask.name}</Title>
          <img src={closeTask} alt="closeIcon" onClick={() => navigate("/")} />
        </Header>
        <InfoTasks
          value={editDescript}
          onChange={descriptionChange}
          title="редактировать описание задачи"
        />
        <Save onClick={saveChangeDescript} disabled={isDisabled}>
          Сохранить
        </Save>
      </Block>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1191px;
  height: 548px;
  padding: 24px;

  background-color: #ffffff;
  border-radius: 5px;
  box-sizing: border-box;

  @media screen and (max-width: 400px) {
    padding: 5px;
  }
`;

const Title = styled.div`
  font-size: 24px;
  word-break: break-all;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
  margin-bottom: 35px;
`;

const Block = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  background-color: #ffffff;
  box-sizing: border-box;
`;

const InfoTasks = styled.textarea`
  box-sizing: border-box;
  color: #000000;
  overflow-y: auto;
  border: none;
  resize: none;
  outline: none;
  height: 100%;
  margin-bottom: 35px;

  font-size: 18px;
  cursor: pointer;

  &:focus {
    outline: 1.5px solid rgba(149, 226, 244, 1);
    border-radius: 5px;
    cursor: text;
  }
`;

const Save = styled.button`
  height: 31px;
  width: 76px;
  line-height: 23px;
  border-radius: 4px;
  font-size: 12px;
  border: none;
  color: #ffffff;
  background-color: #0079bf;

  &:disabled {
    opacity: 0.8;
    cursor: not-allowed;
  }
`;

export default DesriptionTask;
