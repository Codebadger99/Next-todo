export interface tasks {
  id: number;
  todo: String;
  completed: boolean;
}

export interface Taskstore {
  inputValue: string;
  theme: boolean;
  task: tasks[];
  changeTheme: () => void;
  addTask: (title: string) => void;
  //   deleteTask: (id: number) => number;
  setInputValue: (value: string) => void;
}
