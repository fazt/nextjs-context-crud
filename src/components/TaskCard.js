import { useTasks } from "../context/TasksContext";
import { useRouter } from "next/navigation";
import { VscTrash } from "react-icons/vsc";
import { toast } from "react-hot-toast";

export const TaskCard = ({ task }) => {
  const { deleteTask } = useTasks();
  const router = useRouter();

  return (
    <div
      className="bg-gray-700 hover:bg-gray-600 cursor-pointer px-20 py-5 m-2 flex justify-between"
      onClick={() => router.push(`/edit/${task.id}`)}
    >
      <div>
        <div className="flex justify-between">
          <h1 className="font-bold">{task.title}</h1>
          <button
            className="bg-red-700 hover:bg-red-600 px-3 py-1 inline-flex items-center"
            onClick={(e) => {
              e.stopPropagation();
              const accept = confirm(
                "Are you sure you want to delete this task?"
              );
              if (accept) deleteTask(task.id);
              toast.success("Task deleted successfully");
            }}
          >
            <VscTrash className="mr-2" /> Delete
          </button>
        </div>
        <p className="text-gray-300">{task.description}</p>
        <span className="text-gray-400 text-xs">{task.id}</span>
      </div>
    </div>
  );
};
