import {useTasks} from "../../context/TasksContext"

export const TaskCard = ({
    task
}) => {
    const { deleteTask } = useTasks();

    return (
        <div
        key={task.id}
        className="bg-gray-700 hover:bg-gray-600 cursor-pointer px-20 py-5 m-2 flex justify-between"
        onClick={() => router.push("/edit/" + task.id)}
      >
        <span className="text-5xl mr-5">{i}</span>
        <div>
          <div className="flex justify-between">
            <h1 className="font-bold">{task.title}</h1>
            <button
              className="bg-red-700 hover:bg-red-600 px-3 py-1 inline-flex items-center"
              onClick={(e) => {
                e.stopPropagation();
                deleteTask(task.id);
              }}
            >
              <VscTrash className="mr-2" /> Delete
            </button>
          </div>
          <p className="text-gray-300">{task.description}</p>
          <span className="text-gray-400">{task.id}</span>
        </div>
      </div>
    )
}