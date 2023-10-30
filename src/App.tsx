import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";
import Header from "./components/header";
import Footer from "./components/footer";
import Tasks from "./components/tasks";
import DesriptionTask from "./components/descriptionTask";
import { Context } from "./context/context";

const emptyTasks = [
  {
    title: "backlog",
    issues: [],
  },
  {
    title: "ready",
    issues: [],
  },
  {
    title: "inProgress",
    issues: [],
  },
  {
    title: "finished",
    issues: [],
  },
];

function App() {
  const [taskFromStorage, setTaskFromStorage] = useState(
    JSON.parse(localStorage.getItem("tasks") || "[]")
  );

  if (taskFromStorage.length === 0) {
    setTaskFromStorage(emptyTasks);
    localStorage.setItem("tasks", JSON.stringify(emptyTasks));
  }

  return (
    <Context.Provider value={{ taskFromStorage, setTaskFromStorage }}>
      <AppWrapper>
        <Header />
        <Container>
          <Routes>
            <Route
              path="/"
              element={<Tasks />}
            />
            <Route path={"/task/:taskId"} element={<DesriptionTask />} />
          </Routes>
        </Container>
        <Footer />
      </AppWrapper>
    </Context.Provider>
  );
}

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #0079bf;
  /* max-width: 1235px; */
  margin: 0 auto;
  min-height: 700px;
`;

const Container = styled.div`
  display: flex;
  gap: 24px;
  padding: 20px;

  @media screen and (min-width: 1230px) {
    justify-content: center;
  }
`;

export default App;
