import { useSearchParams } from "react-router-dom";
import Loader from "../../ui/Loader";
import { useUser } from "../authentication/useUser";
import AddTask from "./AddTask";
import DeleteAll from "./DeleteAll";
import Task from "./Task";
import { useTasks } from "./useTasks";
import Filter from "../../ui/Filter";

function TasksList() {
  const [searchParams] = useSearchParams();
  const { user } = useUser();
  const { isLoading, tasks } = useTasks(user.id);

  // FILTER
  const filterValue = searchParams.get("priority") || "all";

  let filteredTasks;
  if (filterValue === "all") filteredTasks = tasks;

  if (filterValue === "high")
    filteredTasks = tasks.filter((task) => task.priority === "high");

  if (filterValue === "medium")
    filteredTasks = tasks.filter((task) => task.priority === "medium");

  if (filterValue === "low")
    filteredTasks = tasks.filter((task) => task.priority === "low");

  if (isLoading) return <Loader />;

  return (
    <>
      {tasks.length !== 0 && (
        <div className="flex flex-wrap justify-between gap-4 text-[1.2rem]  md:text-[1.6rem]">
          <DeleteAll />{" "}
          <Filter
            filterField="priority"
            options={[
              { value: "all", label: "All" },
              { value: "high", label: "High" },
              { value: "medium", label: "Medium" },
              { value: "low", label: "Low" },
            ]}
          />
        </div>
      )}

      {tasks.length === 0 ? (
        <>
          <h3 className="mt-5 text-2xl font-semibold uppercase text-indigo-500 md:text-4xl">
            Start your day now
          </h3>

          <AddTask />
        </>
      ) : (
        <ul className=" flex flex-wrap items-center gap-8">
          {filteredTasks.map((task) => (
            <Task key={task.id} task={task} />
          ))}

          <AddTask />
        </ul>
      )}
    </>
  );
}

export default TasksList;
