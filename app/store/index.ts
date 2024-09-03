import { create } from "zustand";
import { Taskstore } from "../types/store";

export const useStore = create<Taskstore>((set) => ({
  inputValue: "",
  theme: false,
  task: [
    {
      id: 1,
      todo: "Clean The House",
      completed: false,
    },

    {
      id: 2,
      todo: "Jog around the park",
      completed: false,
    },

    {
      id: 3,
      todo: "10 minutes meditation",
      completed: false,
    },

    {
      id: 4,
      todo: "Read for 1 hour",
      completed: false,
    },

    {
      id: 5,
      todo: "Pick up the groceries",
      completed: false,
    },
  ],
  changeTheme: () => set((state) => ({ theme: !state.theme })),
  addTask: (title) =>
    set((state) => ({
      task: [
        {
          id: state.task.length + 1,
          todo: title,
          completed: false,
        },
        ...state.task,
      ],
    })),

  deleteTask: (id) =>
    set((state) => ({
      ...state,
      task: state.task.filter((task) => task.id !== id),
    })),

  setInputValue: (value) => set((state) => ({ inputValue: value })),
  toggleTodo: (id) =>
    set((state) => ({
      task: state.task.map((tasks) =>
        tasks.id === id ? { ...tasks, completed: !tasks.completed } : tasks
      ),
    })),
  toggleCompleted: (id) =>
    set((state) => ({
      task: state.task.filter((tasks) =>
        tasks.completed ? state.task.splice(id, 1) : tasks
      ),
    })),
  
}));
