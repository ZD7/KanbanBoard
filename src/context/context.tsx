import { createContext } from "react";
import { IGroupTasks } from "../types/types";

type TContext = {
  taskFromStorage: IGroupTasks[];
  setTaskFromStorage: (taskFromStorage: IGroupTasks[]) => void;
};

const defaultValue: TContext = {
  taskFromStorage: [],
  setTaskFromStorage: () => {},
};

export const Context = createContext<TContext>(defaultValue);
