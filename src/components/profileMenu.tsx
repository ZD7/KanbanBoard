import { styled } from "styled-components";

function ProfileMenu() {
  return (
    <ListTasks>
      <Task>Profile</Task>
      <Task>Log Out</Task>
    </ListTasks>
  );
}


const ListTasks = styled.ul`
  box-sizing: border-box;
  border-radius: 5px;
  background-color: #ffffff;
  color: #000000;
  border: 1px solid #0079bf;

  display: flex;
  flex-direction: column;
  width: 134px;

  list-style-type: none;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 0px;
  margin: 0px;

  position: absolute;
  right: 9px;
  top: 61px;

  &::before {
    content: "";
    display: block;
    position: absolute;
    right: 36px;
    border: 8px solid transparent;
  }

  &::before {
    top: -16px;
    border-bottom: 8px solid #ffffff;
  }
`;

const Task = styled.li`
  background-color: #ffffff;
  font-size: 18px;
  line-height: 21px;
  text-align: left;
  padding: 7px;
  cursor: pointer;

  &:hover {
    background-color: #dedede;
  }
`;

export default ProfileMenu;
