"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import { useLocalStorage } from "../hooks/useLocalStorage";

const TaskContext = createContext();

export const useTasks = () => {
  const context = useContext(TaskContext);
  if (!context) throw new Error("useTasks must be used within a TasksProvider");
  return context;
};

export const TasksProvider = ({ children }) => {
  // save in localStorage
  const [tasks, setTasks] = useLocalStorage("tasks", []);

  const createTask = (title, description) =>
    setTasks([...tasks, { id: uuid(), title, description }]);

  const updateTask = (id, updatedTask) =>
    setTasks([
      ...tasks.map((task) =>
        task.id === id ? { ...task, ...updatedTask } : task
      ),
    ]);

  const deleteTask = (id) =>
    setTasks([...tasks.filter((task) => task.id !== id)]);

  return (
    <TaskContext.Provider
      value={{
        tasks,
        createTask,
        updateTask,
        deleteTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
