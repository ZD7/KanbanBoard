import { FC, useState } from "react";
import { styled } from "styled-components";
import userAvatar from "../images/user-avatar.svg";
import ProfileMenu from "./profileMenu";
import ArrowOpenMenu from "./arrowOpenMenu";

const Header: FC = () => {
  const [isShowMenu, setIsShowMenu] = useState(false);
  console.log("header")

  return (
    <Container>
      <div className="nameBoard">Awesome Kanban Board</div>
      <ProfileBlock >
        <Avatar
          onClick={() => setIsShowMenu(!isShowMenu)}
          src={userAvatar}
          className="App-logo"
          alt="logo"
        />
        <ArrowOpenMenu
          isShowMenu={isShowMenu}
          setIsShowMenu={setIsShowMenu}
        />
      </ProfileBlock>

      {isShowMenu && <ProfileMenu />}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  height: 55px;
  background-color: #0067a3;
  color: #ffffff;
  font-size: 28px;
  font-weight: 400;
  line-height: 33px;
  align-items: center;
  justify-content: space-between;
  padding-left: 14px;
  padding-right: 16px;

  position: relative;

  @media screen and (max-width: 400px) {
    background-color: inherit;
    justify-content: end;

    .nameBoard {
      display: none;
    }
  }
`;

const ProfileBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

const Avatar = styled.img`
  cursor: pointer;
`;

export default Header;
