"use client";
import Image from "next/image";
import Sun from "@/public/images/icon-sun.svg";
import Moon from "@/public/images/icon-moon.svg";
import Cross from "@/public/images/icon-cross.svg";
import { useStore } from "./store";
import { useEffect } from "react";

export default function Home() {
  const {
    theme,
    changeTheme,
    task,
    addTask,
    inputValue,
    setInputValue,
    toggleTodo,
    toggleFilter,
    filteredTask,
    deleteTask,
    toggleCompleted,
  } = useStore();

  const handleSubmit = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      addTask(inputValue);
      setInputValue("");
    }
  };

  useEffect(() => {
    toggleFilter("All");
  }, [task, toggleFilter]);

  return (
    <div
      className={`${
        theme
          ? `bg-[url(../public/images/bg-mobile-dark.jpg)] md:bg-[url(../public/images/bg-desktop-dark.jpg)]`
          : `bg-[url(../public/images/bg-mobile-light.jpg)] md:bg-[url(../public/images/bg-desktop-light.jpg)]`
      } h-72 bg-no-repeat bg-cover`}
    >
      <div className="grid items-center justify-center py-12 mx-auto md:mx-0">
        {/* Heading */}
        <div className="flex items-center justify-center gap-28 md:gap-80 mb-8">
          <h1 className="text-VeryLightGray font-bold text-3xl">TODO</h1>
          <Image
            src={theme ? Sun : Moon}
            alt={theme ? Sun : Moon}
            priority
            height={30}
            className="mb-3"
            onClick={changeTheme}
          />
        </div>
        {/* Heading */}
        {/* Input */}
        <div>
          <div
            className="w-5 h-5 border-[1px] border-VeryLightGrayishBlue rounded-full relative md:left-4 top-7 
          left-14"
          ></div>
          <input
            type="text"
            placeholder="Create a new todo"
            className={`${
              theme
                ? `bg-VeryDarkDesaturatedBlue text-VeryLightGray`
                : `bg-VeryLightGray`
            } px-12 py-2 rounded-sm w-64 md:w-full border-none outline-none mx-12 md:mx-0 shadow-sm`}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleSubmit}
          />
        </div>
        {/* Input */}
        {/* Todo List */}
        <div className="mt-5 w-64 ml-12 md:ml-0 md:w-full ">
          {filteredTask.map((task) => {
            return (
              <div
                className={`${
                  theme
                    ? `bg-VeryDarkDesaturatedBlue text-VeryLightGray`
                    : `bg-VeryLightGray`
                } rounded-tr-sm rounded-tl-sm border-b-[1px] p-3 shadow-sm`}
                key={task.id}
              >
                <div className="flex items-center justify-between">
                  <div className="flex gap-4">
                    <div
                      className="w-5 h-5 border-[1px] border-VeryLightGrayishBlue rounded-full"
                      onClick={() => toggleTodo(task.id)}
                    >
                      <div
                        className={` w-4 h-4 rounded-full ${
                          task.completed &&
                          `bg-[url(../public/images/icon-check.svg)] bg-BrightBlue`
                        }
                  bg-no-repeat bg-center p-2`}
                      ></div>
                    </div>
                    <h3 className={`${task.completed && `line-through`}`}>
                      {task.todo}
                    </h3>
                  </div>
                  <div>
                    <Image
                      src={Cross}
                      alt={"Cross"}
                      priority
                      className="md:hidden"
                      onClick={() => deleteTask(task.id)}
                    />
                  </div>
                </div>
              </div>
            );
          })}

          <div
            className={`${
              theme
                ? `bg-VeryDarkDesaturatedBlue text-DarkGrayishBlue`
                : `bg-VeryLightGray`
            }  p-3 rounded-b-sm rounded-bl-sm shadow-md`}
          >
            <div className="flex items-center justify-center md:items-center md:justify-between gap-5 md:gap-7 text-DarkGrayishBlue">
              <div>
                <p className="flex">{filteredTask.length} items left</p>
              </div>
              <div className="md:flex md:gap-5 hidden cursor-pointer">
                <p onClick={() => toggleFilter("All")}>All</p>
                <p onClick={() => toggleFilter("Active")}>Active</p>
                <p onClick={() => toggleFilter("Completed")}>Completed</p>
              </div>
              <div className="cursor-pointer">
                <p onClick={() => toggleCompleted()}>Clear completed</p>
              </div>
            </div>
          </div>

          <div
            className={`flex items-center justify-center gap-10 mt-10 ${
              theme
                ? `bg-VeryDarkDesaturatedBlue text-DarkGrayishBlue`
                : `bg-VeryLightGray`
            }  p-3 rounded-sm text-DarkGrayishBlue md:hidden shadow-md`}
          >
            <div>
              <p onClick={() => toggleFilter("All")}>All</p>
            </div>
            <div>
              <p onClick={() => toggleFilter("Active")}>Active</p>
            </div>
            <div>
              <p onClick={() => toggleFilter("Completed")}>Completed</p>
            </div>
          </div>
        </div>
        {/* Todo List */}
      </div>
    </div>
  );
}
