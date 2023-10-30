import { styled } from "styled-components";
import iconAddCard from "../images/plus.svg";
import iconArrow from "../images/arrow.svg";
import { useState } from "react";
import DropDown from "./dropdown";
import { useNavigate, useLocation } from "react-router-dom";
import { IGroupTasks } from "../types/types";


interface INameGroup {
  nameGroup: string;
}

const OtherGroup = ({ nameGroup }: INameGroup) => {
  console.log(nameGroup);

  const { pathname } = useLocation();
  const navigate = useNavigate();

  let tasksFromStorage: IGroupTasks[] = JSON.parse(
    localStorage.getItem("tasks")
  );

  const indexGroup = tasksFromStorage.findIndex(
    (task) => task.title === nameGroup
  );

  let indexPrevGroup = indexGroup - 1;

  const tasksPrevGroup = tasksFromStorage[indexPrevGroup];
  const tasksGroup = tasksFromStorage[indexGroup];

  const [isShowList, setIsShowList] = useState(false);

  return (
    <Block>
      <Title>{nameGroup[0].toUpperCase() + nameGroup.slice(1)}</Title>
      <Container>
        {tasksGroup?.issues.map((el) => (
          <Task
            key={el.id}
            onClick={() => navigate(`${pathname}task/${el.id}`)}
          >
            {el.name}
          </Task>
        ))}

        {isShowList ? (
          <>
            <CloseList onClick={() => setIsShowList(!isShowList)}>
              <img src={iconArrow} alt="iconArrow" />
            </CloseList>
            <DropDown
              indexGroup={indexGroup}
              isShowList={isShowList}
              setIsShowList={setIsShowList}
            />
          </>
        ) : (
          <AddCard
            onClick={() => setIsShowList(!isShowList)}
            disabled={tasksPrevGroup.issues.length === 0}
          >
            <img src={iconAddCard} alt="iconAddCard" />
            Add card
          </AddCard>
        )}
      </Container>
    </Block>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  overflow-y: auto;
  max-height: 479px;
  box-sizing: border-box;
  padding-right: 12px;
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
`;

const CloseList = styled.button`
  display: flex;
  align-items: center;
  justify-content: end;
  background-color: #ffffff;
  line-height: 35px;
  border: none;
  cursor: pointer;
  padding: 11px;
  border-radius: 5px;
  margin-bottom: -12px;
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
  text-overflow: ellipsis;
  cursor: pointer;
  min-height: 35px;
  box-sizing: border-box;
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

export default OtherGroup;
