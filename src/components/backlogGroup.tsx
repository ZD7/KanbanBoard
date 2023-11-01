import React from "react";
import { FC } from "react";
import { styled } from "styled-components";
import iconAddCard from "../images/plus.svg";
import { useState, useEffect, useRef, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Context } from "../context/context";
import { IGroupTasks, ITask } from "../types/types"
import { TaskStatus } from "../types/types"

const BacklogGroup: FC = () => {
  console.log("backlog");

  const { setTaskFromStorage } = useContext(Context);

  const { pathname } = useLocation();
  const navigate = useNavigate();

  const [isShowInput, setIsShowiInput] = useState(false);

  const inputRef = useRef(null);

  let tasksFromStorage: IGroupTasks[]  = JSON.parse(localStorage.getItem("tasks"));

  let numberTask = tasksFromStorage.reduce(function (
    currentSum,
    currentNumber
  ) {
    return currentNumber.issues.length + currentSum;
  },
  0);

  useEffect(() => {
    inputRef.current?.focus();
  }, [isShowInput]);

  const submitTask = () => {
    let idTask = numberTask + 1;

    const dataTask: ITask = {
      id: idTask,
      name: taskName,
      description: "This task has no description",
    };

    tasksFromStorage
      .find((task) => task.title === TaskStatus.BACKLOG)
      .issues.push(dataTask);

    setTaskFromStorage(tasksFromStorage);
    localStorage.setItem("tasks", JSON.stringify(tasksFromStorage));

    setIsShowiInput(false);
    setChangeButton(false);
    setTaskName("");
  };

  const [taskName, setTaskName] = useState("");

  const [changeButton, setChangeButton] = useState(false);

  const onChangeTaskName = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.value === "") {
      setChangeButton(false);
    } else {
      setChangeButton(true);
    }
    setTaskName(e.currentTarget.value);
  };
  return (
    <Block>
      <Title>Backlog</Title>

      <Container>
        {tasksFromStorage
          .find((task) => task.title === TaskStatus.BACKLOG)
          .issues?.map((el) => (
            <Task
              key={el.id}
              onClick={() => navigate(`${pathname}task/${el.id}`)}
            >
              {el.name}
            </Task>
          ))}

        {isShowInput && (
          <BlockInput>
            <Textarea
              value={taskName}
              onChange={onChangeTaskName}
              ref={inputRef}
            />
          </BlockInput>
        )}

        {changeButton ? (
          <Submit onClick={() => submitTask()}>Submit</Submit>
        ) : (
          <AddCard onClick={() => setIsShowiInput(true)} disabled={isShowInput}>
            <img src={iconAddCard} alt="iconAddCard" />
            Add card
          </AddCard>
        )}
      </Container>
    </Block>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding-right: 12px;

  overflow-y: auto;
  max-height: 479px;
  box-sizing: border-box;
`;

const Block = styled.div`
  box-sizing: border-box;
  border-radius: 10px;
  background-color: #ebecf0;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-left: 12px;
  color: #000000;
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 282px;
  height: max-content;

  @media screen and (max-width: 1230px) {
    width: 600px;
  }

  @media screen and (max-width: 640px) {
    width: inherit;
  }

  @media screen and (min-width: 1230px) {
    flex: 1;
  }
`;

const Title = styled.div`
  font-size: 18px;
  line-height: 21px;
  text-align: left;
`;

const Task = styled.div`
  background-color: #ffffff;
  border-radius: 5px;
  font-size: 18px;
  line-height: 21px;
  text-align: left;
  padding: 7px;
  overflow: hidden;
  min-height: 35px;
  box-sizing: border-box;
  text-overflow: ellipsis;
  cursor: pointer;
`;

const AddCard = styled.button`
  font-size: 18px;
  line-height: 27px;
  text-align: left;
  color: #5e6c84;
  border: none;
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

const Submit = styled.button`
  width: 102px;
  height: 29px;
  font-size: 18px;
  line-height: 21px;
  color: #ffffff;
  border: none;
  cursor: pointer;
  background-color: #0079bf;
  border-radius: 5px;
`;

const Textarea = styled.input`
  border: none;
  outline: none;
  font-size: 18px;
  line-height: 21px;
  color: #000000;
  width: 100%;
  border-bottom: 1px solid #00000099;
`;

const BlockInput = styled.div`
  display: flex;
  box-sizing: border-box;
  min-height: 35px;
  
  padding-left: 13px;
  padding-right: 13px;
  padding-bottom: 7px;

  border-radius: 5px;
  font-size: 18px;
  color: #000000;
  background-color: #ffffff;
`;

export default BacklogGroup;
