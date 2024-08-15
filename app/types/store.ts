import { MouseEventHandler } from "react";

export interface tasks {
  id: number;
  todo: String;
  completed: boolean;
}

export interface Taskstore {
  taskCompleted: boolean;
  inputValue: string;
  theme: boolean;
  task: tasks[];
  changeTheme: () => void;
  addTask: (title: string) => void;
  deleteTask: (id: number) => void;
  setInputValue: (value: string) => void;
  // toggleCheckCompleted: (id:number) => void;
}
