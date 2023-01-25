"use client";
import { useEffect, useState } from "react";
import { useTasks } from "../../context/TasksContext";
import { useRouter } from "next/navigation";

const inititalState = {
  title: "",
  description: "",
};

const TaskFormPage = ({ params }) => {
  const [task, setTask] = useState(inititalState);
  const { createTask, updateTask, tasks } = useTasks();
  const router = useRouter();

  const handleChange = (e) =>
    setTask({ ...task, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!params.id) {
    createTask(task.title, task.description);
    setTask(inititalState);
    } else {
      updateTask(params.id, task);
    }

    router.push("/");
  };

  useEffect(() => {
    if (params.id) {
      const taskFound = tasks.find((task) => task.id === params.id);
      if (taskFound)
        setTask({ title: taskFound.title, description: taskFound.description });
    }
    console.log("params.id", params.id);
  }, [params.id, tasks]);

  return (
    <div className="flex justify-center items-center h-full">
      <form className="bg-gray-700 p-10 h-2/4" onSubmit={handleSubmit}>
        <h1 className="text-3xl mb-7">
          {params.id ? "Edit Task" : "New Task"}
        </h1>
        <input
          type="text"
          className="bg-gray-800 focus:text-gray-100 focus:outline-none w-full py-3 px-4 mb-5"
          placeholder="Write a title"
          autoFocus
          name="title"
          onChange={handleChange}
          value={task.title}
        />
        <textarea
          cols="2"
          placeholder="Write a Description"
          className="bg-gray-800 focus:text-gray-100 focus:outline-none w-full py-3 px-4 mb-5"
          name="description"
          onChange={handleChange}
          value={task.description}
        ></textarea>

        <button
          className="bg-green-500 hover:bg-green-400 px-4 py-2 rounded-sm disabled:opacity-30"
          disabled={!task.title}
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default TaskFormPage;
