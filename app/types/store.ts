export interface tasks {
  id: number;
  todo: string;
  completed: boolean;
}

export interface Taskstore {
  filteredTask: tasks[];
  CompletedTask: tasks[];
  inputValue: string;
  theme: boolean;
  task: tasks[];

  changeTheme: () => void;
  addTask: (title: string) => void;
  deleteTask: (id: number) => void;
  setInputValue: (value: string) => void;
  toggleTodo: (id: number) => void;
  toggleCompleted: () => void;
  toggleFilter: (filter: string) => void;
}
