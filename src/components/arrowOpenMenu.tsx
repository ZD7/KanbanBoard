
const ArrowOpenMenu = ({ isShowMenu, setIsShowMenu }) => {
  return (
    <svg
      width="12"
      height="8"
      viewBox="0 0 12 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      transform = {(isShowMenu ? "rotate(180)" : "")}
      onClick={() => setIsShowMenu(!isShowMenu)}
      cursor="pointer"
    >
      <path
        d="M1.415 0.209991L6 4.79499L10.585 0.209991L12 1.62499L6 7.62499L0 1.62499L1.415 0.209991Z"
        fill="white"
      />
    </svg>
  );
};

export default ArrowOpenMenu;
