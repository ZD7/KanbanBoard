import { useContext } from "react";
import { styled } from "styled-components";
import { Context } from "../context/context";
import { IDropDown, IGroupTasks, ITask } from "../types/types"

const DropDown = ({ indexGroup, isShowList, setIsShowList }: IDropDown) => {
  
  const { setTaskFromStorage } = useContext(Context)

  const tasksFromStorage: IGroupTasks[] = JSON.parse(localStorage.getItem("tasks"));
  const indexPrevGroup = indexGroup - 1;
  const tasksGroup = tasksFromStorage[indexPrevGroup];

  function replaceTask(el: ITask): void {
    tasksFromStorage[indexGroup].issues.push(el);

    const newListTasks = tasksFromStorage[indexPrevGroup].issues.filter((item) => item.name !== el.name);
    tasksFromStorage[indexPrevGroup].issues = newListTasks;

    setIsShowList(!isShowList)

    localStorage.setItem("tasks", JSON.stringify(tasksFromStorage));
    setTaskFromStorage(tasksFromStorage)
  }

  return (
    <ListTasks>
      {tasksGroup.issues?.map((el) => (
        <Task key={el.id} onClick={() => replaceTask(el)}>
          {el.name}
        </Task>
      ))}
    </ListTasks>
  );
}

const ListTasks = styled.ul`
  display: flex;
  flex-direction: column;

  box-sizing: border-box;
  border-radius: 5px;
  background-color: #ffffff;
  color: #000000;



  list-style-type: none;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 0px;
  margin: 0px;
`;

const Task = styled.li`
  background-color: #ffffff;
  font-size: 18px;
  line-height: 21px;
  text-align: left;
  padding: 7px;
  overflow: hidden;
  box-sizing: border-box;
  cursor: pointer;
  text-overflow: ellipsis;

  &:hover {
    background-color: #dedede;
  }
`;

export default DropDown;
