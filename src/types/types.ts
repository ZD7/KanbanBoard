export interface ITask {
  id?: number;
  name?: string;
  description?: string;
}

export interface IGroupTasks {
  title?: string;
  issues?: ITask[];
}

export interface IDropDown {
  indexGroup: number;
  isShowList: boolean;
  setIsShowList: (isShowList: boolean) => void;
}

export enum TaskStatus {
  BACKLOG = "backlog",
  READY = "ready",
  IN_PROGRESS = "inProgress",
  FINISHED = "finished",
}
