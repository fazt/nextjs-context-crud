import { createContext, useContext, useState } from "react";
import { v4 as uuid } from "uuid";

const TaskContext = createContext();

export const TasksProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

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

export const useTasks = () => {
  return useContext(TaskContext);
};
