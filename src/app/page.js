"use client";

import React from "react";
import { useTasks } from "../context/TasksContext";
import { useRouter } from "next/navigation";
import { VscTrash, VscTasklist } from "react-icons/vsc";
import { TaskCard } from '../components/TaskCard';

function Home() {
  const { tasks, deleteTask } = useTasks();
  const router = useRouter();

  return (
    <div className="flex justify-center">
      {tasks.length === 0 ? (
        <div className="block">
          <h2 className="text-2xl">There are no tasks</h2>
          <VscTasklist size="8rem" />
        </div>
      ) : (
        <div className="w-7/10">
          {tasks.map((task, i) => (
           <TaskCard task={task} key={i} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
