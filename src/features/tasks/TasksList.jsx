import Loader from "../../ui/Loader";
import { useUser } from "../authentication/useUser";
import AddTask from "./AddTask";
import DeleteAll from "./DeleteAll";
import Task from "./Task";
import { useTasks } from "./useTasks";

function TasksList() {
  const { user } = useUser();
  const { isLoading, tasks } = useTasks(user.id);

  if (isLoading) return <Loader />;

  return (
    <>
      {tasks.length !== 0 && <DeleteAll />}

      {tasks.length === 0 ? (
        <>
          <h3 className="mt-5 text-4xl font-semibold uppercase text-indigo-500">
            Start your day now
          </h3>

          <AddTask />
        </>
      ) : (
        <ul className="flex flex-wrap gap-8">
          {tasks.map((task) => (
            <Task key={task.id} task={task} />
          ))}

          <AddTask />
        </ul>
      )}
    </>
  );
}

export default TasksList;
