import TasksList from "../features/tasks/TasksList";

function Tasks() {
  return (
    <>
      <h1 className="text-center text-5xl font-bold text-indigo-600">
        My Tasks
      </h1>
      <TasksList />
    </>
  );
}

export default Tasks;
