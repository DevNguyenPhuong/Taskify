import Loader from "../../ui/Loader";
import { useUser } from "../authentication/useUser";
import AddTask from "./AddTask";
import Task from "./Task";
import { useTasks } from "./useTasks";

function TasksList() {
  const { user } = useUser();
  const { isLoading, tasks } = useTasks(user.id);

  if (isLoading) return <Loader />;

  return (
    <ul className="flex flex-wrap gap-8">
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}

      <AddTask />
    </ul>
  );
}

export default TasksList;
