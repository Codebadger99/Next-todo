"use client";
import Image from "next/image";
import Sun from "@/public/images/icon-sun.svg";
import Moon from "@/public/images/icon-moon.svg";
import Cross from "@/public/images/icon-cross.svg";
import { useStore } from "./store";
import { useEffect } from "react";


export default function Home() {
  const { theme, changeTheme, task, addTask, inputValue, setInputValue } =
    useStore();

  const handleSubmit = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      addTask(inputValue)
     
    } else null;
  };

 
  

  return (
    <div
      className={`${
        theme
          ? `bg-[url(../public/images/bg-desktop-dark.jpg)]`
          : `bg-[url(../public/images/bg-desktop-light.jpg)]`
      } h-72 bg-no-repeat bg-cover`}
    >
      <div className="grid items-center justify-center py-12">
        {/* Heading */}
        <div className="flex items-center justify-center gap-x-44 lg:gap-80 mb-8">
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
            className="w-5 h-5 border-[1px] border-VeryLightGrayishBlue rounded-full relative lg:left-4 top-7 
          left-14"
          ></div>
          <input
            type="text"
            placeholder="Create a new todo"
            className={`${
              theme ? `bg-VeryDarkDesaturatedBlue` : `bg-VeryLightGray`
            } px-12 py-2 rounded-sm w-80 lg:w-full border-none outline-none mx-12 lg:mx-0 shadow-sm`}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleSubmit}
          />
        </div>
        {/* Input */}
        {/* Todo List */}
        <div className="mt-5 w-80 ml-12 lg:ml-0 lg:w-full ">
          {task.map((task) => {
            return (
              <div
                className={`${
                  theme
                    ? `bg-VeryDarkDesaturatedBlue text-DarkGrayishBlue`
                    : `bg-VeryLightGray`
                } rounded-tr-sm rounded-tl-sm border-b-[1px] p-3 shadow-sm`}
                key={task.id}
              >
                <div className="flex items-center justify-between">
                  <div className="flex gap-4">
                    <div className="w-5 h-5 border-[1px] border-VeryLightGrayishBlue rounded-full">
                      <div
                        className="bg-BrightBlue w-4 h-4 rounded-full bg-[url(../public/images/icon-check.svg)]
                  bg-no-repeat bg-center p-2"
                      ></div>
                    </div>
                    <h3>{task.todo}</h3>
                  </div>
                  <div>
                    <Image
                      src={Cross}
                      alt={"Cross"}
                      priority
                      className="lg:hidden"
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
            <div className="flex items-center justify-center lg:items-center lg:justify-between gap-20 lg:gap-7 text-DarkGrayishBlue">
              <div>
                <p>5 items left</p>
              </div>
              <div className="lg:flex lg:gap-5 hidden">
                <p>All</p>
                <p>Active</p>
                <p>Completed</p>
              </div>
              <div>
                <p>Clear completed</p>
              </div>
            </div>
          </div>

          <div
            className={`flex items-center justify-center gap-10 mt-10 ${
              theme
                ? `bg-VeryDarkDesaturatedBlue text-DarkGrayishBlue`
                : `bg-VeryLightGray`
            }  p-3 rounded-sm text-DarkGrayishBlue lg:hidden shadow-md`}
          >
            <div>
              <p>All</p>
            </div>
            <div>
              <p>Active</p>
            </div>
            <div>
              <p>Clear completed</p>
            </div>
          </div>
        </div>
        {/* Todo List */}
      </div>
    </div>
  );
}
